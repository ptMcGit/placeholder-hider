describe("PlaceholderHider", function() {
    var PlaceholderHider = require("../index.js");

    function MockElement(display) {
        if(display)
            this.style = {display: display};
        else
            this.style = {display: 'table'};
    }

    function MockDocument(itemElements, placeholderElements) {
        this.itemClass = itemElements,
        this.placeholderClass = placeholderElements,
        this.querySelectorAll = function(elementClass){
            console.log(elementClass);
            var e = elementClass.slice(1);
            return this[e];
        }
    };

//    MockElement.prototype.style = {display: 'yes'};

    var mockElements = function(total) {
        var array = [];
        var i;
        for(i = 0; i < total; i++)
            array.push(new MockElement());
        return array;
    };

    describe("initialization", function(){
        beforeEach(function(){
            this.items = mockElements(4);
            this.placeholders = mockElements(4);
        });

        it("gets document.style.display for first placeholder", function(){
            document = new MockDocument(this.items, this.placeholders);
            spyOn(document, 'querySelectorAll').and.callThrough();
            this.pHH = new PlaceholderHider('itemClass', 'placeholderClass');
            expect(document.querySelectorAll).toHaveBeenCalledWith('.placeholderClass');
        });
    });

    describe("#gcmForAllWidths", function(){
        beforeEach(function(){
            this.pHH = new PlaceholderHider('itemClass', 'placeholderClass');
        });

        it("returns a number of gcmForAllWidths", function(){
            expect(typeof this.pHH.gcmForAllWidths()).toEqual('number')
        });

        it("sets a number", function(){
            this.pHH.gcmForAllWidths(5);
            this.pHH.gcmForAllWidths(6);
            expect(this.pHH.gcmForAllWidths()).toEqual(6);
        });

    });


    describe("#hidePlaceholder", function() {
        xit("placeholders are undisplayed as needed to keep grouping square", function() {
            this.items = mockElements(9);
            this.placeholders = mockElements(3);
            console.log(this.items, "this.items");
            document = new MockDocument(this.items, this.placeholders);
            this.pHH = new PlaceholderHider('itemClass', 'placeholderClass');
            this.pHH.gcmForAllWidths(4);
            this.pHH.hidePlaceholders();
        });
    });

});
