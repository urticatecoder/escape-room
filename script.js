function switchPageOne(){
  if(document.form.password.value!="DIXIE"){
    document.form.password.style.fontSize = "32px";
    document.form.password.style.background = "#f44242";
    document.form.password.placeholder = "Incorrect! Get ye self on outta here!";
    document.form.password.value = "";
  }else if(document.form.password.value === "DIXIE"){
    window.location = "./firstGuess.html"
  }
}

function switchPageTwo(){
  window.location = "./secondGuess.html"
}

function switchPageThree(){
  if(document.formTwo.wifeName.value!="Mary Todd Lincoln"){
    document.formTwo.wifeName.style.background = "#f44242";
    document.formTwo.wifeName.placeholder = "Incorrect! Get ye self on outta here!";
    document.formTwo.wifeName.value = "";
  }else if(document.formTwo.wifeName.value==="Mary Todd Lincoln"){
    window.location = "./thirdGuess.html"
  }
}

function switchPageFour(){
  window.location = "./fourthGuess.html";
}

function switchPageFive(){
  if(document.formThree.grantName.value!="Ulysses S. Grant" && document.formThree.grantName.value!="Ulysses S Grant" && document.formThree.grantName.value!="ulysses s grant" && document.formThree.grantName.value!="Ulysses Grant" && document.formThree.grantName.value!="ulysses grant"){
    document.formThree.grantName.style.background = "#f44242";
    document.formThree.grantName.placeholder = "Incorrect! Get ye self on outta here!";
    document.formThree.grantName.value = "";
  }else if(document.formThree.grantName.value==="Ulysses S. Grant" || document.formThree.grantName.value==="Ulysses S Grant" || document.formThree.grantName.value==="ulysses s grant" || document.formThree.grantName.value==="Ulysses Grant" || document.formThree.grantName.value==="ulysses grant"){
    window.location = "./fifthGuess.html";
  }
}
let clicked=false;
function switchPageSix(){
  if(Number(document.formFour.month.value) === 4 && Number(document.formFour.date.value) === 14 && Number(document.formFour.year.value) === 1865){
    window.location = "./sixthGuess.html";
  }else{
    document.formFour.month.value = "";
    document.formFour.date.value = "";
    document.formFour.year.value = "";
  }
  if(clicked===false){
    document.getElementById("assassinationDate").innerHTML += "<br>" + "Incorrect! Try checking those images again...";
    document.getElementById("assassinationDate").innerHTML += "<br>" + "<button style='width: 120px; height: 60px; font-size: 1vw;' onclick='returnToStart()'>" + "Back to first question" + "</button>";
    clicked = true;
  }
}

function returnToStart(){
  window.location = "./firstGuess.html";
  clicked=false;
}
