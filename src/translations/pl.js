export const pl = {
    translations: {
        values: {
            one: "jeden",
            two: "dwa",
            three: "trzy",
            four: "cztery",
            five: "pięć",
            six: "sześć",
            seven: "siedem",
            eight: "osiem",
            nine: "dziewięć",
            east: "Wschód",
            south: "Południe",
            west: "Zachód",
            north: "Północ",
            white: "Haku",
            green: "Hatsu",
            red: "Chun",
            hidden: "zakryty kamień",
        },
        suits: {
            characters: "Manzu",
            circles: "Pinzu",
            bamboo: "Souzu"
        },
        shuupai: "{{value}} {{suit}}",
        winds: {
            east: "Wschód",
            south: "Południe",
            west: "Zachód",
            north: "Północ"
        },
        roundName: "{{wind}} {{number}}-{{repeats}}",
        trainer: {
            disclaimer: "Zastrzeżenie: przy pomocy tego narzędzia wyćwiczysz maksymalizowanie wydajności ręki w bieżącej kolejce. Nie pomoże Ci ono maksymalizować wydajności w nadchodzących kolejkach, ani nie wskaże, kiedy wydajność ignorować, czy jak zbudować wartość ręki. Granie zgodnie z podpowiedziami programu nie jest optymalnym sposobem gry w Mahjonga, ale niektóre ręce warto właśnie tak rozgrywać. Gracze zaawansowani nie zawsze grają w ten sposób, ale każdy z nich POTRAFI w ten sposób zagrać. Pamiętaj, by uzupełnić ćwiczenia o Madzianową lekturę, aby zrozumieć, kiedy taka gra może nie być wskazana. Sprawdź też opcje treningu nastawione na konkretne umiejętności.",
            instructions: "Kliknij na kamień, który chcesz odrzucić!",
            start: "Rozegraj nową rękę: {{hand}}",
            complete: " Twoja ręka jest w tenpai. Gratulacje! Twoja wydajność to {{achieved}}/{{total}}, or {{percent}}%.",
            newHandButtonLabel: "Nowa ręka",
            loadButtonLabel: "Wczytaj rękę",
            roundWind: "Wiatr Rundy:",
            seatWind: "Wiatr Gracza:",
            copyHand: "Kopiuj rękę",
            copied: "Skopiowano!",
            error: {
                load: "Błąd: Nie można odczytać ręki.",
                wallEmpty: "Błąd: za mało kamieni.",
                wallEmptyShuffle: "Za mało kamieni w murze by stworzyć nową rękę. Mieszanie."
            },
            playerNames: {
                you: "Ty",
                right: "Shimocha",
                across: "Toimen",
                left: "Kamicha"
            }
        },
        history: {
            label: "Historia ręki",
            tenhouLinkText: "[Ukeire]",
            concise: {
                discard: "Odrzut: {{tile}}",
                acceptance: " ({{count}} kamieni).",
                acceptance_plural: " ({{count}} kamieni).",
                loweredShanten: " (cofnięcie shanten)",
                optimal: " Najlepszy:",
                optimalSpoiler: " {{tile}}",
                best: " Najepszy wybór!",
                exceptionalNoten: " Wszystkie zwycięskie kamienie są w Twojej ręce, więc nie masz jeszcze tenpai.",
                furiten: " Furiten.",
                furitenWarning: " Uważaj na możliwy furiten.",
                exhausted: " Brak kamieni w murze. Następnym razem się uda! ",
                draw: " Dobrany kamień: {{tile}}. "
            },
            verbose: {
                discard: "Wybierasz odrzut {{tile}}, który",
                acceptance: " daje {{count}} kamień ulepszający rękę.",
                acceptance_plural: " daje {{count}} kamieni ulepszających rękę.",
                loweredShanten: " zwiększa shanten. Oddalasz się od tenpai.",
                optimal: " Najlepszy odrzut",
                optimalSpoiler: ", {{tile}}, ",
                best: " Najlepszy wybór!",
                exceptionalNoten: " Masz tenpai, ale wszystkie zwycięskie kamienie są w Twojej ręce. Większości odmian zasad nie uznaje takiego tenpai, więc musisz zmienić kształt ręki. ",
                furiten: " Masz furitena. Nie możesz wygrać przez Ron, bo masz swój zwycięski kamień w rzece.",
                furitenWarning: " Uważaj na możliwy furiten. Niektóre kamienie ulepszające rękę są w Twojej rzece. ",
                exhausted: " Brak kamieni w murze. Następnym razem się uda! ",
                draw: " Dobierasz {{tile}}. "
            }
        },
        discards: {
            label: "Rzeka",
            discardCount: "Odrzuciłeś {{count}} kamień.",
            discardCount_plural: "Odrzuciłeś {{count}} kamieni.",
            tilesLeft: "Pozostał {{count}} kamień w murze.",
            tilesLeft_plural: "Pozostało {{count}} kamieni w murze."
        },
        settings: {
            buttonLabel: "Ustawienia",
            tilesAllowed: "Dozwolone kamienie:",
            characters: "Manzu",
            circles: "Pinzu",
            bamboo: "Souzu",
            honours: "Honory",
            verbose: "Pełne nazwy kamieni (\"jeden Souzu\" vs \"1s\")",
            concise: "Skrócona historia",
            spoilers: "Pokazuj najlepszą opcję",
            shuffle: "Wmieszaj odrzucone kamienie z powrotem do muru po rozpoczęciu nowej ręki",
            simulate: "Symuluj odrzuty innych graczy",
            exceptions: "Rozpoznaj ręce specjalne (Kokushi/Trzynaście Sierot i Chiitoitsu/Siedem Par)",
            minFan: "Minimalny fan:",
            minFanLimit: "(Maximalny fan: 10)",
            sort: "Sortuj rękę",
            useTimer: "Włączyć timer",
            time: "Czas na każdą decyzję:",
            extraTime: "Dodatkowy czas na każde rozdanie:",
            seconds: "sekundy"
        },
        stats: {
            buttonLabel: "Statystyki",
            info: "Statystyki są uaktualniane za każdym razem, gdy dojdziesz do tenpai.",
            ready: "Ręce w tenpai: {{count}} ręka",
            ready_plural: "Ręce w tenpai: {{count}} ręce",
            discards: "Odrzucone kamieni: {{count}} kamieni",
            discards_plural: "Odrzucone kamienie: {{count}} kamieni",
            average: "Średnia liczba odrzutów do tenpai: {{average}} udrzutów",
            optimal: "Optymalne odrzuty: {{count}} odrzut",
            optimal_plural: "Optymalne odrzuty: {{count}} odrzutów",
            optimalRate: "Współczynnik optymalnych odrzutów: {{percent}}% ({{achieved}}/{{total}})",
            efficiency: "Zyskane ukeire: {{count}} kamień",
            efficiency_plural: "Zyskane ukeire: {{count}} kamieni",
            possible: "Potencjalne ukeire do uzyskania: {{count}} kamień",
            possible_plural: "Potencjalne ukeire do uzyskania: {{count}} kamieni",
            overall: "Ogólna wydajność: {{percent}}% ({{achieved}}/{{total}})",
            reset: "Zresetuj statystyki",
            confirmation: "Czy na pewno chcesz zresetować statystyki? Nie można tego cofnąć. ",
            yes: "Tak, reset!",
            no: "Nie, nie resetuj!"
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
            trainer: "Trener wydajności kamiennej",
            analyzer: "Analizer logów",
            allLast: "Trener oorasu",
            explorer: "Eksplorator",
            utils: "Inne narzędzia",
            language: "Język",
            defense: "Obrona"
        },
        allLast: {
            placements: {
                first: "pierwszy",
                second: "drugi",
                third: "trzeci",
                fourth: "czwarty"
            },
            title: "Trener oorasu",
            maxFu: "Maks. Fu",
            showDifferences: "Pokaż różnice punktowe",
            loadInstructions: "Wprowadź i oddziel przecinkiem wartości punktowe dla Wschodu, Południa, Zachodu i Północy, by wczytać sytuację.",
            loadLabel: "Wczytaj sytuację",
            newLabel: "Nowa losowa sytuacja",
            info: "Ostatnia ręka w meczu. Jesteś na ostatnim miejscu. Punkty:",
            escapeHeader: "Ucieczka z czwartego miejsca",
            riichiHeader: "Zgłoszone Riichi",
            higherHeader: "Pozostali gracze",
            question: "Jaka jest minimalna wartość, z którą możesz wygrać na {{action}}, żeby być {{placement}}?",
            riichiQuestion: "Jeśli {{player}} zgłosi Riichi, z jaką minimalną wartością będziesz mógł wygrać na {{action}}, żeby być {{placement}}?",
            ron: "ron od {{target}}",
            tsumo: "tsumo",
            han: "Han",
            fu: "Fu",
            submit: "Podaj",
            wrong: "Źle! Z tym wynikiem nie będziesz {{placement}}! Podświetl by zobaczyć odpowiedź:",
            tooMuch: "Z tym wynikiem będziesz {{placement}}, ale nie jest to najniższy możliwy wynik. Podświetl by zobaczyć odpowiedź: ",
            correct: "Dobrze! Z tym wynikiem będziesz {{placement}}!",
            score: "{{han}} han {{fu}} fu",
            results: "Wyniki:",
            you: "Gracz",
            error: {
                few: "Błąd: wprowadzono za mało wartości punktowych.",
                NaN: "Błąd: niezrozumiała wartość dla {{seat}}."
            }
        },
        analyzer: {
            instructions1: "Instrukcje:",
            instructions2: "Wklej URL loga w polu tekstowym.",
            instructions3: 'Prawokliknij na wyświetlony link i wybierz "Zapisz jako" lub "Zapisz link jako".',
            instructions4: 'Kliknij "Przeglądaj..." i załaduj zapisany plik.',
            instructions5: "Jeśli masz mjlog na komputerze, zmień jego rozszerzenie na .zip.",
            instructions6: "Załaduj plik zawarty w tym zipie.",
            instructions7: "Możesz też załadować logi XML bezpośrednio, o ile masz program, który je przeniesie.",
            instructions8: "Zastrzeżenie z trenera wydajności obowiązuje też tutaj.",
            instructions9: "Im wyższa liczba na skali bezpieczeństwa, tym bezpieczniejszy kamień: 1 jest najgorsza, 15 najlepsza.",
            URLplaceholder: "URL loga Tenhou",
            invalidURL: "Niepoprawny URL",
            downloadInstructions: "Prawokliknij ten link i wybierz Zapisz jako!",
            roundSelect: "Wybierz Rundę",
            playerSelect: "Zmień gracza",
            previousTurn: "Poprzednia kolejka",
            nextTurn: "Następna kolejka",
            nextIssue: "Next Issue",
            turn: "{{round}}, kolejka {{turn}}",
            discards: "Odrzucone kamienie: {{symbols}} ({{tiles}})",
            calls: "Twoje meldunki: {{calls}}",
            callsSeparator: ", ",
            tenhouLinkText: "[Analiza ukeire na Tenhou]",
            replayError: "Prześlij mi ten log, coś poszło nie tak.",
            noName: "Nieznany",
            startingHand: "Twoja ręka startowa to {{hand}}. Masz {{count}} do tenpai.",
            startingHand_plural: "Twoja ręka startowa to {{hand}}. Masz {{count}} do tenpai.",
            unknownAction: "Hej, ten log ma coś czego nie wziąłem pod uwagę. Prześlij mi go, bym mógł to dodać.{{debugInfo}}",
            call: "Zameldowałeś {{tile}} żeby skompletować {{meld}}. ({{hand}})",
            callSameShanten: "Ten meldunek nie przybliżył Cię do tenpai.",
            ryuukyoku: "Rozdanie nierozstrzygnięte.",
            playerRiichi: "Zgłosiłeś Riichi. Kończenie analizy.",
            otherRiichi: "Gracz {{number}} zgłosił Riichi. ",
            fold: "Masz {{shanten}} do tenpai, powinieneś się bronić.",
            probablyFold: "Masz jeden do tenpai. Rozważ obronę.",
            win: "Gracz {{number}} wygrał rozdanie.",
            draw: "Wyciąg: {{tile}}. ({{hand}})",
            chosenSafety: "Skala bezpieczństwa {{tile}} to {{rating}}. ({{- explanation}}) ",
            correctSafety: "To jest najbezpieczniejszy kamień.",
            bestSafety: "Najbezpieczniejszy kamień: {{tile}}, o skali bezpieczeństwa {{rating}}. ({{- explanation}})",
            safetyExplanations: {
                zero: "Nie powinieneś widzieć tej wiadomości. Daj mi znać, jeśli widzisz.",
                one: "nie-suji 4/5/6",
                two: "nie-suji 3/7",
                three: "nie-suji 2/8",
                four: "one-chance",
                five: "nie-suji 1/9",
                six: "pierwsza sztuka Honora",
                seven: "suji 3/7",
                eight: "suji 2/8",
                nine: "suji 4/5/6",
                ten: "druga szuka Honora",
                eleven: "pierwsza sztuka skrajnego suji",
                twelve: "druga sztuka skrajnego suji",
                thirteen: "trzecia sztuka skrajnego suji / Honora",
                fourteen: "czwarta sztuka skrajnego suji / Honora",
                fifteen: "genbutsu, 100% bezpieczny"
            }
        },
        explorer: {
            warning: "Uwaga: wczytywanie może przywiesić stronę na 5-10 sekund lub dłużej, w zależności od skomplikowania ręki. Po wczytaniu ręki wyświetli się całe ukeire i możliwości ulepszenia przy każdym odrzucie, nawet takim, który zwiększa shanten. Wyświetlanie odrzutów, które są znacznie gorsze od innych jest domyślnie wyłączone, ale możesz to zmienić, naciskając przycisk poniżej. Jeśli potrzebujesz samego ukeire, tenhou.net/2/ wystarczy.",
            shanten: "Shanten: liczba kamieni do tenpai.",
            ukeire: "Ukeire: liczba kamieni, które przyjmie ręka.",
            notableDiscards: "Pokaż tylko najlepsze odrzuty",
            allDiscards: "Pokaż wszystkie możliwe odrzuty",
            discardInfo: {
                discard: "Odrzucając {{tile}}:",
                shanten: "Shanten: {{count}}",
                ukeire: "Ukeire: {{count}} ({{tiles}})",
                expand: "Pokaż ukeire dla następnego shanten",
                draw: "Wyciąg {{draw}}, odrzut {{discard}}: {{count}} ukeire",
                average: "Średnia: {{average}}",
                upgrades: "Kamienie zwiększające ukeire: {{count}} ({{tiles}})",
                expandUpgrades: "Pokaż wynik ulepszenia"
            }
        },
        defense: {
            instructions: "Odrzuć najbezpieczniejszy kamień.",
            finalHands: "Ręce przeciwników:",
            hand: "{{player}}: {{hand}}",
            safetyRatings: "Skala bezpieczeństwa",
            averagedSafetyRating: "Przeciwko kilku Riichi, skala bezpieczeństwa będzie uśredniona i zostanie wybrana najlepsza opcja.",
            safetyRating: "{{rating}}: {{- explanation}}",
            riichiCount: "Liczba Riichi: ",
            minTurns: "Minimalna liczba kolejek przed zgłoszeniem Riichi: ",
            tilesInHand: "Liczba kamieni na ręce: "
        },
        utils: {
            convertHeader: "Konwersja ręki",
            convertButtonLabel: "Konwertuj rękę",
            ascii: "ASCII:",
            emoji: "Emoji:",
            stateHeader: "Generator losowych sytuacji meczowych",
            playerLabel: "{{seat}} Gracz {{you}}",
            points: "Punkty:",
            discards: "Odrzuty:",
            stateButtonLabel: "Generuj nową sytuację",
            info: "Jest kolejka {{turn}} w {{round}}. Jesteś {{seat}}.",
        }
    }
}