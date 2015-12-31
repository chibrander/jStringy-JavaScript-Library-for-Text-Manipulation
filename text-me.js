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

function getWordByNum(txt,word_number) {
    var dateArr = txt.split(" ");
    return dateArr[word_number-1];
}

function getLastWordByNum(txt,word_number) {
    var dateArr = txt.split(" ");
    return dateArr[dateArr.length-word_number];
}

function getWords(txt,start_word_number,end_word_number) {
    var text = trimed(txt);
    var strArray = txt.split(" ");
    var nArr = [];
    var n = 0;
    for(i=start_word_number-1;i<end_word_number;i++){ nArr[n] = strArray[i]; n++;}
    return trimed(nArr.join(" "));
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
Levenshtein Distance
Based on Andrei Mackenzie's Code
*/
function levenshteinDistance(a, b) {
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
// END levenshteinDistance



/*
Gets the best match string or index based on Levenshtein Distance. This function returns an array, due to possibility of having multiple best matches.
*/
function bestMatch(txt, lookup_array, results_type) {
    var arrmatch = [lookup_array[0]];
    var arrindex = ["N/A"];
    var matchnum = levenshteinDistance(txt, lookup_array[0]);
    results_type = results_type == undefined ? 0 : results_type;

    for (var i = 0; i < lookup_array.length; i++) {
        if (levenshteinDistance(txt, lookup_array[i]) < matchnum) {
            matchnum = levenshteinDistance(txt, lookup_array[i]);
            arrmatch = [];
            arrindex = [];
            arrmatch[0] = lookup_array[i];
            arrindex[0] = i;
        } else if (levenshteinDistance(txt, lookup_array[i]) == matchnum) {
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
// END bestMatch






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

String.prototype.right = function (numchar) {
    return right(this, numchar);
}

String.prototype.reversed = function () {
    return reversed(this);
}

String.prototype.trimed = function () {
    return trimed(this);
}

String.prototype.levenshteinDistance = function (stringtocompare) {
    return levenshteinDistance(this,stringtocompare);
}

String.prototype.bestMatch = function (lookup_array, results_type) {
    return bestMatch(this,lookup_array, results_type);
}
