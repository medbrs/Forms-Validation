const fname = document.querySelector('.FirstName')
const lname = document.querySelector('.LastName')
const adress = document.querySelector('.Adress')
const email = document.querySelector('.Email')
const pswrd = document.querySelector('.pass')

        



const rules = {
    firstName:  /^[a-zA-Z]{4,25}$/,
    LastName: /^[a-zA-Z]{4,25}$/,
    Adress:  /[a-z]{2,8}$/,
    Email:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    passwrd:  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    
}



fname.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

lname.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})
adress.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

email.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

pswrd.addEventListener('keyup', function(e){
    let txt = e.target
    let inputname = e.target.name
    validation(txt,inputname)
})

function validation(x,y){
    var value = x.value
    var isValid = rules[y].test(value)
    if(isValid){
        x.style.background = 'green'
    }
    else{
        x.style.background = 'red'  
    }
}


