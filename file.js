const path = require('path')
const fs = require('fs')

const folderPath = '\Files';

const date_ob = new Date();
const date = ("0" + date_ob.getDate()).slice(-2);
const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
const year = date_ob.getFullYear();
const hours = date_ob.getHours();
const minutes = date_ob.getMinutes();
const seconds = date_ob.getSeconds();

const dateAndTime = `${year}-${month}-${date}_${hours}-${minutes}-${seconds}`;

console.log(dateAndTime);

const fileName = `${dateAndTime}.txt`;
const filePath = path.join(folderPath,fileName);
const fileContent = date_ob.toString();

fs.writeFile(filePath,fileContent,(err) => {
    if(err) throw (err);
    console.log(`File ${fileName} has been created at folder ${folderPath}`);
})
