const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", data => {
    const cmd = data.toString().trim();

    if (cmd === "pwd") {
        pwd();
    }

    if (cmd === "ls") {
        ls();
    }

    if (cmd.split(" ")[0] === "cat") {
        let file = "./" + cmd.split(" ")[1];
        console.log(file);
        cat(file);
    }

    // process.stdout.write('\nYou typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});
