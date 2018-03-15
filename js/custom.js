$(function() {
  $('.nav-toggle').on("click", function (e) {
    $('.nav-aside').toggleClass("open menu");
        $('.content li a').on("click", function (e) {
            $('.nav-aside').removeClass("open menu");
        });
        e.preventDefault();
  });
});


 $(document).ready(function(){
             $(".card-link").hover(
                  function () {
                    $(this).addClass("hoverp");
                  },
                  function () {
                    $(this).removeClass("hoverp");
                  }
             );
        });





$(".top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});




$(window).scroll(_ = () => {
    if ($(window).scrollTop() >= 30) {
       // $('.nav-text').addClass('drop-animate');
        $('.footer-text').addClass('up');
        $('.buttonDownload').addClass('up-button');
        $('.check').addClass('none-check');

        $('.menu-button').addClass('reverse-menu');
        $('.line-menu').addClass('reverse-line');
        $('.link-social-fix').addClass('icon-social-reverse');

        $('.abv-lang').addClass('abv-lang-hidden');

        //$('.nav-toggle-bar').addClass('nav-toggle-reverse');

    } else {

       // $('.nav-text').removeClass('drop-animate');
        $('.footer-text').removeClass('up');
        $('.buttonDownload').removeClass('up-button');
        $('.check').removeClass('none-check');

        $('.menu-button').removeClass('reverse-menu');
        $('.line-menu').removeClass('reverse-line');
        $('.link-social-fix').removeClass('icon-social-reverse');

        $('.abv-lang').removeClass('abv-lang-hidden');


        //$('.nav-toggle-bar').removeClass('nav-toggle-reverse');

    }
});





/*smooth scrolling*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});










/*offcanvas*/


/*

(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    offcanvas: document.querySelector('.offcanvas'),
    sidenavopen: document.querySelector('.sidenavopen'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.offcanvas.classList.toggle('expanded');
      this.sidenavopen.classList.toggle('with-overlay');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.offcanvas.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.sidenavopen.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

*/




/*colapsable*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  };
 }




//scripts.js code
/*(function(){
 
 var preload = document.getElementById("preloader");
 var loading = 0;
 var id = setInterval(frame, 64);

 function frame(){
  if(loading == 100) {
   clearInterval(id);
   window.open("index.html", "_self");
  }
  else {
   loading = loading + 1;
   if(loading == 90) {
    preload.style.animation = "fadeout 1s ease";
   }
  }
 }


})();*/




/*$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 150) {
		$("#main-navbar").addClass("navbar-scroll")
	} 
	else {
		$("#main-navbar").removeClass("navbar-scroll")
	}
});

*/




//var Menu = {
//		open:false,
//		openPos:false,
//		init:function(){
//			$(document).on('click','.menu-button',function(){
//				if (  Menu.open === true ) {
//					$(window).scrollTop(Menu.openPos);
//					Menu.open = false;
//					ScrollBehavior.oldScrollPos = 999999;
//					$(window).trigger('scroll');
//					$('body').removeClass('display-nav');
//					ScrollBehavior.scrollDown = false;
//					ScrollBehavior.doMenuPositioning();
					
//				} else {
//					$('body').addClass('display-nav');
//					Menu.openPos = ScrollBehavior.scrollPos;
//					Menu.open = true;
//				}
				
//				return false;
//			});
//		}
//	};








$(window).on('load', function() { // se asegura que todo el sitio este cargado 
  $('#status').fadeOut(); // will first fade out the loading animation - primero se desvanecera la animacion de carga
  $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website. - se desvanecera el div blanco que cubre el sitio web
  $('body').delay(5000).css({'overflow':'visible'});
});



 
