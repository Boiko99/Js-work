// console.log('hello');
// console.info('Hard');
// // alert('hid');
// // document.getElementById('out').innerHTML = 'hello';
// document.querySelector('.header').innerHTML = 'redy'; 
// // document.querySelector('#one').innerHTML = '143';
// let a = document.querySelector('#one');
// let c;
// c = document.getElementById('out');
// a.innerHTML = '923';
// c.innerHTML = 'sa'
// let inputIn = document.querySelector('.input-in'); //input
// let button = document.querySelector('button'); //button
// let text = document.querySelector('#text')
// // console.log(text);
                            //ЗНАЧЕННЯ ІМПУТУ
// button.onclick = function(){
//     console.log('job');
//     // console.log(inputIn.value);
//     let b = +inputIn.value;
//     // console.log(b + 2);
//     if (b  > 18){
//         console.log('welcome');
//     }
//     else{
//         console.log('you is smol')
//     }
//     //text.innerHTML = b;
//     inputIn.value ='';
// }
                   // Стрілкова функція тільки тоді коли баттон не буде мінятися
// button.onclick = () => {
//     let b = +inputIn.value; // імпут завжди строка став +
//     // console.log(b + 2);
//     if (b  > 18){
//         console.log('welcome');
//     }
//     else{
//         console.log('you is smol')
//     }
//     switch(b){
//         case 15: 
//             console.log('leas one years loading');
//             break;
//         case 16:
//             console.log('Yeach you strong');
//             break;
//         default:
//             console.log('Okkk');


//     }
// }

// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('.one').value);
//     document.querySelector('button').style.backgroundColor =
//     document.querySelector('.one').value
// }
// document.querySelector('.one').oninput = () => {
//     console.log(document.querySelector('.one').value);
//     document.querySelector('span').innerHTML = document.querySelector('.one').value
// }
document.querySelector('#btn1').onclick = () => {
    console.log(document.querySelector('#box').value);
    let myChekBox = document.querySelector('#box');
    console.log(myChekBox.checked);
    if (myChekBox.checked){
        console.log('clik');
    }
    else{
        console.log('no-clik');
    }
}
document.querySelector('#btn2').onclick = (event) => {
    event.preventDefault();
    let text = document.querySelector('#two');
    console.log(text.value);
    text.value = 'one';
}