// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject("City not found")
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('Promise success');
// }, function(err){
//   console.log('Promise error');
// })

function addPromese (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      return resolve(a+b)
    } else {
      return reject("This is not number");
    }
  });
}

addPromese(1, 20).then(function(temp) {
  console.log(temp);
}, function(err) {
  console.log(err);
});
