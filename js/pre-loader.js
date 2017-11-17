$(window).load(function () {
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});

jQuery(document).ready(function ($) {
    var $header = $(".transparent-navbar");
	var $toggle = $("#myNavbar");
    $(window).scroll(function () {
        if (scrollY > 250) {
            $header.css("background-color", "rgba(0,0,0,0.8)");
			$toggle.css("background-color", "rgba(0,0,0,0.8)");
        }
        if (scrollY < 360) {
            $header.css("background-color", "rgba(0,0,0,0.2)");
			$toggle.css("background-color", "rgba(0,0,0,0.2)");
        }
    });
});



jQuery(document).ready(function ($) {
    var fin = !1;
    $(function () {
        $('#t').t({
            speed: 35,
            speed_vary: true,
            mistype: 20,
            typing: function (elem, chars_total,
                chars_left, _char) {
                if (_char == '*') foo();
            },
            fin: function () {
                if (fin !== 1) {
                    fin = !!1; //avoids triggering after 'add' cmd

                    window.setInterval(function () {
                        $('#t').find(
                                '.t-caret')
                            .toggle();
                    }, 5e2);
                }
            }
        });
    });
});

