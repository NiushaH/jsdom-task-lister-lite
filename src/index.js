document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  // your code here
  const submitBox = document.querySelector("#new-task-description");

  submitBox.addEventListener("click", submitBoxClick, false);
  
  function submitBoxClick(event) {
    let warn = "preventDefault() won't let you submit this form!<br>";
    document.getElementById("create-task-form").innerHTML += warn;
    event.presentDefault();
  }; 
});
