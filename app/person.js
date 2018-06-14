
class Person {
    constructor(name){
        this.name = name;
    }

    talk( text ){
        return `${ this.name } says: ${ text }`;
    }
    greeting( text ){
        return `Hello! my name is ${ this.name }`;
    }
    dance(){
        return `${this.name} is now dancing`;
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
    attack( target ){
        let speech = `${this.name} attacks: HAHA! I slapped ${target.name}`
        this.talk(speech);
        target.damaged(this.name);
        return speech;
    }
    damaged( targetName ){
        let speech = `${this.name}says: OUCH! ${targetName} SLAPPED ME!`
        this.talk(speech);
        return speech;
    }
}

export default SuperPerson;

//add two more functions to both classes.