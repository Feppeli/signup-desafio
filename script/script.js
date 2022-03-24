document.querySelector('#submit').addEventListener('click', function(){
    var inputFirstName = document.querySelector('#inputFirstName')
    var firstName = inputFirstName.value
    const msgErrorFirstName = `<p style="color: red; margin: 0;text-align: right;">First Name cannot be empty</p>`
    const labelFirstName =document.querySelector('.errormsgFName')
    if(firstName == ""){
        let elementFirstName = document.createElement('label')
        elementFirstName.innerHTML = msgErrorFirstName
        labelFirstName.appendChild(elementFirstName)
        
    }else{
        console.log('completo')
    }
});

document.querySelector('#submit').addEventListener('click', function() {
    var inputLastName = document.querySelector('#inputLastName')
    var lastName = inputLastName.value
    const msgErrorLastName = `<p style="color: red; margin: 0;text-align: right;">Last Name cannot be empty</p>`
    const labelLasteName = document.querySelector('.errormsgLName')

    if(lastName == ""){
        let elementLastName = document.createElement('label')
        elementLastName.innerHTML = msgErrorLastName
        labelLasteName.appendChild(elementLastName)
    }else{
        console.log('completo')
    }
})

document.querySelector('#submit').addEventListener('click', function(){
    var inputEmail = document.querySelector('#inputEmail')
    var email = inputEmail.value
    const msgErrorEmail = `<p style="color: red; margin: 0;text-align: right;">Looks like this is not an email</p>`
    const labelEmail = document.querySelector('.errormsgEmail')

    if(email == ""){
        let elementEmail = document.createElement('label')
        elementEmail.innerHTML = msgErrorEmail
        labelEmail.appendChild(elementEmail)
    }else{
        console.log('completo')
    }
})

document.querySelector('#submit').addEventListener('click', function(){
    var inputPassword = document.querySelector('#inputPassord')
    var password = inputPassword.value
    const msgErroPasseword = `<p style="color: red; margin: 0;text-align: right;">Looks like this is not an email</p>`
    const labelPassword = document.querySelector('.errormsgPassword')

    if(password == ""){
        let elementPassword = document.createElement('label')
        elementPassword.innerHTML = msgErroPasseword
        labelPassword.appendChild(elementPassword)
    }else{
        console.log(completo)
    }
})
