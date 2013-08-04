

define([], function () {
    var InstructionSet = function (memory, registers, stack) {
        this.memory = memory;
        this.registers = registers;
        this.stack = stack;
    };
    
    InstructionSet.prototype = {
        instructions: {
            "MOVE" : function(a, b) {
                if (a.isPointer()) {
                    a.value = b;
                } else {
                    throw Exception();
                }
            },
            "STORE" : function (a, b) {
                memory[a][b].value = registers.get(0).value;
            },
            "RECALL" : function (a, b) {
                registers.get(0).value = memory[a][b].value;
            },
            "JUMP_IF_ZERO" : function (a) {
                if (registers.get(0) == 0) {
                    stack.setExecutionPoint(stack.getLabel(a));
                }
            }
        }
    };
    
    return InstructionSet;
});
