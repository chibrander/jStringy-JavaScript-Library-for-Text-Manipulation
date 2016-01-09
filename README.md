# jStringy - JavaScript Library for Text Manipulation
Free Open-Source JavaScript Library for commonly used text functions.<br /><br />
Most functions are chainable.

Use S$ or jStringy to access the available functions. Selectors work similar to jQuuery syntax. Keep in mind that this is a string manipulation library, so we select a string or number variable, NOT a DOM element.<br /><br />
S$("My Text Goes Here") or S$(my_var_that_holds_the_value)

Ex.
```javascript
var mytext = "Text that we would like to use, and then more.";

// native JavaScript substring
mytext.substring(0, 3) //Returns Tex

// jStringy left
S$(mytext).left(3).value() //Returns Tex

// jStringy getWordByNum
S$(mytext).getWordByNum(4).value() // Returns would

// jStringy getWords
S$(mytext).getWords(2,5).value() // Returns that we would like

// jStringy Chained Example
S$(mytext).getWordByNum(4).left(3).right(2).value() // Returns ou
```


##Setup:

Include jstringy.js file in your project.
Ex.

```html
<script src="jstringy.js"></script>
```
---
---
---

##Usage:
---
**left Function Syntax**

Returns specified number of characters from the left of a text string.

>left([Number of Characters])

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).left(3).value()
// Returns Tex
```

---

**right Function Syntax**

Returns specified number of characters from the right of a text string.

>**right([Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).right(4).value()
// Returns ore.
```


---

**mid Function Syntax**

Returns specified number of characters from the starting point defined in the middle of a text string.

>**mid([Starting Character],[Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).mid(6,4).value()
// Returns that
```


---

**midd Function Syntax**

Returns characters from the middle of a text string using start and end character number.

>**midd([Start Character],[End Character])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).mid(11,12).value()
// Returns we
```


---

**reversed Function Syntax**

Flips (reverses) the text string.

>**reversed()**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).reversed().value()
// Returns .erom neht dna ,esu ot ekil dluow ew taht txeT
```


---

**wordcount Function Syntax**

Gets the wordcount from a string.

>**wordcount()**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).wordcount().value()
// Returns 10
```


---

**getWordByNum Function Syntax**

Gets the Nth word from the left by number.

>**getWordByNum([word_number])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$(mytext).getWordByNum(4).value()
// Returns would

S$(mytext).getWordByNum(2,0).value()
// Returns then
```


---

**getWords Function Syntax**

Gets a part of initial string by first and last word position.

>**getWords([text],[start_word_number],[end_word_number])**

```javascript
var mytext = "Text that we would like to use, and then more.";

S$.getWords(mytext,2,5)
// Returns that we would like
```



---

**trimed Function Syntax**

Removes extra white spaces in the middle, before and after.

>**trimed([Text as String])**

```javascript
var mytext = " Text that we,  would like to  use, and   then  more.   ";

S$.trimed(mytext);
// Returns Text that we, would like to use, and then more.
```


---

**formatDollar Function Syntax**

Converts a number to Dollar currency formatted string.

>**formatDollar([number], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

S$.formatDollar(mynumber)
// Returns $19,654.13

S$.formatDollar(mynumber,0)
// Returns $19,654

S$.formatDollar(mynumber,2,",",".")
// Returns $19.654,13
```




---

**formatNumber Function Syntax**

Converts a number to a formatted string with thousand separator.

>**formatNumber([number], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

S$.formatNumber(mynumber)
// Returns 19,654.13

S$.formatNumber(mynumber,0)
// Returns 19,654

S$.formatNumber(mynumber,2,",",".")
// Returns 19.654,13
```


---

**formatCurrency Function Syntax**

Converts a number to a currency string.

>**formatCurrency([number], [currency_string], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 19654.13;

S$.formatCurrency(mynumber,"£")
// Returns £19,654.13

S$.formatCurrency(mynumber,"USD ")
// Returns USD 19,654.13

S$.formatCurrency(mynumber, "£", 0)
// Returns £19,654

S$.formatCurrency(mynumber,"£",2,",",".")
// Returns £19.654,13
```



---

**formatPercent Function Syntax**

Converts a fraction number to a formatted percentage string.

>**formatPercent([number], [number_of_digits_after_delimiter] optional, [delimiter_string] optional, [thousand_separator_string] optional)**

```javascript
var mynumber = 0.13214;

S$.formatPercent(mynumber)
// Returns 13.21%

S$.formatPercent(mynumber,3)
// Returns 13.214%

S$.formatPercent(mynumber,2,"'",".")
// Returns 13'21%
```



---

**toDouble Function Syntax**

Converts a currency string or other number formatted string to double.

>**toDouble([text_number, [decimal_separator] optional)**

```javascript
var mytext = "$15,159.79 USD";

S$.toDouble(mytext)
// Returns 15159.79

S$.toDouble(mytext,",")
// Returns 15.15979
```





---

**levenshteinDistance Function Syntax**

Caculates Levenshtein Distance between 2 strings.

>**levenshteinDistance([Text as String],[Text_to_Compare as String])**

```javascript
var initialtext = "My New Car";

S$.levenshteinDistance(initialtext, "My car new");
// Returns 6

S$.levenshteinDistance(initialtext, "My Toyota car");
// Returns 7

S$.levenshteinDistance(initialtext, "My New Car");
// Returns 0

S$.levenshteinDistance(initialtext, "My Nw Car");
// Returns 1

S$.levenshteinDistance(initialtext, "Bar Car");
// Returns 6

S$.levenshteinDistance(initialtext, "your Nw car");
// Returns 6
```




---

**bestMatch Function Syntax**

Gets the best match string or index based on Levenshtein Distance.
This function returns an array, due to possibility of having multiple best matches.

>**bestMatch([Text as String],[Array_of_Strings_to_Check],[results_type] optional)**

```javascript
var initialtext = "My New Car";
var myarr = ["My car new", "My Toyota car", "My Nw Car", "Bar Car", "your Nw car", "My Ne Car", "yet one other thing"];

S$.bestMatch(initialtext, myarr)
// Returns ["My Nw Car", "My Ne Car"]

// get the first best match
S$.bestMatch(initialtext, myarr)[0]
// Returns My Nw Car

// get the index of matches, instead of values.
S$.bestMatch(initialtext, myarr,1)
// Returns [2, 5]

////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var mymatchArray = bestMatch(initialtext, myarr);

// get the first best match
S$.mymatchArray[0]; // Returns My Nw Car

// get the next best match
S$.mymatchArray[1]; // Returns My Ne Car

// you can find out how many best matches are available
S$.mymatchArray.length //Returns 2
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

var b = new S$.bestMatchObject(initialtext,myarr);
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
