(function(a){a.fn.superSlider=function(b){var c=a(this),e=a.extend({prevBtn:".prevBtn",nextBtn:".nextBtn",listCont:".content",delayTime:1e3,speed:1e3,amount:1,showNum:4,autoPlay:!1,scrollWhere:"prev"},b),f={cont:c.find(e.listCont),prevBtn:c.find(e.prevBtn),nextBtn:c.find(e.nextBtn),time:e.delayTime,speed:e.speed,oneContWidth:c.find(e.listCont).children().eq(0).outerWidth(!0),n:e.amount,len:c.find(e.listCont).children().length,contWidth:c.find(e.listCont).children().length*c.find(e.listCont).children().eq(0).outerWidth(!0),showNum:e.showNum};({scrollLNext:function scrollLNext(){f.cont.is(":animated")||(f.cont.children().slice(0,f.n).clone().appendTo(f.cont),f.cont.width(f.cont.children().length*f.oneContWidth+"px"),f.cont.animate({"margin-left":"-"+f.oneContWidth*f.n+"px"},f.speed,function(){a(this).children().slice(0,f.n).remove(),a(this).css("margin-left","0px")}))},scrollPrev:function scrollPrev(){f.cont.is(":animated")||(f.cont.children().slice(f.len-f.n,f.len).clone().prependTo(f.cont),f.cont.css({"margin-left":"-"+f.oneContWidth*f.n+"px",width:f.cont.children().length*f.oneContWidth+"px"}),f.cont.animate({"margin-left":"0px"},f.speed,function(){a(this).children().slice(f.cont.children().length-f.n,f.cont.children().length).remove()}))},init:function init(){if(f.cont.parent().css({overflow:"hidden",width:f.showNum*f.oneContWidth}),f.cont.width(f.contWidth+"px"),f.cont.children().length<=f.showNum?(f.prevBtn.hide(),f.nextBtn.hide()):(f.prevBtn.show(),f.nextBtn.show(),f.prevBtn.off().on("click",this.scrollPrev),f.nextBtn.off().on("click",this.scrollLNext)),!0===e.autoPlay){if("prev"===e.scrollWhere)var h=this.scrollPrev;else var h=this.scrollLNext;var i=e.delayTime+e.speed,j=setInterval(h,i);a(e.listCont+","+e.prevBtn+","+e.nextBtn).hover(function(){clearInterval(j)},function(){j=setInterval(h,i)})}}}).init()}})(jQuery);
(function(a){var b={},c={mode:'horizontal',slideSelector:'',infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:'visible',responsive:!0,slideZIndex:50,wrapperClass:'bx-wrapper',touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:'full',pagerShortSeparator:' / ',pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:'Next',prevText:'Prev',nextSelector:null,prevSelector:null,autoControls:!1,startText:'Start',stopText:'Stop',autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:'next',autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function onSliderLoad(){},onSlideBefore:function onSlideBefore(){},onSlideAfter:function onSlideAfter(){},onSlideNext:function onSlideNext(){},onSlidePrev:function onSlidePrev(){},onSliderResize:function onSliderResize(){}};a.fn.bxSlider=function(d){if(0==this.length)return this;if(1<this.length)return this.each(function(){a(this).bxSlider(d)}),this;var f={},g=this;b.el=this;var h=a(window).width(),j=a(window).height(),k=function(){f.settings=a.extend({},c,d),f.settings.slideWidth=parseInt(f.settings.slideWidth),f.children=g.children(f.settings.slideSelector),f.children.length<f.settings.minSlides&&(f.settings.minSlides=f.children.length),f.children.length<f.settings.maxSlides&&(f.settings.maxSlides=f.children.length),f.settings.randomStart&&(f.settings.startSlide=Math.floor(Math.random()*f.children.length)),f.active={index:f.settings.startSlide},f.carousel=1<f.settings.minSlides||1<f.settings.maxSlides,f.carousel&&(f.settings.preloadImages='all'),f.minThreshold=f.settings.minSlides*f.settings.slideWidth+(f.settings.minSlides-1)*f.settings.slideMargin,f.maxThreshold=f.settings.maxSlides*f.settings.slideWidth+(f.settings.maxSlides-1)*f.settings.slideMargin,f.working=!1,f.controls={},f.interval=null,f.animProp='vertical'==f.settings.mode?'top':'left',f.usingCSS=f.settings.useCSS&&'fade'!=f.settings.mode&&function(){var S=document.createElement('div'),T=['WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var U in T)if(void 0!==S.style[T[U]])return f.cssPrefix=T[U].replace('Perspective','').toLowerCase(),f.animProp='-'+f.cssPrefix+'-transform',!0;return!1}(),'vertical'==f.settings.mode&&(f.settings.maxSlides=f.settings.minSlides),g.data('origStyle',g.attr('style')),g.children(f.settings.slideSelector).each(function(){a(this).data('origStyle',a(this).attr('style'))}),l()},l=function(){g.wrap('<div class="'+f.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),f.viewport=g.parent(),f.loader=a('<div class="bx-loading" />'),f.viewport.prepend(f.loader),g.css({width:'horizontal'==f.settings.mode?100*f.children.length+215+'%':'auto',position:'relative'}),f.usingCSS&&f.settings.easing?g.css('-'+f.cssPrefix+'-transition-timing-function',f.settings.easing):!f.settings.easing&&(f.settings.easing='swing');r();f.viewport.css({width:'100%',overflow:'hidden',position:'relative'}),f.viewport.parent().css({maxWidth:p()}),f.settings.pager||f.viewport.parent().css({margin:'0 auto 0px'}),f.children.css({float:'horizontal'==f.settings.mode?'left':'none',listStyle:'none',position:'relative'}),f.children.css('width',q()),'horizontal'==f.settings.mode&&0<f.settings.slideMargin&&f.children.css('marginRight',f.settings.slideMargin),'vertical'==f.settings.mode&&0<f.settings.slideMargin&&f.children.css('marginBottom',f.settings.slideMargin),'fade'==f.settings.mode&&(f.children.css({position:'absolute',zIndex:0,display:'none'}),f.children.eq(f.settings.startSlide).css({zIndex:f.settings.slideZIndex,display:'block'})),f.controls.el=a('<div class="bx-controls" />'),f.settings.captions&&A(),f.active.last=f.settings.startSlide==s()-1,f.settings.video&&g.fitVids();var T=f.children.eq(f.settings.startSlide);'all'==f.settings.preloadImages&&(T=f.children),f.settings.ticker?f.settings.pager=!1:(f.settings.pager&&x(),f.settings.controls&&y(),f.settings.auto&&f.settings.autoControls&&z(),(f.settings.controls||f.settings.autoControls||f.settings.pager)&&f.viewport.after(f.controls.el)),m(T,n)},m=function(S,T){var U=S.find('img, iframe').length;if(0==U)return void T();var V=0;S.find('img, iframe').each(function(){a(this).one('load',function(){++V==U&&T()}).each(function(){this.complete&&a(this).load()})})},n=function(){if(f.settings.infiniteLoop&&'fade'!=f.settings.mode&&!f.settings.ticker){var S='vertical'==f.settings.mode?f.settings.minSlides:f.settings.maxSlides,T=f.children.slice(0,S).clone().addClass('bx-clone'),U=f.children.slice(-S).clone().addClass('bx-clone');g.append(T).prepend(U)}f.loader.remove(),u(),'vertical'==f.settings.mode&&(f.settings.adaptiveHeight=!0),f.viewport.height(o()),g.redrawSlider(),f.settings.onSliderLoad(f.active.index),f.initialized=!0,f.settings.responsive&&a(window).bind('resize',R),f.settings.auto&&f.settings.autoStart&&(1<s()||f.settings.autoSlideForOnePage)&&K(),f.settings.ticker&&L(),f.settings.pager&&G(f.settings.startSlide),f.settings.controls&&J(),f.settings.touchEnabled&&!f.settings.ticker&&N()},o=function(){var S=0,T=a();if('vertical'!=f.settings.mode&&!f.settings.adaptiveHeight)T=f.children;else if(!f.carousel)T=f.children.eq(f.active.index);else{var U=1==f.settings.moveSlides?f.active.index:f.active.index*t();for(T=f.children.eq(U),i=1;i<=f.settings.maxSlides-1;i++)T=U+i>=f.children.length?T.add(f.children.eq(i-1)):T.add(f.children.eq(U+i))}return'vertical'==f.settings.mode?(T.each(function(){S+=a(this).outerHeight()}),0<f.settings.slideMargin&&(S+=f.settings.slideMargin*(f.settings.minSlides-1))):S=Math.max.apply(Math,T.map(function(){return a(this).outerHeight(!1)}).get()),'border-box'==f.viewport.css('box-sizing')?S+=parseFloat(f.viewport.css('padding-top'))+parseFloat(f.viewport.css('padding-bottom'))+parseFloat(f.viewport.css('border-top-width'))+parseFloat(f.viewport.css('border-bottom-width')):'padding-box'==f.viewport.css('box-sizing')&&(S+=parseFloat(f.viewport.css('padding-top'))+parseFloat(f.viewport.css('padding-bottom'))),S},p=function(){var S='100%';return 0<f.settings.slideWidth&&('horizontal'==f.settings.mode?S=f.settings.maxSlides*f.settings.slideWidth+(f.settings.maxSlides-1)*f.settings.slideMargin:S=f.settings.slideWidth),S},q=function(){var S=f.settings.slideWidth,T=f.viewport.width();return 0==f.settings.slideWidth||f.settings.slideWidth>T&&!f.carousel||'vertical'==f.settings.mode?S=T:1<f.settings.maxSlides&&'horizontal'==f.settings.mode&&(T>f.maxThreshold||T<f.minThreshold&&(S=(T-f.settings.slideMargin*(f.settings.minSlides-1))/f.settings.minSlides)),S},r=function(){var S=1;if(!('horizontal'==f.settings.mode&&0<f.settings.slideWidth))'vertical'==f.settings.mode&&(S=f.settings.minSlides);else if(f.viewport.width()<f.minThreshold)S=f.settings.minSlides;else if(f.viewport.width()>f.maxThreshold)S=f.settings.maxSlides;else{var T=f.children.first().width()+f.settings.slideMargin;S=Math.floor((f.viewport.width()+f.settings.slideMargin)/T)}return S},s=function(){var S=0;if(!(0<f.settings.moveSlides))S=Math.ceil(f.children.length/r());else if(f.settings.infiniteLoop)S=Math.ceil(f.children.length/t());else for(var T=0,U=0;T<f.children.length;)++S,T=U+r(),U+=f.settings.moveSlides<=r()?f.settings.moveSlides:r();return S},t=function(){return 0<f.settings.moveSlides&&f.settings.moveSlides<=r()?f.settings.moveSlides:r()},u=function(){if(!(f.children.length>f.settings.maxSlides&&f.active.last&&!f.settings.infiniteLoop)){var T=f.children.eq(f.active.index*t()).position();f.active.index==s()-1&&(f.active.last=!0),void 0!=T&&('horizontal'==f.settings.mode?v(-T.left,'reset',0):'vertical'==f.settings.mode&&v(-T.top,'reset',0))}else if('horizontal'==f.settings.mode){var S=f.children.last(),T=S.position();v(-(T.left-(f.viewport.width()-S.outerWidth())),'reset',0)}else if('vertical'==f.settings.mode){var U=f.children.length-f.settings.minSlides,T=f.children.eq(U).position();v(-T.top,'reset',0)}},v=function(S,T,U,V){if(f.usingCSS){var W='vertical'==f.settings.mode?'translate3d(0, '+S+'px, 0)':'translate3d('+S+'px, 0, 0)';g.css('-'+f.cssPrefix+'-transition-duration',U/1e3+'s'),'slide'==T?(g.css(f.animProp,W),g.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(){g.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd'),H()})):'reset'==T?g.css(f.animProp,W):'ticker'==T&&(g.css('-'+f.cssPrefix+'-transition-timing-function','linear'),g.css(f.animProp,W),g.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(){g.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd'),v(V.resetValue,'reset',0),M()}))}else{var X={};X[f.animProp]=S,'slide'==T?g.animate(X,U,f.settings.easing,function(){H()}):'reset'==T?g.css(f.animProp,S):'ticker'==T&&g.animate(X,speed,'linear',function(){v(V.resetValue,'reset',0),M()})}},w=function(){for(var V,S='',T=s(),U=0;U<T;U++)V='',f.settings.buildPager&&a.isFunction(f.settings.buildPager)?(V=f.settings.buildPager(U),f.pagerEl.addClass('bx-custom-pager')):(V=U+1,f.pagerEl.addClass('bx-default-pager')),S+='<div class="bx-pager-item"><a href="" data-slide-index="'+U+'" class="bx-pager-link">'+V+'</a></div>';f.pagerEl.html(S)},x=function(){f.settings.pagerCustom?f.pagerEl=a(f.settings.pagerCustom):(f.pagerEl=a('<div class="bx-pager" />'),f.settings.pagerSelector?a(f.settings.pagerSelector).html(f.pagerEl):f.controls.el.addClass('bx-has-pager').append(f.pagerEl),w()),f.pagerEl.on('click','a',F)},y=function(){f.controls.next=a('<a class="bx-next" href="">'+f.settings.nextText+'</a>'),f.controls.prev=a('<a class="bx-prev" href="">'+f.settings.prevText+'</a>'),f.controls.next.bind('click',B),f.controls.prev.bind('click',C),f.settings.nextSelector&&a(f.settings.nextSelector).append(f.controls.next),f.settings.prevSelector&&a(f.settings.prevSelector).append(f.controls.prev),f.settings.nextSelector||f.settings.prevSelector||(f.controls.directionEl=a('<div class="bx-controls-direction" />'),f.controls.directionEl.append(f.controls.prev).append(f.controls.next),f.controls.el.addClass('bx-has-controls-direction').append(f.controls.directionEl))},z=function(){f.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+f.settings.startText+'</a></div>'),f.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+f.settings.stopText+'</a></div>'),f.controls.autoEl=a('<div class="bx-controls-auto" />'),f.controls.autoEl.on('click','.bx-start',D),f.controls.autoEl.on('click','.bx-stop',E),f.settings.autoControlsCombine?f.controls.autoEl.append(f.controls.start):f.controls.autoEl.append(f.controls.start).append(f.controls.stop),f.settings.autoControlsSelector?a(f.settings.autoControlsSelector).html(f.controls.autoEl):f.controls.el.addClass('bx-has-controls-auto').append(f.controls.autoEl),I(f.settings.autoStart?'stop':'start')},A=function(){f.children.each(function(){var T=a(this).find('img:first').attr('title');void 0!=T&&(''+T).length&&a(this).append('<div class="bx-caption"><span>'+T+'</span></div>')})},B=function(S){f.settings.auto&&g.stopAuto(),g.goToNextSlide(),S.preventDefault()},C=function(S){f.settings.auto&&g.stopAuto(),g.goToPrevSlide(),S.preventDefault()},D=function(S){g.startAuto(),S.preventDefault()},E=function(S){g.stopAuto(),S.preventDefault()},F=function(S){f.settings.auto&&g.stopAuto();var T=a(S.currentTarget);if(void 0!==T.attr('data-slide-index')){var U=parseInt(T.attr('data-slide-index'));U!=f.active.index&&g.goToSlide(U),S.preventDefault()}},G=function(S){var T=f.children.length;return'short'==f.settings.pagerType?(1<f.settings.maxSlides&&(T=Math.ceil(f.children.length/f.settings.maxSlides)),void f.pagerEl.html(S+1+f.settings.pagerShortSeparator+T)):void(f.pagerEl.find('a').removeClass('active'),f.pagerEl.each(function(U,V){a(V).find('a').eq(S).addClass('active')}))},H=function(){if(f.settings.infiniteLoop){var S='';0==f.active.index?S=f.children.eq(0).position():f.active.index==s()-1&&f.carousel?S=f.children.eq((s()-1)*t()).position():f.active.index==f.children.length-1&&(S=f.children.eq(f.children.length-1).position()),S&&('horizontal'==f.settings.mode?v(-S.left,'reset',0):'vertical'==f.settings.mode&&v(-S.top,'reset',0))}f.working=!1,f.settings.onSlideAfter(f.children.eq(f.active.index),f.oldIndex,f.active.index)},I=function(S){f.settings.autoControlsCombine?f.controls.autoEl.html(f.controls[S]):(f.controls.autoEl.find('a').removeClass('active'),f.controls.autoEl.find('a:not(.bx-'+S+')').addClass('active'))},J=function(){1==s()?(f.controls.prev.addClass('disabled'),f.controls.next.addClass('disabled')):!f.settings.infiniteLoop&&f.settings.hideControlOnEnd&&(0==f.active.index?(f.controls.prev.addClass('disabled'),f.controls.next.removeClass('disabled')):f.active.index==s()-1?(f.controls.next.addClass('disabled'),f.controls.prev.removeClass('disabled')):(f.controls.prev.removeClass('disabled'),f.controls.next.removeClass('disabled')))},K=function(){if(0<f.settings.autoDelay)setTimeout(g.startAuto,f.settings.autoDelay);else g.startAuto();f.settings.autoHover&&g.hover(function(){f.interval&&(g.stopAuto(!0),f.autoPaused=!0)},function(){f.autoPaused&&(g.startAuto(!0),f.autoPaused=null)})},L=function(){var S=0;if('next'==f.settings.autoDirection)g.append(f.children.clone().addClass('bx-clone'));else{g.prepend(f.children.clone().addClass('bx-clone'));var T=f.children.first().position();S='horizontal'==f.settings.mode?-T.left:-T.top}v(S,'reset',0),f.settings.pager=!1,f.settings.controls=!1,f.settings.autoControls=!1,f.settings.tickerHover&&!f.usingCSS&&f.viewport.hover(function(){g.stop()},function(){var U=0;f.children.each(function(){U+='horizontal'==f.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)});var V=f.settings.speed/U,W='horizontal'==f.settings.mode?'left':'top',X=V*(U-Math.abs(parseInt(g.css(W))));M(X)}),M()},M=function(S){speed=S?S:f.settings.speed;var T={left:0,top:0},U={left:0,top:0};'next'==f.settings.autoDirection?T=g.find('.bx-clone').first().position():U=f.children.first().position();var V='horizontal'==f.settings.mode?-T.left:-T.top,W='horizontal'==f.settings.mode?-U.left:-U.top;v(V,'ticker',speed,{resetValue:W})},N=function(){f.touch={start:{x:0,y:0},end:{x:0,y:0}},f.viewport.bind('touchstart',O)},O=function(S){if(f.working)S.preventDefault();else{f.touch.originalPos=g.position();var T=S.originalEvent;f.touch.start.x=T.changedTouches[0].pageX,f.touch.start.y=T.changedTouches[0].pageY,f.viewport.bind('touchmove',P),f.viewport.bind('touchend',Q)}},P=function(S){var T=S.originalEvent,U=Math.abs(T.changedTouches[0].pageX-f.touch.start.x),V=Math.abs(T.changedTouches[0].pageY-f.touch.start.y);if(3*U>V&&f.settings.preventDefaultSwipeX?S.preventDefault():3*V>U&&f.settings.preventDefaultSwipeY&&S.preventDefault(),'fade'!=f.settings.mode&&f.settings.oneToOneTouch){var W=0;if('horizontal'==f.settings.mode){var X=T.changedTouches[0].pageX-f.touch.start.x;W=f.touch.originalPos.left+X}else{var X=T.changedTouches[0].pageY-f.touch.start.y;W=f.touch.originalPos.top+X}v(W,'reset',0)}},Q=function(S){f.viewport.unbind('touchmove',P);var T=S.originalEvent,U=0;if(f.touch.end.x=T.changedTouches[0].pageX,f.touch.end.y=T.changedTouches[0].pageY,'fade'==f.settings.mode){var V=Math.abs(f.touch.start.x-f.touch.end.x);V>=f.settings.swipeThreshold&&(f.touch.start.x>f.touch.end.x?g.goToNextSlide():g.goToPrevSlide(),g.stopAuto())}else{var V=0;'horizontal'==f.settings.mode?(V=f.touch.end.x-f.touch.start.x,U=f.touch.originalPos.left):(V=f.touch.end.y-f.touch.start.y,U=f.touch.originalPos.top),!f.settings.infiniteLoop&&(0==f.active.index&&0<V||f.active.last&&0>V)?v(U,'reset',200):Math.abs(V)>=f.settings.swipeThreshold?(0>V?g.goToNextSlide():g.goToPrevSlide(),g.stopAuto()):v(U,'reset',200)}f.viewport.unbind('touchend',Q)},R=function(){if(f.initialized){var T=a(window).width(),U=a(window).height();(h!=T||j!=U)&&(h=T,j=U,g.redrawSlider(),f.settings.onSliderResize.call(g,f.active.index))}};return g.goToSlide=function(S,T){if(!(f.working||f.active.index==S))if(f.working=!0,f.oldIndex=f.active.index,f.active.index=0>S?s()-1:S>=s()?0:S,f.settings.onSlideBefore(f.children.eq(f.active.index),f.oldIndex,f.active.index),'next'==T?f.settings.onSlideNext(f.children.eq(f.active.index),f.oldIndex,f.active.index):'prev'==T&&f.settings.onSlidePrev(f.children.eq(f.active.index),f.oldIndex,f.active.index),f.active.last=f.active.index>=s()-1,f.settings.pager&&G(f.active.index),f.settings.controls&&J(),'fade'==f.settings.mode)f.settings.adaptiveHeight&&f.viewport.height()!=o()&&f.viewport.animate({height:o()},f.settings.adaptiveHeightSpeed),f.children.filter(':visible').fadeOut(f.settings.speed).css({zIndex:0}),f.children.eq(f.active.index).css('zIndex',f.settings.slideZIndex+1).fadeIn(f.settings.speed,function(){a(this).css('zIndex',f.settings.slideZIndex),H()});else{f.settings.adaptiveHeight&&f.viewport.height()!=o()&&f.viewport.animate({height:o()},f.settings.adaptiveHeightSpeed);var U=0,V={left:0,top:0};if(!f.settings.infiniteLoop&&f.carousel&&f.active.last){if('horizontal'==f.settings.mode){var W=f.children.eq(f.children.length-1);V=W.position(),U=f.viewport.width()-W.outerWidth()}else{var X=f.children.length-f.settings.minSlides;V=f.children.eq(X).position()}}else if(f.carousel&&f.active.last&&'prev'==T){var Y=1==f.settings.moveSlides?f.settings.maxSlides-t():(s()-1)*t()-(f.children.length-f.settings.maxSlides),W=g.children('.bx-clone').eq(Y);V=W.position()}else if('next'==T&&0==f.active.index)V=g.find('> .bx-clone').eq(f.settings.maxSlides).position(),f.active.last=!1;else if(0<=S){var Z=S*t();V=f.children.eq(Z).position()}if('undefined'!=typeof V){var _='horizontal'==f.settings.mode?-(V.left-U):-V.top;v(_,'slide',f.settings.speed)}}},g.goToNextSlide=function(){if(f.settings.infiniteLoop||!f.active.last){var S=parseInt(f.active.index)+1;g.goToSlide(S,'next')}},g.goToPrevSlide=function(){if(f.settings.infiniteLoop||0!=f.active.index){var S=parseInt(f.active.index)-1;g.goToSlide(S,'prev')}},g.startAuto=function(S){f.interval||(f.interval=setInterval(function(){'next'==f.settings.autoDirection?g.goToNextSlide():g.goToPrevSlide()},f.settings.pause),f.settings.autoControls&&!0!=S&&I('stop'))},g.stopAuto=function(S){f.interval&&(clearInterval(f.interval),f.interval=null,f.settings.autoControls&&!0!=S&&I('start'))},g.getCurrentSlide=function(){return f.active.index},g.getCurrentSlideElement=function(){return f.children.eq(f.active.index)},g.getSlideCount=function(){return f.children.length},g.redrawSlider=function(){f.children.add(g.find('.bx-clone')).width(q()),f.viewport.css('height',o()),f.settings.ticker||u(),f.active.last&&(f.active.index=s()-1),f.active.index>=s()&&(f.active.last=!0),f.settings.pager&&!f.settings.pagerCustom&&(w(),G(f.active.index))},g.destroySlider=function(){f.initialized&&(f.initialized=!1,a('.bx-clone',this).remove(),f.children.each(function(){void 0==a(this).data('origStyle')?a(this).removeAttr('style'):a(this).attr('style',a(this).data('origStyle'))}),void 0==a(this).data('origStyle')?a(this).removeAttr('style'):this.attr('style',a(this).data('origStyle')),a(this).unwrap().unwrap(),f.controls.el&&f.controls.el.remove(),f.controls.next&&f.controls.next.remove(),f.controls.prev&&f.controls.prev.remove(),f.pagerEl&&f.settings.controls&&f.pagerEl.remove(),a('.bx-caption',this).remove(),f.controls.autoEl&&f.controls.autoEl.remove(),clearInterval(f.interval),f.settings.responsive&&a(window).unbind('resize',R))},g.reloadSlider=function(S){void 0!=S&&(d=S),g.destroySlider(),k()},k(),this}})(jQuery);