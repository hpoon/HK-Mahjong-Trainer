import { convertRedFives } from "./TileConversions";

// Converted from http://cmj3.web.fc2.com/#syanten

let hand = new Array(38);
let completeSets;
let pair;
let partialSets;
let bestShanten;
let minimumShanten;
let hasGivenMinimum;

/**
 * Calculates the minimum shanten of the hand, considering a standard hand, seven pairs, or thirteen orphans.
 * @param {TileCounts} handToCheck The hand to calculate the shanten of.
 */
export function calculateMinimumShanten(handToCheck, minimumShanten = -2) {
    let chiitoiShanten = calculateChiitoitsuShanten(handToCheck);
    
    // If it's complete with chiitoi, no need to keep checking.
    if (chiitoiShanten < 0) {
        return chiitoiShanten;
    }

    let kokushiShanten = calculateKokushiShanten(handToCheck);

    // If a hand has a kokushi shanten of 3 or less, it cannot possibly be closer to a standard hand
    // Example: 1239m1239s199p123z is 3-shanten for both kokushi and a standard hand
    // But 1239m1239s199p112z is 4-shanten for kokushi and 2-shanten for standard
    if (kokushiShanten < 3) {
        return kokushiShanten;
    }

    let standardShanten = calculateStandardShanten(handToCheck, minimumShanten);

    return Math.min(standardShanten, chiitoiShanten, kokushiShanten);
}

/**
 * Calculates how many tiles away from a complete knitted straight hand the current hand is. (WIP...)
 * @param {TileCounts} handToCheck The hand to calculate the shanten of.
 */
export function calculateKnittedShanten(handToCheck) {
    let honoursCount = 0;

    for (let i = 31; i < handToCheck.length; i++) {
        if (handToCheck[i] >= 1) {
            honoursCount++;
        }
    }

    let bestKnittedStraight = findMostViableKnittedStraight(handToCheck);
    let knittedAndHonoursShanten = 13 - bestKnittedStraight.length - honoursCount;

    let hand = handToCheck.slice();
    for (let i = 0; i < bestKnittedStraight.length; i++) {
        hand[bestKnittedStraight[i]]--;
    }

    let knittedStraightShanten = 9 - bestKnittedStraight.length;
    let standardShanten = calculateStandardShanten(hand);
    let combinedShanten = standardShanten - Math.floor(bestKnittedStraight / 3) * 2;

    return Math.min(combinedShanten, knittedAndHonoursShanten);
}

/**
 * Finds which knitted straight the hand is closest to.
 * @param {TileCounts} handToCheck The hand to check.
 */
function findMostViableKnittedStraight(handToCheck) {
    let possibilites = [
        [1, 4, 7, 12, 15, 18, 23, 26, 29],
        [1, 4, 7, 22, 25, 28, 13, 16, 19],
        [11, 14, 17, 22, 25, 28, 3, 6, 9],
        [11, 14, 17, 2, 5, 8, 23, 26, 29],
        [21, 24, 27, 2, 5, 8, 13, 16, 19],
        [21, 24, 27, 12, 15, 18, 3, 6, 9]
    ];

    let best = [];

    for (let i = 0; i < possibilites.length; i++) {
        let current = [];

        for (let j = 0; j < possibilites[i].length; j++) {
            if (handToCheck[possibilites[i][j]] >= 1) {
                current.push(possibilites[i][j]);
            }
        }

        if (current.length > best.length) {
            best = current.slice();

            // 9 is the best case scenario
            if (best.length === 9) return best;
        }
    }

    return best;
}

/**
 * Calculates how many tiles away from chiitoitsu/seven pairs the hand is.
 * @param {TileCounts} handToCheck The hand to calculate the shanten of.
 */
function calculateChiitoitsuShanten(handToCheck) {
    hand = convertRedFives(handToCheck);
    let pairCount = 0, uniqueTiles = 0;

    for (let i = 1; i < hand.length; i++) {
        if (hand[i] === 0) continue;

        uniqueTiles++;

        if (hand[i] >= 2) {
            pairCount++;
        }
    }

    let shanten = 6 - pairCount;

    if (uniqueTiles < 7) {
        shanten += 7 - uniqueTiles;
    }

    return shanten;
}

/**
 * Calculates how many tiles away from kokushi/thirteen orphans the hand is.
 * @param {TileCounts} handToCheck The hand to calculate the shanten of. 
 */
