# CI PNN 

Phone number from Côte d'Ivoire according  : https://fr.wikipedia.org/wiki/Liste_des_indicatifs_t%C3%A9l%C3%A9phoniques_en_C%C3%B4te_d%27Ivoire
- You can migrate an old CI number to up to date number
- You get details information on the phone number :

    The company that host the number
    The type of the number, if it is mobile of home phone


demo.js 
```javascript

import { CIphonePnn } from './js/cipnn.min.js';

const myPhone = "002252709130834";
const pnn =  new CIphonePnn(myPhone);
console.log(`number analysis `, pnn);
console.log(`Migrating ${myPhone} to 10, 
${pnn.migrate8To10()} is your new ${pnn.findType()} number`);

```

index.html 
```html
<!DOCTYPE html>
    <head>
    </head>
    <body>
    <h3 style="text-align: center;"> Open the js console on developer tool</h3>
    <!--HTML content goes here-->
    <script type="module" src="demo.js"></script>
    </body>
</html>

```
# Properties

| Attribute      | Description | Type |
| ----------- | ----------- | ----------- |
| iPrefix      | international prefix       | String / null      |
| format   | Text     phone number format :  local or international   | String       |
| phone   | Text      phone number  |
| localPart   | Text     phone number without international prefix  | String      |
| network   | network provider, company        | String / null       |
| type   | number type, mobil or home phone        | String / null       |

# Number migration

| Attribute      | Description | Type |
| ----------- | ----------- | ----------- |
| migrate8To10      | Return new number if the number is correct or null if it's an invalid number       | String / null      |
