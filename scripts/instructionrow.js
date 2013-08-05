define(['mapper'], function(mapper) {

    var InstructionRow = function(instructionset, label, instruction, a, b) {
        this.label = label;
        this.instruction = instruction;
        this.a = a;
        this.b = b;
        this.instructionset = instructionset;
    };

    InstructionRow.prototype = {
        execute: function(instructionset) {
            console.log(mapper[this.instruction], this.a, this.b );
            this.instructionset.getInstruction(mapper[this.instruction], this.a, this.b );
        }
    };

    return InstructionRow;
});