function calculateKokushiShanten(handToCheck) {
    let uniqueTiles = 0;
    let hasPair = 0;

    for (let i = 1; i < handToCheck.length; i++) {
        if (i % 10 === 1 || i % 10 === 9 || i > 30) {
            if (handToCheck[i] !== 0) {
                uniqueTiles++;

                if (handToCheck[i] >= 2) {
                    hasPair = 1;
                }
            }
        }
    }

    return 13 - uniqueTiles - hasPair;
}

/**
 * Calculates how many tiles away from a complete standard hand the given hand is.
 * @param {TileCounts} handToCheck The hand to calculate the shanten of.
 */
export function calculateStandardShanten(handToCheck, minimumShanten_ = -2) {
    hand = convertRedFives(handToCheck);
    
    // Initialize variables
    hasGivenMinimum = true;
    minimumShanten = minimumShanten_;
    completeSets = 0;
    pair = 0;
    partialSets = 0;
    bestShanten = 8;

    if (minimumShanten_ == -2) {
        hasGivenMinimum = false;
        minimumShanten = -1;
    }

    // Loop through hand, removing all pair candidates and checking their shanten
    for (let i = 1; i < hand.length; i++) {
        if (hand[i] >= 2) {
            pair++;
            hand[i] -= 2;
            removeCompletedSets(1);
            hand[i] += 2;
            pair--;
        }
    }

    // Check shanten when there's nothing used as a pair
    removeCompletedSets(1);

    return bestShanten;
}

/**
 * Removes all possible combinations of complete sets from the hand and recursively checks the shanten of each.
 * @param {TileIndex} i The current tile index to check from.
 */
function removeCompletedSets(i) {
    if (bestShanten <= minimumShanten) return;
    // Skip to the next tile that exists in the hand.
    for (; i < hand.length && hand[i] === 0; i++) { }

    if (i >= hand.length) {
        // We've gone through the whole hand, now check for partial sets.
        removePotentialSets(1);
        return;
    }

    // Pung
    if (hand[i] >= 3) {
        completeSets++;
        hand[i] -= 3;
        removeCompletedSets(i);
        hand[i] += 3;
        completeSets--;
    }

    // Chow
    if (i < 30 && hand[i + 1] !== 0 && hand[i + 2] !== 0) {
        completeSets++;
        hand[i]--; hand[i + 1]--; hand[i + 2]--;
        removeCompletedSets(i);
        hand[i]++; hand[i + 1]++; hand[i + 2]++;
        completeSets--;
    }

    // Check all alternative hand configurations
    removeCompletedSets(i + 1);
}

/**
 * Removes all possible combinations of pseudo sets from the hand and recursively checks the shanten of each.
 * @param {TileIndex} i The current tile index to check from.
 */
function removePotentialSets(i) {
    if (bestShanten <= minimumShanten) return;

    // If we've given a minimum shanten, we can break off early in some cases
    // For example, if we know the hand wants to be tenpai, we know the hand must have 3 complete sets
    if (hasGivenMinimum && completeSets < 3 - minimumShanten) return;

    // Skip to the next tile that exists in the hand
    for (; i < hand.length && hand[i] === 0; i++) { }

    if (i >= hand.length) {
        // We've checked everything. See if this shanten is better than the current best.
        let currentShanten = 8 - (completeSets * 2) - partialSets - pair;
        if (currentShanten < bestShanten) {
            bestShanten = currentShanten;
        }
        return;
    }

    // A standard hand will only ever have four groups plus a pair.
    if (completeSets + partialSets < 4) {
        // Pair
        if (hand[i] === 2) {
            partialSets++;
            hand[i] -= 2;
            removePotentialSets(i);
            hand[i] += 2;
            partialSets--;
        }

        // Edge or Side wait protorun
        if (i < 30 && hand[i + 1] !== 0) {
            partialSets++;
            hand[i]--; hand[i + 1]--;
            removePotentialSets(i);
            hand[i]++; hand[i + 1]++;
            partialSets--;
        }

        // Closed wait protorun
        if (i < 30 && i % 10 <= 8 && hand[i + 2] !== 0) {
            partialSets++;
            hand[i]--; hand[i + 2]--;
            removePotentialSets(i);
            hand[i]++; hand[i + 2]++;
            partialSets--;
        }
    }

    // Check all alternative hand configurations
    removePotentialSets(i + 1);
}

export default calculateMinimumShanten;