define([], function () {
    var InstructionSet = function (memory, registers, stack) {
        this.memory = memory;
        this.registers = registers;
        this.stack = stack;
    };
    
    InstructionSet.prototype = {
        instructions: {
            "MOVE" : function(a, b) {
                this.registers.get(a).value = b;
            },
            "STORE" : function (a, b) {
                this.memory[a][b].value = this.registers.get(0).value;
            },
            "RECALL" : function (a, b) {
                this.registers.get(0) = memory[a][b].value;
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
