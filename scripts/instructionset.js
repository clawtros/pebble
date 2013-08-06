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
                console.log(a.value, b.value);
                // fixme: haaack
                var newval = b.value;
                if (newval.value)
                    newval = newval.value
                a.value = newval;
            },

            "STORE" : function (a, b) {
                this.memory.store(this.registers.get(0).value, a.value, b.value);
            },

            "SUB" : function (a, b) {
                this.registers.get(0).value = a.value - b.value;
            },

            "RECALL" : function (a, b) {
                this.registers.get(0).value = this.memory[a][b].value;
            },

            "JUMP_IF_ZERO" : function (a) {
                if (registers.get(0) == 0) {
                    this.stack.setExecutionPoint(this.stack.getLabel(a));
                }
            }

        }
    };
    
    return InstructionSet;
});
