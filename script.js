window.addEventListener('resize',()=>{
    const md = document.querySelector('.meddy')
    const sm = document.querySelector('.seddy')
    if(window.innerWidth < 850){
        // alert(window.innerWidth)
        md.classList.remove('media-trap')
        md.classList.add('md')
        sm.classList.remove('media-trap')
        sm.classList.add('md')
    }else if(window.innerWidth > 850){
        md.classList.remove('md')
        md.classList.add('media-trap')
        sm.classList.remove('md')
        sm.classList.add('media-trap')
    }
})
window.addEventListener('load',()=>{
    const md = document.querySelector('.meddy')
    const sm = document.querySelector('.seddy')
    if(window.innerWidth < 850){
        // alert(window.innerWidth)
        md.classList.remove('media-trap')
        md.classList.add('md')
        sm.classList.remove('media-trap')
        sm.classList.add('md')
    }else if(window.innerWidth > 850){
        md.classList.remove('md')
        md.classList.add('media-trap')
        sm.classList.remove('md')
        sm.classList.add('media-trap')
    }
})