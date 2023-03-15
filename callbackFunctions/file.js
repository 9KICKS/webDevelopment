// var fs = require("fs");

setTimeout(() => {
    console.log("Before the file");

    fs.readFile("file.txt", "utf-8", (err, data) => {
        if (err == null) {
            console.log(data);
        } else {
            console.log(err)
        }
    });
}, 3000);

// var func = function () {
//     console.log(`Timeout`);
// };
//
// setTimeout(func, 2000);

function sample(value, func) {
    func(value);
}

function sample2(value, func) {
    func(value);
}

function sample3(value, func) {
    func(value);
}

function sample4(value, func) {
    func(value);
}

sample(20, (val) => {
    console.log(val);
    sample2(30, (val) => {
        console.log(val);
        sample3(40, (val) => {
            console.log(val);
            sample4(50, (val) => {
                console.log(val);
            });
        });
    });
});