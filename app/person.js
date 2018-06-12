
class Person {
    constructor(name){
        this.name = name;
    }

    talk( text ){
        return `${ this.name } says: ${ text }`;
    }
}

class SuperPerson extends Person {
    constructor(name, superpower){
        super(name);
        this.superpower = superpower;
    }
    saySuperPower(){
        return this.talk( `I can find ${this.superpower}` );
    }
}

export default SuperPerson;
