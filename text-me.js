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

function reversed(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}

function wordcount(txt) {
    var newtxt = txt.replace(/,|\.|\:|\;|\?|\!|\(|\)/g," ");
    newtxt = newtxt.replace(/ +/g, " ");
    newtxt = newtxt.trim();
    newtxt = newtxt.split(" ");
    return newtxt.length;
}

function trimed(txt) {
    return txt.replace(/ +/g, " ").trim();  
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

function formatMain(num, cur, c, d, t, endstr) {
    var n = num,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return cur + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + endstr;
}


function formatCurrency(num, cur, c, d, t) {
		return formatMain(num, cur, c, d, t, "");
}

function formatPercent(num, c, d, t) {
   return formatMain(num*100, "", c, d, t, "%");
}

function formatNumber(num, c, d, t) {
	return formatMain(num, "", c, d, t, "");
}

function formatDollar(num, c, d, t) {
   return formatMain(num, "$", c, d, t, "");
}


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


/*
Based on Andrei Mackenzie's Code
*/
// Levenshtein Distance
function levenshteindistance(a, b) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;

    var matrix = [];

    // increment along the first column of each row
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
}


function bestMatch(txt, lookup_array, results_type) {
    var arrmatch = [lookup_array[0]];
    var arrindex = ["N/A"];
    var matchnum = levenshteindistance(txt, lookup_array[0]);
    results_type = results_type == undefined ? 0 : results_type;

    for (var i = 0; i < lookup_array.length; i++) {
        if (levenshteindistance(txt, lookup_array[i]) < matchnum) {
            matchnum = levenshteindistance(txt, lookup_array[i]);
            arrmatch = [];
            arrindex = [];
            arrmatch[0] = lookup_array[i];
            arrindex[0] = i;
        } else if (levenshteindistance(txt, lookup_array[i]) == matchnum) {
            arrmatch[arrmatch.length] = lookup_array[i];
            arrindex[arrindex.length] = i;
        }
    }
    if (results_type == 0) {
        return arrmatch;
    } else {
        return arrindex;
    }
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
}


String.prototype.left = function (numchar) {
    var c = this.substring(0, numchar);
    return c;
}
String.prototype.reversed = function () {
    var s = '',
        L = this.length;
    while (L) {
        s += this[--L];
    }
    return s;
}

/*
Copyright (c) 2011 Andrei Mackenzie
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Compute the edit distance between the two given strings
exports.getEditDistance = function (a, b) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;

    var matrix = [];

    // increment along the first column of each row
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
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


console.log(levenshteindistance("My New Car", "My car new"));
console.log(levenshteindistance("My New Car", "My Toyota car"));
console.log(levenshteindistance("My New Car", "My Nw Car"));
console.log(levenshteindistance("My New Car", "Bar Car"));
console.log(levenshteindistance("My New Car", "your Nw car"));


var myarr = ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"];

console.log(bestMatch("My New Car", myarr).length);
console.log(bestMatch("My New Car", myarr)[0]);
console.log(bestMatch("My New Car", myarr)[1]);
console.log(bestMatch("My New Car", myarr, 0)[0]);
console.log(bestMatch("My New Car", myarr, 0)[1]);
console.log(bestMatch("My New Car", myarr, 1)[0]);
console.log(bestMatch("My New Car", myarr, 1)[1]);
