const menuItems = document.querySelectorAll('.menu-item');

const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click', (event)=>{
        changeActiveItem();
        item.classList.add('active');
        event.preventDefault();
        if(item.id != 'notification'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block'
            document.querySelector('#notification .notification-count').style.display = 'none'
        }
    })
})