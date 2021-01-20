

$(function(){
  var imgHeight = $('._main').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.fv').outerHeight(); //ファーストビューの高さを取得
  var subimgHeight = $('._aboutMain').outerHeight(); //サブページのキービジュアルの画像の高さを取得


	// ハンバーガーアイコンの開閉
  $('.menu').on('click',function(){
    $('body').toggleClass('noscroll');
    if( $(window).scrollTop() < bgHeight -50){
      $('.menu-line').toggleClass('active');
      $('.header-nav').fadeToggle();
      $('.menu-musk').fadeToggle(300); 
    }else{
      $(this).toggleClass('black');
      $('.menu-line').toggleClass('active');
      $('.header-nav').fadeToggle();
      $('.menu-musk').fadeToggle(300); 
    }
	});
	// ナビのどれかを選択したらハンバーガーメニューを閉じる
  $('.nav-item').on('click',function(){
			if ( $('.menu-line').hasClass('active') ) { 
				$('.header-nav').fadeOut();
				$('.menu-line').toggleClass('active');
			}
  });

  // スクロールしたら、サイトロゴとハンバーガーアイコンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight || $(window).scrollTop() < subimgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.header-logo').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.header-logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight ) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.menu').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.menu').addClass('black');
    }
  });


	// ヘッダーの固定
  $( window ).on( 'load scroll', function() {
    if ( bgHeight < $( this ).scrollTop() ) { // 486px以上スクロールしたら
      $( '.header' ).addClass( 'fixed' );
    } else {
      $( '.header' ).removeClass( 'fixed' );
    }
  });


  // トップへ戻るボタン
    var showFlag = false;
    var topBtn = $('.page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > bgHeight) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 500); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 500); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
  
});


