var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
var spaceRE = /\s+/g;
var str = "This, -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctu-ation re-enter";
str.replace(punctRE, ' ').replace(spaceRE, ' ');
"This is an example of a string with punctu ation re enter"


var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\.\/:;<=>?@\[\]^_`{|}~]|(\s-\s)/g;
var spaceRE = /\s+/g;
var str = "This - is #! an $ % ^ & * example ;: {} of a = - _ string with `~)() punctu-ation re-enter";
str.replace(punctRE, ' ').replace(spaceRE, ' ');
"This is an example of a string with punctu-ation re-enter"



