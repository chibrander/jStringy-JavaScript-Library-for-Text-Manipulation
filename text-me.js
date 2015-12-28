function left(txt, numchar) {
    var c = txt.substring(0, numchar);
    return c;
}

function right(txt, numchar) {
    var c = txt.substring(txt.length - numchar, txt.length);
    return c;
}

function midd(txt, startchar, endchar) {
    var c = txt.substring(startchar - 1, endchar);
    return c;
}

function mid(txt, startchar, numchar) {
    var c = txt.substring(startchar - 1, startchar - 1 + numchar);
    return c;
}

function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}

function wordcount(txt) {
    var newtxt = txt.split(/(?:,| |;|\?|\.)+/);
    return newtxt.length;
}


function containsword(wordtofind, wheretofind) {
    var nwheretofind = (" " + wheretofind + " ").toLowerCase();
    var nwordtofind = (" " + wordtofind + " ").toLowerCase();
        nwheretofind = nwheretofind.replace(/,|\.|\:|\;|\?|\!|\(|\)/g," ");
    if (nwheretofind.indexOf(nwordtofind) >= 0) {
        return true;
    } else {
        return false;
    }
}


function repeat(txt, numtimes) {
    var ttxt = txt;
    for (i = 1; i < numtimes; i++) {
        txt += ttxt
    }
    return txt;
}


function formatNumber(num, c, d, t) {
    var n = num,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function formatDollar(num, c, d, t) {
    var n = num,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return "$" + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function formatCurrency(num, cur, c, d, t) {
    var n = num,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return cur + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function formatPercent(num, c, d, t) {
    var n = num * 100,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + "%";
};



function todouble(txt, decimal) {
    decimal = decimal == undefined ? "." : decimal;

    // from accounting.js
    // https://raw.githubusercontent.com/openexchangerates/accounting.js/master/accounting.js

    var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
        unformatted = parseFloat(
            ("" + txt)
            .replace(/\((.*)\)/, "-$1") // replace bracketed values with negatives
            .replace(regex, '') // strip out any cruft
            .replace(decimal, '.') // make sure decimal point is standard
        );
    return unformatted;
}




Number.prototype.formatNumber = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};


String.prototype.left = function (numchar) {
    var c = this.substring(0, numchar);
    return c;
}
String.prototype.reverse = function () {
    var s = '',
        L = this.length;
    while (L) {
        s += this[--L];
    }
    return s;
}

var word = "foo 𝌆 b|ar;sdf,sd sdf:ssfs?dgdfgd ,dgdfgd.ddfgfdg";
// var me = reverse(word, 6, 4);
var me = wordcount(word);
console.log(word);
console.log(me);


var number = 9870.78;
var number2 = 0.78;

console.log(formatCurrency(number, "£"));
console.log(formatPercent(number2));
console.log(repeat("Marinio", 4));
console.log(todouble("$1,400.78"));
console.log(containsword("Word", "wordberin gfgf"));
