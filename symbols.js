const DISPLAY_BOX = "\u25A1";

const symbols = [
    /* samwho */
    {
        glyph: "©",
        name: "Copyright",
        searchTerms: ["(C)"]
    },
    {
        glyph: "®",
        name: "Registered Trademark",
        searchTerms: ["(R)"]
    },
    {
        glyph: "™",
        name: "Trademark",
        searchTerms: ["TM"]
    },

    /* punctuation */
    {
        glyph: "“",
        name: "Left Double Quotation Mark",
        searchTerms: ["open", "quote", '"']
    },
    {
        glyph: "”",
        name: "Right Double Quotation Mark",
        searchTerms: ["close", "quote", '"']
    },
    {
        glyph: "‘",
        name: "Left Single Quotation Mark",
        searchTerms: ["open", "quote", "'"]
    },
    {
        glyph: "’",
        name: "Right Single Quotation Mark",
        searchTerms: ["close", "quote", "'"]
    },
    {
        glyph: "—",
        name: "Em-dash"
    },
    {
        glyph: "–",
        name: "En-dash",
        searchTerms: ["en", "dash"]
    },
    {
        glyph: "¡",
        name: "Inverted Exclamation Mark",
        searchTerms: ["!"]
    },
    {
        glyph: "¿",
        name: "Inverted Question Mark",
        searchTerms: ["?"]
    },
    {
        glyph: "‽",
        name: "Interrobang",
        searchTerms: ["?!"]
    },
    {
        glyph: "…",
        name: "Ellipsis",
        searchTerms: ["..."]
    },
    {
        glyph: "−",
        name: "minus",
        searchTerms: ["minus", "dash"],
    },
    {
        glyph: "é",
        name: "E with Acute",
        searchTerms: ["acute", "e"]
    },
    {
        glyph: "•",
        name: "Vertically Centered Dot",
        searchTerms: ["bullet", "."]
    },
    {
        glyph: "§",
        name: "Section",
        searchTerms: ["silcrow", "s"]
    },
    {
        glyph: "¶",
        name: "Paragraph",
        searchTerms: ["pilcrow", "p"]
    },

    /* currency */
    {
        glyph: "¤",
        name: "Currency"
    },
    {
        glyph: "£",
        name: "Pound"
    },
    {
        glyph: "€",
        name: "Euro"
    },
    {
        glyph: "$",
        name: "Dollar Sign"
    },
    {
        glyph: "¥",
        name: "Yen"
    },
    {
        glyph: "₩",
        name: "Won"
    },
    {
        glyph: "₹",
        name: "Rupee"
    },
    {
        glyph: "¢",
        name: "Cent"
    },

    /* math */
    {
        glyph: "±",
        name: "Plus-minus",
        searchTerms: ["+", "-"]
    },
    {
        glyph: "×",
        name: "Times",
        searchTerms: ["multiply", "*", "x"]
    },
    {
        glyph: "÷",
        name: "Divide",
        searchTerms: ["/"]
    },
    {
        glyph: "√",
        name: "Square Root",
        searchTerms: ["sqrt"]
    },
    {
        glyph: "∑",
        name: "Summation",
        searchTerms: ["sum"]
    },
    {
        glyph: "∏",
        name: "Product"
    },
    {
        glyph: "∫",
        name: "Integral"
    },
    {
        glyph: "∂",
        name: "Partial Derivative"
    },
    {
        glyph: "¹",
        name: "Superscript One",
        searchTerms: ["power","exponent","1","^1","**1"]
    },
    {
        glyph: "²",
        name: "Superscript Two",
        searchTerms: ["squared", "power","exponent","2","^2","**2"]
    },
    {
        glyph: "³",
        name: "Superscript Three",
        searchTerms: ["cubed", "power","exponent","3","^3","**3"]
    },
    {
        glyph: "₀",
        name: "Subscript Zero",
        searchTerms: ["not", "0", "_0"]
    },
    {
        glyph: "₁",
        name: "Subscript One",
        searchTerms: ["1", "_1"]
    },
    {
        glyph: "₂",
        name: "Subscript Two",
        searchTerms: ["2", "_2"]
    },
    {
        glyph: "¼",
        name: "One Quarter",
        searchTerms: ["fraction", "1/4"]
    },
    {
        glyph: "½",
        name: "One Half",
        searchTerms: ["fraction", "1/2"]
    },
    {
        glyph: "¾",
        name: "Three Quarters",
        searchTerms: ["fraction", "3/4"]
    },
    {
        glyph: "∞",
        name: "Infinity"
    },
    {
        glyph: "∅",
        name: "Empty Set"
    },
    {
        glyph: "⌀",
        name: "Diameter",
    },
    {
        glyph: "π",
        name: "pi",
        searchTerms: ["pie"]
    },
    {
        glyph: "∆",
        name: "Delta"
    },
    {
        glyph: "ε",
        name: "Epsilon"
    },
    {
        glyph: "µ",
        name: "Micro",
        searchTerms: ["mu"]
    },
    {
        glyph: "°",
        name: "Degree"
    },
    {
        glyph: "′",
        name: "Prime",
        searchTerms: ["feet", "minute", "arcminute"]
    },
    {
        glyph: "″",
        name: "Double prime",
        searchTerms: ["inch", "second", "arcsecond"]
    },

    /* accented characters */
    {
        glyph: "ā",
        name: "A with Macron"
    },
    {
        glyph: "á",
        name: "A with Acute"
    },
    {
        glyph: "ǎ",
        name: "A with Caron"
    },
    {
        glyph: "à",
        name: "A with Grave"
    },
    {
        glyph: "å",
        name: "Latin small letter A with ring above",
    },
    {
        glyph: "Å",
        name: "Latin capital letter A with ring above",
        searchTerms: ["angstrom"]
    },
    {
        glyph: "ä",
        name: "Latin small letter A with diaeresis"
    },
    {
        glyph: "Ä",
        name: "Latin capital letter A with diaeresis"
    },
    {
        glyph: "ç",
        name: "C with Cedilla"
    },
    {
        glyph: "ē",
        name: "E with Macron"
    },
    {
        glyph: "é",
        name: "E with Acute"
    },
    {
        glyph: "ě",
        name: "E with Caron"
    },
    {
        glyph: "è",
        name: "E with Grave"
    },
    {
        glyph: "ī",
        name: "I with Macron"
    },
    {
        glyph: "í",
        name: "I with Acute"
    },
    {
        glyph: "ǐ",
        name: "I with Caron"
    },
    {
        glyph: "ì",
        name: "I with Grave"
    },
    {
        glyph: "ñ",
        name: "Latin Small Letter n with Tilde",
        searchTerms: ["jalapeno"]
    },
    {
        glyph: "Ñ",
        name: "Latin Capital Letter N with Tilde",
        searchTerms: ["jalapeno"]
    },
    {
        glyph: "ō",
        name: "O with Macron"
    },
    {
        glyph: "ó",
        name: "O with Acute"
    },
    {
        glyph: "ǒ",
        name: "O with Caron"
    },
    {
        glyph: "ò",
        name: "O with Grave"
    },
    {
        glyph: "ū",
        name: "U with Macron"
    },
    {
        glyph: "ú",
        name: "U with Acute"
    },
    {
        glyph: "ǔ",
        name: "U with Caron"
    },
    {
        glyph: "ù",
        name: "U with Grave"
    },
    {
        glyph: "ǖ",
        name: "Ü with Macron"
    },
    {
        glyph: "ǘ",
        name: "Ü with Acute"
    },
    {
        glyph: "ǚ",
        name: "Ü with Caron"
    },
    {
        glyph: "ǜ",
        name: "Ü with Grave"
    },

    /* combined characters */
    {
        glyph: "æ",
        name: "AE"
    },
    {
        glyph: "Æ",
        name: "AE"
    },
    {
        glyph: "œ",
        name: "OE"
    },
    {
        glyph: "Œ",
        name: "OE"
    },

    /* miscellaneous */
    {
        glyph: "✔",
        name: "Check",
        searchTerms: ["tick"]
    },
    {
        glyph: "←",
        name: "Left Arrow"
    },
    {
        glyph: "→",
        name: "Right Arrow"
    },
    {
        glyph: "↑",
        name: "Upwards Arrow"
    },
    {
        glyph: "↓",
        name: "Downwards Arrow"
    },
    {
        glyph: "↔",
        name: "Left Right Arrow"
    },
    {
        glyph: "↕",
        name: "Up Down Arrow"
    },
    {
        glyph: "~",
        name: "Tilde"
    },
    {
        glyph: "ꩰ",
        name: "Khamti Reduplication",
        searchTerms: ["xn--8r9a" /* Punycode */]
    },
    {
        glyph: "ဪ",
        name: "Myanmar Letter Au",
        searchTerms: ["xn--ujd" /* Punycode */]
    },
    {
        glyph: "⌘",
        name: "Command (Looped Square)",
    },
    {
        glyph: "⌥",
        name: "Option Key"
    },
    {
        glyph: "⇪",
        name: "Caps Lock (Upwards White Arrow from Bar)"
    },
    {
        glyph: "⇧",
        name: "Shift (Upwards White Arrow)"
    },
    {
        glyph: "⌃",
        name: "Control (Up Arrowhead)",
        searchTerms: ["ctrl"]
    },
    {
        glyph: "þ",
        name: "lowercase thorn"
    },
    {
        glyph: "Þ",
        name: "uppercase thorn"
    },
    {
        glyph: "ð",
        name: "lowercase eth"
    },
    {
        glyph: "Ð",
        name: "uppercase eth"
    },
    {
        glyph: "†",
        name: "dagger"
    },
    {
        glyph: "♥",
        name: "heart"
    },
    {
        glyph: "♦",
        name: "diamond"
    },
    {
        glyph: "♣",
        name: "club"
    },
    {
        glyph: "♠",
        name: "spade"
    },
    {
        glyph: "℠",
        name: "Service Mark",
        searchTerms: ["service mark", "SM"]
    },

    /* invisible characters */
    {
        glyph: "\u00A0",
        display: DISPLAY_BOX,
        name: "No-break Space",
        searchTerms: ["&nbsp;", "non-breaking"]
    },
    {
        glyph: "\u200B",
        display: DISPLAY_BOX,
        name: "Zero Width Space",
        searchTerms: ["zwsp"]
    },
    {
        glyph: "\u200E",
        display: DISPLAY_BOX,
        name: "Left-to-Right",
        searchTerms: ["&lrm;", "ltr"]
    },
    {
        glyph: "\u200F",
        display: DISPLAY_BOX,
        name: "Right-to-Left",
        searchTerms: ["&rlm;", "rtl"]
    },

    /* Private Use Area (not official Unicode, may not display) */
    {
        glyph: "\uF8FF",
        name: "Apple Logo"
    }
];

