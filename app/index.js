import { addParagraph } from './helpers';
import SuperPerson from './person';

const peter = new SuperPerson('Peter', 'SUPER BUNDURU');
addParagraph( peter.talk('BUNDURU!') );
addParagraph( peter.saySuperPower());

const jhon = new SuperPerson('Jhon', 'ULTRA BUNDURU');
addParagraph( jhon.talk('ME TOO'));
addParagraph( jhon.saySuperPower());

addParagraph( peter.dance());
addParagraph( jhon.attack(peter));