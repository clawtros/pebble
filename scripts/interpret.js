define(['memory', 'registers', 'entrytable', 'stack', 'instructionset'], 
       function (Memory, 
                 Registers, 
                 EntryTable, 
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
            var self = this;
            this.entrytable = new EntryTable(document.getElementById('entry'), 20);
            this.entrytable.initialize();
            document.getElementById('run').addEventListener('click', function() {
                self.run();
            });
        },

        initialize: function() {
            this.initializeMemory();
            this.initializeRegisters();
            this.initializeStack();

            this.instructionset = new InstructionSet(this.memory, this.registers, this.stack);
            this.initializeInput();
        },
        run: function() {
            var instructions = this.entrytable.getInstructions();
            console.log(instructions);
            this.stack.parse(instructions);
            console.log(this.stack);
            this.stack.step();
        }
    };

    // TODO: aah move this to a main thing
    var interpreter = new Interpreter();
    interpreter.initialize();

    return Interpreter;
});
