// -------                Endrojit method           --------

// document.getElementById("button").addEventListener("click", function () {
//   const email = document.getElementById("inputEmail3").target.value;

//   console.log(email);

//   const password = document.getElementById("inputPassword3").target.value;

//   //console.log(password);
//   const btn = document.getElementById("button");

//   if (email == "emonsaha994@gmail.com" && password == "1234") {
//     //console.log(email);
//     btn.removeAttribute("disabled");
//     //document.getElementById("btn").removeAttribute("disabled");
//     window.location.href = "bank.html";
//   } else {
//     btn.setAttribute("disabled", true);
//   }
// });


// -----------------------------------------------------------------------------------------
// --------------------If you fill the email field first----------------------------------
// -----------------------------------------------------------------------------------------


const deleteBtn = document.getElementById('btn-login');

document.getElementById("inputEmail3").addEventListener('keyup', function (event) {
  // console.log(event.target.value);
  const emailField = event.target.value;
  console.log(emailField);
  const passField = document.getElementById('inputPassword3').value;
  // const deleteBtn = document.getElementById('btn-login');

  if (emailField == 'emonsaha994@gmail.com') {
    console.log(emailField);

    document.getElementById('inputPassword3').addEventListener('keyup', function (event) {
      const passField = event.target.value;
      console.log(passField);
      const emailField = document.getElementById('inputEmail3').value;
      console.log('Email', emailField);

      if (passField == '1234') {
        // console.log('Insideloopemail', emailField);
        // console.log("Insidelooppass", passField);
        // console.log('btn activated');
        deleteBtn.removeAttribute('disabled');
        const attr = deleteBtn.getAttribute('disabled');
        console.log(attr);
      }
      else {
        // console.log('Insideloopemail', emailField);
        // console.log("Insidelooppass", passField);
        // console.log('btn disabled');

        deleteBtn.setAttribute('disabled', true);
        // alert('Check your inputs');
      }
    })


  }
  else {
    // console.log(emailField);
    // console.log(passField);

    console.log('btn disabled');
    deleteBtn.setAttribute('disabled', true);
    // alert('Check your inputs');
  }


})

// -----------------------------------------------------------------------------------------
// --------------------If you fill the password field first----------------------------------
// -----------------------------------------------------------------------------------------

document.getElementById("inputPassword3").addEventListener('keyup', function (event) {
  // console.log(event.target.value);
  const passField = event.target.value;
  console.log(passField);

  if (passField == '1234') {

    document.getElementById('inputEmail3').addEventListener('keyup', function (event) {
      const emailField = event.target.value;
      console.log(emailField);

      if (emailField == 'emonsaha994@gmail.com') {

        deleteBtn.removeAttribute('disabled');
        const attr = deleteBtn.getAttribute('disabled');
        console.log(attr);
      }
      else {

        deleteBtn.setAttribute('disabled', true);
        // alert('Check your inputs');
      }
    })


  }
  else {

    console.log('btn disabled');
    deleteBtn.setAttribute('disabled', true);
    // alert('Check your inputs');
  }

})

//--------------------------------------------------------------------------------------
// ----------After activating your button you can now add click event-------------------- 
//--------------------------------------------------------------------------------------
// The default behavior of a <button /> if inside a <form /> is always the submit behavior.So, needed to replace form tag with section tag 

deleteBtn.addEventListener('click', function () {
  window.location.href = "bank.html";

})
//############################################################################
// Task for you is to shorten the above code. I know you can do this easily :D 
//############################################################################


