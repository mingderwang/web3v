
var Web3 = require('web3');

// var ver = web3.version.api;
// console.log(ver);

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://163.172.189.5:8545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    // web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.64.2:8545"));
}

// window.addEventListener('load', function() {
//
//     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//     if (typeof web3 !== 'undefined') {
//         // Use Mist/MetaMask's provider
//         window.web3 = new Web3(web3.currentProvider);
//     } else {
//         console.log('No web3? You should consider trying MetaMask!')
//         // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//         window.web3 = new Web3(new Web3.providers.HttpProvider("http://163.172.189.5:8545"));
//     }
//
//     // Now you can start your app & access web3 freely:
//     startApp()
//
// })

// window.addEventListener('load', function() {
//
//     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//     if (typeof web3 !== 'undefined') {
//         // Use Mist/MetaMask's provider
//         window.web3 = new Web3(web3.currentProvider);
//     } else {
//         console.log('No web3? You should consider trying MetaMask!')
//         // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//         window.web3 = new Web3(new Web3.providers.HttpProvider("http://163.172.189.5:8545"));
//     }
//
//     // Now you can start your app & access web3 freely:
//     startApp()
//
// })

// web3.eth.getBlock(48, function(error, result){
//     if(!error)
//         console.log(result);
//     else
//         console.error(error);
// });

var number = 1;
web3.eth.getBlockNumber(function(error, result){
    if(!error) {

        console.log('A:' + result);
        number = result;
        // console.log(number);
        // return number = result;
    }

    else
        console.error(error);
});

// console.log('A:' + number);

// var number = web3.eth.blockNumber;
// console.log(web3.eth.blockNumber);

// var ver = web3.version.api;
// console.log(web3.version.api);

// var number = 15;

function mytest() {

    // var number = web3.eth.blockNumber;
    console.log('B:' + number);

    document.getElementById("demo").innerHTML = number;

}

// console.log(mytest(15));

// mytest();


