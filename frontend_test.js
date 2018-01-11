document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById('test_input').addEventListener("submit", function(e){
    e.preventDefault();

    
    console.log( checkUsername(e.target.elements[0].value));
    if (checkUsername(e.target[0].value)){
    	e.target[0].classList
    }
    console.log (checkEmail(e.target.elements[1].value));
  });
});
