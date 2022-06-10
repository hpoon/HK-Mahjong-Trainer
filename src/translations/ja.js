export const ja = {
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
            east: "東",
            south: "南",
            west: "西",
            north: "北",
            white: "白",
            green: "發",
            red: "中",
            hidden: "隠された手牌",
        },
        suits: {
            characters: "萬",
            circles: "筒",
            bamboo: "索"
        },
        shuupai: "{{value}}{{suit}}",
        winds: {
            east: "東",
            south: "南",
            west: "西",
            north: "北"
        },
        roundName: "{{wind}}{{number}}局{{repeats}}本場",
        trainer: {
            disclaimer: "注意: このページでは、最大の効率で聴牌(テンパイ)に向かう練習が出来ます。言い換えると、将来の待ち受けが広くなる選択や、効率を無視した方がいい局面、もしくは得点を高める方法について知ることはできません。そのため、このページでの最善手が、麻雀において常に最善手とは限りません。それでも、牌効率を踏まえて選択できることは重要です。上級者は常に最大効率の打牌を選択するわけではありませんが、どの牌が最大効率なのか知っており、最大効率で打つことも出来るものです。このページはあくまで牌効率を鍛える補助ツールと捉え、敢えて最大効率を選ばないケースについては他の場所で学びましょう。また、設定を確認して目的に沿った練習をしましょう。",
            instructions: "捨てたい牌をクリックしてください。",
            start: "新しい手牌が始まりました： {{hand}}",
            complete: "テンパイしました。おめでとう！あなたの効率は{{achieved}}/{{total}}で、{{percent}}%でした。",
            newHandButtonLabel: "新しい手牌",
            loadButtonLabel: "手牌をロード",
            roundWind: "場風:",
            seatWind: "自風:",
            copyHand: "手牌をコピー",
            copied: "コピーしました！",
            error: {
                load: "エラー: 入力された手牌が不正です。",
                wallEmpty: "エラー: 手牌の枚数が足りません。",
                wallEmptyShuffle: "山に残っている牌が足りないため、新しい手牌を作れません。混ぜ直します。"
            },
            playerNames: {
                you: "自家",
                right: "下家",
                across: "対面",
                left: "上家"
            }
        },
        history: {
            label: "手牌の履歴",
            tenhouLinkText: "[天鳳牌理(有効牌)]",
            concise: {
                discard: " 打: {{tile}}",
                acceptance: " ({{count}} 枚)",
                loweredShanten: " (シャンテン戻し)",
                optimal: " 牌効率最大:",
                optimalSpoiler: " {{tile}}",
                best: " 最善手でした！",
                exceptionalNoten: " あがり牌がすべて手牌にあるため、テンパイになりません。",
                exhausted: " 山牌が無くなりました。次の手で頑張りましょう！",
                draw: " ツモ: {{tile}}"
            },
            verbose: {
                discard: "{{tile}}を捨てた結果、",
                acceptance: "有効牌は{{count}}枚です。",
                loweredShanten: " シャンテン数が上がり、テンパイから遠ざかってしまいました。",
                optimal: " 最も牌効率の良い捨て牌は",
                optimalSpoiler: "{{tile}}で、",
                best: " 今の捨て牌は、最大効率でした!",
                exceptionalNoten: " テンパイ形になりましたが、あがり牌がすべて自分の手の中にあります。ほとんどのルールでは、この形はテンパイとして認められません。待ち受け方を変えましょう。",
                exhausted: " 山に牌がなくなってしまいました。次の手で頑張りましょう！ ",
                draw: " 次にツモった牌は {{tile}} です。 "
            }
        },
        discards: {
            label: "河",
            discardCount: "捨てた牌は {{ count }} 枚です。",
            tilesLeft: "山に {{count}} 枚残っています。",
        },
        settings: {
            buttonLabel: "設定",
            tilesAllowed: "使用する牌:",
            characters: "萬子",
            circles: "筒子",
            bamboo: "索子",
            honours: "字牌",
            verbose: "牌を省略表記する(\"一索\" を \"1s\" にする)",
            showIndexes: "インデックスを表示",
            concise: "履歴を簡略表示",
            spoilers: "牌効率最大の選択が何だったか表示",
            shuffle: "新しい手牌を始めるとき、捨て牌を混ぜて山に戻す",
            simulate: "他プレイヤーも牌を切る",
            exceptions: "4メンツ1雀頭にならない例外的な手を考慮する(国士無双/七対子)",
            minFan: "最小番:",
            minFanLimit: "(最大番: 10)",
            sort: "自動理牌",
            useTimer: "タイマーを使う",
            time: "標準の持ち時間:",
            extraTime: "予備の持ち時間:",
            seconds: "秒"
        },
        stats: {
            buttonLabel: "統計",
            info: "統計データは手牌がテンパイする度に更新されます。",
            ready: "テンパイ回数: {{count}} 回",
            discards: "捨てた牌: {{count}} 枚",
            average: "テンパイまでの平均捨て牌数: {{average}} 枚",
            optimal: "牌効率最大の捨て牌回数: {{count}} 回",
            optimalRate: "牌効率最大の捨て牌率: {{percent}}% ({{achieved}}/{{total}})",
            efficiency: "実際に受け入れられた有効牌: {{count}} 枚",
            possible: "理論上受け入れられた有効牌: {{count}} 枚",
            overall: "総合的な牌効率: {{percent}}% ({{achieved}}/{{total}})",
            reset: "統計をリセット",
            confirmation: "すべての統計データをリセットしてもよろしいですか？この操作は元に戻すことが出来ません。",
            yes: "はい、リセットして下さい！",
            no: "いいえ、リセットしないで下さい！"
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
            trainer: "牌効率練習",
            analyzer: "Analyzer",
            allLast: "オーラス(条件戦)練習",
            explorer: "Explorer",
            utils: "Misc. Utils",
            language: "言語",
            defense: "ベタ降り"
        },
        allLast: {
            placements: {
                first: "一着",
                second: "二着",
                third: "三着",
                fourth: "四着"
            },
            title: "オーラス(条件戦)練習",
            maxFu: "符の最大値",
            showDifferences: "点棒の差を表示",
            loadInstructions: "カンマ区切りで持ち点を入力してください。東,南,西,北の順で読み込みます。",
            loadLabel: "点棒状況を読み込む",
            newLabel: "新しくランダムな状況で始める",
            info: "現在オーラス(最終局)で、あなたは4着(ラス)です。点棒状況は次の通り:",
            escapeHeader: "ラス回避",
            riichiHeader: "リーチ宣言",
            higherHeader: "着順アップ",
            question: " {{action}} {{placement}} になるために、必要最低限のあがりは？",
            riichiQuestion: "もし {{player}} がリーチした場合、{{action}} {{placement}} になるために必要最低限のあがりは？",
            ron: " {{target}} からロンして ",
            tsumo: "ツモで",
            han: "飜",
            fu: "符",
            submit: "回答",
            wrong: "間違いです！ そのあがりでは {{placement}} になりません！ 範囲選択で正解を表示 → ",
            tooMuch: "そのあがりで {{placement}} に届きますが、必要最低限ではありません。 範囲選択で正解を表示 → ",
            correct: "正解です！ {{placement}} になるために必要最低限のあがりです。",
            score: "{{fu}}符{{han}}飜",
            results: "結果:",
            you: "あなた",
            error: {
                few: "エラー: 点棒の情報が不足しています。",
                NaN: "エラー: 入力された点棒情報を読み込めません。 {{seat}} "
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
            URLplaceholder: "Tenhou Replay URL",
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
            tenhouLinkText: "[Tenhou Ukeire Analysis]",
            replayError: "Send me this replay, something broke.",
            noName: "Unknown",
            startingHand: "Your starting hand is {{hand}}. It's {{count}} tile from ready.",
            unknownAction: "Hey, this replay has something I don't account for. Please send me this replay so I can add it. {{debugInfo}}",
            call: "You called the {{tile}} to complete {{meld}}. ({{hand}})",
            callSameShanten: "That call didn't bring you closer to ready.",
            ryuukyoku: "The round ended in a draw.",
            playerRiichi: "You declared riichi. Ending analysis.",
            otherRiichi: "Player {{number}} declared riichi. ",
            fold: "You are still {{shanten}} tiles from ready, so you should fold.",
            probablyFold: "You are one tile from ready. You should consider folding.",
            win: "Player {{number}} won the round.",
            draw: "You drew the {{tile}}. ({{hand}})",
            chosenSafety: "The {{tile}}'s safety rating is {{rating}}. ({{- explanation}}) ",
            correctSafety: "That was the safest tile.",
            bestSafety: "Safest tile: {{tile}}, with a safety rating of {{rating}}. ({{- explanation}})",
            safetyExplanations: {
                zero: "You shouldn't see this message. Tell me if you do.",
                one: "無スジ4/5/6",
                two: "無スジ3/7",
                three: "無スジ2/8",
                four: "one-chance",
                five: "無スジ1/9",
                six: "first 字牌",
                seven: "筋3/7",
                eight: "筋2/8",
                nine: "筋4/5/6",
                ten: "second 字牌",
                eleven: "first suji 老頭牌",
                twelve: "second suji 老頭牌",
                thirteen: "third suji 老頭牌 / third 字牌",
                fourteen: "fourth suji 老頭牌 / fourth 字牌",
                fifteen: "現物"
            }
        },
        explorer: {
            warning: "Warning: Loading a hand may cause the page to hang for 5-10 seconds, or more if you have an older computer, depending on the complexity of the hand. Loading a hand will show all of the ukeire and upgrade possibilities for each discard, even ones that go back in shanten. By default, options that are strictly worse than another option won't be displayed, but you can press the button below to change that. If you only need ukeire information, tenhou.net/2/ will suffice.",
            shanten: "向聴：　聴牌までの近さを数える単位。",
            ukeire: "Ukeire: The number of tiles that reduce your shanten.",
            notableDiscards: "Show Only Notable Discards",
            allDiscards: "Show All Possible Discards",
            discardInfo: {
                discard: "Discarding the {{tile}}:",
                shanten: "{{count}}向聴",
                ukeire: "Ukeire: {{count}} ({{tiles}})",
                expand: "Show Next Shanten's Ukeire",
                draw: "Draw {{draw}}, discard {{discard}}: {{count}} ukeire",
                average: "Average: {{average}}",
                upgrades: "Tiles that increase ukeire: {{count}} ({{tiles}})",
                expandUpgrades: "Show Upgrade Results"
            }
        },
        defense: {
            instructions: "Discard the safest tile.",
            finalHands: "Final Hands:",
            hand: "{{player}}: {{hand}}",
            safetyRatings: "Safety Ratings",
            averagedSafetyRating: "Against multiple riichis, the safety ratings will be averaged together, and the highest chosen as best.",
            safetyRating: "{{rating}}: {{- explanation}}",
            riichiCount: "Number of riichis: ",
            minTurns: "Minimum turns before a riichi is declared: ",
            tilesInHand: "Number of tiles in hand: "
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
