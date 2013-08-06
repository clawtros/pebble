define([], function () {
    var InstructionSet = function (memory, registers, stack) {
        this.memory = memory;
        this.registers = registers;
        this.stack = stack;
    };
    
    InstructionSet.prototype = {
        getInstruction: function (name, a, b) {
            return this.instructions[name].apply(this, [a,b]);
        },
        instructions: {
            "MOVE" : function(a, b) {
                // fixme: haaack
                var newval = b.value;
                if (newval.value)
                    newval = newval.value
                a.value = newval;
            },

            "STORE" : function (a, b) {
                var newval_a = a.value;
                if (newval_a.value)
                    newval_a = newval_a.value
                
                var newval_b = b.value;
                if (newval_b.value)
                    newval_b = newval_b.value


                this.memory.store(this.registers.get(0).value, newval_a, newval_b);
            },

            "SUB" : function (a, b) {
                var newval_a = a.value;
                if (newval_a.value)
                    newval_a = newval_a.value
                
                var newval_b = b.value;
                if (newval_b.value)
                    newval_b = newval_b.value
                
                this.registers.get(0).value = newval_a - newval_b;
            },

            "RECALL" : function (a, b) {
                this.registers.get(0).value = this.memory[a][b].value;
            },
            "JUMP_IF_NOT_ZERO" : function (a) {
                if (this.registers.get(0).value != 0) {
                    this.stack.setExecutionPoint(a.value);
                }
            },
            "JUMP_IF_ZERO" : function (a) {
                if (this.registers.get(0).value == 0) {
                    this.stack.setExecutionPoint(a.value);
                }
            }

        }
    };
    
    return InstructionSet;
});
