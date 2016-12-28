function PlaceholderHider(itemClass, placeholderClass){
    this.itemClass = itemClass;
    this.placeholderClass = placeholderClass;
    // assuming all placeholders use same initial display
    this.defaultDisplay = document.querySelectorAll("." + this.placeholderClass)[0].style.display;
}

PlaceholderHider.prototype.gcmInitialValue = 4;

// use to modify the gcm i.e. to change the numeric value that causes placeholders to disappear
PlaceholderHider.prototype.gcmForAllWidths = (function(){
    var initialValue = PlaceholderHider.prototype.gcmInitialValue;
    return function setter(val){
        if(typeof arguments[0] === 'number') {
            setter.gcm = arguments[0];
            this.hidePlaceholders();
        }
        if(!setter.gcm)
            return initialValue;
        else
            return setter.gcm;
    };
});

// unhide placeholders then hide placeholders according to math on gcm
PlaceholderHider.prototype.hidePlaceholders = function hp() {
    var i;
    var items = document.querySelectorAll("." + this.itemClass);
    var placeholders = document.querySelectorAll("." + this.placeholderClass);

    if(!hp.gcmForAllWidths)
        hp.gcmForAllWidths = this.gcmForAllWidths();

    if(hp.gcmForAllWidths !== this.gcmForAllWidths()) {
        for(i = 0; i < this.placeholders.length; i++)
            placeholders[i].style.display = this.defaultDisplay;
        hp.gcmForAllWidths = this.gcmForAllWidths();
    }

    var totalElements = items.length + placeholders.length;

    while(totalElements % this.gcmForAllWidths !== 0) {
        placeholders[i].style.display = 'none';
        totalElements--;
        i++;
    }
};

module.exports = PlaceholderHider;
