define([], function() {
    var Cell = {};
    
    Cell.protoype = {
        pebbles: [],
        isValue: function () {
            return false;
        }
    }

    return Cell;
});
