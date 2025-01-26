const url = "https://catfact.ninja/fact";


const factparaAsync = document.querySelector("#factparaAsync");
const btnAsyncCall = document.querySelector("#btnAsyncCall");
let rsedata = null;

//using async function
const getFacts = async () => {
    console.log("gettingdata...");
    let responseAkaPromise = await fetch(url);
    console.log(responseAkaPromise);
    rsedata = await responseAkaPromise.json();
    console.log(rsedata);
    console.log(rsedata.fact);
    factparaAsync.innerHTML = "<b>Async Response ## </B> "+rsedata.fact;

};

btnAsyncCall.addEventListener("click", getFacts);
//======================================================================================================

//same code using promise

const factparaPromise = document.querySelector("#factparaPromise");
const btnPromiseAsyncll = document.querySelector("#btnPromiseCall");

function getFactsPromise() {
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            factparaPromise.innerHTML = "<b>Promise Response ## </B> "+data.fact;
        });
}

btnPromiseAsyncll.addEventListener("click", getFactsPromise);
//======================================================================================================


