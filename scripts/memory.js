define([], function() {
    var Memory = function(memory_size) {
        this.memory_size = memory_size;
    }
    Memory.prototype = {
        initialize: function () {
            var table = document.getElementById("memory");
            table.innerHTML = "";
            this.memory = [];
            for (var i = 0; i < this.memory_size; i++) {
                var row = document.createElement('tr');
                for (var j = 0; j < this.memory_size; j++) {
                    var cell = document.createElement('td');
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
        }
    }        
    return Memory;
});
