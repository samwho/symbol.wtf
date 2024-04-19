const symbols = [
    /* samwho */
    {
        "glyph": "©",
        "name": "Copyright",
        "searchTerms": ["copyright", "C"]
    },
    {
        "glyph": "®",
        "name": "Registered Trademark",
        "searchTerms": ["registered", "trademark", "R"]
    },
    {
        "glyph": "™",
        "name": "Trademark",
        "searchTerms": ["trademark", "TM"]
    },

    /* punctuation */
    {
        "glyph": "“",
        "name": "Left Double Quotation Mark",
        "searchTerms": ["left", "open", "quotation", "quote", "double", "mark", '"']
    },
    {
        "glyph": "”",
        "name": "Right Double Quotation Mark",
        "searchTerms": ["right", "close", "quotation", "quote", "double", "mark", '"']
    },
    {
        "glyph": "‘",
        "name": "Left Single Quotation Mark",
        "searchTerms": ["left", "open", "quotation", "quote", "single", "mark", "'"],
    },
    {
        "glyph": "’",
        "name": "Right Single Quotation Mark",
        "searchTerms": ["right", "close", "quotation", "quote", "single", "mark", "'"],
    },
    {
        "glyph": "—",
        "name": "Em-dash",
        "searchTerms": ["em", "dash"],
    },
    {
        "glyph": "¡",
        "name": "Inverted Exclamation Mark",
        "searchTerms": ["inverted", "exclamation", "mark", "!"],
    },
    {
        "glyph": "¿",
        "name": "Inverted Question Mark",
        "searchTerms": ["inverted", "question", "mark", "?"],
    },
    {
        "glyph": "‽",
        "name": "Interrobang",
        "searchTerms": ["interrobang", "?!"]
    },
    {
        "glyph": "…",
        "name": "Ellipsis",
        "searchTerms": ["ellipsis", "..."]
    },
    {
        "glyph": "•",
        "name": "Vertically Centered Dot",
        "searchTerms": ["vertical", "dot", "centered", "."]
    },

    /* currency */
    {
        "glyph": "¤",
        "name": "Currency",
        "searchTerms": ["currency"]
    },
    {
        "glyph": "£",
        "name": "Pound",
        "searchTerms": ["pound"]
    },
    {
        "glyph": "€",
        "name": "Euro",
        "searchTerms": ["euro"]
    },
    {
        "glyph": "$",
        "name": "Dollar Sign",
        "searchTerms": ["dollar"]
    },
    {
        "glyph": "¥",
        "name": "Yen",
        "searchTerms": ["yen"]
    },
    {
        "glyph": "₩",
        "name": "Won",
        "searchTerms": ["won"]
    },
    {
        "glyph": "¢",
        "name": "Cent",
        "searchTerms": ["cent"]
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
        "searchTerms": ["times", "multiply", "*", "x"]
    },
    {
        "glyph": "÷",
        "name": "Divide",
        "searchTerms": ["divide", "/"],
    },
    {
        "glyph": "√",
        "name": "Square Root",
        "searchTerms": ["square", "root", "sqrt"],
    },
    {
        "glyph": "¹",
        "name": "Superscript One",
        "searchTerms": ["power", "superscript", "one"]
    },
    {
        "glyph": "²",
        "name": "Superscript Two",
        "searchTerms": ["squared", "power", "superscript", "two"]
    },
    {
        "glyph": "³",
        "name": "Superscript Three",
        "searchTerms": ["cubed", "power", "superscript", "three"]
    },
    {
        "glyph": "¼",
        "name": "One Quarter",
        "searchTerms": ["fraction", "one", "quarter", "1/4"]
    },
    {
        "glyph": "½",
        "name": "One Half",
        "searchTerms": ["fraction", "half", "1/2"]
    },
    {
        "glyph": "¾",
        "name": "Three Quarters",
        "searchTerms": ["fraction", "three", "quarter", "3/4"]
    },
    {
        "glyph": "∞",
        "name": "Infinity",
        "searchTerms": ["infinity"]
    },
    {
        "glyph": "π",
        "name": "Pi",
        "searchTerms": ["pi", "pie"],
    },
    {
        "glyph": "∅",
        "name": "Empty Set",
        "searchTerms": ["empty", "set"],
    },
    {
        "glyph": "∆",
        "name": "Delta",
        "searchTerms": ["delta"],
    },
    {
        "glyph": "µ",
        "name": "Micro",
        "searchTerms": ["micro", "mu"],
    },
    {
        "glyph": "°",
        "name": "Degree",
        "searchTerms": ["degree"]
    },

    /* accented characters */
    {
        "glyph": "á",
        "name": "A with Acute",
        "searchTerms": ["acute", "a"]
    },
    {
        "glyph": "à",
        "name": "A with Grave",
        "searchTerms": ["grave", "a"]
    },
    {
        "glyph": "ç",
        "name": "C with Cedilla",
        "searchTerms": ["cedilla", "c"]
    },
    {
        "glyph": "é",
        "name": "E with Acute",
        "searchTerms": ["acute", "e"]
    },
    {
        "glyph": "ñ",
        "name": "Latin Small Letter n with Tilde",
        "searchTerms": ["n", "latin", "tilde", "jalapeno"],
    },
    {
        "glyph": "Ñ",
        "name": "Latin Capital Letter N with Tilde",
        "searchTerms": ["n", "latin", "tilde", "jalapeno"],
    },

    /* combined characters */
    {
        "glyph": "æ",
        "name": "AE",
        "searchTerms": ["ae"]
    },
    {
        "glyph": "Æ",
        "name": "AE",
        "searchTerms": ["ae"]
    },
    {
        "glyph": "œ",
        "name": "OE",
        "searchTerms": ["oe"]
    },
    {
        "glyph": "Œ",
        "name": "OE",
        "searchTerms": ["oe"]
    },

    /* miscellaneous */
    {
        "glyph": "✔",
        "name": "Check",
        "searchTerms": ["check", "tick"]
    },
    {
        "glyph": "←",
        "name": "Left Arrow",
        "searchTerms": ["left", "arrow"],
    },
    {
        "glyph": "→",
        "name": "Right Arrow",
        "searchTerms": ["right", "arrow"],
    },
    {
        "glyph": "~",
        "name": "Tilde",
        "searchTerms": ["tilde"],
    },

    /* invisible characters */
    {
        "glyph": "\u00A0",
        "display": "\u25A1",
        "name": "No-break Space",
        "searchTerms": ["U+00A0", "&nbsp;", "non-breaking", "no-break", "break", "space"]
    },
    {
        "glyph": "\u200E",
        "display": "\u25A1",
        "name": "Left-to-Right",
        "searchTerms": ["U+200E", "&lrm;", "ltr", "left-to-right"]
    },
    {
        "glyph": "\u200F",
        "display": "\u25A1",
        "name": "Right-to-Left",
        "searchTerms": ["U+200F", "&rlm;", "rtl", "right-to-left"]
    },

    /* Private Use Area (not official Unicode) */
    {
        "glyph": "\uF8FF",
        "name": "Apple",
        "searchTerms": ["apple"]
    }
]

function renderSymbols(searchTerm) {
    const parent = document.querySelector(".symbols");
    if (!searchTerm) searchTerm = "";
    searchTerm = searchTerm.toLowerCase();
    parent.innerHTML = "";
    for (const symbolInfo of symbols) {
        symbolSearchTerms = symbolInfo.searchTerms.join(" ");
        if (searchTerm !== "" && !symbolSearchTerms.toLowerCase().includes(searchTerm)) {
            continue;
        }
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
