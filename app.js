// js 
let email = document.getElementById('email')
let subscribe = document.getElementById('subscribe');
let emailArror = document.getElementById('email-arror');
console.log(emailArror)



s
function checkMessage() {

let email = document.getElementById('email')
    if(!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailArror.innerHTML = "valid email required"
        email.style.color = "hsl(4, 100%, 67%)"
        return false
    }
    emailArror.innerHTML = ""
    email.style.background = "#fff"
    return true
}

// function submitMessage() {
//     subscribe.addEventListener('click', function() {
//         checkMessage()
//     })


// }
// submitMessage()

// const validate = () => {
//     const $result = ('#result');
//     $result.text('');

//     if (validateEmail(email)) {
//         email.text(email + ' is valid.');
//         // $result.css('color', 'green');
//     } else {
//         email.text(email + ' is invalid.');
//         // $result.css('color', 'red');
//     }
// }

// $('#email').on('input', validate);

