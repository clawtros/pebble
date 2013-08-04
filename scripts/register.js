define(['cell'], function(Cell) {
    var Register = function(element) {
        this.prototype = new Cell(element);
    };
    return Register;
});
