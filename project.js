//creating buttons
for(let i=0; i<20; i++) {
    let s = '<button type="button" class="myButton" id="'+ i+1 +'"> </button>';
    if(i !== 0 && i%5 === 0) document.getElementById("container").innerHTML += "<br>";
    document.getElementById("container").innerHTML += s;
}

//declaring firstHalf (1-20) and second half(21-40)
var firstHalf = [], secondHalf = [], firstHalfButtonClickOrder = [], secondHalfButtonClickOrder = [], colors = [];
let secondHalfIterator = 0;
for(var i=1; i<=20; i++) {
    firstHalf.push(i);
    secondHalf.push(i+20);
    firstHalfButtonClickOrder.push(0);
    secondHalfButtonClickOrder.push(0);
}
firstHalfButtonClickOrder.push(0);
firstHalfButtonClickOrder[0] = 1;
secondHalfButtonClickOrder.push(0);
secondHalfButtonClickOrder[0] = 1;

for(let k = 0; k < 40; k++) {
    colors[k] = "rgb(" + (255 - (4*k)) + ", " + (255 - (4*k)) + ", 255)";
}

//Array randomizing function
function randomizeArray(arr) {
    let p = 100;
    while(p--) {
        let k1 = Math.floor(Math.random()*20), k2 = Math.floor(Math.random()*20), 
        k3 = Math.floor(Math.random()*20), k4 = Math.floor(Math.random()*20);
        [firstHalf[k1], firstHalf[k2]] = [firstHalf[k2], firstHalf[k1]];
        [secondHalf[k3], secondHalf[k4]] = [secondHalf[k4], secondHalf[k3]];
    }
}

randomizeArray();

for(let i=0; i < 20; i++) {
    let btn = document.getElementById("" + i+1);
    btn.textContent = "" + firstHalf[i];
    btn.style.backgroundColor = colors[firstHalf[i] - 1];
} //setting the first 20 numbers

//creating event listeners for the buttons
for(let i = 0; i < 20; i++) {
    let btn = document.getElementById(""+i+1);
    btn.addEventListener("click", function(event) {
        let num = btn.textContent;
        if(num <= 20 && firstHalfButtonClickOrder[num-1] == 1) {
            firstHalfButtonClickOrder[num] = 1;
            btn.textContent = secondHalf[secondHalfIterator++];
            document.getElementById(""+i+1).style.backgroundColor = colors[btn.textContent - 1];
        }
        else if(num > 20 && secondHalfButtonClickOrder[num-21] == 1) {
            secondHalfButtonClickOrder[num-20] = 1;
            btn.style.visibility = 'hidden';
        }
    })
}