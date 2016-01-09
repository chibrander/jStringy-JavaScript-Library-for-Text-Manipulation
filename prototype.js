;
(function (global) {

    var jInit = function (text) {
        this.text = text;
        this.val = text;
    }

    var jIn = function (text) {
        return new jInit(text);
    }

    var jStringy = jStringy || jIn;

    jInit.prototype.valueOf = function () {
        return this.val;
    }
    jInit.prototype.toString = function () {
        return this.val;
    }


    jInit.prototype.value = function () {
        return this.val;
    }

    jInit.prototype.left = function (num_char) {
        if (num_char == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(0, num_char);
        return this;
    }

    jInit.prototype.right = function (numchar) {
        if (numchar == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(this.val.length - numchar, this.val.length);
        return this;
    }

    jInit.prototype.midd = function (startchar, endchar) {
        this.val = this.val.substring(startchar - 1, endchar);
        return this;
    }

    jInit.prototype.mid = function (startchar, numchar) {
        this.val = this.val.substring(startchar - 1, startchar - 1 + numchar);
        return this;
    }

    jInit.prototype.BeforeAfter = function (character, return_type, adjust) {
        adjust = adjust == undefined ? 0 : adjust;
        return_type = return_type == undefined ? 0 : return_type;
        var pos = this.val.indexOf(character) + 2 + adjust;

        // 0 for Before
        if (return_type == 0) {
            this.val = jStringy(this.val).midd(1, pos - 2).val;
        } else {
            var len = this.val.length;
            this.val = jStringy(this.val).midd(pos, len).val;
        }
        return this;
    }


    jInit.prototype.reversed = function () {
        var s = this.val;
        for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
        this.val = o;
        return this;
    }

    jInit.prototype.wordCount = function () {
        var newtxt = this.val.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        newtxt = jStringy(newtxt).trimed().val;
        newtxt = newtxt.split(" ");
        this.val = newtxt.length;
        return this;
    }

    jInit.prototype.trimed = function () {
        this.val = this.val.replace(/ +/g, " ").trim();
        return this;
    }

    jInit.prototype.getWordByNum = function (word_number, type) {
        var text = jStringy(this.val).trimed().val;
        var dateArr = text.split(" ");
        // 0 to count from the right end
        if (type == 0) {
            this.val = dateArr[dateArr.length - word_number];
        } else {
            this.val = dateArr[word_number - 1];
        }
        return this;
    }

    jInit.prototype.getWords = function (start_word_number, end_word_number) {
        var text = jStringy(this.val).trimed().val;
        var strArray = text.split(" ");
        var nArr = [];
        var n = 0;
        for (i = start_word_number - 1; i < end_word_number; i++) {
            nArr[n] = strArray[i];
            n++;
        }
        this.val = jStringy(nArr.join(" ")).trimed().val;
        return this;
    }

    jInit.prototype.containsWord = function (wordtofind) {
        var nwheretofind = (" " + this.val + " ").toLowerCase();
        var nwordtofind = (" " + wordtofind + " ").toLowerCase();
        nwheretofind = nwheretofind.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        if (nwheretofind.indexOf(nwordtofind) >= 0) {
            this.val = true;
        } else {
            this.val = false;
        }
        return this;
    }

    jInit.prototype.repeat = function (numtimes) {
        var ttxt = this.val;
        for (i = 1; i < numtimes; i++) {
            this.val += ttxt
        }
        return this;
    }


    // Main private number format function
    var formatMain = function (num, cur, c, d, t, endstr) {
            var n = num,
                c = isNaN(c = Math.abs(c)) ? 2 : c,
                d = d == undefined ? "." : d,
                t = t == undefined ? "," : t,
                s = n < 0 ? "-" : "",
                i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;
            return cur + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + endstr;
        }
        // END Main private number format function

    jInit.prototype.formatCurrency = function (cur, c, d, t) {
        this.val = formatMain(this.val, cur, c, d, t, "");
        return this;
    }

    jInit.prototype.formatPercent = function (c, d, t) {
        this.val = formatMain(this.val * 100, "", c, d, t, "%");
        return this;
    }

    jInit.prototype.formatNumber = function (c, d, t) {
        this.val = formatMain(this.val, "", c, d, t, "");
        return this;
    }

    jInit.prototype.formatDollar = function (c, d, t) {
        this.val = formatMain(this.val, "$", c, d, t, "");
        return this;
    }

    jInit.prototype.toDouble = function (decimal) {
        decimal = decimal == undefined ? "." : decimal;

        // from accounting.js
        // https://raw.githubusercontent.com/openexchangerates/accounting.js/master/accounting.js

        var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
            unformatted = parseFloat(
                ("" + this.val)
                .replace(/\((.*)\)/, "-$1") // replace bracketed values with negatives
                .replace(regex, '') // strip out any cruft
                .replace(decimal, '.') // make sure decimal point is standard
            );
        this.val = unformatted;
        return this;
    }





    /*
    Levenshtein Distance
    Based on Andrei Mackenzie's Code
    */
    jInit.prototype.levenshteinDistance = function (b) {
            var a = this.val;
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

            this.val = matrix[b.length][a.length];
            return this;
        }
        // END levenshteinDistance





    /*
    Gets the best match string or index based on Levenshtein Distance. This function returns an array, due to possibility of having multiple best matches.
    */
    jInit.prototype.bestMatch = function (lookup_array, results_type) {
            var txt = this.val;
            var arrmatch = [lookup_array[0]];
            var arrindex = ["N/A"];
            var matchnum = jStringy(txt).levenshteinDistance(lookup_array[0]).val;
            results_type = results_type == undefined ? 0 : results_type;

            for (var i = 0; i < lookup_array.length; i++) {
                if (jStringy(txt).levenshteinDistance(lookup_array[i]).val < matchnum) {
                    matchnum = jStringy(txt).levenshteinDistance(lookup_array[i]).val;
                    arrmatch = [];
                    arrindex = [];
                    arrmatch[0] = lookup_array[i];
                    arrindex[0] = i;
                } else if (jStringy(txt).levenshteinDistance(lookup_array[i]).val == matchnum) {
                    arrmatch[arrmatch.length] = lookup_array[i];
                    arrindex[arrindex.length] = i;
                }
            }
            if (results_type == 0) {
                this.val = arrmatch;
            } else {
                this.val = arrindex;
            }
            return this;
        }
        // END bestMatch



    // convert to Object

    jInit.prototype.bestMatchObject = function (lookup_array) {

            this.lookup_array = lookup_array;
            this.lookup_value = this.val;
            this.array = jStringy(this.lookup_value).bestMatch(this.lookup_array).val;
            this.arrayIndex = jStringy(this.lookup_value).bestMatch(this.lookup_array, 1).val;
            this.first = this.array[0];
            this.firstIndex = this.arrayIndex[0];
            this.len = this.array.length;
            this.last = this.array[this.array.length - 1];
            this.lastIndex = this.arrayIndex[this.array.length - 1];
            return this;

        }
        // END bestMatchObject




    global.jStringy = global.S$ = jStringy;

    return this;

}(window));
