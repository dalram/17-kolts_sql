
function getRegCode() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * 
   characters.length));
     }
     return result;
}

export default getRegCode;