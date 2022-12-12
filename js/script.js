const nameAnimation={
    targets:'#div-container h1',
    translateX:'-5rem',
    // delay:anime.stagger(100),
    rotate: anime.stagger([-360, 360]),

    direction:'alternate',
    easing:'easeOutSine',
    duration:5000,
    loop:true,
    autoplay:false,
}

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