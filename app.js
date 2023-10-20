// js 
let email = document.getElementById('email')
let emailArror = document.getElementById('email-arror');
let newsletter = document.getElementById('newsletter');
let body = document.getElementById('body');

let result = document.getElementById('result');





function checkMessage() {

    let email = document.getElementById('email')
    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailArror.innerHTML = "valid email required"
        email.style.background = "hsl(4, 89%, 93%)"
        email.style.color = "hsl(4, 100%, 67%)"
        email.style.border = "1px solid hsl(4, 100%, 67%)"
        

        return false
    } else {
        emailArror.innerHTML = ""
        email.style.background = "#fff"
        email.style.border = "1px solid  hsl(235, 18 %, 26 %)"
        return true
    }
}

// let subscribe = document.getElementById('subscribe').addEventListener('click', function() {
//     sendForm()
// })
function sendForm() {
    result.style.display = 'block'
    newsletter.style.display = 'none'
    checkMessage()

}

