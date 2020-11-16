document.querySelector('button').onclick = () =>{
    let bot = " ";
     let out = document.querySelector('div');
     
    for (let i = 50; i > 0; i--  ){
          bot += i + ' ';
        
         
        
    }
    out.innerHTML += bot;
    
    // bot[i] = document.querySelector('div').innerHTML;
    // console.log(bot);
} 
// for (let i = 10; i > 0; i--  ){
//     console.log(i)
  
   
  
// }