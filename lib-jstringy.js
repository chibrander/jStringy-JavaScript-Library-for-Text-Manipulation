;
(function (global) {

    var jStringy = jStringy || {
        version: "0.1.0",
        library: "jStringy Library"
    };

    jStringy.left = function (text, num_char) {
        if (num_char == undefined) {
            throw "Number of characters is required!";
        }
        return text.substring(0, num_char);
    }

    jStringy.right = function (txt, numchar) {
        var c = txt.substring(txt.length - numchar, txt.length);
        return c;
    }

    jStringy.midd = function (txt, startchar, endchar) {
        var c = txt.substring(startchar - 1, endchar);
        return c;
    }

    jStringy.mid = function (txt, startchar, numchar) {
        var c = txt.substring(startchar - 1, startchar - 1 + numchar);
        return c;
    }

    jStringy.reversed = function (s) {
        for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
        return o;
    }

    jStringy.wordcount = function (txt) {
        var newtxt = txt.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        newtxt = newtxt.replace(/ +/g, " ");
        newtxt = newtxt.trim();
        newtxt = newtxt.split(" ");
        return newtxt.length;
    }

    jStringy.trimed = function (txt) {
        return txt.replace(/ +/g, " ").trim();
    }




    jStringy.getWordByNum = function (txt, word_number) {
        var text = jStringy.trimed(txt);
        var dateArr = text.split(" ");
        return dateArr[word_number - 1];
    }

    jStringy.getLastWordByNum = function (txt, word_number) {
        var text = jStringy.trimed(txt);
        var dateArr = text.split(" ");
        return dateArr[dateArr.length - word_number];
    }

    jStringy.getWords = function (txt, start_word_number, end_word_number) {
        var text = jStringy.trimed(txt);
        var strArray = txt.split(" ");
        var nArr = [];
        var n = 0;
        for (i = start_word_number - 1; i < end_word_number; i++) {
            nArr[n] = strArray[i];
            n++;
        }
        return jStringy.trimed(nArr.join(" "));
    }



    jStringy.containsword = function (wordtofind, wheretofind) {
        var nwheretofind = (" " + wheretofind + " ").toLowerCase();
        var nwordtofind = (" " + wordtofind + " ").toLowerCase();
        nwheretofind = nwheretofind.replace(/,|\.|\:|\;|\?|\!|\(|\)/g, " ");
        if (nwheretofind.indexOf(nwordtofind) >= 0) {
            return true;
        } else {
            return false;
        }
    }


    jStringy.repeat = function (txt, numtimes) {
        var ttxt = txt;
        for (i = 1; i < numtimes; i++) {
            txt += ttxt
        }
        return txt;
    }


    jStringy.formatMain = function (num, cur, c, d, t, endstr) {
        var n = num,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return cur + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + endstr;
    }


    jStringy.formatCurrency = function (num, cur, c, d, t) {
        return jStringy.formatMain(num, cur, c, d, t, "");
    }

    jStringy.formatPercent = function (num, c, d, t) {
        return jStringy.formatMain(num * 100, "", c, d, t, "%");
    }

    jStringy.formatNumber = function (num, c, d, t) {
        return jStringy.formatMain(num, "", c, d, t, "");
    }

    jStringy.formatDollar = function (num, c, d, t) {
        return jStringy.formatMain(num, "$", c, d, t, "");
    }


    global.jStringy = global.S$ = jStringy;

}(window));
