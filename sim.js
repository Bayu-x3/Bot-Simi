const fetch = require('node-fetch')
var input1 = require('readline-sync');
const getISS = async () => {
    while (true) {
        var input = input1.question("User: ");
        if (input === "end") {
            break;
        }
        var url = 'https://api.simsimi.net/v2/?text=' +input+'&lc=id'
        resp = await fetch(url)
        msg = await resp.json()
        console.log(`Simi: ${msg.success}`)
    }
}
getISS()