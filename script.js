/* =====================================================
 LOVE STORY ULTIMATE v10
 script.js PART 1

 SCENE + MUSIC + ENVELOPE + LETTER
===================================================== */


/* ==========================
   ELEMENT
========================== */


const scenes = document.querySelectorAll(".scene");

const music = document.getElementById("bgMusic");


/* ==========================
   SCENE SYSTEM
========================== */


function showScene(id){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });


    const target =
    document.getElementById(id);


    if(target){

        target.classList.add("active");

    }

}



/* ==========================
   LOADING
========================== */


window.addEventListener("load",()=>{


    setTimeout(()=>{


        showScene("opening");


    },3500);


});



/* ==========================
   MUSIC
========================== */


function playMusic(){


    music.volume = 0;


    music.play()
    .catch(()=>{});


    let volume = 0;


    const fade = setInterval(()=>{


        volume += 0.02;


        music.volume = volume;



        if(volume >= 1){


            clearInterval(fade);


        }


    },200);


}





/* ==========================
   START BUTTON
========================== */


const startButton =
document.getElementById("startButton");



startButton.addEventListener(
"click",()=>{


    playMusic();


    showScene(
    "envelopePage"
    );


});





/* ==========================
   ENVELOPE OPEN
========================== */


const envelope =
document.getElementById("envelope");



envelope.addEventListener(
"click",()=>{


    envelope.classList.add(
    "open"
    );



    setTimeout(()=>{


        showScene(
        "letterPage"
        );


        startTyping();



    },1200);



});





/* ==========================
   TYPEWRITER LETTER
========================== */


const text =
`
Aku ingin mengatakan sesuatu...

Terima kasih sudah hadir
di dalam hidupku.

Terima kasih sudah membuat
hari-hariku menjadi lebih indah.

Aku mungkin bukan orang
yang sempurna...

Tapi aku ingin selalu belajar
menjadi seseorang yang lebih baik
untuk kamu.

Karena bagiku...

Kamu adalah seseorang
yang sangat berharga.

❤️
`;



let index = 0;



function startTyping(){


const area =
document.getElementById(
"typingText"
);


area.innerHTML="";


index=0;



const typing =
setInterval(()=>{


    area.innerHTML +=
    text[index];



    index++;



    if(index >= text.length){


        clearInterval(
        typing
        );


    }



},50);


}




/* ==========================
 NEXT BUTTON
========================== */


const nextButton =
document.getElementById(
"nextButton"
);



nextButton.addEventListener(
"click",()=>{


showScene(
"questionPage"
);



});

/* =====================================================
 LOVE STORY ULTIMATE v10
 script.js PART 2

 QUESTION + LOVE + GALLERY + FLOWER
===================================================== */



/* ==========================
   QUESTION BUTTON
========================== */


const yesButton =
document.getElementById(
"yesButton"
);


const noButton =
document.getElementById(
"noButton"
);



/* ==========================
   YES BUTTON
========================== */


yesButton.addEventListener(
"click",()=>{


    showScene(
    "lovePage"
    );


    createHeartExplosion();



    setTimeout(()=>{


        showScene(
        "galleryPage"
        );


        startGallery();



    },4000);



});





/* ==========================
   NO BUTTON KABUR
========================== */


noButton.addEventListener(
"mouseover",()=>{


    const x =
    Math.random()*400-200;


    const y =
    Math.random()*300-150;



    noButton.style.transform =

    `
    translate(${x}px,${y}px)
    `;



});






/* ==========================
   HEART EXPLOSION
========================== */


function createHeartExplosion(){


for(let i=0;i<80;i++){


    const heart =
    document.createElement(
    "div"
    );



    heart.innerHTML="❤️";


    heart.className=
    "loveHeart";



    heart.style.left =
    "50%";


    heart.style.top =
    "50%";



    heart.style.setProperty(

    "--x",

    Math.random()*800-400
    +"px"

    );



    heart.style.setProperty(

    "--y",

    Math.random()*700-350
    +"px"

    );



    document.body.appendChild(
    heart
    );



    setTimeout(()=>{


        heart.remove();


    },2000);



}


}







