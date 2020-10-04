//initial value

var count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
  btn.addEventListener('click',function(e){
      var currBtn = e.target.classList;
      if(currBtn.contains("decrease")){
          count--;
      }
      else if (currBtn.contains("increase")){
         count ++;
      }
      else{
          count = 0;
      }

      if(count > 0){
          value.style.color = "green";
      }
      if(count < 0){
          value.style.color = "red";
      }
      if(count === 0 ){
          value.style.color = "#333";
      }

      value.textContent = count;

  })
});