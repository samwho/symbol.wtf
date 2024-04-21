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
        searchTerms: ["power"]
    },
    {
        glyph: "²",
        name: "Superscript Two",
        searchTerms: ["squared", "power"]
    },
    {
        glyph: "³",
        name: "Superscript Three",
        searchTerms: ["cubed", "power"]
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

    /* accented characters */
    {
        glyph: "á",
        name: "A with Acute"
    },
    {
        glyph: "à",
        name: "A with Grave"
    },
    {
        glyph: "ç",
        name: "C with Cedilla"
    },
    {
        glyph: "é",
        name: "E with Acute"
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
        name: "Option"
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

function search(searchTerm) {
    searchTerm = searchTerm?.toLowerCase() ?? "";

    return symbols.filter((s) => {
        /* Get hex representation of codepoint, e.g. 00A0 for &nbsp; or 20AC for € */
        const codePoint = s.glyph.codePointAt(0).toString(16).padStart(4, 0);

        const searchTerms = [
            s.name,
            s.glyph,
            ...s.searchTerms ?? [],
            `U+${codePoint}`,
            `0x${codePoint}`
        ];
        return searchTerm === "" || searchTerms.join(" ").toLowerCase().includes(searchTerm);
    });
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
        const searchTerm = e.target.value;
        renderSymbols(searchTerm);
        window.location.hash = searchTerm;
    });
});