/* ==========================
   GALLERY
========================== */


function startGallery(){


const photos =
document.querySelectorAll(
".photo"
);



photos.forEach(
(photo,i)=>{


    photo.style.animationDelay =

    (i*0.4)+"s";



});



setTimeout(()=>{


    showScene(
    "flowerPage"
    );



    startFlower();



},8000);



}







/* ==========================
   FLOWER PAGE
========================== */


function startFlower(){



const bouquet =
document.querySelector(
".bouquet"
);



bouquet.style.transform =

"translateY(0)";



setTimeout(()=>{


showScene(
"nightPage"
);



startNight();



},7000);



}

/* =====================================================
 LOVE STORY ULTIMATE v10
 script.js PART 3 FINAL

 NIGHT + SAKURA + ENDING
===================================================== */



/* ==========================
   NIGHT START
========================== */


function startNight(){


createStars();


createMeteor();


setTimeout(()=>{


    showScene(
    "hugPage"
    );


},10000);



}







/* ==========================
   CREATE STARS
========================== */


function createStars(){


const container =

document.getElementById(
"nightStars"
);



for(let i=0;i<200;i++){



const star =

document.createElement(
"div"
);



star.className="star";



star.style.left =

Math.random()*100+"vw";



star.style.top =

Math.random()*100+"vh";



star.style.animationDuration =

(1+Math.random()*3)+"s";



container.appendChild(
star
);



}



}







/* ==========================
   METEOR
========================== */


function createMeteor(){



setInterval(()=>{


const meteor =

document.createElement(
"div"
);



meteor.className="meteor";



meteor.style.left =

Math.random()*70+"vw";



meteor.style.top =

Math.random()*30+"vh";



document

.getElementById(
"shootingStars"
)

.appendChild(
meteor
);



setTimeout(()=>{


meteor.remove();


},2000);



},3000);



}








/* ==========================
   SAKURA FALL
========================== */


function createSakura(){



const sakura =

document.createElement(
"div"
);



sakura.innerHTML="🌸";


sakura.style.position="fixed";


sakura.style.top="-50px";


sakura.style.left=

Math.random()*100+"vw";



sakura.style.fontSize=

20+

Math.random()*20

+"px";



sakura.style.animation=

"fall 8s linear";



document.body.appendChild(
sakura
);



setTimeout(()=>{


sakura.remove();



},8000);



}



setInterval(
createSakura,
300
);








/* ==========================
   CLICK HEART
========================== */


document.addEventListener(
"click",
(e)=>{


const heart =

document.createElement(
"div"
);



heart.innerHTML="❤️";



heart.className=
"floatingHeart";



heart.style.left=

e.clientX+"px";



heart.style.top=

e.clientY+"px";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},4000);



});







/* ==========================
   HUG BUTTON
========================== */


const hugButton =

document.getElementById(
"hugButton"
);



hugButton.addEventListener(
"click",
()=>{


showScene(
"finalPage"
);



heartRain();



fadeMusic();



});








/* ==========================
   HEART RAIN
========================== */


function heartRain(){



for(let i=0;i<100;i++){



const heart =

document.createElement(
"div"
);



heart.innerHTML="❤️";



heart.className=
"floatingHeart";



heart.style.left=

Math.random()*100+"vw";



heart.style.top=

"100vh";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();



},5000);



}



}







/* ==========================
   MUSIC FADE OUT
========================== */


function fadeMusic(){



let volume =
music.volume;



const fade =

setInterval(()=>{



volume-=0.03;



music.volume =
volume;



if(volume<=0){


clearInterval(
fade
);



music.pause();



}



},200);



}





/* ==========================
   SAKURA ANIMATION CSS HELPER
========================== */


const style =

document.createElement(
"style"
);



style.innerHTML=`

@keyframes fall{


from{


transform:

translateY(-100px)

rotate(0deg);


}


to{


transform:

translateY(110vh)

rotate(720deg);


}


}

`;



document.head.appendChild(
style
);