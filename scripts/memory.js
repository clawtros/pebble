define([], function() {
    var Memory = function(memory_size) {
        this.memory_size = memory_size;
    }
    Memory.prototype = {
        initialize: function () {
            var table = document.getElementById("memory");
            table.innerHTML = "";
            this.representation = [];
            for (var i = 0; i < this.memory_size; i++) {
                var row = document.createElement('tr');
                
                for (var j = 0; j < this.memory_size; j++) {
                    var cell = document.createElement('td');
                    cell.className = "memory_cell";
                    row.appendChild(cell);
                }
                this.representation.push(row);
                table.appendChild(row);
            }
        }
    }        
    return Memory;
});
