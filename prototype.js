;
(function (global) {
    
    var jInit = function(text){
        this.text = text;
        this.val = text;
    }
    
    var jIn = function(text){
        return new jInit(text);
    }
    
    var jStringy = jStringy || jIn;
    
    jInit.prototype.valueOf = function() { return this.val; }
    jInit.prototype.toString = function() { return this.val; }
    
    
    jInit.prototype.left = function (num_char) {
        if (num_char == undefined) {
            throw "Number of characters is required!";
        }
        this.val = this.val.substring(0, num_char);
        return this;
    }
    
    jInit.prototype.right = function (numchar) {
        this.val = this.val.substring(this.val.length - numchar, this.val.length);
        return this;
    }
    
    global.jStringy = global.S$ = jStringy;
    
    return this;

}(window));
