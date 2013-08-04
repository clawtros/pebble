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
        parse: function (instructions) {
            this.executionPosition = 0;
            this.labels = {};
            this.instructions = [];

            for (var i = 0, l = instructions.length; i < l; i ++) {
                var instruction = instructions[i];
                if (instruction.label) {
                    this.labels[instruction.label] = i;
                    this.instructions.push(instruction);
                }
            }
        }
    };

    return Stack;
});
