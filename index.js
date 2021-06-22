const fs = require('fs');
const path = require('path');

//1) Студентів з 1800 перевести в групу на 2000. І навпаки
// const removeFiles = (from, to) => {
//     fs.readdir(from, (err, files) => {
//         if (err) {
//             console.log("////////////////////////////////");
//             console.log(err);
//             console.log("////////////////////////////////");
//             return err;
//         }
//
//         files.forEach(fileName => {
//             fs.rename(path.join(from, fileName), path.join(to, fileName), err => {
//                 if (err) {
//                     console.log("////////////////////////////////");
//                     console.log(err);
//                     console.log("////////////////////////////////");
//                     return err;
//                 }
//             });
//         });
//     })
// }
//
// removeFiles(path.join(__dirname, "1800"), path.join(__dirname, "2000"));
// removeFiles(path.join(__dirname, "2000"), path.join(__dirname, "1800"));



// 2) Перемістити всіх дівчат в папку girls а хлопців в папаку boys.
// const pathToGirls = path.join(__dirname, "girls");
// const pathToBoys = path.join(__dirname, "boys");
//
// const sortGenders = (pathToDir) => {
//     fs.readdir(pathToDir, (err, files) => {
//         files.forEach(fileName => {
//             fs.readFile(path.join(pathToDir, fileName), (err, data) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 let gender = JSON.parse(data.toString()).gender;
//                 if (gender === "male") {
//                     fs.rename(path.join(pathToDir, fileName), path.join(pathToBoys, fileName), err => {
//                         if(err) {
//                             console.log(err);
//                             return;
//                         }
//                     })
//                     return;
//                 }
//                 fs.rename(path.join(pathToDir, fileName), path.join(pathToGirls, fileName), err => {
//                     if(err) {
//                         console.log(err);
//                     }
//                 })
//             })
//         })
//     })
// }
// sortGenders(path.join(__dirname, "1800"))
// sortGenders(path.join(__dirname, "2000"))



// * вам потрбіно перемісти всі файлики з вкладених папок в іншу папку. Зробити всі файли на одному рівні вкладеності.
// const pathDir = path.join(__dirname);
// function flat(pathTo) {
//     fs.readdir(pathTo, (err, files) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         files.forEach(fileName => {
//             fs.stat(path.join(pathTo, fileName), (err, statistic) => {
//                 if (statistic.isFile()) {
//                     fs.rename(path.join(pathTo, fileName), path.join(pathDir, fileName), err => {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                     })
//                     return;
//                 }
//                 flat(path.join(pathTo, fileName));
//             })
//         })
//     })
// }
//
// //flat all files in directory 1
// flat(path.join(pathDir, "1"));



//*****************************************************************Backup*************
fs.mkdir(path.join(__dirname, '1800'), {recursive: true}, err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.mkdir(path.join(__dirname, '2000'), {recursive: true}, err => {
    if(err) {
        console.log(err);
        return;
    }
})

const users = ["Karina", "Oleg", "Kate", "Vlad", "Yulia", "Victor"];

fs.writeFile(path.join(__dirname, '1800', 'Karina.txt'), '{"gender": "female"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.writeFile(path.join(__dirname, '1800', 'Oleg.txt'), '{"gender": "male"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.writeFile(path.join(__dirname, '1800', 'Karina.txt'), '{"gender": "female"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.writeFile(path.join(__dirname, '1800', 'Kate.txt'), '{"gender": "female"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.writeFile(path.join(__dirname, '2000', 'Vlad.txt'), '{"gender": "male"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.writeFile(path.join(__dirname, '2000', 'Yulia.txt'), '{"gender": "female"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})

fs.writeFile(path.join(__dirname, '2000', 'Victor.txt'), '{"gender": "male"}', err => {
    if(err) {
        console.log(err);
        return;
    }
})
