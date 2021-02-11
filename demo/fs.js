const { error } = require('console')
const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname, 'test'), (err)=>{
// if (err){
//     throw err
// }
// console.log('Go')

// })
//Запись в файл
// const filePath = path.join(__dirname, 'test', 'test.txt')
// fs.writeFile(filePath, 'Hello', err =>{if(err){throw err}console.log('Fail await')}) //writeFile перетирает содержимое
// fs.appendFile(filePath, 'Hello', err =>{if(err){throw err}console.log('Fail await')}) //appendFile дополняет
//Чтение файла
fs.readFile ( filePath, 'utf-8',(err, content) => {
    if (err){
        throw err
    }
    console.log('Content: ', content)
})