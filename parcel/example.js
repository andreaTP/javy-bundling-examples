const randomwords = require('random-words');

const result = randomwords.generate()

writeOutput(result);

function writeOutput(output) {
    const encodedOutput = new TextEncoder().encode(JSON.stringify(output));
    const buffer = new Uint8Array(encodedOutput);
    Javy.IO.writeSync(1, buffer);
}
