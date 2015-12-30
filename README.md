# text-functions-library-javascript
Open-Source JavaScript Library for commonly used text functions.<br /><br />

##Setup:

Inslude text-me.js file in your project.
Ex.

```html
<script src="text-me.js"></script>
```

##Usage:

**left Function Syntax**

Returns specified number of characters from the left of a text string.

>**left([Text as String],[Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";
left(mytext,3);
// Returns Tex

// you can also use the following syntax
mytext.left(3);
```



**right Function Syntax**

Returns specified number of characters from the right of a text string.

>**right([Text as String],[Number of Characters])**

```javascript
var mytext = "Text that we would like to use, and then more.";
right(mytext,4);
// Returns ore.
```
