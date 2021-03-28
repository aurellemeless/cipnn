
import { CIphonePnn } from './dist/cipnn.min.js';

const myPhone = "+2252720225345";
const pnn =  new CIphonePnn(myPhone);
console.log(`analysis `, pnn);
console.log(`Migrating ${myPhone} to 10, 
${pnn.migrate8To10()} is your new ${pnn.findType()} number`);