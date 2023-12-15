const tls = require('node:tls');
const fs = require('node:fs');

const options = {
        key: fs.readFileSync('server-key')
}