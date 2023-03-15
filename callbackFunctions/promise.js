var func = function (resolve, reject) {
    resolve(10);
};
var promise = new Promise((resolve, reject) => {
    resolve(10);
});
promise
    .then((val) => {
        console.log(val);
        return val + 1;
    })
    .then((val) => {
        console.log(val);
        return val + 1;
    })
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err)
    });