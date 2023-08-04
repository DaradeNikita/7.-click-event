const cl = console.log;

const imagesContainer = document.getElementById("imagesContainer");
const btn = document.getElementById("btn");

// hidebox = (click) => {
//   box.style.display = "none";

// }

// let flag = true;
// hidebox = (click) =>{
//   if(flag === true){
//     box.style.display = "none";
//     flag = false;
//   }else{
//     box.style.display = "block";
//     flag = true;
//   }
// }


  // let visibilityFun = true;
  // hidebox = (ele) =>{
  //   if(visibilityFun === true){
  //     box.style.display = "none";
  //     visibilityFun = false;
  //   }else{
  //     box.style.display = "block";
  //     visibilityFun = true;
  //   }
  // }

 //Click Event

// const hidebox = () =>{
//   let classes = box.className;  //className always return string
//   if (classes.includes('d-none')){
//     box.classList.remove('d-none')
//     btn.innerText = 'Hide'
//   }else{
//     box.classList.add('d-none')
//     btn.innerText = 'Show'
//   }
// }
// btn.addEventListener("click",hidebox);

 let flag = true;
 hideshowbox = (click) =>{
   if(flag === true){
     box.style.display = "none";
     flag = false;
     btn.innerHTML ="Show"
    btn.style.boxShadow = "10px 10px 40px 10px hotpink";
  }
   else
   {
     box.style.display = "block";
     flag = true;
     btn.innerHTML ="Hide"
     box.innerHTML ="Positive anything is better than negative nothing."
     btn.style.boxShadow = "10px 10px 40px 10px hotpink";
  }
 }
btn.addEventListener("click",hideshowbox);
// btn.addEventListener("dblclick",hideshowbox);









