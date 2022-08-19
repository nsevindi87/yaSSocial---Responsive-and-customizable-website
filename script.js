//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelector('.choose-size span');
var root = document.querySelector(':root');


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

//THEME/DISPLAY CUSTOMIATION

//opens modal
const openThemeModal = ()=> {
    themeModal.style.display = 'grid';
}

//closes Model
const closeThemeModel = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}


//close modal
themeModal.addEventListener('click', closeThemeModel)

theme.addEventListener('click', openThemeModal)

/* -----------------FONTS-------------- */
fontSize.forEach(size => {
    let fontSize;

    size.addEventListener('click', ()=>{
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })

})