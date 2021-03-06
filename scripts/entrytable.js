define(['instructionrowentry'], function(InstructionRowEntry) {
    var EntryTable = function(parent, instructionset, max_instructions) {
        this.max_instructions = max_instructions;
        this.instructionset = instructionset;
        this.parent = parent;
        this.rows = [];
    }

    EntryTable.prototype = {
        initialize: function(registers) {
            this.rows = [];
            for (var i = 0; i < this.max_instructions; i++) {
                var row = new InstructionRowEntry(
                    this.parent,
                    this.instructionset,
                    registers
                );
                row.initElement();
                this.rows.push(row);
            }
        },
        getInstructions: function() {
            var instructions = [];
            for (var i = 0, l = this.rows.length; i < l; i++) {
                var row = this.rows[i].asInstructionRow();
                if (row) 
                    instructions.push(row);
            }
            return instructions;
        }
    }
    return EntryTable;
});
