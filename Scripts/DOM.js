
//alert("nitin");
document.getElementById("Heading").innerHTML = "Nitin Hello JavaScript!";

let htmDoocument = document.getElementById("Heading");
console.dir(htmDoocument);
console.log(htmDoocument);

let htmPara = document.getElementsByClassName("para");
console.dir(htmPara);
console.log(htmPara);

let htmTag = document.getElementsByTagName("p");
console.dir(htmTag);
console.log(htmPara);

//========================================================= 

////document.querySelector(“#Heading / .para / tag”)
////returns first element

////document.querySelectorAll(“#myId / .myClass / tag”)
////returns a NodeList

//=========================================================

let el = document.createElement("div")
node.append( el ) //adds at the end of node (inside)
node.prepend( el ) //adds at the start of node (inside)
node.before( el ) //adds before the node (outside)
node.after( el ) //adds after the node (outside)

//***************************************************************************//
//Delete Element

//node.remove( ) //removes the node

//***************************************************************************//
