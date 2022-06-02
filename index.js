const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    return cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
return cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Garfield){
    return cats.pop(Garfield);
}

function destructivelyRemoveFirstCat(Milo){
    return cats.shift(Milo);
}

function appendCat(Broom){
    return [...cats, Broom];
}

function prependCat(Arnold){
    return [Arnold, ...cats];
}

function removeFirstCat(){
    return cats.slice(1);
}

function removeLastCat(){
    return cats.slice(0,2);
}

