$(function(){
    //부드러운 스크롤
    function smoothScroll() {
        $('a').click(function () {
            var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
            var aHref = $.attr(this, 'href');
            if(aHref.length > 1 && aHref.indexOf('#') > -1) {
                var windowTop = $(window).scrollTop();
                var offsetTop = $('#' + aHref.substr(1).replace(regExp,"\\$&")).offset().top;
                var distance = Math.abs(windowTop - offsetTop);
                var calcSpeed = 400*distance/2000;
                var speed = calcSpeed<200?200:(calcSpeed>800?800:calcSpeed);
                $('html, body').animate({
                    scrollTop: offsetTop
                }, speed, 'swing');
                return false;
            }
        });
    }
    $(document).ready(function() {
        smoothScroll();
    });
    //커서
    let $mouseCursor = $('#cursor');
    function moveCircle(e) {
        TweenLite.to($mouseCursor, 0.01, {
          css: {
            left: e.pageX,
            top: e.pageY
          }
        });
      }
      
      $(window).on('mousemove', moveCircle);
      
      $('a,button,.tab_menu').on('mouseenter',function(){
        $('#cursor').addClass('hover');
      })
      $('a,button,.tab_menu').on('mouseleave',function(){
        $('#cursor').removeClass('hover');
      })

    //헤더
    let header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        let scrollBar = window.scrollY;
        if (scrollBar >= 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

    //클릭한 메뉴에 스티커 붙이기 
    $('.nav .gnb li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    //스크롤 값에 따라 헤더 메뉴 활성화
    let profile = $('#2').offset().top - 300;
    let design = $('#3').offset().top - 200;
    let graphic = $('#4').offset().top - 200;
    let contact = $('#5').offset().top - 300;
    //console.log(profile)
    //console.log(design)
    //console.log(graphic)
    //console.log(contact)
    $(window).scroll(function(){
        let scroll = $(window).scrollTop(); 
        //console.log(scroll)
        if (scroll < profile - 300){
            $('.nav .gnb li').removeClass('active');
            $('.nav .gnb li:first-child').addClass('active');
        } else if (scroll < design - 200 ) {
            $('.nav .gnb li').removeClass('active');
            $('.nav .gnb li:nth-child(2)').addClass('active');
        } else if (scroll < graphic - 200) {
            $('.nav .gnb li').removeClass('active');
            $('.nav .gnb li:nth-child(3)').addClass('active');
  
        } else if (scroll < contact - 300) {
            $('.nav .gnb li').removeClass('active');
            $('.nav .gnb li:nth-child(4)').addClass('active');
  
        } else if (scroll >= contact - 300) {
            $('.nav .gnb li').removeClass('active');
            $('.nav .gnb li:nth-child(5)').addClass('active');
  
        }
    });
    
    //부드럽게 해당 영역으로 스크롤
    $('.nav .gnb li a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 100}, 500);
    });
    //h1로고 클릭 시 맨 위로
    $('h1.logo').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000);
        $('.nav .gnb li').removeClass('active');//헤더 나머지 메뉴 비활성화
        $('.nav .gnb li:first-child').addClass('active');//헤더의 Intro 활성화
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

    $('.graphic_right .item').mouseenter(function (){
        //console.log($(this).css('background'));
        let changeImage = $(this).css('background');
        $('.figure').css({
            'background' : changeImage
        });
    });

    let titleHei = $('.graphic .fix .title_wrap').height();

    $('.graphic .graphic_right').css({'margin-top' : titleHei});

    let topBtn = $('.top_btn');
    topBtn.click(function(){
        $('html, body').animate({
            scrollTop : 0
        },2000,'easeInOutCubic');//animate()
        $('.nav .gnb li').removeClass('active');
        $('.nav .gnb li:first-child').addClass('active');
    });//click()

    let footerHei = $('.footer').outerHeight(); //푸터 순수내부 높이+패딩+보더
    $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop();
        let val = $(document).height() - $(window).height() - footerHei + 100;
        
        if (scrollTop >= val){
            $('.top_btn').addClass('on').css({'bottom':footerHei})

        }else {
            $('.top_btn').removeClass('on').css({'bottom':'2%'})

        }
        if (scrollTop === 0 ) {
            $('.top_btn').css({'display' : 'none'}).fadeOut(100);
        }else {
            $('.top_btn').css({'opacity' : '1'}).show(500);
        }
    });//scroll()  

    
});//script end