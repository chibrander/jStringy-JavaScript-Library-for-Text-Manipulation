var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\.\/:;<=>?@\[\]^_`{|}~]|(-\s)|(\s-)|(-[^a-zA-Z\d].)|([^a-zA-Z\d].-)/g;
var spaceRE = /\s+/g;
var str = "This - is- #! an $ % ^ & * -example ;: {} of a = -_ string- with `~)() -ddd punctu-ation re-enter";
str.replace(punctRE, ' ').replace(spaceRE, ' ');
"This is an example of a string with ddd punctu-ation re-enter"
