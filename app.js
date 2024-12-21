function print(text,num){
const direPath=path.join(__dirname,'/input/');
let txt = fs.readFileSync(`${direPath}${text}`, "utf-8");
let line=txt.split('\n');
for(let i=0;i<num;i++)
{
  console.log(line[i])
  fs.appendFileSync(`${__dirname}/output.txt`,line[i])
}
}
const fs= require('fs');
const path=require('path');
for(let i=1;i<=10;i++)
print(`txt${i}.txt`,i);
