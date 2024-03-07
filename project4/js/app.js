console.log("hi");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;

// use this 2 line when alerts showin using javascript line 61
//and also uncomment htmls

// $('#failure').hide();
// $('#success').hide();

name.addEventListener("blur", () => {
  //   console.log("hoye6e");
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your name is valid");
    name.classList.remove("is-invalid");
    validUser=true;
  } else {
    console.log("your name is not valid");
    name.classList.add("is-invalid");
    validUser = false;
  }
});

email.addEventListener("blur", () => {
  //   console.log("hoye6e");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your email is valid");
    email.classList.remove("is-invalid");
    validEmail=true;
  } else {
    console.log("your email is not valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});
phone.addEventListener("blur", () => {
  //   console.log("hoye6e");
  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone=true;
  } else {
    console.log("your phone is not valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

// alerts showin using javascript


// let submit = document.getElementById("submit");
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (validUser && validEmail && validPhone) {
//     console.log("all are valid, submitting");
//     let success = document.getElementById("success");
//     success.classList.add("show");
//     $('#failure').hide();
//     $('#success').show();
//   } else {
//     console.log("correct input please");
//     let failure = document.getElementById("failure");
//     failure.classList.add("show");
//     $('#success').hide();
//     $('#failure').show();
//   }
// });


//or alerts showin using inner html 
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validUser && validEmail && validPhone) {
    console.log("all are valid, submitting");
    let success = document.getElementById("alart");
    success.innerHTML=`<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your travel request has been successfully
    submitted
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>`
    
  } else {
    console.log("correct input please");
    let failure = document.getElementById("alart");
    failure.innerHTML=`<div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error!</strong> Your travel request has not been sent due to
    errors
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>`
  }
});
