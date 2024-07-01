// 註解:
// console.log(isMobile)

// ---------------------------------
// let isMobile;

// if($(window).width() <= 480) {
//     isMobile = true;
// } else {
//     isMobile = false;
// }
// 等同下列:
const isMobile = $(window).width() <= 480;
const $slide = $('#Slide');
const $grid = $slide.find('.grid');
const $nav = $('#Nav');
// console.log($grid)
function setGrid() {
    // // if(isMobile == true) { 等同下列
    // if(isMobile) {
    //     $('#Grid').addClass('grid-2');
    // } else {
    //     $('#Grid').addClass('grid-3');
    // }
    // 也等同下面條列:
    if(isMobile) {
        // $('#Grid').addClass('grid-2');
        $grid.addClass('grid-2');
        return;
    }
        // $('#Grid').addClass('grid-3');
        $grid.addClass('grid-3');

}

function setScroll(){
    $(window).scroll(function(){
        
        // isMobile:true
        // !isMobile:false
        // if (isMobile == true) {
            
        // console.log($(window).scrollTop());
            
        if(!isMobile) return;

        // if ($(window).scrollTop() == 0) {
        if ($(this).scrollTop() == 0) {

           $nav.removeClass('nav-active');
                
           // console.log(0)

        }else {
            $nav.addClass('nav-active');
                
            // console.log('要套用 class')
        }
    });
}

function setFancybox(){
    $grid.find('a').fancybox({
        protect: true,
        loop: true,
        animationDuration: 1000,
        transitionDuration: 1000,
        transitionEffect:'tube',
        // fullScreen: {
        //     autoStart: true,
        // }
        // keyboard: false,
        // infobar: false,
        // toolbar: false,
        // smallBtn: true,
        // arrows: false,
        // slideShow: {
        //     autoStart: true,
        //     speed: 2000,
        // }
        // thumbs: false,
        buttons: [
            'zoom',
            'share',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close',
        ],
        media: {
            youtube: {
                params: {
                    autoplay: false,
                }
            }
        }
    });
}

function setClickBtn() {
    console.log($nav.find('.nav-btn'));
    const $btns = $nav.find('.nav-btn');
    $btns.click(function() {
        $(this)
            .attr('disabled', true)
            .siblings().attr('disabled', false);
        const index = $(this).index();
        // console.log(index);
        
        // if(index == 0) {
        //     // console.log('我是0')
        //     $slide.css('transform', 'translate(0, 0)');
        // // } else {
        // //     console.log('我不是0') 
        // }

        // if(index == 1) {
        //     $slide.css('transform', 'translate(-100vw, 0)');
        // }

        // if(index == 2) {
        //     $slide.css('transform', 'translate(-200vw, 0)');
        // }

        // if(index == 3) {
        //     $slide.css('transform', 'translate(0, -100vh)');
        // }

        // if(index == 4) {
        //     $slide.css('transform', 'translate(-100vw, -100vh)');
        // }

        // if(index == 5) {
        //     $slide.css('transform', 'translate(-200vw, -100vh)');
        // }

        // 上述第二種寫法，六選一(優點:不用逐一跑程式)
        // if(index == 0) {
        //     $slide.css('transform', 'translate(0, 0)');
        // } else if(index == 1) {
        //     $slide.css('transform', 'translate(-100vw, 0)');
        // } else if(index == 2) {
        //     $slide.css('transform', 'translate(-200vw, 0)');
        // } else if(index == 3) {
        //     $slide.css('transform', 'translate(0, -100vh)');
        // } else if(index == 4) {
        //     $slide.css('transform', 'translate(-100vw, -100vh)');
        // } else if(index == 5) {
        //     $slide.css('transform', 'translate(-200vw, -100vh)');
        // }

        // 第三種寫法
        switch(index) {
            case 0:
                $slide.css('transform', 'translate(0, 0)');
                break;
            case 1:
                $slide.css('transform', 'translate(-100vw, 0)');
                break;
            case 2:
                $slide.css('transform', 'translate(-200vw, 0)');
                break;
            case 3:
                $slide.css('transform', 'translate(0, -100vh)');
                break;
            case 4:
                $slide.css('transform', 'translate(-100vw, -100vh)');
                break;
            case 5:
                $slide.css('transform', 'translate(-200vw, -100vh)');
                break;
        }


    });
}

// 其他動畫載入的函式庫
function setInit() {
    setGrid();
    $nav.find('.nav-btn').eq(0).attr('disabled', true);
}

// 其他事件的函式庫
function setEvent() {
    setScroll();
    setFancybox();
    setClickBtn();
}

setInit();
setEvent();
