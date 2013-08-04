define(['register'], function (Register) {
    var Registers = function(register_size, parent) {
        this.parent = parent;
        this.registers = [];
        this.register_size = register_size;
    };

    Registers.prototype = {
        get: function(register_id) {
            return this.registers[register_id];
        },

        initialize: function() {
            this.row = this.parent.appendChild(document.createElement('tr'));

            for (var i = 0 ; i < this.register_size; i++) {
                var element = document.createElement('td');
                this.row.appendChild(element);
                var register = new Register(element);
                this.registers.push(register);
            }
        }
    };

    return Registers;
});
