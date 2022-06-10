import { getTileAsText } from "../../scripts/TileConversions";
import HistoryData from "../../models/HistoryData";

export default class UkeireHistoryData extends HistoryData {
    /** A history object for the ukeire trainer, which tells the efficiency of a given discard. */
    constructor(chosenTile = -1, chosenUkeire = -1, bestTile = -1, bestUkeire = -1, shanten = -1, hand = "", handUkeire = -1, discards = [], drawnTile = -1, message = undefined) {
        super(message);
        this.chosenTile = chosenTile;
        this.chosenUkeire = chosenUkeire;
        this.bestTile = bestTile;
        this.bestUkeire = bestUkeire;
        this.shanten = shanten;
        this.hand = hand;
        this.handUkeire = handUkeire;
        this.discards = discards;
        this.drawnTile = drawnTile;
    }

    getMessage(t, concise, verbose, spoilers) {
        let mode = "verbose";
        if (concise) mode = "concise";

        let result = t(`history.${mode}.discard`, { tile: getTileAsText(t, this.chosenTile, verbose) });

        if (this.chosenUkeire.value > 0 || this.shanten === 0) {
            result += t(`history.${mode}.acceptance`, { count: this.chosenUkeire.value });
        }
        else {
            result += t(`history.${mode}.loweredShanten`)
        }

        if (this.chosenUkeire.value < this.bestUkeire) {
            result += t(`history.${mode}.optimal`);

            if (spoilers) {
                result += t(`history.${mode}.optimalSpoiler`, { tile: getTileAsText(t, this.bestTile, verbose) });
            }

            result += t(`history.${mode}.acceptance`, { count: this.bestUkeire });
        }
        else {
            result += t(`history.${mode}.best`);
        }

        if (this.shanten <= 0 && this.handUkeire.value === 0) {
            result += t(`history.${mode}.exceptionalNoten`);
        }

        if (this.shanten > 0) {
            if (this.drawnTile === -1) {
                result += t(`history.${mode}.exhausted`);
            } else {
                result += t(`history.${mode}.draw`, { tile: getTileAsText(t, this.drawnTile, verbose) })
            }
        }

        result += super.getMessage(t);

        return result;
    }

    getClassName() {
        let className = "";

        if (this.chosenUkeire.value <= 0 && this.shanten > 0) {
            className = "bg-danger text-white";
        }
        else if (this.bestUkeire === this.chosenUkeire.value) {
            className = "bg-success text-white";
        }
        else {
            className = "bg-warning";
        }

        return className;
    }
}