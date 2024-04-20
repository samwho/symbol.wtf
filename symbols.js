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
        "glyph": "–",
        "name": "En-dash",
        "searchTerms": ["en", "dash"],
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
        "glyph": "±",
        "name": "Plus-minus",
        "searchTerms": ["plus", "minus"],
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
        "glyph": "₹",
        "name": "Rupee",
        "searchTerms": ["rupee"]
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
        "searchTerms": ["times", "x", "multiply", "multiplication", "product"]
    },
    {
        "glyph": "÷",
        "name": "Division",
        "searchTerms": ["division", "divided"]
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
    {
        "glyph": "¡",
        "name": "Reverse Exclamation Mark",
        "searchTerms": ["reverse", "exclamation", "mark"],
    },
    {
        "glyph": "$",
        "name": "Dollar Sign",
        "searchTerms": ["dollar"]
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
        "glyph": "↑",
        "name": "Upwards Arrow",
        "searchTerms": ["up", "upwards", "arrow"],
    },
    {
        "glyph": "↓",
        "name": "Downwards Arrow",
        "searchTerms": ["down", "downwards", "arrow"],
    },
    {
        "glyph": "↔",
        "name": "Left Right Arrow",
        "searchTerms": ["left", "right", "arrow"],
    },
    {
        "glyph": "↕",
        "name": "Up Down Arrow",
        "searchTerms": ["up", "down", "arrow"],
    },
    {
        "glyph": "~",
        "name": "Tilde",
        "searchTerms": ["tilde"],
    },
    {
        "glyph": "∅",
        "name": "Empty set",
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
        "searchTerms": ["micro"],
    },
]

function search(searchTerm) {
    if (!searchTerm) searchTerm = "";
    searchTerm = searchTerm.toLowerCase();
    results = [];
    for (const symbol of symbols) {
        terms = symbol.searchTerms.join(" ").toLowerCase();
        if (!terms.includes(searchTerm)) {
            continue;
        }
        results.push(symbol);
    }
    return results;
}

function renderSymbols(searchTerm) {
    const parent = document.querySelector(".symbols");
    parent.innerHTML = "";
    const results = search(searchTerm);
    if (results.length === 0) {
        const p = document.createElement("p");
        p.style.margin = "auto";
        p.style.width = "50%";
        p.style.textAlign = "center";
        p.innerHTML = `
            Can't find what you're looking for? <a href="https://github.com/samwho/symbol.wtf" target="_blank">Open a PR!</a>
        `
        parent.appendChild(p);
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
            if (elem.classList.contains("symbol-clicked")) return;

            navigator.clipboard.writeText(symbol.glyph);

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
