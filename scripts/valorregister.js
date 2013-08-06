define([], function() {
    var ValOrRegister = function (value, is_register, registers) {
        this._value = value;
        this.is_register = is_register;
        this.registers = registers;

    };

    ValOrRegister.prototype.__defineGetter__('value', function() {
        if (this.is_register) {
            return this.registers.get(this._value);
        } else {
            return this._value;
        }
    });

    ValOrRegister.prototype.__defineSetter__('value', function(newval) {
        if (this.is_register) {
            return this.registers.get(this._value).value = newval;
        } else {
            return this._value = newval;
        }
    });

    return ValOrRegister;
});
