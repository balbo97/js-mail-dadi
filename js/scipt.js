const button_send = document.querySelector('.send');


button_send.addEventListener('click', function(){
    // RICHIEDERE L'EMAIL
    let email = document.getElementById('email').value; 

    // CREARE UN ARRAY CON UNA SERIE DI EMAIL 
    let array = ['ciccio@gmail.com','pippo@gmail.com','enzuccio@gmail.com']

    // VERIFICARE SE LA MAIL INSERITA DALL'UTENTE E' PRESENTE NELL'ARRAY
    let flag = false;

    for (let i=0; i<array.length; i++){

        if (email == array[i]){  
            // E' PRESENTE 
            flag = true 
        }
    }

    if (flag == true){
        
        //STAMPO IN CONSOLE SE APPARTIENE O MENO ALL' ARRAY
        console.log(flag)
        
        // INSERISCO UN MESSAGGIO NEL HTML 
        document.getElementById('welcome').innerHTML = `<span class="text-success fs-1"> Complimenti la tua email è corretta! </span>`
    }
    else{
        //STAMPO IN CONSOLE SE APPARTIENE O MENO ALL' ARRAY
        console.log(flag)

        // INSERISCO UN MESSAGGIO NEL HTML 
        document.getElementById('welcome').innerHTML = `<span class="text-danger fs-1">La mail è incorretta! </span>`
    }
    
})

const button_play = document.querySelector('.play');

button_play.addEventListener('click', function(){
    
    const player = Math.floor(Math.random()*6+1)
    const computer = Math.floor(Math.random()*6+1)

    
    if (player>computer){
        console.log('hai vinto')
        document.getElementById('winner').innerText = 'Hai vinto'
    }
    else if(player<computer){
        console.log('hai perso')
        document.getElementById('winner').innerText = 'Hai perso'
    }
    else{
        console.log('pareggio')
        document.getElementById('winner').innerText = 'Hai pareggiato'
    }
   
     
})
