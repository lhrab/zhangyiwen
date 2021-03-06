/**
 * 乐购商城首页js
 */
//当页面加载完毕
$(function() {
    /* 首页大图轮播 */
    $('#bannerInner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    /* 图书电子书小轮播 */
    $('#ebooks-banner').tyslide({
        boxh: 226, //盒子的高度
        w: 332, //盒子的宽度
        h: 226, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    /* 新书列表手风琴效果 */
    $('.ebooks .right-box ul > li').mouseenter(function() {
        //所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); //隐藏详情
        $(this).siblings().find('.eboos-title').show(); //显示标题

        //当前：隐藏标题 显示详情
        $(this).find('.eboos-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情
    });
    /* 服装小轮播 */
    $('#clothes-banner1').tyslide({
        boxh: 334, //盒子的高度
        w: 440, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    /* 户外运动小轮播 */
    $('#sport-banner1').tyslide({
        boxh: 334, //盒子的高度
        w: 440, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    /* 童装小轮播 */
    $('#children-clothes-banner1').tyslide({
        boxh: 334, //盒子的高度
        w: 440, //盒子的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    });
    /* 推广商品切换 */
    $('.promotion .top ul li').mouseenter(function() {
        //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active');
        //内容切换
        //获取对应的索引
        var index = $(this).index(); // 0 => left:0*1200; ,1 => left:-1*1200
        $('.promotion .content .out-box .inner-box').animate({
            'left': -index * 1200
        });
    });
    /* 二维码滑出效果 */
    $('.qr-code .ticket').hover(function() {
            //让二维码滑出来
            $('.qr-code div').stop(true).animate({
                left: '-100px'
            })
        }, function() {
            //让二维码收回去
            $('.qr-code div').stop(true).animate({
                left: 0
            })
        })
        /* 顶部搜索框交互 */
    $(document).scroll(function() {
            //获取到顶部的距离
            var topDistance = $('html,body').scrollTop();
            //判断
            if (topDistance > 500) {
                $('.top-search-box').slideDown();
            } else {
                $('.top-search-box').slideUp();
            }
        })
        /* 楼梯跳转 */
    $('.floor li').click(function() {
        //获取索引
        var index = $(this).index();
        //选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;
        console.log(topOffset);
        //让滚动条到这个位置
        $('html,body').animate({
            scrollTop: topOffset - 50
        })
    })
})