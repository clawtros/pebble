define(['instructionrow', 'valorregister'], function(InstructionRow, ValOrRegister) {

    var InstructionRowEntry = function(parent, instructionset, registers) {
        this.instructionset = instructionset;
        this.parent = parent;
        this.registers = registers;
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

            this.firstArgInputCheck = document.createElement("input");
            this.firstArgInputCheck.className = "is_register";
            this.firstArgInputCheck.setAttribute('type', 'checkbox');
            this.firstArgCell.appendChild(this.firstArgInputCheck);

            this.secondArgCell = this.element.appendChild(document.createElement("td"));
            this.secondArgInput = document.createElement("input");
            this.secondArgInput.className = "entry_cell";
            this.secondArgInput.setAttribute('type', 'number');
            this.secondArgCell.appendChild(this.secondArgInput);

            this.secondArgInputCheck = document.createElement("input");
            this.firstArgInputCheck.className = "is_register";
            this.secondArgInputCheck.setAttribute('type', 'checkbox');
            this.secondArgCell.appendChild(this.secondArgInputCheck);

        },

        asInstructionRow: function() {
            if (!this.labelCell.querySelector('input').value && !this.instructionCell.querySelector('input').value)
                return false;
            
            return new InstructionRow(
                this.instructionset,
                this.labelCell.querySelector('.entry_cell').value,
                this.instructionCell.querySelector('.entry_cell').value,
                new ValOrRegister(this.firstArgCell.querySelector('.entry_cell').value,
                                  this.firstArgCell.querySelectorAll('input[type="checkbox"]:checked').length > 0, 
                                  this.registers),
                new ValOrRegister(this.secondArgCell.querySelector('.entry_cell').value, 
                                  this.secondArgCell.querySelectorAll('input[type="checkbox"]:checked').length > 0, 
                                  this.registers));
                                      
        }
    };

    return InstructionRowEntry;
});
