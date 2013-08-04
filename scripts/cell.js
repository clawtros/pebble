define([], function() {
    var Cell = function(dom_element) {
        this.dom_element = dom_element;
        this.dom_element.className = "cell";
        this._value = undefined;
    };
    
    Cell.protoype = {
        pebbles: [],
        isPointer: function () {
            return false;
        }
    }
    
    Cell.prototype.__defineGetter__('value', function() {
        return this.value;
    });

    Cell.prototype.__defineSetter__('value', function(newvalue) {
        this._value = newvalue;
        this.dom_element.innerHTML = newvalue;
    });
    
    return Cell;
});
