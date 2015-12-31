# jStringy - JavaScript Library for Text Manipulation
Open-Source JavaScript Library for commonly used text functions.<br /><br />
Many of the functions are named similar to Visual Basic text function syntax, which I often found more intuitive to use than native JavaScript functions.

Most functions can be used similar to native JavaScript methods.
Ex.
```javascript
var str = "Hello world!";

// native JavaScript substring
str.substring(0, 5) //Returns Hello

// jStringy JavaScript left
str.left(5) //Returns Hello
```

##Setup:

Inslude text-me.js file in your project.
Ex.

```html
<script src="text-me.js"></script>
```
---
---
---

##Usage:
---
**left Function Syntax**

Returns specified number of characters from the left of a text string.

>left([Text as String],[Number of Characters])

```javascript
var mytext = "Text that we would like to use, and then more.";
left(mytext,3);
// Returns Tex

// you can also use the following syntax
mytext.left(3);
```

---

**right Function Syntax**

Returns specified number of characters from the right of a text string.

>**right([Text as String],[Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";
right(mytext,4);
// Returns ore.

// you can also use the following syntax
mytext.right(4);
```


---

**mid Function Syntax**

Returns specified number of characters from the starting point defined in the middle of a text string.

>**mid([Text as String],[Starting Character],[Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";
mid(mytext,6,4);
// Returns that

// you can also use the following syntax
mytext.mid(6,4);
```


---

**midd Function Syntax**

Returns characters from the middle of a text string using start and end character number.

>**midd([Text as String],[Start Character],[End Character])**

```javascript
var mytext = "Text that we would like to use, and then more.";
mid(mytext,11,12);
// Returns we

// you can also use the following syntax
mytext.midd(11,12);
```


---

**reversed Function Syntax**

Flips (reverses) the text string.

>**reversed([Text as String])**

```javascript
var mytext = "Text that we would like to use, and then more.";
reversed(mytext);
// Returns .erom neht dna ,esu ot ekil dluow ew taht txeT

// you can also use the following syntax
mytext.reversed();
```


---

**wordcount Function Syntax**

Gets the wordcount from a string.

>**wordcount([Text as String])**

```javascript
var mytext = "Text that we would like to use, and then more.";
wordcount(mytext);
// Returns 10

// you can also use the following syntax
mytext.wordcount();
```


---

**getWordByNum Function Syntax**

Gets the Nth word from the left by number.

>**getWordByNum([text],[word_number])**

```javascript
var mytext = "Text that we would like to use, and then more.";

getWordByNum(mytext,4)
// Returns would

// you can also use the following syntax
mytext.getWordByNum(4)
```


---

**getLastWordByNum Function Syntax**

Gets the Nth word form the right by number.

>**getLastWordByNum([text],[word_number])**

```javascript
var mytext = "Text that we would like to use, and then more.";

getLastWordByNum(mytext,2)
// Returns then

// you can also use the following syntax
mytext.getLastWordByNum(2)
```


---

**getWords Function Syntax**

Gets a part of initial string by first and last word position.

>**getWords([text],[start_word_number],[end_word_number])**

```javascript
var mytext = "Text that we would like to use, and then more.";

getWords(mytext,2,5)
// Returns that we would like

// you can also use the following syntax
mytext.getWords(2,5)
```



---

**trimed Function Syntax**

Removes extra white spaces in the middle, before and after.

>**trimed([Text as String])**

```javascript
var mytext = " Text that we,  would like to  use, and   then  more.   ";
trimed(mytext);
// Returns Text that we, would like to use, and then more.

// you can also use the following syntax
mytext.trimed();
```


---

**formatDollar Function Syntax**

Converts a number to Dollar currency formatted string.

>**formatDollar([number], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

formatDollar(mynumber)
// Returns $19,654.13

formatDollar(mynumber,0)
// Returns $19,654

formatDollar(mynumber,2,",",".")
// Returns $19.654,13


// you can also use the following syntax
mynumber.formatDollar();
mynumber.formatDollar(2,",",".");
```




---

**formatNumber Function Syntax**

Converts a number to a formatted string with thousand separator.

>**formatNumber([number], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

formatNumber(mynumber)
// Returns 19,654.13

formatNumber(mynumber,0)
// Returns 19,654

formatNumber(mynumber,2,",",".")
// Returns 19.654,13


// you can also use the following syntax
mynumber.formatNumber();
mynumber.formatNumber(2,",",".");
```


---

**formatCurrency Function Syntax**

Converts a number to a currency string.

>**formatCurrency([number], [currency_string], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

formatCurrency(mynumber,"£")
// Returns £19,654.13

formatCurrency(mynumber,"USD ")
// Returns USD 19,654.13

formatCurrency(mynumber, "£", 0)
// Returns £19,654

formatCurrency(mynumber,"£",2,",",".")
// Returns £19.654,13


// you can also use the following syntax
mynumber.formatCurrency("£");
mynumber.formatCurrency("£",2,",",".");
```



---

**formatPercent Function Syntax**

Converts a fraction number to a formatted percentage string.

>**formatPercent([number], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 0.13214;

formatPercent(mynumber)
// Returns 13.21%

formatPercent(mynumber,3)
// Returns 13.214%

formatPercent(mynumber,2,"'",".")
// Returns 13'21%


// you can also use the following syntax
mynumber.formatPercent();
mynumber.formatPercent(2,",",".");
```



---

**toDouble Function Syntax**

Converts a currency string or other number formatted string to double.

>**toDouble([text_number, [decimal_separator] optional)**

```javascript
var mytext = "$15,159.79 USD";

toDouble(mytext)
// Returns 15159.79

toDouble(mytext,",")
// Returns 15.15979


// you can also use the following syntax
mytext.toDouble();
mytext.toDouble(",");
```





---

**levenshteinDistance Function Syntax**

Caculates Levenshtein Distance between 2 strings.

>**levenshteinDistance([Text as String],[Text_to_Compare as String])**

```javascript
var initialtext = "My New Car";

levenshteinDistance(initialtext, "My car new");
// Returns 6

levenshteinDistance(initialtext, "My Toyota car");
// Returns 7

levenshteinDistance(initialtext, "My New Car");
// Returns 0

levenshteinDistance(initialtext, "My Nw Car");
// Returns 1

levenshteinDistance(initialtext, "Bar Car");
// Returns 6

levenshteinDistance(initialtext, "your Nw car");
// Returns 6

// you can also use the following syntax
initialtext.levenshteinDistance("My car new");
```




---

**bestMatch Function Syntax**

Gets the best match string or index based on Levenshtein Distance.
This function returns an array, due to possibility of having multiple best matches.

>**bestMatch([Text as String],[Array_of_Strings_to_Check],[results_type] optional)**

```javascript
var initialtext = "My New Car";
var myarr = ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"];

bestMatch(initialtext, myarr)
// Returns ["My Nw Car", "My Ne Car"]

// get the first best match
bestMatch(initialtext, myarr)[0]
// Returns My Nw Car

// get the index of matches, instead of values.
bestMatch(initialtext, myarr,1)
// Returns [2, 5]

////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var mymatchArray = bestMatch(initialtext, myarr);

// get the first best match
mymatchArray[0]; // Returns My Nw Car

// get the next best match
mymatchArray[1]; // Returns My Ne Car

// you can find out how many best matches are available
mymatchArray.length //Returns 2

// you can also use the following syntax
initialtext.bestMatch(myarr);
```



---

**bestMatchObject Function Syntax**

Creates an Object that contains the best match string or index based on Levenshtein Distance.
This function returns an array, due to possibility of having multiple best matches.

>**bestMatchObject([lookup_value], [lookup_array])**

>***Properties:***

> .lookup_array

> .lookup_value

> .array [returns array]

> .arrayIndex [returns array]

> .first

> .firstIndex

> .last

> .lastIndex

> .len

```javascript
var initialtext = "My New Car";
var myarr = ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"];

var b = new bestMatchObject(initialtext,myarr);
// Creates an Object and stores in variable b

//get an array of best matches
b.array
//Returns ["My Nw Car", "My Ne Car"]

//get an array of best matche indexes
b.arrayIndex
//Returns [2, 5]

// get the first best match
b.first
//Returns My Nw Car

// get the first best match index
b.firstIndex
//Returns 2

// get the last best match
b.last
//Returns My Ne Car

// get the last best match index
b.lastIndex
//Returns 5

//get how many best matches are available
b.len
//Returns 2

b.lookup_array
//Returns ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"]

```
