File Content Reader and Writer
Description
This program reads lines from multiple input text files and writes them to a single output file. It performs the following tasks:

Reads content from files named txt1.txt to txt10.txt located in the input directory.
Outputs a specified number of lines from each file to the console.
Appends these lines to an output file named output.txt in the program's root directory.
Features
Reads content from multiple input text files dynamically based on their names.
Allows the user to specify how many lines to read from each file.
Appends the read content to a single output file, ensuring the file grows with each run.
Outputs the content to the console for easy verification.
Example
For a file named txt3.txt with the following content:

mathematica
Copy code
Line 1
Line 2
Line 3
Line 4
Line 5
If the program is instructed to read 3 lines from txt3.txt, the following happens:

The console outputs:
mathematica
Copy code
Line 1
Line 2
Line 3
The output.txt file will include:
mathematica
Copy code
Line 1
Line 2
Line 3
Code
javascript
Copy code
const fs = require('fs');
const path = require('path');

function print(text, num) {
    const direPath = path.join(__dirname, '/input/');
    let txt = fs.readFileSync(`${direPath}${text}`, "utf-8");
    let line = txt.split('\n');
    for (let i = 0; i < num; i++) {
        console.log(line[i]);
        fs.appendFileSync(`${__dirname}/output.txt`, line[i]);
    }
}

const fs = require('fs');
const path = require('path');
for (let i = 1; i <= 10; i++) {
    print(`txt${i}.txt`, i);
}
programmers:

elias dabbagh 

noor ammar
