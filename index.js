

const cats = ["Milo","Otis","Garfield"];
const newCats = [...cats, "Broom"] 
const removedCats = ["Arnold", ...cats ]

function destructivelyAppendCat(name){
    cats.push(name)
}
//console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name){
    cats.unshift(name)
}
//console.log(destructivelyPrependCat("Bob"));


function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}



function appendCat(name){
  //const newCats = [...cats, "Broom"] -- can you add const to a function 
    return newCats 
}

function prependCat(name){
    return removedCats
}

function removeLastCat(){
    const lastCat = [...cats];
    lastCat.splice(2,1);
    return lastCat
}
 

function removeFirstCat(){
    const firstCat = [...cats];
    firstCat.splice(0,1);
    return firstCat
}

