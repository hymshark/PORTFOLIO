$(function(){
    
    let  navWidth = $('.nav .gnb li').outerWidth();
    $('.nav .menu_bar').width(navWidth);

    $('.nav .gnb li').mouseenter(function(){
        let moveWidth = $(this).outerWidth();
        let moveLeft = $(this).position().left;
        $('.nav .menu_bar').stop().animate({
            left : moveLeft,
            width : moveWidth
        });
    });

    let menu = document.querySelectorAll('.Design .tab_menu > li');
    let itemWrap = document.querySelectorAll('.tab_list > li');

    for(let i=0; i<menu.length; i++) {

        menu[i].addEventListener('click', () => {

            menu.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            menu[i].classList.add('active');

            itemWrap.forEach(item => {
                item.classList.remove('active');
            });
            itemWrap[i].classList.add('active');
        });//click()
    };//for() 

    
});//script end