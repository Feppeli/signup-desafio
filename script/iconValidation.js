var button1 = document.querySelector('#submit')

button1.addEventListener('click', function() {
    var icon = document.querySelector('#i1')
    var inputFN = document.querySelector('#inputFirstName')
    
    if (inputFN.value === ""){
        icon.style.opacity = "100%"
    }else if(inputFN.value !== ""){
        icon.style.display = "0%"
    }
})

button1.addEventListener('click', function() {
    var icon = document.querySelector('#i2')
    var inputLN = document.querySelector('#inputLastName')

    if(inputLN.value == ""){
        icon.style.opacity = "100%"
    }else{
        icon.style.opacity = "0%"
    }
})

button1.addEventListener('click', function(){
    var icon = document.querySelector('#i3')
    var inputEmail = document.querySelector('#inputEmail')

    if(inputEmail.value == ""){
        icon.style.opacity = "100%"
    }else{
        icon.style.opacity = "0%"
    }
})

button1.addEventListener('click', function() {
    var icon = document.querySelector('#i4')
    var inputPassword = document.querySelector('#inputPassword')

    if(inputPassword.value == ""){
        icon.style.opacity = "100%"
    }else{
        icon.style.opacity = "0%"
    }
})