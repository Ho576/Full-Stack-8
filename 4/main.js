const navbar = document.querySelector('.navbar')
const headerContentSpan = document.querySelector('.header-content span')
const item = document.querySelector('.nav-link')
window.addEventListener('scroll',function(){
    console.log(this.window.screenY)

    if(this.window.scrollY >headerContentSpan.offsetTop) {
    navbar.style.backgroundColor="Blue"
    
    }else{
        navbar.style.backgroundColor="transparent"
    }
})