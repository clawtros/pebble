define(['mapper'], function(mapper) {

    var InstructionRow = function(instructionset, label, instruction, a, b) {
        this.label = label;
        this.instruction = instruction;
        this.a = a;
        this.b = b;
    };

    InstructionRow.prototype = {
        execute: function(instructionset) {
            instructionset.instructions[mapper[this.instruction]](this.a, this.b);
        }
    };

    return InstructionRow;
});
