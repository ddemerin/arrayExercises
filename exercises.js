let array1 = [1, 2, 3,];
let array2 = ["jump", "duck", "punch"];

function GetFirstElement(array, index){
    console.log(array[index]);
}

function RemoveLastElement(array){
    console.log(array.pop());
}

function GetRandomElement(array){
    console.log(array[Math.floor(Math.random() * array.length)]);
}

function AddElement(array, item){
    array.push(item);
    console.log(array);
}


GetFirstElement(array1, 0);
GetFirstElement(array2, 0);
RemoveLastElement(array1);
RemoveLastElement(array2);
GetRandomElement(array1);
AddElement(array1, 3);
AddElement(array2, "punch");