var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML = 'Name Is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}
function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML = 'phone no. required';
        return false;
    }

    if(!phone.match(/^[0-9]{1,100}$/)){
        phoneError.innerHTML = 'only digits';
        return false;
    }

    if(!phone.match(/^[0-9\[A-Za-z]{10}$/)){
        phoneError.innerHTML = 'enter 10 digits';
        return false;
    }
    
        phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    
}

// in other method used -(here it shows enter 'only digits' 
// after 10 characters are written while in the above method it shows as soon as we enter a letter)
// function validatephone(){
//     var phone = document.getElementById('contact-phone').value;

//     if(phone.length==0){
//         phoneError.innerHTML = 'phone no. required';
//         return false;
//     }


//     if(phone.length!==10){
//         phoneError.innerHTML = 'phone no. should be of 10 digits';
//         return false;

//     }


    
//         if(!phone.match(/^[0-9]{10}$/)){
//             phoneError.innerHTML = 'only digits';
//             return false;
//         }

//         phoneError.innerHTML = '<i class="fa-solid fa-check">valid</i>';
//         return true;
    
// }


function validateemail(){
    var email = document.getElementById('contact-email').value;

    if(email.legnth==0){
        emailError.innerHTML = 'email required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid';
        return false;

    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatemessage(){
    var message = document.getElementById('contact-message').value;
    var required = 5;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML =  '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateform(){
    if(! validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = ' please fix the error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false;

    }
    submitError.innerHTML = '';
    return true;
}