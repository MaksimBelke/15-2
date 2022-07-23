const innInput = document.querySelector(".innInput");
const innCheck = document.getElementsByClassName("innCheck");
const innResult = document.querySelector(".innResult");
const innValidate = /^([0|1]{1}[0-9]{13})?$/;
innCheck[0].addEventListener("click", () => {
    if (innValidate.test(innInput.value)) {
     innResult.innerText = "ok";
     innResult.style.color = "green";
   } else {
     innResult.innerText = "not  ok";
     innResult.style.color = "red";
   }
 });
const block = document.querySelector('.block')
 let num = 0;
 const count = () => {
   num += 40;
   block.style.left = num + 'px'
   console.log(num);
   if (num < 40) {
      count();
   }
 };
block.addEventListener('click',count)