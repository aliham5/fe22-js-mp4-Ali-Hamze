const nameAnimation={
    targets:'#div-container h1,h2,h3',
    translateX:'-5rem',
    // delay:anime.stagger(100),
    rotate: anime.stagger([-360, 360]),

    direction:'alternate',
    easing:'easeOutSine',
    duration:5000,
    opacity: [0,1],
    loop:true,
    autoplay:false,
}

// const name2Animation={
// Targets:"#div-container2 h2",
// scale: [14, 1],
// opacity: [0, 1],
//  easing: "easeOutCirc",
//  duration: 5000,

// }



const name = anime(nameAnimation);




const playbtn=document.querySelector('#play')
const pausebtn=document.querySelector('#pause')
const stopbtn=document.querySelector('#stop')



playbtn.addEventListener('click',name.play);
pausebtn.addEventListener('click',name.pause);
stopbtn.addEventListener('click',function(){
    name.restart();
    name.pause();
});

// anime({
//     targets: 'div-Container2',
//     width: '100%', // -> from '28px' to '100%',
//     easing: 'easeInOutQuad',
//     direction: 'alternate',
//     loop: true
//   });