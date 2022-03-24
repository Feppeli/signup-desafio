
    var inputFirstName = document.querySelector('#inputFirstName')
    var valorFirstName = inputFirstName.value 
    if(valorFirstName == ""){
        const msgErrorFirstName = `<p style="color: red; margin: 0;text-align: right;">First Name cannot be empty</p>`
        const labelFirstName = document.getElementById('labelFirstName')

        let element = document.createElement('label')
        element.id = 'erroFirstName'
        element.innerHTML = msgErrorFirstName
        labelFirstName.appendChild(element)
    }else{
        console.log(preenchido)
    } 

    var inputLastName = document.querySelector('#inputLastName')
    var valorLastName = inputLastName.value 
    if(valorLastName == ""){
        const msgErrorLastName = `<p style="color: red; margin: 0;text-align: right;">Last Name cannot be empty</p>`
        const labelLasteName = document.getElementById('labelLasteName')
    
        let element = document.createElement('label')
        element.id = 'erroLastName'
        element.innerHTML = msgErrorLastName
        labelLastName.appendChild(element)
    }else{
        console.log(preenchido)
    } 