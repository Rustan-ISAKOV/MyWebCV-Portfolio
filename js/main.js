!function(o){"use strict";var n,e,t,a,i,s,r,l,c="fadeInUp",u=800,d=4e3,m=o(window);m.on("load",function(){o("html, body").animate({scrollTop:0},"normal"),o("#loader").fadeOut("slow",function(){o("#preloader").delay(300).fadeOut("slow")})}),o(".fluid-video-wrapper").fitVids(),(a=o(".bricks-wrapper")).imagesLoaded(function(){a.masonry({itemSelector:".brick",resize:!0})}),o("#folio-wrap").lightGallery({showThumbByDefault:!1,hash:!1,selector:".item-wrap"}),i=o("#header-menu-trigger"),m.on("scroll",function(){150<m.scrollTop()?i.addClass("opaque"):i.removeClass("opaque")}),n=o("#header-menu-trigger"),e=o("#menu-nav-wrap").find(".close-button"),t=o("body"),o("section, footer"),n.on("click",function(e){e.preventDefault(),n.toggleClass("is-clicked"),t.toggleClass("menu-is-open")}),e.on("click",function(e){e.preventDefault(),n.trigger("click")}),t.on("click",function(e){o(e.target).is("#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span")||(n.removeClass("is-clicked"),t.removeClass("menu-is-open"))}),o(".smoothscroll").on("click",function(e){var n=this.hash,t=o(n);e.preventDefault(),e.stopPropagation(),o("html, body").stop().animate({scrollTop:t.offset().top},u,"swing").promise().done(function(){o("body").hasClass("menu-is-open")&&o("#header-menu-trigger").trigger("click"),window.location.hash=n})}),o("input, textarea, select").placeholder(),s=o("#stats"),r=o(".stat-count"),s.waypoint({handler:function(e){"down"===e&&r.each(function(){var n=o(this);o({Counter:0}).animate({Counter:n.text()},{duration:d,easing:"swing",step:function(e){n.text(Math.ceil(e))}})}),this.destroy()},offset:"90%"}),o(".alert-box").on("click",".close",function(){o(this).parent().fadeOut(500)}),o("html").hasClass("no-cssanimations")||o(".animate-this").waypoint({handler:function(e){var a=c;"down"!==e||o(this.element).hasClass("animated")||(o(this.element).addClass("item-animate"),setTimeout(function(){o("body .animate-this.item-animate").each(function(e){var n=o(this),t=n.data("animate")||null;t||(t=a),setTimeout(function(){n.addClass(t+" animated"),n.removeClass("item-animate")},50*e)})},100)),this.destroy()},offset:"95%"}),m.on("load",function(){o("html").hasClass("no-cssanimations")||setTimeout(function(){o(".animate-intro").each(function(e){var n=o(this),t=n.data("animate")||null;t||(t=c),setTimeout(function(){n.addClass(t+" animated")},300*e)})},100)}),o("#contactForm").validate({submitHandler:function(e){var n=o("#submit-loader");o.ajax({type:"POST",url:"inc/sendEmail.php",data:o(e).serialize(),beforeSend:function(){n.fadeIn()},success:function(e){"OK"==e?(n.fadeOut(),o("#message-warning").hide(),o("#contactForm").fadeOut(),o("#message-success").fadeIn()):(n.fadeOut(),o("#message-warning").html(e),o("#message-warning").fadeIn())},error:function(){n.fadeOut(),o("#message-warning").html("Something went wrong. Please try again."),o("#message-warning").fadeIn()}})}}),l=o("#go-top"),o(window).on("scroll",function(){500<=o(window).scrollTop()?l.fadeIn(400):l.fadeOut(400)})}(jQuery);

   
   
         
      
  
