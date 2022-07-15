
import { cipnn } from './dist/cipnn.js';

const myPhone = "+2252720225345";
const pnn =  new cipnn(myPhone);
console.log(`analysis `, pnn);
console.log(`Migrating ${myPhone} to 10, 
${pnn.migrate8To10()} is your new ${pnn.findType()} number`);