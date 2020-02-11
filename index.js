const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const CHARACTER_SETS = [
    {'name':"Numbers", 'content': "0123456789" }, 
    {'name':"Lowercase", 'content': "abcdefghijklmnopqrstuvwxyz" }, 
    {'name':"Uppercase", 'content': "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    {'name':"ASCII", 'content': "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" },
];
const GENERATE_OUTPUT = (t = []) => {
    for (i = 0; i < CHARACTER_SETS.length; i++) t.push(`${i+1}. ${CHARACTER_SETS[i].name}`);
    return t.join("\n");
};
console.log(`Detected ${CHARACTER_SETS.length} Character sets:\n${GENERATE_OUTPUT()}`);
rl.question('Select Character sets to work with (numbers with spaces): ', (sets, str = []) => {
    sets = sets.split(" ").map((e) => parseInt(e) > 0 && parseInt(e) < CHARACTER_SETS.length +1 ? str.push(CHARACTER_SETS[parseInt(e) -1].content) : 0);
    str = str.join("");
    rl.question('Enter password length: ', (l, pass=[]) => {
        for (i = 0; i < parseInt(l); i++)  pass.push(str[Math.floor(Math.random() * (str.length))]); 
        console.log("Generated password: " + pass.join(""));
        process.exit(0);
    });
});

