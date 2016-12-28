function PlaceholderHider(itemClass, placeholderClass){
    this.itemClass = itemClass;
    this.placeholderClass = placeholderClass;
    // assuming all placeholders use same initial display
    this.defaultDisplay = document.querySelectorAll("." + this.placeholderClass)[0].style.display;
}

// use to modify the gcm i.e. to change the numeric value that causes placeholders to disappear
PlaceholderHider.prototype.gcmForAllWidths = (function(value){
    var initialValue = 4;

    return function setter(val){
        if(typeof arguments[0] === 'number') {
            setter.gcm = Math.floor(arguments[0]);
            this.hidePlaceholders();
        }
        if(!setter.gcm){
            return initialValue;
        }
        else
            return setter.gcm;
    };
})();

// unhide placeholders then hide placeholders according to math on gcm
PlaceholderHider.prototype.hidePlaceholders = function hp() {
    var i;
    var items = document.querySelectorAll("." + this.itemClass);
    var placeholders = document.querySelectorAll("." + this.placeholderClass);

    if(!hp.gcmForAllWidths)
        hp.gcmForAllWidths = this.gcmForAllWidths();

    if(hp.gcmForAllWidths !== this.gcmForAllWidths()) {
        for(var i in placeholders)
            placeholders[i].style.display = this.defaultDisplay;
        hp.gcmForAllWidths = this.gcmForAllWidths();
    }

    var totalElements = items.length + placeholders.length;
    var i = 0;

    while(totalElements % this.gcmForAllWidths() !== 0) {
        placeholders[i].style.display = 'none';
        totalElements--;
        i++;
    }
};

module.exports = PlaceholderHider;
