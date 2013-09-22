/**
 * @author longzhou
 * @update 2013-09-22
 * $.valert('hello');
 */
$.valert = function(str, tit, needcp) {
    var maskswitch = true;

    var using = false;

    var closeVdialog = function() {
        using = false;
        $('#vdialogmask').fadeOut(100, function() {
            $(this).hide();
        });
        $('#vdialogcnt').hide(100);
    };

    var randerVdialog = function() {
        using = true;
        tit = tit || '';
        needcp = (needcp === undefined) ? true : needcp;

        if ($('#vdialogcnt').length <= 0) {
            var $box = ['<div class="vdialogmask" id="vdialogmask"></div>',
                        '<div class="vdialogcnt" id="vdialogcnt">',
                            '<div class="vdialogheader">',
                                '<h5 class="singleline" id="vdialogcnt_tit">' + tit + '</h5>',
                                '<a href="javascript:void(0);" class="vdialogclose" hidefocus="true">×</a>',
                            '</div>',
                            '<div class="vdialoginfo">',
                                '<div class="vdialogcnt_str" id="vdialogcnt_str">' + str + '</div>',
                                '<div class="cpad">',
                                    '<a href="javascript:void(0);" class="vbtn vdialogok">确定</a>',
                                '</div>',
                            '</div>',
                        '</div>'].join('');
            $('body').append($box);
            $('#vdialogcnt').on('click', '.vdialogclose, .vdialogok', function() {
                closeVdialog();
            });
            $('#vdialogmask').on('click', function() {
                var $vdialogcnt = $('#vdialogcnt');
                $vdialogcnt.animate({
                    'zoom': 1.05
                }, 50, function() {
                    $vdialogcnt.animate({
                        'zoom': 1
                    }, 50);
                });
            });
        } else {
            $('#vdialogcnt_tit').html(tit);
            $('#vdialogcnt_str').html(str);
        }
        $('#vdialogcnt, #vdialogmask').css('opacity', 0).show();
        if (!needcp) {
            $('#vdialogcnt').find('.cpad').hide();
        } else {
            $('#vdialogcnt').find('.cpad').show();
        }
        
        $(window).resize(function() {
            if (!using) return;

            var winHeight = $(window).height();
            var docHeight = $(document).height();
            var docWidth  = $(document).width();
            var scrollTop = $(window).scrollTop();
            
            if (maskswitch) {
                $('#vdialogmask').css({
                    'height': (winHeight > docHeight ? winHeight : docHeight) + 'px',
                    'width' : docWidth + 'px'
                });
            }
                
            $('#vdialogcnt').css({
                'top': scrollTop + winHeight / 2
            });
        }).resize();

        var $vdialogcnt = $('#vdialogcnt');
        
        $vdialogcnt.css({
            'width': '350px',
            'height': 'auto'
        });
        
        var vwidth = $vdialogcnt.width();
        var vheight = $vdialogcnt.height();
        $vdialogcnt.css({
            'margin-left': '-' + vwidth/2 + 'px',
            'margin-top': '-' + vheight/2 + 'px'
        });
        
        if (maskswitch) {
            $('#vdialogmask').animate({
                'opacity': .6
            }, 100);
        }
        $('#vdialogcnt').animate({
            'opacity': 1
        }, 100);
    }();
};