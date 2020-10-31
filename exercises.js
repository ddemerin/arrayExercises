let array1 = [1, 2, 3,];
let array2 = ["jump", "duck", "punch"];

function GetFirstElement(array, index){
    // console.log(array[index]);
   return array[index];
}

function RemoveLastElement(array){
    // console.log(array.pop());
    return array.pop();
}

function GetRandomElement(array){
    // console.log(array[Math.floor(Math.random() * array.length)]);
    return array[Math.floor(Math.random() * array.length)];
}

function AddElement(array, item){
    array.push(item);
}

let getFirstElement = GetFirstElement(array1, 0);
let removeLastElement = RemoveLastElement(array1);
let getRandomElement = GetRandomElement(array2);
AddElement(array1, 3);
AddElement(array1, 4);

console.log(getFirstElement);
console.log(removeLastElement);
console.log(getRandomElement);
console.log(array1);


// GetFirstElement(array1, 0);
// GetFirstElement(array2, 0);
// RemoveLastElement(array1);
// RemoveLastElement(array2);
// GetRandomElement(array1);
// AddElement(array1, 3);
// AddElement(array2, "punch");


for (let i = 0; i <= 20; i++){
    if (i % 2 == 0)
    {
        console.log(`${i} is even.`);
    }
    else
    {
        console.log(`${i} is odd.`)
    }
}

for (let i = 0; i <= 10; i++){
    console.log(`${i} times 9 = ${i*9}`);
}

let counter = 100
while (counter >= 0){
    console.log(`The counter is at ${counter}`);
    counter--;
}

let problemArray = [["Lion","Deer","Sheep"],["Cub","Fawn","Lamb"]]

for (let i = 0; i < problemArray.length; i++){
    console.log(problemArray[i])
    for (let j = 0; j < problemArray[i].length; j++){
        console.log(problemArray[i][j]);
    }
}