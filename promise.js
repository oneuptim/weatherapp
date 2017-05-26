// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City Not found');
// }

// getTempCallback('Las Vegas', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('Success', temp);
//     }
// })

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Las Vegas').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise failed', err);
// });

function addPromise (num1, num2) {
    return new Promise(function (resolve, reject) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            resolve(num1 + num2);
        } else {
            reject('One of those is not a number, can\'t add browski');
        }
    });
}

addPromise(2, 2).then(function (sum) {
    console.log('Promise successful', sum);
}, function (err) {
    console.log('Promise failed', err);
});


addPromise(2, 'Test').then(function (sum) {
    console.log('Promise successful', sum);
}, function (err) {
    console.log('!!!!!!Promise failed!!!!', err);
});
