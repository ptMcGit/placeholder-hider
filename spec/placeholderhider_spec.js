describe("PlaceholderHider", function() {
    var PlaceholderHider = require("../index.js");

    function MockElement(display) {
        if(display)
            this.style = {display: display}
        else
            this.style = {display: 'yes'}
    }

    document = {
        querySelectorAll: function(){ return Array(new MockElement('display_set')); }
    }

//    MockElement.prototype.style = {display: 'yes'};

    var mockElements = function(total) {
        var array = [];
        var i;
        for(i = 0; i < total; i++)
            array.push(new MockElement());
        return array;
    }

    describe("initialization", function(){
        beforeEach(function(){
            this.items = mockElements(4);
            this.placeholders = mockElements(4);
        });

        it("gets document.style.display for first placeholder", function(){
            spyOn(document, 'querySelectorAll').and.callThrough();
            this.pHH = new PlaceholderHider('itemClass', 'placeholderClass');
            expect(document.querySelectorAll).toHaveBeenCalledWith('.placeholderClass');
        });
    });

    describe("#hidePlaceholder", function() {
        xit("placeholders are undisplayed as needed to keep grouping square", function() {
            items = mockElements(15);
            placeholders = mockElements(15);
            this.pHH = new PlaceholderHider(items, placeholders);
            this.pHH.hidePlaceholders
        });
    });





});
