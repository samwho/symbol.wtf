const symbols = [
    /* samwho */
    {
        "glyph": "©",
        "name": "Copyright",
        "searchTerms": ["(C)"]
    },
    {
        "glyph": "®",
        "name": "Registered Trademark",
        "searchTerms": ["(R)"]
    },
    {
        "glyph": "™",
        "name": "Trademark",
        "searchTerms": ["TM"]
    },

    /* punctuation */
    {
        "glyph": "“",
        "name": "Left Double Quotation Mark",
        "searchTerms": ["open", "quote", '"']
    },
    {
        "glyph": "”",
        "name": "Right Double Quotation Mark",
        "searchTerms": ["close", "quote", '"']
    },
    {
        "glyph": "‘",
        "name": "Left Single Quotation Mark",
        "searchTerms": ["open", "quote", "'"],
    },
    {
        "glyph": "’",
        "name": "Right Single Quotation Mark",
        "searchTerms": ["close", "quote", "'"],
    },
    {
        "glyph": "—",
        "name": "Em-dash",
        "searchTerms": ["em", "dash"],
    },
    {
        "glyph": "¡",
        "name": "Inverted Exclamation Mark",
        "searchTerms": ["!"],
    },
    {
        "glyph": "¿",
        "name": "Inverted Question Mark",
        "searchTerms": ["?"],
    },
    {
        "glyph": "‽",
        "name": "Interrobang",
        "searchTerms": ["?!"]
    },
    {
        "glyph": "…",
        "name": "Ellipsis",
        "searchTerms": ["..."]
    },
    {
        "glyph": "•",
        "name": "Vertically Centered Dot",
        "searchTerms": ["bullet", "."]
    },

    /* currency */
    {
        "glyph": "¤",
        "name": "Currency",
        "searchTerms": []
    },
    {
        "glyph": "£",
        "name": "Pound",
        "searchTerms": []
    },
    {
        "glyph": "€",
        "name": "Euro",
        "searchTerms": []
    },
    {
        "glyph": "$",
        "name": "Dollar Sign",
        "searchTerms": []
    },
    {
        "glyph": "¥",
        "name": "Yen",
        "searchTerms": []
    },
    {
        "glyph": "₩",
        "name": "Won",
        "searchTerms": []
    },
    {
        "glyph": "¢",
        "name": "Cent",
        "searchTerms": []
    },

    /* math */
    {
        "glyph": "±",
        "name": "Plus-minus",
        "searchTerms": ["plus", "minus", "+", "-"],
    },
    {
        "glyph": "×",
        "name": "Times",
        "searchTerms": ["multiply", "*", "x"]
    },
    {
        "glyph": "÷",
        "name": "Divide",
        "searchTerms": ["/"],
    },
    {
        "glyph": "√",
        "name": "Square Root",
        "searchTerms": ["sqrt"],
    },
    {
        "glyph": "¹",
        "name": "Superscript One",
        "searchTerms": ["power"]
    },
    {
        "glyph": "²",
        "name": "Superscript Two",
        "searchTerms": ["squared", "power"]
    },
    {
        "glyph": "³",
        "name": "Superscript Three",
        "searchTerms": ["cubed", "power"]
    },
    {
        "glyph": "¼",
        "name": "One Quarter",
        "searchTerms": ["fraction", "1/4"]
    },
    {
        "glyph": "½",
        "name": "One Half",
        "searchTerms": ["fraction", "1/2"]
    },
    {
        "glyph": "¾",
        "name": "Three Quarters",
        "searchTerms": ["fraction", "3/4"]
    },
    {
        "glyph": "∞",
        "name": "Infinity",
        "searchTerms": []
    },
    {
        "glyph": "π",
        "name": "Pi",
        "searchTerms": ["pie"],
    },
    {
        "glyph": "∅",
        "name": "Empty Set",
        "searchTerms": [],
    },
    {
        "glyph": "∆",
        "name": "Delta",
        "searchTerms": [],
    },
    {
        "glyph": "µ",
        "name": "Micro",
        "searchTerms": ["mu"],
    },
    {
        "glyph": "°",
        "name": "Degree",
        "searchTerms": []
    },

    /* accented characters */
    {
        "glyph": "á",
        "name": "A with Acute",
        "searchTerms": []
    },
    {
        "glyph": "à",
        "name": "A with Grave",
        "searchTerms": []
    },
    {
        "glyph": "ç",
        "name": "C with Cedilla",
        "searchTerms": []
    },
    {
        "glyph": "é",
        "name": "E with Acute",
        "searchTerms": []
    },
    {
        "glyph": "ñ",
        "name": "Latin Small Letter n with Tilde",
        "searchTerms": ["jalapeno"],
    },
    {
        "glyph": "Ñ",
        "name": "Latin Capital Letter N with Tilde",
        "searchTerms": ["jalapeno"],
    },

    /* combined characters */
    {
        "glyph": "æ",
        "name": "AE",
        "searchTerms": []
    },
    {
        "glyph": "Æ",
        "name": "AE",
        "searchTerms": []
    },
    {
        "glyph": "œ",
        "name": "OE",
        "searchTerms": []
    },
    {
        "glyph": "Œ",
        "name": "OE",
        "searchTerms": []
    },

    /* miscellaneous */
    {
        "glyph": "✔",
        "name": "Check",
        "searchTerms": ["tick"]
    },
    {
        "glyph": "←",
        "name": "Left Arrow",
        "searchTerms": [],
    },
    {
        "glyph": "→",
        "name": "Right Arrow",
        "searchTerms": [],
    },
    {
        "glyph": "~",
        "name": "Tilde",
        "searchTerms": [],
    },

    /* invisible characters */
    {
        "glyph": "\u00A0",
        "display": "\u25A1",
        "name": "No-break Space",
        "searchTerms": ["&nbsp;", "non-breaking", "break"]
    },
    {
        "glyph": "\u200E",
        "display": "\u25A1",
        "name": "Left-to-Right",
        "searchTerms": ["&lrm;", "ltr"]
    },
    {
        "glyph": "\u200F",
        "display": "\u25A1",
        "name": "Right-to-Left",
        "searchTerms": ["&rlm;", "rtl"]
    },

    /* Private Use Area (not official Unicode) */
    {
        "glyph": "\uF8FF",
        "name": "Apple Logo",
        "searchTerms": []
    }
];

