/* Creating a validation function  */
/* Inserting each input value into a variable */
/* Inserting the div element to error_message variable to display errors using innerHTML later on */


// ** I used some patterns to check validation of email & phone number **//
function validate(){
    let name = document.getElementById("name").value;
    let last = document.getElementById("last").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    

    // Checking with conditions the values from inputs.
    // using the text variable to create specific error message, 
    //Than, insert the text message into error_message.innerHTML. this will display the error. 
    // <3
    let text;
    if(name.length < 2){
      text = "Please Enter valid first name";
      error_message.innerHTML = text;
      return false;
    }
    if(last.length < 2){
      text = "Please Enter valid last name";
      error_message.innerHTML = text;
      return false;
    }
    //creating a validation format variable with email validation pattern to check 
    //currect email
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      if(!email.match(mailformat)){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }


      // as email, use a pattern to validation phone number
    let phonenumber = /^\d{10}$/;
    if(!phone.match(phonenumber)){
      text = "Please Enter valid Phone Number";
      console.log(phone);
      error_message.innerHTML = text;
      return false;
    }
   
   
    // Adding a if statement to some condition for the message area
    if(message.length < 20){
      text = "Please describe your message lil bit more :)";
      error_message.innerHTML = text;
      return false;
    }

    if(message.length > 100){
      text = "Please try to short your message :)";
      error_message.innerHTML = text;
      return false;
    }

    //if all the condition are passed, the form will successfully submit with no method, as
    //costumer request.
    alert("Form Submitted Successfully!");
    return true;
  }
  