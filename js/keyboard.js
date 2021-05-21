const colors = {
    a: { hex: "#ffc0cb", name: "pink" }, 
    b: { hex: "#ffb400", name: "mac & cheese" }, 
    c: { hex: "#b2e21b", name: "inchworm" }, 
    d: { hex: "#51670c", name: "dark sea green" }, 
    e: { hex: "#85b4f5", name: "periwinkle" }, 
    f: { hex: "#09e1e2", name: "happy ever after" }, 
    g: { hex: "#6a1b93", name: "purple mountains" }, 
    h: { hex: "#820224", name: "brick red" }, 
    i: { hex: "#905695", name: "red violet" }, 
    j: { hex: "#cc0000", name: "red" }, 
    k: { hex: "#006b81", name: "navy niblet" }, 
    l: { hex: "#f97160", name: "melon" }, 
    m: { hex: "#849c64", name: "asparagus" }, 
    n: { hex: "#07b0b1", name: "robin's egg blue" }, 
    o: { hex: "#e0ee00", name: "green yellow" }, 
    p: { hex: "#909090", name: "gray" }, 
    q: { hex: "#af9dd3", name: "violet" }, 
    r: { hex: "#67552d", name: "bear hug" }, 
    s: { hex: "#9a9a00", name: "olive green" }, 
    t: { hex: "#ccae00", name: "gold" }, 
    u: { hex: "#ff6f00", name: "orange" }, 
    v: { hex: "#dddddd", name: "silver" }, 
    w: { hex: "#0073e2", name: "blue" }, 
    x: { hex: "#2cd996", name: "sea green" }, 
    y: { hex: "#99cfe0", name: "cadet blue" }, 
    z: { hex: "#fa7292", name: "salmon" }
}

const colorBox = document.getElementById("colorBox");
const textBox = document.getElementById("textBox");

// Navigation functions
const showColorBox = () => {
    colorBox.style.display = "block";
    textBox.style.display = "none";
    document.getElementsByTagName("body")[0].focus();
}

const showTextBox = () => {
    // $('#colorBox').trigger('getheight');
    colorBox.style.display = "none";
    textBox.style.display = "block";
    document.getElementsByTagName("body")[0].focus();
}

const clearBoxes = () => {
    if (confirm("Do you really want to delete everything?")) {
        colorBox.innerHTML="";
        textBox.innerHTML="";
        // $('#colorBox').trigger('getheight');
    };
};

// We hide the caret because it does some funky weird business
const hideCaret = () => {
    if (colorBox.style.caretColor != "transparent") {
        colorBox.style.caretColor = "transparent";
    }
    if (textBox.style.caretColor != "transparent") {
        textBox.style.caretColor = "transparent";
    }
}

const typePunctuation = (punctuation) => {
    colorBox.appendChild(document.createTextNode(punctuation));
    textBox.appendChild(document.createTextNode(punctuation));
}

const rainbowFunction = event => {
    // KeyboardEvent.keyCode, although deprecated, is still supported by all browsers as of 5/21/21
    // (meanwhile, the currently recommended KeyboardEvent.key is not supported by IE)
    let keyCode = event.keyCode;

    // For accessibility we allow default key event for tab key
    if (keyCode !== 9) {
        event.preventDefault();
    }
    
    // Only after the first keystroke has been made do we hide the caret
    hideCaret();

    // Let's only create a canvas element when needed 
    // (i.e. for letters and spaces, but not for punctuation)
    if (keyCode > 64 && keyCode < 91 || keyCode == 32) {
        let c = document.createElement("canvas");
        c.setAttribute("width", "25px");
        c.setAttribute("height", "25px");
        let ctx = c.getContext("2d");
        ctx.arc(12.5, 12.5, 12.5, 0, 2*Math.PI);

        typeLetter = (letter) => {
            ctx.fillStyle = colors[letter].hex;
            ctx.fill();
            colorBox.appendChild(c);
            textBox.appendChild(document.createTextNode(letter));
        }

        switch (keyCode) {
            // Space
            case 32:
                textBox.appendChild(document.createTextNode("\u00A0"));
                colorBox.appendChild(c);
                break;

            // Letters
            case 65:
                typeLetter("a");
                break;
            case 66:
                typeLetter("b");
                break;
            case 67:
                typeLetter("c");
                break;
            case 68:
                typeLetter("d");
                break;
            case 69:
                typeLetter("e");
                break;
            case 70:
                typeLetter("f");
                break;
            case 71:
                typeLetter("g");
                break;
            case 72:
                typeLetter("h");
                break;
            case 73:
                typeLetter("i");
                break;
            case 74:
                typeLetter("j");
                break;
            case 75:
                typeLetter("k");
                break;
            case 76:
                typeLetter("l");
                break;
            case 77:
                typeLetter("m");
                break;
            case 78:
                typeLetter("n");
                break;
            case 79:
                typeLetter("o");
                break;
            case 80:
                typeLetter("p");
                break;
            case 81:
                typeLetter("q");
                break;
            case 82:
                typeLetter("r");
                break;
            case 83:
                typeLetter("s");
                break;
            case 84:
                typeLetter("t");
                break;
            case 85:
                typeLetter("u");
                break;
            case 86:
                typeLetter("v");
                break;
            case 87:
                typeLetter("w");
                break;
            case 88:
                typeLetter("x");
                break;
            case 89:
                typeLetter("y");
                break;
            case 90:
                typeLetter("z");
                break;
        }
    } else {
        switch (keyCode) {
            case 13: // enter
                colorBox.appendChild(document.createElement('div'));
                colorBox.appendChild(document.createElement('span'));
                textBox.appendChild(document.createElement('div'));
                textBox.appendChild(document.createElement('span'));
                break;
            case 8: // backspace
                colorBox.removeChild(colorBox.lastChild);
                textBox.removeChild(textBox.lastChild);
                break;
            
            // Punctuation
            case 190:
                typePunctuation(".");
                break;
            case 188:
                typePunctuation(",");
                break;
            case 191:
                typePunctuation("?");
                break;
            case 49:
                typePunctuation("!");
                break;
            case 222:
                typePunctuation("'");
                break;
            case 189:
                typePunctuation("-");
                break;
        }
    }     
};

// I may re-implement this, so it's here for now

//Make text textBox same height as colorBox
// $('#colorBox').bind('getheight', function() {
//     console.log("getheight");
//     let colorBoxHeight = $('#colorBox').height();
//     console.log(colorBoxHeight);
//     $("#textBox").height(colorBoxHeight);
// });

// What is going on here?
// $(window).resize(triggerBoom);

// function triggerBoom(){
//     console.log("Triggerboom");
//     $('#colorBox').trigger('getheight');
// };