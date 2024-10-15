//判断PC || MOB
var isMobile = (/iPad|iPhone|Android|Windows Phone|Nokia/).test(navigator.userAgent); //当前访问设备为移动端
if (isMobile) {
    //MOB菜单
    $(document).ready(function () {
        $('.menu-logo').click(function () {
            $(this).addClass('hide');
            $('.menu-close').removeClass('hide');
            $('.menubox').removeClass('hide');
        });
        $('.menu-close').click(function () {
            $(this).addClass('hide');
            $('.menu-logo').removeClass('hide');
            $('.menubox').addClass('hide');
        });
    });
    //MOB引题直播
    var mobLive = $(".live-video");
    var mobLiveSrc = mobLive.attr("data_src");
    if (mobLiveSrc) {
        mobLive.attr("src", mobLiveSrc).show();
    }
} else {
    //PC副题直播

    var pcLive = $(".live-iframe");
    var pcLiveSrc = pcLive.attr("data_src");
    if (pcLiveSrc) {
        pcLive.attr("src", pcLiveSrc).show();
    }

    var lhr = {
        engSearch: function () {
            var search = function (kw) {
                var str = $("#inputwd").val() || "";
                if (str) {
                    window.open("https://search.news.cn/?lang=en#search/0/" + str + "/1/");
                }
            }
            $(".sreach_v2").on("click", search)

            $("#f2").on('keydown', function (e) {
                var e = e || window.event || event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 13) {
                    search();
                }
            });
        },
        navHover: function () {
            $('#nav li').hover(function () {
                $('ul', this).slideDown(200);
                $(this).children('a:first').addClass("hov");
            }, function () {
                $('ul', this).slideUp(100);
                $(this).children('a:first').removeClass("hov");
            });
        },
        daytime: function () {
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"
            ];
            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                "Saturday"
            ]
            var newDate = new Date();
            newDate.setDate(newDate.getDate());
            $('#Date').html(dayNames[newDate.getDay()] + "," + '&nbsp;' + monthNames[newDate
                    .getMonth()] +
                '&nbsp;' + '' + '&nbsp;' + newDate.getDate() + ',' + '&nbsp;' + newDate
                .getFullYear());
        },
        scrollSet: function () {
            var TrendingPos = $(".conRight .Trending").offset().top;
            // var partLeftH = $(".conLeft").height();
            // var partRightH = $(".conRight").height();
            var bodyH = $(document).height();
            var exH = $('.explore_box').height();
            var footerH = $('.footer').height();
            var TrendingH = $(".conRight .Trending").height()
            $(window).scroll(function () {
                var _this = $(this);
                if (_this.scrollTop() > (TrendingPos - 60)) {
                    if (_this.scrollTop() > (bodyH - exH - footerH - TrendingH - 80)) {
                        $(".conRight .Trending").removeClass("fixVideo");
                    } else {
                        $(".conRight .Trending").addClass("fixVideo");
                    }
                } else {
                    $(".conRight .Trending").removeClass("fixVideo");
                }

            });
        },
    }
    $(function () {
        lhr.engSearch()
        lhr.navHover()
        lhr.daytime()
        console.log($(".conRight .Trending"))
        if ($(".conRight .Trending").length>0) {
            lhr.scrollSet()
        }        
    });
}

$(function(){
    /* 分享 */
    var aFacebook = $(".conBox .bshare-facebook");
    var aTwitter = $(".conBox .bshare-twitter");
    var aWeibo = $(".conBox .bshare-sinaminiblog");
    var pageTitle = encodeURI($(".conBox .conTop h1").html());
    var pageSrc = encodeURI(window.location.href);
    console.log(pageSrc)
    var shareTwitter = "https://twitter.com/intent/tweet?text=" + pageTitle + "&url=" + pageSrc;
    var shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=" + pageSrc;
    var shareWeibo = "https://service.weibo.com/share/share.php?title=" + pageTitle + "&url=" + pageSrc;
    aFacebook.attr("href", shareFacebook);
    aTwitter.attr("href", shareTwitter);
    aWeibo.attr("href", shareWeibo);
    /* 分页调用 */
    parsePagingFun({
        preText: 'Prev',//上一页
        nextText: 'Next',//下一页
        id: 'detailContent', //正文分页id
        num: 8 //显示页码数个数
    })
    //修改华夏为huaxia
    var domEditor = $(".info .editor").html();
    var domSource = $(".info .source").html();
    domEditor = domEditor.replace("华夏", "huaxia");
    domSource = domSource.replace("新华网", "Source: Xinhua");
    $(".info .editor").html(domEditor);
    $(".info .source").html(domSource);
})

$("#backTopBtn").click(function () {
    $('html,body').animate({
        scrollTop: (0)
    }, 500);
});
$(window).scroll(function () {
    t = $(document).scrollTop();
    if (t > 700) {
        $('#backTopBtn').show();
    } else {
        $('#backTopBtn').hide();
    }
})