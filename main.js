let dropMenu = document.querySelectorAll('.faq-heading');

// for (let i = 0; i < dropMenu.length; i++) {
//     dropMenu[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//     }) 
    
// }

dropMenu.forEach(dropMenu => {
    dropMenu.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        dropMenu.classList.add('active');
    })
})