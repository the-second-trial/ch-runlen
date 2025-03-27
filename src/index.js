const { encode } = require("./encode");

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('An input string must be provided');
    process.exit(1);
}

const decoded = encode(args[0]);
console.log('Decoded:', decoded);
