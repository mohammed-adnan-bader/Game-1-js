
let demo1 = document.querySelector(".demo1");
      let demo2 = document.querySelector(".demo2");
      let res1 = document.querySelector(".res1");
      let res2 = document.querySelector(".res2");
      let arr = ["ورقة","حجرة","مقص"];
      document.querySelector("button").addEventListener("click",function(){
       setTimeout(() => {
        let x = Math.floor(Math.random() * arr.length);
        let y = Math.floor(Math.random() * arr.length);
        demo1.innerHTML = arr[x]; 
        demo2.innerHTML = arr[y]; 
        if (x == y){
         return;
        }else{
         if (x == 0){
          if (y == 1){
           res1.innerHTML = parseInt(res1.innerHTML) + 1;
          }else{
           res2.innerHTML = parseInt(res2.innerHTML) + 1;
          }
         }else if(x == 1){
          if (y == 0){
           res2.innerHTML = parseInt(res2.innerHTML) + 1;
          }else{
           res1.innerHTML = parseInt(res1.innerHTML) + 1;
          }
         }else{
          if (y == 0){
           res1.innerHTML = parseInt(res1.innerHTML) + 1;
          }else{
           res2.innerHTML = parseInt(res2.innerHTML) + 1;
          }
         }
        }
       },1000);
      });





















