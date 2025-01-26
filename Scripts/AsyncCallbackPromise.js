// Description: This script demonstrates the use of callback functions in JavaScript.
function sumCallback (a, b) {
    console.log(a + b);
}

function calculator (a, b, sumCallback) {
    sumCallback(a + b);
}

calculator(3, 4, sumCallback);  // Output: 7
//=======================================================================================
// another callback example
function calculator_two(f, s, callback) {
    callback(f, s);
}

calculator_two(3, 4, (a, b) => { console.log(a + b); });  // Output: 7;
//=======================================================================================
// another Callback example

function getdata(dataId, GetNextData){
    setTimeout(() => {
        console.log('Data is fetched' + dataId);
        if(GetNextData) {
            GetNextData();
        }
    }, 2000);
}
//---------------------------------------------------------------------------------------
getdata(1, () => { getdata(2); });

getdata(1, () => {
    getdata(2, () => {
        getdata(3, () => {
            getdata(4, () => {
                getdata(5, () => {
                    console.log('All data is fetched');
                });
            });
        });
    });
});

//****************************************************************************************//

//###  Promises
//A JavaScript Promise object can be:
//Pending : the result is undefined
//Resolved : the result is a value (fulfilled)
//Rejected : the result is an error object

let MyPromise = new Promise((resolve, reject) => {
    console.log('Promise started');
    reject("Due to some reason, the promise is rejected");
});

let MyPromise_TWO = new Promise((resolve, reject) => {
    console.log('Promise started');
    resolve("Promise is resolved successfully You got the data");
});
//---------------------------------------------------------------------------------------
function getApiPromisdata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data is fetched' + dataId);
            resolve("Success: Data is fetched " + dataId);
        }, 2000);
    });
}

let ApiPromise = getApiPromisdata(1);

//---------------------------------------------------------------------------------------
//Promises method  .then( ) & .catch( )
//promise.then( ( res ) => { .... } )
//promise.catch( ( err ) ) => { .... } )

const getnewPromisData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise is fulfilled");
            resolve("Data is fetched");
        }, 2000);
    });
}

const getnewPromisData_two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise is fulfilled");
            resolve("Data is fetched");
        }, 2000);
    });
}
//============
let nwepromise = getnewPromisData();
nwepromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
//---------------------------------------------------------------------------------------
// Calling other way to chain
let p1 = getnewPromisData();
p1.then((res) => { 
    console.log("fetching next data"); 
    return getnewPromisData_two();
}).then((res) => {
    console.log(res); 
}).catch((err) => {
    console.error(err);
});
//---------------------------------------------------------------------------------------

function getchaindata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is fetched " + dataId);
            resolve("Data is fetched " + dataId);
        }, 2000);
    });
}
// Calling other way to chain
getchaindata(1).then((res) => {
    console.log(res);
    return getchaindata(2);
}).then((res) => {
    console.log(res);
    return getchaindata(3);
}).then((res) => {
    console.log(res);
    return getchaindata(4);
}).then((res) => {
    console.log(res);
    return getchaindata(5);
}).then((res) => {
    console.log(res);
    console.log("All data is fetched");
}).catch((err) => {
    console.error(err);
});

//---------------------------------------------------------------------------------------
//Promise chain
getApiPromisdata(1)
    .then((res) => { console.log(res); return getApiPromisdata(2); })
    .then((res) => { console.log(res); return getApiPromisdata(3); })
    .then((res) => { console.log(res); return getApiPromisdata(4); })
    .then((res) => { console.log(res); return getApiPromisdata(5); })
    .then((res) => { console.log(res); console.log('All data is fetched'); })
    .catch((err) => { console.log(err); });
//---------------------------------------------------------------------------------------
//****************************************************************************************//

// ###  Async/Await

function getAsyndata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is fetched " + dataId);
            resolve("Data is fetched " + dataId);
        }, 2000);
    });
}
// await only used inside async function
async function getWeaterData() {
    await getAsyndata(1);
    await getAsyndata(2);   
}

//****************************************************************************************//
//#### An IIFE (Immediately Invoked Function Expression)

// standard IIFE
(function () {
    console.log('Immediately Invoked Function Expression one # Anonymous Functions');
})();

// arrow function variant
(() => {
    console.log('Immediately Invoked Function Expression two # arrow function');
})();

// async IIFE
(async () => {
    console.log('Immediately Invoked Function Expression three # async function');
})();
