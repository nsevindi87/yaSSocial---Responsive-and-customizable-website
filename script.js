//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')


//remove active class from all menu items
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


/* -------------MESSAGES----------- */
//searches chat
const searchMessage = () =>{
    const va1 = messageSearch.value.toLowerCase()
    message.forEach(chat=>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(va1) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display ='none';
        }
    })
}


//search chat
messageSearch.addEventListener('keyup', searchMessage)







//highleight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display ='none'
    setTimeout(() => {
        messages.style.boxShadow ='none'
    }, 2000);
})