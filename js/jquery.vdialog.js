/*
 * @author longzhou
 *
 * $.valert('hello');
 * $.vconfirm('hello');
 * $.vprompt('hello');
 *
 */

$.valert = function(str) {
    var maskswitch = false;

    var closeVdialog = function() {
        $(".vdialogmask, .vdialogcnt").fadeOut("fast", function() {
            $(".vdialogmask, .vdialogcnt").remove();
        });
    };

    var randerVdialog = function() {
        var $box = '<div class="vdialogmask"></div>'
                 + '<div class="vdialogcnt">'
                 + '<div class="vdialogheader">'
                 + '<h5 class="singleline">' + '' + '</h5>'
                 + '<a href="javascript:void(0);" class="vdialogclose" hidefocus="true">×</a>'
                 + '</div>'
                 + '<div class="vdialoginfo">'
                 + '<p>' + str + '</p>'
                 + '<div class="cpad">'
                 + '<a href="javascript:void(0);" class="vbtn vdialogok">确定</a>'
                 + '</div>'
                 + '</div>'
                 + '</div>';
        
        $(".vdialogclose, .vdialogmask, .vdialogok").die("click").live("click", function() {
            closeVdialog();
        });
        
        $("body").append($box);
        $(".vdialogcnt, .vdialogmask").css("opacity", 0);
        
        if (maskswitch) {
            $(window).resize(function() {
                var winHeight = $(window).height();
                var docHeight = $(document).height();
                var docWidth  = $(document).width();
                
                $(".vdialogmask").css({
                    "height": (winHeight > docHeight ? winHeight : docHeight) + "px",
                    "width" : docWidth + "px"
                });
                
            }).resize();
        }
        
        $(".vdialogcnt").css({
            "width": "350px",
            "height": "auto"
        });
        
        var vwidth = $(".vdialogcnt").width();
        var vheight = $(".vdialogcnt").height();
        $(".vdialogcnt").css({
            "margin-left": "-" + vwidth/2 + "px",
            "margin-top": "-" + vheight/2 + "px"
        });
        
        if (maskswitch) {
            $(".vdialogmask").animate({
                "opacity": 0.2
            });
        }
        $(".vdialogcnt").animate({
            "opacity": 1,
        });
    }();
};
    
$.vconfirm = function(str, callback) {
    var maskswitch = false;
    var result = false;
    
    var closeVdialog = function() {
        $(".vdialogmask, .vdialogcnt").fadeOut("fast", function() {
            $(".vdialogmask, .vdialogcnt").remove();
        });
        
        callback(result);
    };

    var randerVdialog = function() {
        var $box = '<div class="vdialogmask"></div>'
                 + '<div class="vdialogcnt">'
                 + '<div class="vdialogheader">'
                 + '<h5 class="singleline">' + '' + '</h5>'
                 + '<a href="javascript:void(0);" class="vdialogclose" hidefocus="true">×</a>'
                 + '</div>'
                 + '<div class="vdialoginfo">'
                 + '<p>' + str + '</p>'
                 + '<div class="cpad">'
                 + '<a href="javascript:void(0);" class="vbtn vdialogcancel">取消</a>'
                 + '<a href="javascript:void(0);" class="vbtn vdialogok">确定</a>'
                 + '</div>'
                 + '</div>'
                 + '</div>';
        
        $(".vdialogclose, .vdialogmask, .vdialogok, .vdialogcancel").die("click").live("click", function() {
            if ($(this).hasClass("vdialogok")) {
                result = true;
            }
            closeVdialog();
        });
        
        $("body").append($box);
        $(".vdialogcnt, .vdialogmask").css("opacity", 0);
        
        if (maskswitch) {
            $(window).resize(function() {
                var winHeight = $(window).height();
                var docHeight = $(document).height();
                var docWidth  = $(document).width();
                
                $(".vdialogmask").css({
                    "height": (winHeight > docHeight ? winHeight : docHeight) + "px",
                    "width" : docWidth + "px"
                });
                
            }).resize();
        }
        
        $(".vdialogcnt").css({
            "width": "350px",
            "height": "auto"
        });
        
        var vwidth = $(".vdialogcnt").width();
        var vheight = $(".vdialogcnt").height();
        $(".vdialogcnt").css({
            "margin-left": "-" + vwidth/2 + "px",
            "margin-top": "-" + vheight/2 + "px"
        });
        
        if (maskswitch) {
            $(".vdialogmask").animate({
                "opacity": 0.2
            });
        }
        $(".vdialogcnt").animate({
            "opacity": 1,
        });
    }();
};

$.vprompt = function(str, callback) {
    var maskswitch = false;
    var result = "";
    
    var closeVdialog = function() {
        $(".vdialogmask, .vdialogcnt").fadeOut("fast", function() {
            $(".vdialogmask, .vdialogcnt").remove();
        });
        
        callback(result);
    };

    var randerVdialog = function() {
        if ($(".vdialogcnt").length !== 0) {
            return;
        }
    
        var $box = '<div class="vdialogmask"></div>'
                 + '<div class="vdialogcnt">'
                 + '<div class="vdialogheader">'
                 + '<h5 class="singleline">' + '' + '</h5>'
                 + '<a href="javascript:void(0);" class="vdialogclose" hidefocus="true">×</a>'
                 + '</div>'
                 + '<div class="vdialoginfo">'
                 + '<p>' + str + '</p>'
                 + '<p><input type="text" class="vdialogtext" id="vdialogtext" /></p>'
                 + '<div class="cpad">'
                 + '<a href="javascript:void(0);" class="vbtn vdialogcancel">取消</a>'
                 + '<a href="javascript:void(0);" class="vbtn vdialogok">确定</a>'
                 + '</div>'
                 + '</div>'
                 + '</div>';
        
        $(".vdialogclose, .vdialogmask, .vdialogok, .vdialogcancel").die("click").live("click", function() {
            if ($(this).hasClass("vdialogok")) {
                result = $("#vdialogtext").val();
            }
            closeVdialog();
        });
        
        $("body").append($box);
        $(".vdialogcnt, .vdialogmask").css("opacity", 0);
        
        if (maskswitch) {
            $(window).resize(function() {
                var winHeight = $(window).height();
                var docHeight = $(document).height();
                var docWidth  = $(document).width();
                
                $(".vdialogmask").css({
                    "height": (winHeight > docHeight ? winHeight : docHeight) + "px",
                    "width" : docWidth + "px"
                });
                
            }).resize();
        }
        
        $(".vdialogcnt").css({
            "width": "350px",
            "height": "auto"
        });
        
        var vwidth = $(".vdialogcnt").width();
        var vheight = $(".vdialogcnt").height();
        $(".vdialogcnt").css({
            "margin-left": "-" + vwidth/2 + "px",
            "margin-top": "-" + vheight/2 + "px"
        });
        
        if (maskswitch) {
            $(".vdialogmask").animate({
                "opacity": 0.2
            });
        }
        $(".vdialogcnt").animate({
            "opacity": 1,
        });
    }();
};