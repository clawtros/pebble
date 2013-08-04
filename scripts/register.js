define(['cell'], function(Cell) {
    var Register = function(element) {
        this.prototype = new Cell(element);
        this.element = element;
        this.value = undefined;
    };

    Register.prototype.__defineGetter__('value', function(value) {
        return this._value;
    });

    Register.prototype.__defineSetter__('value', function(value) {
        this._value = value;
        this.element.innerHTML = value;
    });
    return Register;
});
