const button = document.querySelector('#submit')

button.addEventListener('click', function () {
    var input = document.querySelector('#inputFirstName')
    var borderLabel = document.querySelector('#labelFirstName')

    if (input.value == "") {
        borderLabel.style.border = '1px solid red'
    } else {
        borderLabel.style.border = '1px solid green'
    }
})

button.addEventListener('click', function () {
    var input = document.querySelector('#inputLastName')
    var borderLabel = document.querySelector('#labelLastName')

    if (input.value == "") {
        borderLabel.style.border = '1px solid red'
    } else {
        borderLabel.style.border = '1px solid green'
    }
})

button.addEventListener('click', function () {
    var input = document.querySelector('#inputEmail')
    var borderLabel = document.querySelector('#labelEmail')

    if (input.value == "") {
        borderLabel.style.border = '1px solid red'
    } else {
        borderLabel.style.border = '1px solid green'
    }
})

button.addEventListener('click', function () {
    var input = document.querySelector('#inputPassword')
    var borderLabel = document.querySelector('#labelPassword    ')

    if (input.value == "") {
        borderLabel.style.border = '1px solid red'
    } else {
        borderLabel.style.border = '1px solid green'
    }
})
