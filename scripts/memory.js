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
                var reprow = [];
                for (var j = 0; j < this.memory_size; j++) {
                    var cell = document.createElement('td');
                    cell.className = "memory_cell";
                    row.appendChild(cell);
                    reprow.push(cell);
                }
                this.representation.push(reprow);
                table.appendChild(row);
            }
        },
        store: function (v, x, y) {
            console.log(this.representation);
            this.representation[x][y].innerHTML = v;
        }
    }        
    return Memory;
});
