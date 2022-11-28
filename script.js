/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let s1 = document.getElementById('subjects');
let s2 = document.getElementById('courses');
let course_listing = document.getElementById("course-listing");
let item = document.getElementById('acct');
item.addEventListener("click", populate);


function subjects() {
    s1.classList.toggle("show");
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
function populate(s1, s2){
  //s2.innerHTML = "";
  console.log("ss");
  console.log(item.textContent);
  if(item.textContent == "Accounting"){
    var optionArray = ["acct100|ACCT 100", "acct200|ACCT 200"];
    
  }
  for(var option in optionArray){ 
    
    var pair = optionArray[option].split("|");
    console.log(pair);
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    console.log(newOption);
    course_listing.appendChild(newOption);
  }
}

function selectedTutor() {
  let box = document.getElementsByClassName("entry");
  box.className = "entry selected";
}



