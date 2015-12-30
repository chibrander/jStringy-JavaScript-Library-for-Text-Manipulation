# text-functions-library-javascript
Open-Source JavaScript Library for commonly used text functions.<br /><br />
Many of the functions are similar to Visual Basic text function syntax, which I often found more intuitive to use than native JavaScript functions.

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
```


---

**midd Function Syntax**

Returns characters from the middle of a text string using start and end character number.

>**midd([Text as String],[Start Character],[End Character])**

```javascript
var mytext = "Text that we would like to use, and then more.";
mid(mytext,11,12);
// Returns we
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
mytext.reversed();
```


---

**trimed Function Syntax**

Removes extra white spaces in the middle, before and after.

>**trimed([Text as String])**

```javascript
var mytext = " Text that we,  would like to  use, and   then  more.   ";
trimed(mytext);
// Returns Text that we, would like to use, and then more.
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
