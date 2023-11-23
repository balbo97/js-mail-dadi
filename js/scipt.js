const button_send = document.querySelector('.send');


button_send.addEventListener('click', function(){
    // RICHIEDERE L'EMAIL
    let email = document.getElementById('email').value; 

    // CREARE UN ARRAY CON UNA SERIE DI EMAIL 
    let array = ['ciccio@gmail.com','pippo@gmail.com','enzuccio@gmail.com']

    // VERIFICARE SE LA MAIL INSERITA DALL'UTENTE E' PRESENTE NELL'ARRAY
    let right_email = false;
    for (let i=0; i<array.length; i++){
        if (email == array[i]){
            
            // E' PRESENTE 
            right_email = true 
            
            // LA INSERISCO NEL HTML
            document.getElementById('welcome').innerHTML = `<span class="text-success"> Complimenti la tua email è corretta! </span>`
        }
    }

    //STAMPO IN CONSOLE SE APPARTIENE O MENO ALL' ARRAY
    console.log(right_email)
    
   
})


const button_play = document.querySelector('.send');

button_play.addEventListener('click', function(){
    
    const player = Math.ceil(Math.random()*6)
    const computer = Math.ceil(Math.random()*6)

    let win;
    if (player>computer){
        win = "player win"
    }
    else if(player<computer){
        win = 'computer win'
    }
    else{
        win = 'pareggio '
    }
   
    document.getElementById('winner').innerText = (win) 
})