function fuzzyMatch(haystack, needle) {
    let haystackIndex = 0;
    let needleIndex = 0;
    let haystackIndexLastMatch = -1;
    let matchGaps = [];

    while (haystackIndex < haystack.length && needleIndex < needle.length) {
        if (haystack[haystackIndex] === needle[needleIndex]) {
            if (haystackIndexLastMatch >= 0) {
                // `haystackIndex - haystackIndexLastMatch - 1` may overrepresent
                // the gap between matches due to greedy matching, so we search
                // backwards to find the actual gap. This correction may be overly
                // charitable if the haystack has multiple instances of the same
                // character, but it's well worth the improvement in identifying
                // exact matches.
                //
                // For example, the needle "note" should match "beamed sixteenth
                // notes" with no gaps, but without this correction there would
                // be a gap of 4 ("th n").
                let gap = haystackIndex - haystackIndexLastMatch - 1;
                for (let i = haystackIndex - 1; i > haystackIndexLastMatch; i--) {
                    if (haystack[i] === needle[needleIndex - 1]) {
                        gap = haystackIndex - i - 1;
                        break;
                    }
                }
                if (gap > 0) {
                    matchGaps.push(gap);
                }
            }
            needleIndex++;
            haystackIndexLastMatch = haystackIndex;
        }
        haystackIndex++;
    }

    if (needleIndex !== needle.length) {
        // No match: not all needle characters were found in sequence
        return 0;
    }

    return 1 / matchGaps.map(gap => Math.log(gap + 1)).reduce((a, b) => a + b, 0);
}

