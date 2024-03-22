const btn_menu = document.querySelector('.btn-menu-active')
const btn_close = document.querySelector('.btn-close')
const slide_menu_wrap = document.querySelector('.slide-menu-wrap')
const slide_menu = document.querySelector('.slide-menu')

btn_menu.addEventListener('click', () => {
    btn_menu.className = 'btn-menu'
    btn_close.className = 'btn-close-active'
    slide_menu_wrap.className = 'slide-menu-wrap-active'
})

btn_close.addEventListener('click', () => {
    btn_close.className = 'btn-close'
    slide_menu_wrap.className = 'slide-menu-wrap'
    btn_menu.className = 'btn-menu-active'
})


