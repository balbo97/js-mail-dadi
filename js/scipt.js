const button = document.querySelector('.btn');


button.addEventListener('click', function(){
    // RICHIEDERE L'EMAIL
    let email = document.getElementById('email').value; 

    // CREARE UN ARRAY CON UNA SERIE DI EMAIL 
    let array = ['ciccio@gmail.com','pippo@gmail.com','enzuccio@gmail.com']

    // VERIFICARE SE LA MAIL INSERITA DALL'UTENTE E' PRESENTE NELL'ARRAY
    let right_email = false;
    for (let i=0; i<array.length; i++){

        if (email == array[i]){

            right_email = true 
        }
    }

    console.log(right_email)
})