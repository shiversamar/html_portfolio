$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "black").slideUp(10).slideDown(2000);
    });
    //
    // animationHover('#logo1','lightSpeedIn');
    // Animate on hover Function
    // function animationHover(element, animation){
    //   element = $(element);
    //   element.hover(
    //         function() {
    //           element.addClass('animated' + animation);
    //
    //   },
    // function(){
    //   window.setTimeout(function(){
    //     element.removeClass('animated' + animation);
    //   })
    // })
    // }


    // $(function() {
    //   var animationName = "animated shake";
    //   var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //   $("a.button").on('click',function() {
    //     $('[a name="about"]').addClass(animationName).one(animationend,function() {
    //       $(this).removeClass(animationName);
    //     )};
    //   )};//Close a.button
    // });//Close function



});

// $(function() {
//   var animationName = "animated shake";
//   var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//   $("a.button").on('click',function() {
//     $('[a name="about"]').addClass(animationName).one(animationend,function() {
//       $(this).removeClass(animationName);
//     )};
//   )};//Close a.button
// });//Close function


// $.fn.extend({
//     animateCss: function (animationName) {
//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         this.addClass('animated ' + animationName).one(animationEnd, function() {
//             $(this).removeClass('animated ' + animationName);
//         });
//     }
// });

$(function(){
  var hashCheck = function() {
    $(".primary-menu a").removeClass("active");
    // this will get the full URL at the address bar
    var hash = window.location.hash;
    // passes on every "a" tag
    $(".primary-menu a").each(function() {
      // checks if its the same on the address bar
      if (hash != "") {
        if (hash == (this.hash)) {
          $(this).closest("a").addClass("active");
        }
      }
    });
  };


  window.addEventListener('hashchange', function(){
    hashCheck();
  });

  hashCheck();
// Stellar Parallax
	//your jQuery here

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };


  if( !isMobile.any() ) {
    $.stellar({
      verticalScrolling: true,
      responsive: false,
      horizontalScrolling: false
    });
  };

	// $('.home-container').stellar();




}); //end of .ready
