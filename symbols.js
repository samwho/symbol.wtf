const symbols = [
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
    {
        "glyph": "“",
        "name": "Left Double Quotation Mark",
        "searchTerms": ["quotation", "quote", "double", '"']
    },
    {
        "glyph": "”",
        "name": "Right Double Quotation Mark",
        "searchTerms": ["quotation", "quote", "double", '"']
    },
    {
        "glyph": "—",
        "name": "Em-dash",
        "searchTerms": ["em", "dash"],
    },
    {
        "glyph": "£",
        "name": "Pound",
        "searchTerms": ["pound"]
    },
    {
        "glyph": "…",
        "name": "Ellipsis",
        "searchTerms": ["ellipsis"]
    },
    {
        "glyph": "½",
        "name": "Half",
        "searchTerms": ["half", "1/2"]
    },
    {
        "glyph": "¼",
        "name": "Quarter",
        "searchTerms": ["quarter", "1/4"]
    },
    {
        "glyph": "∞",
        "name": "Infinity",
        "searchTerms": ["infinity"]
    },
    {
        "glyph": "é",
        "name": "E with Acute",
        "searchTerms": ["acute", "e"]
    },
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
        "glyph": "‘",
        "name": "Left Single Quotation Mark",
        "searchTerms": ["left", "single", "quotation", "mark"],
    },
    {
        "glyph": "’",
        "name": "Right Single Quotation Mark",
        "searchTerms": ["right", "single", "quotation", "mark"],
    },
    {
        "glyph": "€",
        "name": "Euro",
        "searchTerms": ["euro"]
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
    {
        "glyph": "¤",
        "name": "Currency",
        "searchTerms": ["currency"]
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
        "glyph": "✔",
        "name": "Check",
        "searchTerms": ["check", "tick"]
    },
    {
        "glyph": "°",
        "name": "Degree",
        "searchTerms": ["degree"]
    },
    {
        "glyph": "¹",
        "name": "Superscript One",
        "searchTerms": ["superscript", "one"]
    },
    {
        "glyph": "²",
        "name": "Squared",
        "searchTerms": ["squared", "power"]
    },
    {
        "glyph": "³",
        "name": "Cubed",
        "searchTerms": ["cubed"]
    },
    {
        "glyph": "‽",
        "name": "Interrobang",
        "searchTerms": ["interrobang", "?!"]
    },
    {
        "glyph": "×",
        "name": "Times",
        "searchTerms": ["times", "x"]
    },
    {
        "glyph": "",
        "name": "Apple",
        "searchTerms": ["apple"]
    },
    {
        "glyph": "π",
        "name": "Pi",
        "searchTerms": ["pie"],
    },
    {
        "glyph": "•",
        "name": "Vertically Centered Dot",
        "searchTerms": ["vertical", "dot", "centered"]
    },
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
    }
]

function renderSymbols(searchTerm = "") {
    const parent = document.querySelector(".symbols");
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

function setSearchListener() {
    const searchInput = document.querySelector(".search input");
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value;
        renderSymbols(searchTerm);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderSymbols();
    setSearchListener();
});
