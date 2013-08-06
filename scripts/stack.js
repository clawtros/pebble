define([], function() {
    var Stack = function() {
        this.executionPosition = 0;
        this.labels = {};
        this.instructions = [];
    };

    Stack.prototype = {
        canExecute: function() {
            return this.executionPosition < this.instructions.length;
        },
        
        setExecutionPoint: function (label) {
            if (this.labels[label]) {
                this.executionPosition = this.labels[label];
            }
        },
        step: function() {
            this.instructions[this.executionPosition++].execute();
        },
        parse: function (instructions) {
            this.executionPosition = 0;
            this.labels = {};
            this.instructions = [];

            for (var i = 0, l = instructions.length; i < l; i ++) {
                var instruction = instructions[i];
                if (instruction.label) {
                    this.labels[instruction.label] = i;
                }
                // TODO: oh no the python trap
                if (instruction.instruction) {
                    this.instructions.push(instruction);
                }
            }
        }
    };

    return Stack;
});
