let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let userEmail = document.getElementById("uni-email");

function saveUserData() {
  firstName = document.getElementById("first-name").value;
  lastName = document.getElementById("last-name").value;
  userEmail = document.getElementById("uni-email").value;

  if (firstName.length == 0 || lastName.length == 0 || userEmail.length == 0) {
    alert("Please fill out all required fields!");
  } else {
    window.location.href = "subjects_listing.html";
  }
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let s1 = document.getElementById('subjects');
let s2 = document.getElementById('courses');
let course_listing = document.getElementById("course-listing");
let course = document.getElementById('acct');
let course2 = document.getElementById('biol');
let course3 = document.getElementById('cs');
let course4 = document.getElementById('chem');
let course5 = document.getElementById('econ');
let course6 = document.getElementById('eng');
let course7 = document.getElementById('math');
let course8 = document.getElementById('psyc');
let course9 = document.getElementById('span');

course.addEventListener("click", populate);
course2.addEventListener("click", populate);
course3.addEventListener("click", populate);
course4.addEventListener("click", populate);
course5.addEventListener("click", populate);
course6.addEventListener("click", populate);
course7.addEventListener("click", populate);
course8.addEventListener("click", populate);
course9.addEventListener("click", populate);


function subjects() {
    s1.classList.toggle("show");
    //s2.classList.toggle("show");
    console.log("ggf");
    
    //addEventListener("click", populate(s1, s2)); 
  }

  //function courses() {
  //  document.getElementById("courses").classList.toggle("show");
  //}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// adjust course names based on the subject selected
function populate(e){
  //s2.innerHTML = "";
  
  
  let item = e.target;
  if(item.textContent == "Accounting"){
    var optionArray = ["acct100|ACCT 100", "acct200|ACCT 200", "acct210|ACCT 210","acct235|ACCT 235", "acct250|ACCT 250", "acct310|ACCT 310", "acct323|ACCT 323", "acct370|ACCT 370"];
    
  }
  else if(item.textContent == "Biology"){
    var optionArray = ["bio100|BIOL 100", "bio200|BIOL 200", "bio210|BIOL 210","bio235|BIOL 235", "bio250|BIOL 250", "bio310|BIOL 310", "bio323|BIOL 323", "bio370|BIOL 370"];
  }
  else if(item.textContent == "Computer Science"){
    var optionArray = ["cs100|CMSC 100", "cs200|CMSC 200", "cs210|CMSC 210","cs235|CMSC 235", "cs250|CMSC 250", "cs310|CMSC 310", "cs323|CMSC 323", "cs370|CMSC 370"];
    
  }
  else if(item.textContent == "Chemistry"){
    var optionArray = ["chem100|CHEM 100", "chem200|CHEM 200", "chem210|CHEM 210","chem235|CHEM 235", "chem250|CHEM 250", "chem310|CHEM 310", "chem323|CHEM 323", "chem370|CHEM 370"];
    
  }
  else if(item.textContent == "Economics"){
    var optionArray = ["econ100|ECON 100", "econ200|ECON 200", "econ210|ECON 210","econ235|ECON 235", "econ250|ECON 250", "econ310|ECON 310", "econ323|ECON 323", "econ370|ECON 370"];
    
  }
  else if(item.textContent == "English"){
    var optionArray = ["eng100|ENGL 100", "eng200|ENGL 200", "eng210|ENGL 210","eng235|ENGL 235", "eng250|ENGL 250", "eng310|ENGL 310", "eng323|ENGL 323", "eng370|ENGL 370"];
    
  }
  else if(item.textContent == "Mathematics"){
    var optionArray = ["math100|MATH 100", "math200|MATH 200", "math210|MATH 210","math235|MATH 235", "math250|MATH 250", "math310|MATH 310", "math323|MATH 323", "math370|MATH 370"];
    
  }
  else if(item.textContent == "Psychology"){
    var optionArray = ["psyc100|PSYC 100", "psyc200|PSYC 200", "psyc210|PSYC 210","psyc235|PSYC 235", "psyc250|PSYC 250", "psyc310|PSYC 310", "psyc323|PSYC 323", "psyc370|PSYC 370"];
    
  } 
  else if(item.textContent == "Spanish"){
    var optionArray = ["span100|SPAN 100", "span200|SPAN 200", "span210|SPAN 210","span235|SPAN 235", "span250|SPAN 250", "span310|SPAN 310", "span323|SPAN 323", "span370|SPAN 370"];
    
  }
  course_listing.innerHTML="";
  for(var option in optionArray){ 
    
    var pair = optionArray[option].split("|");
    console.log(pair);
    var newOption = document.createElement("a");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    console.log(newOption);
    newOption.href="calendar.html";
    course_listing.appendChild(newOption);
  
  }
}

function selectedTutor() {
  let box = document.getElementsByClassName("entry");
  box.className = "entry selected";
}

// --------------------- BEGIN calendar section ---------------------

let slot1 = document.getElementById('slot1');
let slot2 = document.getElementById('slot2');
let slot3 = document.getElementById('slot3');
let slot4 = document.getElementById('slot4');
let slot5 = document.getElementById('slot5');
let slot6 = document.getElementById('slot6');
let slot7 = document.getElementById('slot7');
let slot8 = document.getElementById('slot8');
let slot9 = document.getElementById('slot9');
let slot10 = document.getElementById('slot10');
let slot11 = document.getElementById('slot11');
let slot12 = document.getElementById('slot12');
let slot13 = document.getElementById('slot13');
let slot14 = document.getElementById('slot14');
let slot15 = document.getElementById('slot15');
let slot16 = document.getElementById('slot16');
let slot17 = document.getElementById('slot17');
let slot18 = document.getElementById('slot18');
let slot19 = document.getElementById('slot19');
let slot20 = document.getElementById('slot20');

let readyToSubmit = document.getElementById("final-submit");

// keep track of what has been selected so far
let selected = [];

function selectBox() {
  for (var i = 0; i < selected.length; i++) {
    var current = document.getElementById(selected[i]);
    current.style.border = "1px solid #dee2e6";
  }
  selected.push(this.id);
  this.style.border = "2px solid black";
}

function sendEmail(tutor, apptTime, apptDay) {
  Email.send({
    Host : "smtp.mailtrap.io",
    Username : "a17337df37df06",
    Password : "673a5656f12a2c",
    To : userEmail,
    From : "angela.stefanovska@richmond.edu",
    Subject : "Thank you for signing up for ASC Tutoring!",
    Body : `<html>Dear ${firstName}, You are signed up to meet with ${tutor} on ${apptTime} at ${apptDay}.
        Please email asc@richmond.edu if you have any questions.</html>`
  }); 
}

function confirmation() {
  if (selected.length == 0) {
    alert("You must select a time/tutor in order to make an appointment!");
  } else {
    let appointment = document.getElementById(selected[selected.length - 1]);
    let day = $(appointment).find(".day-of-week").html();
    let name = $(appointment).find(".event").html();
    let time = $(appointment).find(".time").html();
    if (confirm(`You are about to make an appointment with ${name} at ${time} on ${day}. Are you sure you'd like to schedule this?`) == true) { 
      sendEmail(name, time, day);
      alert("A confirmation email has been sent to your inbox! Press close to take you back to login.");
      window.location.href = "index.html";
    }
  }
}

// event listeners for each box
slot1.addEventListener('click', function() { selectBox.call(slot1) });
slot2.addEventListener('click', function() { selectBox.call(slot2) });
slot3.addEventListener('click', function() { selectBox.call(slot3) });
slot4.addEventListener('click', function() { selectBox.call(slot4) });
slot5.addEventListener('click', function() { selectBox.call(slot5) });
slot6.addEventListener('click', function() { selectBox.call(slot6) });
slot7.addEventListener('click', function() { selectBox.call(slot7) });
slot8.addEventListener('click', function() { selectBox.call(slot8) });
slot9.addEventListener('click', function() { selectBox.call(slot9) });
slot10.addEventListener('click', function() { selectBox.call(slot10) });
slot11.addEventListener('click', function() { selectBox.call(slot11) });
slot12.addEventListener('click', function() { selectBox.call(slot12) });
slot13.addEventListener('click', function() { selectBox.call(slot13) });
slot14.addEventListener('click', function() { selectBox.call(slot14) });
slot15.addEventListener('click', function() { selectBox.call(slot15) });
slot16.addEventListener('click', function() { selectBox.call(slot16) });
slot17.addEventListener('click', function() { selectBox.call(slot17) });
slot18.addEventListener('click', function() { selectBox.call(slot18) });
slot19.addEventListener('click', function() { selectBox.call(slot19) });
slot20.addEventListener('click', function() { selectBox.call(slot20) });

readyToSubmit.addEventListener('click', confirmation);