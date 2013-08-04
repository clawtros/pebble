define(['instructionrow'], function(InstructionRow) {

    var InstructionRowEntry = function(parent, instructionset) {
        this.instructionset = instructionset;
        this.parent = parent;
    };

    InstructionRowEntry.prototype = {
        initElement: function () {
            this.element = document.createElement("tr");
            this.parent.appendChild(this.element);

            this.labelCell = this.element.appendChild(document.createElement("td"));
            this.labelInput = document.createElement("input");
            this.labelInput.className = "entry_cell";
            this.labelInput.setAttribute('type', 'number');
            this.labelCell.appendChild(this.labelInput);
            
            this.instructionCell = this.element.appendChild(document.createElement("td"));

            this.instructionInput = document.createElement("input");
            this.instructionInput.className = "entry_cell";
            this.instructionInput.setAttribute('type', 'number');
            this.instructionCell.appendChild(this.instructionInput);

            this.firstArgCell = this.element.appendChild(document.createElement("td"));

            this.firstArgInput = document.createElement("input");
            this.firstArgInput.className = "entry_cell";
            this.firstArgInput.setAttribute('type', 'number');
            this.firstArgCell.appendChild(this.firstArgInput);

            this.secondArgCell = this.element.appendChild(document.createElement("td"));

            this.secondArgInput = document.createElement("input");
            this.secondArgInput.className = "entry_cell";
            this.secondArgInput.setAttribute('type', 'number');
            this.secondArgCell.appendChild(this.secondArgInput);

        },

        asInstructionRow: function() {
            if (!this.labelCell.querySelector('input').value && !this.instructionCell.querySelector('input').value)
                return false;
            return new InstructionRow(
                this.instructionset,
                this.labelCell.querySelector('input').value,
                this.instructionCell.querySelector('input').value,
                this.firstArgCell.querySelector('input').value,
                this.secondArgCell.querySelector('input').value);
                                      
        }
    };

    return InstructionRowEntry;
});
