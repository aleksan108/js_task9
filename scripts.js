
const addButton = document.getElementById('addButton');
const readyButton = document.getElementById('readyButton');
const value1 = document.getElementById('ivalue1');
const resultID = document.getElementById('result');
const sumResultID = document.getElementById('sumResult');
let arr = [];

addButton.addEventListener("click", sumInput);
readyButton.addEventListener("click",arrReady);
value1.addEventListener("keypress", function(event){
    if (event.key ==="Enter"){
        event.preventDefault();
        sumInput();
    }
});

function sumInput(){
    arr.push(value1.value);
    value1.value='';
}

function arrReady(){
    console.log(arr);
    arr.sort(sortArr);
    let sum = 0;
    resultID.textContent=`Отсортированный массив: ${arr}`;
    for (let i = 0; i < arr.length; i++){
        sum = sum + Number(arr[i]);
    }
    sumResultID.textContent = `Сумма элементов массива: ${sum}`;
}

function sortArr(a,b){
    if (a > b) {
        return 1;
    }else if (b > a) {
        return -1;
    }else{
        return 0;
    }
}

