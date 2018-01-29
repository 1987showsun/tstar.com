$(function(){
  var _sleep = 200;
  var _time  = '';

  $('.sunTabsUl').find('>li').on({
    click : function(){
      clearTimeout(_time);
      var _Index = $(this).index();
      var _this  = $(this);
      _this.parent().find('>li').removeClass('active');
      _this.addClass('active');
      _this.parents().find('>.sunTabContent').fadeOut(100);
      _time = setTimeout(function(){
        _this.parents().find('>.sunTabContent').eq(_Index).fadeIn(100);
      },100);

    }
  })

  $('.sunOrgansTitle').off().on({
    click : function(){
      $('.sunOrgansTitle').removeClass('active').next().stop().slideUp(_sleep);
      var _display = $(this).next().css('display');
      if( _display=='block' ){
        $(this).removeClass('active').next().stop().slideUp(_sleep);
      }else{
        $(this).addClass('active').next().stop().slideDown(_sleep);
      }
    }
  })
})
