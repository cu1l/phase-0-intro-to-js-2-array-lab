// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const catsTwo = [...cats];
const catsThree = [...cats];
const catsFour = [...cats];
const catsFive = [...cats];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    catsTwo.push(name);
    return catsTwo;
}

function prependCat(name){
    catsThree.unshift(name);
    return catsThree;
}

function removeLastCat(){
    catsFour.pop();
    return catsFour;
}

function removeFirstCat(){
    catsFive.shift();
    return catsFive;
}