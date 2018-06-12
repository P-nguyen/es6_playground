import { addParagraph } from './helpers';
import SuperPerson from './person';

const peter = new SuperPerson('Peter', 'SUPER BUNDURU');
addParagraph( peter.talk('BUNDURU!') );
addParagraph( peter.saySuperPower());