function search(searchTerm) {
    searchTerm = searchTerm?.toLowerCase() ?? "";

    return searchTerm == "" ? symbols :
        symbols.map((symbol) => {
            /* Get hex representation of codepoint, e.g. 00A0 for &nbsp; or 20AC for € */
            const codePoint = symbol.glyph.codePointAt(0).toString(16).padStart(4, 0);

            const searchTerms = [
                symbol.name,
                symbol.glyph,
                ...symbol.searchTerms ?? [],
                `U+${codePoint}`,
                `0x${codePoint}`
            ];
            const score = fuzzyMatch(searchTerms.join(" ").toLowerCase(), searchTerm);
            return { symbol, score };
        }).filter(({ score }) => score !== 0)
        .sort((a, b) => b.score - a.score)
        .map(({ symbol }) => symbol);
}

function renderSymbols(searchTerm) {
    const parent = document.querySelector(".symbols");
    parent.innerHTML = "";

    const results = search(searchTerm);
    if (results.length === 0) {
        const span = document.createElement("span");

        const p = document.createElement("p");
        p.textContent = "Can't find what you're looking for?";
        span.appendChild(p);

        const a = document.createElement("a");
        a.href = "https://github.com/samwho/symbol.wtf"
        a.target = "_blank";
        a.textContent = "Open a PR!";
        span.appendChild(a);

        parent.appendChild(span);
        return;
    }

    for (const symbol of results) {
        const elem = document.createElement("div");
        const glyphElem = document.createElement("div");
        const nameElem = document.createElement("div");

        elem.classList = "symbol";
        elem.tabIndex = 0;
        elem.title = symbol.name;

        glyphElem.classList = "glyph";
        glyphElem.textContent = symbol.display || symbol.glyph;

        nameElem.classList = "name";
        nameElem.textContent = symbol.name;

        elem.appendChild(glyphElem);
        elem.appendChild(nameElem);

        const handleAction = () => {
            if (elem.classList.contains("clicked")) {
                return;
            }

            navigator.clipboard.writeText(symbol.glyph);

            console.log(`Copied ${symbol.name} (${symbol.glyph})!`);
            nameElem.textContent = "Copied!";
            elem.classList.add("clicked");

            setTimeout(() => {
                nameElem.textContent = symbol.name;
                elem.classList.remove("clicked");
            }, 1000);
        };
        elem.addEventListener("click", handleAction);
        elem.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleAction();
            }
        });
        parent.appendChild(elem);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const search = window.location.hash ? window.location.hash.substring(1) : "";
    renderSymbols(search);

    const searchInput = document.querySelector(".search input");
    searchInput.value = search;
    searchInput.addEventListener("input", (e) => {
        renderSymbols(e.target.value);
    });
    searchInput.addEventListener("blur", (e) => {
        window.location.hash = e.target.value;
    });

    window.addEventListener("hashchange", () => {
        const search = window.location.hash ? window.location.hash.substring(1) : "";
        searchInput.value = search;
        renderSymbols(search);
    });
});
