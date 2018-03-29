//Set global variables referring to 2 main content divs
var colorBox = document.getElementById("colorBox");
var textBox = document.getElementById("textBox");

//Make text textBox same height as colorBox
$('#colorBox').bind('getheight', function() {
    var jdiv = $('#colorBox').height();
    $("#textBox").height(jdiv);
});

$(window).resize(triggerBoom);

function triggerBoom(){
    $('#colorBox').trigger('getheight');
};

//Show colorBox
function showColor() {
    colorBox.style.display = "block";
    textBox.style.display = "none";
    document.getElementsByTagName("body").focus();
}
    
//Show textBox
function showText() {
    colorBox.style.display = "none";
    textBox.style.display = "block";
    document.getElementsByTagName("body").focus();
}

//Clear everything, rainbow and text
function clearFunction() {
    if (confirm("Do you really want to delete everything?")) {
        colorBox.innerHTML="";
        textBox.innerHTML="";
        $('#colorBox').trigger('getheight');
    };
};

function printFunction() {
    window.print();
}

//The main rainbow function!
function urFunction() {
    event.preventDefault();
    var x = event.keyCode;
    var c = document.createElement("canvas");
        c.setAttribute("width", "25px");
        c.setAttribute("height", "25px");
        var ctx = c.getContext("2d");
        ctx.arc(12.5,12.5,12.5,0,2*Math.PI);

///*SETTING THE KEYCODES*///
    if (x == 13) { // ENTER
        colorBox.appendChild(document.createElement('div'));
        colorBox.appendChild(document.createElement('span'));
        textBox.appendChild(document.createElement('div'));
        textBox.appendChild(document.createElement('span'));
    }  
    else if (x == 8) { // BACKSPACE
        colorBox.removeChild(colorBox.lastChild);
        textBox.removeChild(textBox.lastChild);
    }  
    else if (x == 32) { // SPACE
        textBox.appendChild(document.createTextNode("\u00A0"));
        colorBox.appendChild(c);
    }
    else if (x == 190) { // PERIOD
        colorBox.appendChild(document.createTextNode("."));
        textBox.appendChild(document.createTextNode("."));
    }
    else if (x == 188) { // COMMA
        colorBox.appendChild(document.createTextNode(","));
        textBox.appendChild(document.createTextNode(","));
    }
    else if (x == 191) { // QUESTION MARK
        colorBox.appendChild(document.createTextNode("?"));
        textBox.appendChild(document.createTextNode("?"));
    }
    else if (x == 49) { // EXCLAMATION MARK
        colorBox.appendChild(document.createTextNode("!"));
        textBox.appendChild(document.createTextNode("!"));
    }
    else if (x == 222) { // APOSTROPHE
        colorBox.appendChild(document.createTextNode("'"));
        textBox.appendChild(document.createTextNode("'"));
    }
    else if (x == 189) { // HYPHEN
        colorBox.appendChild(document.createTextNode("-"));
        textBox.appendChild(document.createTextNode("-"));
    }
    else if (x == 65) { // LETTER A
        textBox.appendChild(document.createTextNode("a"));
        ctx.fillStyle = "pink"; //pinky pink
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 66) { // LETTER B
        textBox.appendChild(document.createTextNode("b"));
        ctx.fillStyle = "#ffb400"; //mac & cheese
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 67) { // LETTER C
        textBox.appendChild(document.createTextNode("c"));
        ctx.fillStyle = "#b2e21b"; //inchworm
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 68) { // LETTER D
        textBox.appendChild(document.createTextNode("d"));
        ctx.fillStyle = "#51670c"; //dark sea green
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 69) { // LETTER E
        textBox.appendChild(document.createTextNode("e"));
        ctx.fillStyle = "#85b4f5";  //periwinkle
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 70) { // LETTER F
        textBox.appendChild(document.createTextNode("f"));
        ctx.fillStyle = "#09e1e2"; //happy ever after
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 71) { // LETTER G
        textBox.appendChild(document.createTextNode("g"));
        ctx.fillStyle = "#6a1b93"; //purple mountains
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 72) { // LETTER H
        textBox.appendChild(document.createTextNode("h"));
        ctx.fillStyle = "#820224";  //brick red
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 73) { // LETTER I
        textBox.appendChild(document.createTextNode("i"));
        ctx.fillStyle = "#905695"; //red violet
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 74) { // LETTER J
        textBox.appendChild(document.createTextNode("j"));
        ctx.fillStyle = "#cc0000"; //red
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 75) { // LETTER K
        textBox.appendChild(document.createTextNode("k"));
        ctx.fillStyle = "#006b81"; //navy niblet
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 76) { // LETTER L
        textBox.appendChild(document.createTextNode("l"));
        ctx.fillStyle = "#f97160";  //melon
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 77) { // LETTER M
        textBox.appendChild(document.createTextNode("m"));
        ctx.fillStyle = "#849c64"; //asparagus
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 78) { // LETTER N
        textBox.appendChild(document.createTextNode("n"));
        ctx.fillStyle = "#07b0b1"; //robin's egg blue
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 79) { // LETTER O
        textBox.appendChild(document.createTextNode("o"));
        ctx.fillStyle = "#e0ee00";  //green yellow
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 80) { // LETTER P
        textBox.appendChild(document.createTextNode("p"));
        ctx.fillStyle = "#909090"; //gray
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 81) { // LETTER Q
        textBox.appendChild(document.createTextNode("q"));
        ctx.fillStyle = "#af9dd3"; //violet
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 82) { // LETTER R
        textBox.appendChild(document.createTextNode("r"));
        ctx.fillStyle = "#67552d"; //bear hug
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 83) { // LETTER S
        textBox.appendChild(document.createTextNode("s"));
        ctx.fillStyle = "#9a9a00"; //olive green
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 84) { // LETTER T
        textBox.appendChild(document.createTextNode("t"));
        ctx.fillStyle = "#ccae00";  //gold
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 85) { // LETTER U
        textBox.appendChild(document.createTextNode("u"));
        ctx.fillStyle = "#ff6f00";  //orange
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 86) { // LETTER V
        textBox.appendChild(document.createTextNode("v"));
        ctx.fillStyle = "#dddddd"; //silver
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 87) { // LETTER W
        textBox.appendChild(document.createTextNode("w"));
        ctx.fillStyle = "#0073e2"; //blue
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 88) { // LETTER X
        textBox.appendChild(document.createTextNode("x"));
        ctx.fillStyle = "#2cd996"; //sea green
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 89) { // LETTER Y
        textBox.appendChild(document.createTextNode("y"));
        ctx.fillStyle = "#99cfe0"; //cadet blue
        ctx.fill();
        colorBox.appendChild(c);
    }
    else if (x == 90) { // LETTER Z
        textBox.appendChild(document.createTextNode("z"));
        ctx.fillStyle = "#fa7292"; //salmon
        ctx.fill();
        colorBox.appendChild(c);
    }

    //Match textBox height to colorBox after every keystroke
    $('#colorBox').trigger('getheight');

}; // end urFunction  