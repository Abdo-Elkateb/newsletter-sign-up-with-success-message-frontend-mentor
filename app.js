// js 
// let email = document.getElementById('email')
let email = document.forms["Form"]["answer_a"];
let emailArror = document.getElementById('email-arror');
let newsletter = document.getElementById('newsletter');
let body = document.getElementById('body');

let result = document.getElementById('result');
let subscribe = document.getElementById('subscribe')



// this function check email 
function checkEmail() {


    if (email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        // if the input was a right email,  you will get this style
        emailArror.innerHTML = ""
        email.style.background = "#fff"
        email.style.border = "1px solid var(--Grey)"
        email.style.color = "var(--Grey)"
        return true
    }
    else {

        // if the input was wrong email,  you will get this style

        emailArror.innerHTML = "valid email required"
        email.style.background = "hsl(4, 89%, 93%)"
        email.style.color = "var(--tomato)"
        email.style.border = "1px solid var(--tomato)"
        return false
    }
}

// after click 

function sendForm() {
    result.style.display = 'block'
    newsletter.style.display = 'none'
}

//  here we can click  👍
function subscribeClick() {
    subscribe.addEventListener('click', function () {
        //  here we call funtion 
        if (checkEmail() === true) {
            sendForm()
            rest() 
        } else {
            emailArror.innerHTML = "write your email"
            rest() 
    
        }


    })

}
subscribeClick()




//  here we rest the value comes from email 

function rest() {
    email.value = ""
}






