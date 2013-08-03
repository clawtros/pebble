define(['memory', 'registers'], function (Memory, Registers) { 
    var Interpreter = function () {

    };

    var MEM_SIZE = 20;

    Interpreter.prototype = {
        initializeMemory: function() {
            this.memory = new Memory(MEM_SIZE);
            this.memory.initialize();
        }
    };

    var interpreter = new Interpreter();
    interpreter.initializeMemory();

    return Interpreter;
});
