define(['memory', 'registers', 'instructionrowentry', 'stack', 'instructionset'], 
       function (Memory, 
                 Registers, 
                 InstructionRowEntry, 
                 Stack, 
                 InstructionSet) 
{ 
    var Interpreter = function () {

    };

    var MEM_SIZE = 20,
        REGISTER_SIZE = 8;

    Interpreter.prototype = {
        initializeMemory: function() {
            this.memory = new Memory(MEM_SIZE);
            this.memory.initialize();
        },

        initializeRegisters: function() {
            this.registers = new Registers(REGISTER_SIZE, document.getElementById("registers"));
            this.registers.initialize();
        },

        initializeStack: function() {
            this.stack = new Stack();
        },

        initializeInput: function() {
            for (var i = 0; i < 20; i++) {
                var row = new InstructionRowEntry(
                    document.getElementById("entry"),
                    this.instructionset);
                row.initElement();
            }
            document.getElementById('run').addEventListener('click', this.run, this);
        },

        initialize: function() {
            this.initializeMemory();
            this.initializeRegisters();
            this.initializeStack();

            this.instructionset = new InstructionSet(this.memory, this.registers, this.stack);
            this.initializeInput();
        },
        run: function() {
            console.log('aah', this);
        }
    };

    // TODO: aah move this to a main thing
    var interpreter = new Interpreter();
    interpreter.initialize();

    return Interpreter;
});
