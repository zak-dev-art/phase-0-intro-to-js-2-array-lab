const cats = ["Milo", "Otis", "Garfield"];
console.log(cats.length)

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
console.log(cats)

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
console.log(cats)

function destructivelyRemoveLastCat(name) {
    cats.pop()
}
console.log(cats)

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}
console.log(cats)

function appendCat(name) {
   return [...cats, "Broom"];
}
console.log(appendCat())

function prependCat(name) {
   return ["Arnold", ...cats];
}
console.log(prependCat())

function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}
console.log(removeLastCat())

function removeFirstCat(){
    return cats.slice(1)
}
console.log(removeFirstCat())