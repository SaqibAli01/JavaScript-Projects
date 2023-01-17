
//Second me ye setInterval lia ha

let fireSound =  document.createElement('audio');
fireSound.src = "sound/fire.mp3";

let score = 0;
setInterval(() => {

 //img ko lagia or us width me chalia
    let asteroid = document.createElement('img');    // image create krny k lia 
    asteroid.src =  "img/asteroid.png";   //image ka path dia ha
    asteroid.className = "asteroid"      //class create kr k us ka name dia asteroid
    asteroid.style.left =Math.random() * myApp.offsetWidth + 'px'; //ye width me auto chaly gy
    
    // ab is image ka interval lykr is ko chalna ha nechy ki traf
    myApp.appendChild(asteroid);  //is img ko apni main div me push kia ha



    asteroid.isKaInterval = setInterval(() => {
        
        asteroid.style.top = (asteroid.offsetTop + 1) + 'px' //ab top to bottm ja raha ah

        //b0ttom sy asteroid khtm krny k lia ,,nechy nazer na ay
      
        let mainBottom = myApp.offsetTop + myApp.offsetHeight; // bottom nikal lia ha
        if (asteroid.offsetTop > mainBottom) // ye codition lagi ha
        {
             asteroid.remove(); //ab asteroid ko remove ho jy ga
            clearInterval(asteroid.isKaInterval); // Interval ko stop kr dia ha
        }
        
    }, 10);

}, 1000);

//first me ye setInterval lia ha
document.body.onkeydown = function(myEvent)  //onkeydown button sy move krwny k lia uee kia
{

    
    switch (myEvent.keyCode)  //keyCode ye button k no baty ga us pr case lagy gy ham phir
         {
            case 32:  //space btn fire krny k lia
            
            // let fire = document.createElement('img');
            let fire = document.createElement('img');
            fire.src = "img/missile.png";
            fire.className = "fire";

            // in 2 line sy fire center sy ho ga .. 
            fire.style.top = player.offsetTop + 'px';
            fire.style.left = (player.offsetLeft + 50) + 'px'; 


            myApp.appendChild(fire);
            // document.body.appendChild(fire);

            //fire ka set intrval
            fire.fireKaInterval = setInterval(() => {
                fire.style.top = (fire.offsetTop - 1) + 'px'; // fire ko opr ly k jy ga
                
                let fireBottom = fire.offsetTop + this.offsetHeight; //bottom nikala
                
                if (fireBottom < 0) {
                    
                    fire.remove(); //fire ko remove kr dia 
                    clearInterval(fire.fireKaInterval); // stop interval
                    return; //yaha pr he khtam ho jy nechy check he na kry
                }

                let allAsteroids = document.querySelectorAll('.asteroid'); //new veriable bania h or asteroid ki class ko get ki ha

                

                for(let asteroid of allAsteroids) // fire sy asteroid ko finsh krny k lia
                {

                            let asteroidBottom = asteroid.offsetTop + asteroid.offsetHeight; //BOTTOM NIKAL Asteridd ka 
                            let asteroidRight = asteroid.offsetLeft + asteroid.offsetWidth; //right NIKAL Asteridd ka
                            let fireRight = fire.offsetLeft + fire.offsetWidth; //Right  NIKAL fire ka

                            if (fire.offsetTop < asteroidBottom && fire.offsetLeft > asteroid.offsetLeft && fireRight < asteroidRight)
                             {
                                console.log("good hogya");
                                fire.remove(); // YE reomved kr dy ga fire ja asterod k pas laga ja k
                                score++;
                                document.getElementById('demo').innerHTML = "Score " + score;
                                //ye fire ki img ha jo desoroyed k finish hony pr chlay gi
                                let desoroyedIMG = document.createElement('img');
                                desoroyedIMG.src = "img/destroyed.gif";
                                desoroyedIMG.className = "destroyed";
                                myApp.appendChild(desoroyedIMG);
                                // desoroyedIMG.width = 100;
                                
                                desoroyedIMG.style.left = asteroid.offsetLeft + 'px';
                                desoroyedIMG.style.top = asteroid.offsetTop + 'px';
                                
                                asteroid.remove(); // aystorid be reove ho gia
                                
                                fireSound.currentTime = 0; //sound time 
                                fireSound.play(); //sound play
                                

                                
                                //interval
                                setInterval(() => {
                                    desoroyedIMG.remove(); // ye image ko removed kr dy gi
                                    
                                }, 500);
                                
                                clearInterval(fire.fireKaInterval); // stop interval
                        
                                clearInterval(firingInterval);

                                
                            
                            }

        
                        }

            }, 0);

            console.log("fire ho raha ha")
        break;

        case 37:  //left array
        if(player.offsetLeft < myApp.offsetLeft){

            player.style.left =  'myApp.offsetLeft';
        }
        

             player.style.left = (player.offsetLeft - 5) + 'px'; //left move krny k lia
            console.log("Left Ja Raha Hai")
        
        break;

        case 39:  //right array

        
        player.style.left = (player.offsetLeft + 5) +'px'; //right move krny k lia
        console.log("right Ja Raha Hai")
        break;

        case 38:  //up array
        if (player.offsetTop == -3) {
            myApp.style.top = '-3px'
            console.log(player.offsetTop)
        }
        else{
            player.style.top = (player.offsetTop - 5) + 'px'; // top ko move kia ha
            console.log("Top ja raha ha")
        }
        break;

        case 40:  //bottom array
        player.style.top = (player.offsetTop + 5) + 'px'; // bottom ko move kia ha
        console.log("bottom ja raha ha")
        break;

    
        // default:
        //     break;
    }
    console.log(myEvent.keyCode)

   
}