function renderSymbols(searchTerm) {
    const parent = document.querySelector(".symbols");
    parent.innerHTML = "";

    searchTerm = searchTerm?.toLowerCase() ?? "";

    const symbolsFiltered = symbols.filter((s) => {
        /* Get hex representation of codepoint, e.g. 00A0 for &nbsp; or 20AC for € */
        const codePoint = s.glyph.codePointAt(0).toString(16).padStart(4, 0);

        const searchTerms = [
            s.name,
            ...s.searchTerms,
            `U+${codePoint}`,
            `0x${codePoint}`
        ];
        return searchTerm === "" || searchTerms.join(" ").toLowerCase().includes(searchTerm);
    });

    for (const symbolInfo of symbolsFiltered) {
        const elem = document.createElement("div");
        elem.classList = "symbol";
        elem.textContent = symbolInfo.display || symbolInfo.glyph;
        elem.title = symbolInfo.name;
        elem.addEventListener("click", () => {
            if (elem.classList.contains("symbol-clicked")) return;

            navigator.clipboard.writeText(symbolInfo.glyph);

            elem.textContent = "Copied!";
            elem.classList.remove("symbol");
            elem.classList.add("symbol-clicked");

            setTimeout(() => {
                elem.textContent = symbolInfo.display || symbolInfo.glyph;
                elem.title = symbolInfo.name;
                elem.classList.remove("symbol-clicked");
                elem.classList.add("symbol");
            }, 1000);
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
