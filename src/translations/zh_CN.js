export const zh_CN = {
    translations: {
        values: {
            one: "一",
            two: "二",
            three: "三",
            four: "四",
            five: "五",
            six: "六",
            seven: "七",
            eight: "八",
            nine: "九",
            east: "东",
            south: "南",
            west: "西",
            north: "北",
            white: "白",
            green: "发",
            red: "中",
            hidden: "hidden tile",
        },
        suits: {
            characters: "万",
            circles: "饼",
            bamboo: "索"
        },
        shuupai: "{{value}}{{suit}}",
        winds: {
            east: "东",
            south: "南",
            west: "西",
            north: "北"
        },
        roundName: "{{wind}}{{number}}句{{repeats}}本场",
        trainer: {
            disclaimer: "免责声明：这个工具将训练你在当前巡目中使手牌效率最大化的能力。它不会帮你在未来巡目最大化程度地提高效率，也无法了解何时应该忽略效率追求打点。训练工具所建议的方式并不是打麻将的最佳方法，但你会有想要这么打的地方。高手并非总是这么打，但是高手都可以这样玩。确保通过进一步阅读补充本训练内容，以了解何时这么打可能不是最佳玩法。此外，查看设置以进行更有针对性的培训。",
            instructions: "请点击你要打的牌。",
            start: "开始了一副新的手牌：{{hand}}",
            complete: "恭喜你听牌了！你的效率是{{achieved}}/{{total}}或{{percent}}%.",
            newHandButtonLabel: "新的手牌",
            loadButtonLabel: "加载手牌",
            roundWind: "场风：",
            seatWind: "自风：",
            copyHand: "复制手牌",
            copied: "复制成功！",
            error: {
                load: "错误：无法解析手牌",
                wallEmpty: "错误：手牌牌数不足",
                wallEmptyShuffle: "牌山存量不足，重新随机中。"
            },
            playerNames: {
                you: "自家",
                right: "下家",
                across: "对家",
                left: "上家"
            }
        },
        history: {
            label: "手牌历史",
            tenhouLinkText: "【天凤牌理】",
            concise: {
                discard: "舍牌{{tile}}",
                acceptance: "（{{count}}枚进张）。",
                acceptance_plural: "（{{count}}枚进张）。",
                loweredShanten: "（向听到退）。",
                optimal: "最佳舍牌：",
                optimalSpoiler: "{{tile}}",
                best: "这是最佳的舍牌！",
                exceptionalNoten: "你所听的牌都在手牌里，所以是空听。",
                furiten: "振听。",
                furitenWarning: "请注意可能会振听。",
                exhausted: "牌山已经没有牌了，下次好运！",
                draw: "你自摸：{{tile}}。"
            },
            verbose: {
                discard: "你选择打{{tile}}，",
                acceptance: "结果是有{{count}}张牌可以改善手牌向听数。",
                acceptance_plural: "结果是有{{count}}张牌可以改善手牌向听数。",
                loweredShanten: "向听数增加 - 你离听牌更远了。",
                optimal: "最佳舍牌是",
                optimalSpoiler: "{{tile}}。",
                best: "这是最佳的舍牌！",
                exceptionalNoten: "你听牌了，但是你所听的牌都在手牌里。大部分规则下都不算听牌，所以你需要改变你的手牌。",
                furiten: "你现在处于振听状态。你不能荣和，因为你有一张要和的牌在你舍牌里。",
                furitenWarning: "请注意可能会振听。能改善手牌的一些牌在你的舍牌里。",
                exhausted: "牌山已经没有牌了，下次好运！",
                draw: "你自摸{{tile}}。"
            }
        },
        discards: {
            label: "牌河",
            discardCount: "你已经打了{{count}}张牌。",
            discardCount_plural: "你已经打了{{count}}张牌。",
            tilesLeft: "牌山还剩{{count}}张。",
            tilesLeft_plural: "牌山还剩{{count}}张。"
        },
        settings: {
            buttonLabel: "设置",
            tilesAllowed: "允许的牌种类：",
            characters: "万子",
            circles: "饼子",
            bamboo: "索子",
            honours: "字牌",
            verbose: "不使用牌缩写（“一索” vs “1s”）",
            concise: "紧凑的手牌历史",
            spoilers: "显示最佳舍牌",
            shuffle: "开始新的手牌之后将舍牌随机放回牌山",
            simulate: "模拟其他玩家的舍牌",
            exceptions: "考虑特殊牌型（国士无双和七对子）",
            minFan: "幾多番起糊：",
            minFanLimit: "(最高番：10)",
            sort: "自动理牌",
            blind: "隐藏手牌",
            useTimer: "启用计时器",
            time: "每个决定的时间:",
            extraTime: "每只手都需要额外的时间:",
            seconds: "秒"
        },
        stats: {
            buttonLabel: "统计",
            info: "这些数据在你每次达成听牌之后更新。",
            ready: "听牌次数：{{count}}次",
            ready_plural: "听牌次数：{{count}}次",
            discards: "舍牌枚数：{{count}}枚",
            discards_plural: "舍牌枚数：{{count}}枚",
            average: "平均听牌巡目：{{average}}巡",
            optimal: "最佳舍牌次数：{{count}}次",
            optimal_plural: "最佳舍牌次数：{{count}}次",
            optimalRate: "最佳舍牌比例：{{percent}}% ({{achieved}}/{{total}})",
            efficiency: "达成的进张枚数：{{count}}枚",
            efficiency_plural: "达成的进张枚数：{{count}}枚",
            possible: "可能的进张枚数：{{count}}枚",
            possible_plural: "可能的进张枚数：{{count}}枚",
            overall: "综合牌效率： {{percent}}% ({{achieved}}/{{total}})",
            reset: "重置统计",
            confirmation: "你确定想要重置你的所有统计数据为0吗？你无法撤回这项操作。",
            yes: "是，我要重置！",
            no: "否，不要重置！"
        },
        credits: {
            label: "Credits",
            tilesPreLink: "Tile images combined from ",
            tilesLinkText: "riichi-mahjong-tiles by FluffyStuff on Github",
            tilesPostLink: ", licensed under the ",
            ccLinkText: "Creative Commons Attribution 4.0 International License.",
            shantenPreLink: "Shanten calculation algorithm adapted from ",
            shantenLinkText: "this C program collection.",
            shantenPostLink: "",
        },
        menu: {
            trainer: "牌效训练",
            analyzer: "Analyzer",
            allLast: "All Last Trainer",
            explorer: "Explorer",
            utils: "Misc. Utils",
            language: "语言",
            defense: "弃和"
        },
        allLast: {
            placements: {
                first: "first",
                second: "second",
                third: "third",
                fourth: "fourth"
            },
            title: "All Last Trainer",
            maxFu: "Maximum Fu",
            showDifferences: "Show Point Differences",
            loadInstructions: "Enter comma-separated scores for East, South, West, and North, in that order, to load a situation.",
            loadLabel: "Load Situation",
            newLabel: "New Random Situation",
            info: "It's currently All Last, the last hand in the match. You are in fourth. The scores are as follows:",
            escapeHeader: "Escaping Fourth",
            riichiHeader: "Riichi Declarations",
            higherHeader: "Higher Placements",
            question: "What is the minimum score you can {{action}} to get {{placement}}?",
            riichiQuestion: "If {{player}} declares riichi, what is the minimum score you can {{action}} to get {{placement}}?",
            ron: "ron {{target}} with ",
            tsumo: "tsumo",
            han: "Han",
            fu: "Fu",
            submit: "Submit",
            wrong: "Wrong! That score doesn't get you to {{placement}}! Highlight for the answer: ",
            tooMuch: "That score gets you to {{placement}}, but it's not the lowest possible. Highlight for the answer: ",
            correct: "Correct! That's the lowest score that gets you to {{placement}}!",
            score: "{{han}} han {{fu}} fu",
            results: "Results:",
            you: "YOU",
            error: {
                few: "Error: Not enough scores provided.",
                NaN: "Error: Could not understand the score for {{seat}}."
            }
        },
        analyzer: {
            instructions1: "Instructions:",
            instructions2: "Paste the URL for your replay into the text box.",
            instructions3: 'Then, right click the link that appears and choose "Save As" or "Save Link As".',
            instructions4: 'Finally, click "Browse..." and upload the file you saved.',
            instructions5: "Alternatively, if you have a mjlog file on your computer, you can rename it to end in .zip.",
            instructions6: "Then, upload the file contained within that zip.",
            instructions7: "You can also just upload replay XML files directly if you have a program that fetches them for you.",
            instructions8: "The disclaimer from the efficiency trainer applies here as well.",
            instructions9: "For safety ratings, higher is better. 1 is the worst, and 15 is the best.",
            URLplaceholder: "Replay URL",
            invalidURL: "Invalid URL",
            downloadInstructions: "Right click this link and choose Save As!",
            roundSelect: "Select a Round",
            playerSelect: "Change Player",
            previousTurn: "Previous Turn",
            nextTurn: "Next Turn",
            nextIssue: "Next Issue",
            turn: "{{round}}, Turn {{turn}}",
            discards: "Tiles in your discards: {{symbols}} ({{tiles}})",
            calls: "Your Calls: {{calls}}",
            callsSeparator: ", ",
            tenhouLinkText: "【天凤牌理】",
            replayError: "Send me this replay, something broke.",
            noName: "Unknown",
            startingHand: "Your starting hand is {{hand}}. It's {{count}} tile from ready.",
            startingHand_plural: "Your starting hand is {{hand}}. It's {{count}} tiles from ready.",
            unknownAction: "Hey, this replay has something I don't account for. Please send me this replay so I can add it. {{debugInfo}}",
            call: "You called the {{tile}} to complete {{meld}}. ({{hand}})",
            callSameShanten: "That call didn't bring you closer to ready.",
            ryuukyoku: "The round ended in a draw.",
            playerRiichi: "You declared riichi. Ending analysis.",
            otherRiichi: "Player {{number}} declared riichi. ",
            fold: "You are still {{shanten}} tiles from ready, so you should fold.",
            probablyFold: "You are one tile from ready. You should consider folding.",
            win: "Player {{number}} won the round.",
            draw: "自摸{{tile}}。（{{hand}}）",
            chosenSafety: "{{tile}}的安全等级是{{rating}}。（{{- explanation}}）",
            correctSafety: "那是最安全的牌。",
            bestSafety: "最安全的牌是{{tile}}，安全等级{{rating}}。（{{- explanation}}）",
            safetyExplanations: {
                zero: "You shouldn't see this message. Tell me if you do.",
                one: "无筋 4/5/6",
                two: "无筋 3/7",
                three: "无筋 2/8",
                four: "one-chance",
                five: "无筋 1/9",
                six: "生张 字牌",
                seven: "筋牌 3/7",
                eight: "筋牌 2/8",
                nine: "筋牌 4/5/6",
                ten: "现一 字牌",
                eleven: "生张 筋牌 老头牌",
                twelve: "现一 筋牌 老头牌",
                thirteen: "现二 筋牌 老头牌 / 现二 字牌",
                fourteen: "绝张 筋牌 老头牌 / 绝张 字牌",
                fifteen: "现物，100% 安全"
            }
        },
        explorer: {
            warning: "Warning: Loading a hand may cause the page to hang for 5-10 seconds, or more if you have an older computer, depending on the complexity of the hand. Loading a hand will show all of the ukeire and upgrade possibilities for each discard, even ones that go back in shanten. By default, options that are strictly worse than another option won't be displayed, but you can press the button below to change that. If you only need ukeire information, tenhou.net/2/ will suffice.",
            shanten: "Shanten: The number of tiles away from ready your hand is.",
            ukeire: "Ukeire: The number of tiles that reduce your shanten.",
            notableDiscards: "Show Only Notable Discards",
            allDiscards: "Show All Possible Discards",
            discardInfo: {
                discard: "Discarding the {{tile}}:",
                shanten: "Shanten: {{count}}",
                ukeire: "Ukeire: {{count}} ({{tiles}})",
                expand: "Show Next Shanten's Ukeire",
                draw: "Draw {{draw}}, discard {{discard}}: {{count}} ukeire",
                average: "Average: {{average}}",
                upgrades: "Tiles that increase ukeire: {{count}} ({{tiles}})",
                expandUpgrades: "Show Upgrade Results"
            }
        },
        defense: {
            instructions: "请打最安全的牌。",
            finalHands: "最终手牌：",
            hand: "{{player}}：{{hand}}",
            safetyRatings: "安全等级",
            averagedSafetyRating: "针对多家立直，安全等级将一并取平均值，并选择最高的为最佳。",
            safetyRating: "{{rating}}: {{- explanation}}",
            riichiCount: "立直数：",
            minTurns: "立直前最小巡数：",
            tilesInHand: "手牌枚数："
        },
        utils: {
            convertHeader: "Hand Conversion",
            convertButtonLabel: "Convert Hand",
            ascii: "ASCII:",
            emoji: "Emoji:",
            stateHeader: "Random Game State Generator",
            playerLabel: "{{seat}} Player {{you}}",
            points: "Points:",
            discards: "Discards:",
            stateButtonLabel: "Generate New State",
            info: "It's turn {{turn}} in {{round}}. You are the {{seat}} player.",
        }
    }
}