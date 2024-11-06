let menubtn = document.querySelector('#menu-btn');
let searchbtn = document.querySelector('#search-btn');
let colorbtn = document.querySelector('#color-btn');
let themebtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.vavbar');
let searchform = document.querySelector('.search-form');
let colorpallet = document.querySelector('.colors-palette');


menubtn.onclick = () =>{
    navbar.classList.toggle('active');
    
    searchform.classList.remove('active');
    colorpallet.classList.remove('active');
}


searchbtn.onclick = () =>{
    searchform.classList.toggle('active');
    
    navbar.classList.remove('active');
    colorpallet.classList.remove('active');
}


colorbtn.onclick = () =>{
    colorpallet.classList.toggle('active');
    
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    colorpallet.classList.remove('active');

}

document.querySelector('.colors-palette .color').forEach(btn =>{

btn.onclick = () =>{
    let color = btn.style.baackground;
    document.querySelector(':root').style.setProperty('---main-color', color);

}
})

themebtn.onclick = () =>{
    themebtn.classList.toggle('fa-sun');
    if(themebtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}