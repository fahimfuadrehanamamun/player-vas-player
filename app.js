

let btn1=document.getElementById('p1btn')
let btn2=document.getElementById('p2btn')
let reset=document.getElementById('reset')
let inputnumberp1=document.getElementById('inputnumberp1')
let inputnumberp2=document.getElementById('inputnumberp2')
let result=document.getElementById('result')

console.log(btn1);
console.log(btn2);
console.log(reset);
console.log(inputnumberp1);
console.log(inputnumberp2);
console.log(result);

let x=Math.floor(Math.random()*10)+1;
console.log(x);

btn1.addEventListener('click',function winner1(){
    let a=inputnumberp1.value;
    if (a==x) {
        result.innerHTML=(`Congratulation! player 1 is win the game.`)
        // result.style.backgroundColor = 'green';

    }else if(a==''){
        alert('pls input something')
    }
    else{
        result.innerHTML=(`Your guess is wrong`)
        // result.style.backgroundColor = 'red';
    }
})
btn2.addEventListener('click',function winner2(){
    let b=inputnumberp2.value;
    if (b==x) {
        result.innerHTML=(`Congratulation! player 2 is win the game.`)
        // result.style.backgroundColor = 'blue';
    }else if(b==''){
        alert('pls input something')
    }
    else{
        result.innerHTML=(`Your guess is wrong`)
        // result.style.backgroundColor = 'orange';    
    }
})
function resetGame(){
    result.innerText=`Result:`;
    inputnumberp1.value=''
    inputnumberp2.value=''
}
reset.addEventListener('click',resetGame)



