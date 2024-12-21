
---

### **File Content Reader and Writer**

#### **Description**
This program reads lines from text files located in the `input` directory and writes them to an output file called `output.txt`. The program performs the following:

1. Reads a specified number of lines from each input file.
2. Displays the read lines on the console.
3. Appends the read lines to a single output file.

#### **Features**
- Dynamically reads from multiple input text files (`txt1.txt` to `txt10.txt`).
- Allows for customizable control over the number of lines read from each file.
- Consolidates content from all input files into a single output file.
- Outputs the content to the console for easy monitoring.

#### **Example**
For an input file `txt3.txt` with the following content:
```
Line 1
Line 2
Line 3
Line 4
Line 5
```

If the program reads 3 lines, the following will occur:
- Console output:
  ```
  Line 1
  Line 2
  Line 3
  ```
- `output.txt` content will include:
  ```
  Line 1
  Line 2
  Line 3
  ```

#### **Programmers**
- אליאס דבאג  
- נור עמאר  

#### **Code**
```javascript
const fs = require('fs');
const path = require('path');

function print(text, num) {
    const direPath = path.join(__dirname, '/input/');
    let txt = fs.readFileSync(`${direPath}${text}`, "utf-8");
    let line = txt.split('\n');
    for (let i = 0; i < num; i++) {
        console.log(line[i]);
        fs.appendFileSync(`${__dirname}/output.txt`, line[i] + '\n');
    }
}

for (let i = 1; i <= 10; i++) {
    print(`txt${i}.txt`, i);
}
```

--- 
