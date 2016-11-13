$(function() {
     $.ajax({
         type:"GET",
         url:"http://localhost:8080/AndroidTv/tv/getusername.do",
         contentType: false,    //不可缺
         processData: false,    //不可缺
         success:function(data){
            $("#newusername").html(data);
         }
     });
    $("#3").attr("class","menuclick");
    $("#right-bottom-article").show();
    twlencal();
    material();
    $("#article").attr("class","liclick");
    $("#new-article").click(function () {
        window.open("/newarticle/newarticle.html","_self");
    });
    $('#newQuestion').click(function(){
        window.open("/newQuestion/newQuestion.html","_self");
    });
    $(".secondlayer a").mouseover(function () {
        $(this).addClass("menuhover");
    });
    $(".secondlayer a").mouseout(function () {
        $(this).removeClass("menuhover");
    });
    $(".secondlayer a").click(function(){
        $(".secondlayer a").removeClass("menuclick");
        $(this).attr("class","menuclick");
        var mid=this.id;
        switch (mid)
        {
            case '1':
                $(".rightmenu").hide();
                $("#message_manage").show();
                break;
            case '2':
                $(".rightmenu").hide();
                $('#blackuser').hide();
                $("#user_manage").show();
                $("#white").attr("class","liclick");
                $('#whiteuser').show();
                user();
                break;
            case '3':
                $(".rightmenu").hide();
                $("#material_manage").show();
                $("#article").attr("class","liclick");
                $("#right-bottom-article").show();
                twlencal();
                material();
                break;
            case '4':
                $(".rightmenu").hide();
                $("#user_analysis").show();
                break;
            default:
                alert("!!");
        }
    });
    $("#select-all").click(function(){
        if(this.checked){
            $(".newuser input[name='checkname']").prop('checked', true);
        }else{
            $(".newuser input[name='checkname']").prop('checked', false);
        }
    });
    $(".newuser input").click(function(){
        if(this.checked){
            $(this).prop('checked', true);
        }else{
            $(this).prop('checked', false);
            $("#select-all").prop('checked', false);
        }
    });

    $("#add-black").click(function () {
        var tip=$(".choosew:checked").siblings(".tip").css('display');
        if($(".choosew:checked").length>0){
            if(tip=='none'){
                $(".choosew:checked").siblings(".tip").show();
                $(".blackuser:first").show();
                $(".choosew:checked").each(function(){
                    $("#blacklist").append($(".blackuser:first").clone(true));
                    var name=$(this).next("span").html();
                    $(".blackuser:last span").html(name);
                });
                $(".blackuser:first").hide();
            }
            else {
                alert("重复拉取");
            }
        }
        $("#blacknum").html($(".blackuser").length-1);
    });
    $("#quit-black").click(function () {
        if($(".chooseb:checked").length>0){
                $(".chooseb:checked").each(function(){
                    // var blackspan=$(this).next("span").html();
                    // var a=$("span [innerHTML=blackspan]").html();
                    // $(".whitespan:contains(blackspan)[innerHTML=blackspan]").siblings(".tip").hide();
                    $(this).parent().parent().remove();
                });
            }
        $("#blacknum").html($(".blackuser").length-1);

    });
    $("body").undelegate();
    $("body").delegate(".articledemo", "mouseover", function () {
        $(this).children(":first").show();
    });
    $("body").delegate(".articledemo", "mouseout", function ()  {
        $(this).children(":first").hide();
    });
    $("body").delegate(".articledemo", "click", function ()  {
        var titlename=$(this).children(":last").html();
        window.open("/AndroidTv/tvos1/newarticle/newarticle.html?"+titlename,"_self");
    });
    $("body").delegate(".delete", "click", function () {
        var message=confirm("确定删除？");
        if(message==true){
            $(this).parent().remove();
        }
        $(this).unbind('click');
        twlencal();
        $.ajax({
            type:"GET",
            url:"http://localhost:8080/AndroidTv/tv/ ",
            data:$(this).parent().children(":last").html(),
            contentType: false,    //不可缺
            processData: false,    //不可缺
        });
    });
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/AndroidTv/tv/ownerpicnews.do",
        contentType: false,    //不可缺
        processData: false,    //不可缺
        success:function(data){
            var newdata=JSON.parse(data);
            $(newdata).each(function(index){
                var	val = newdata[index];
                var name=val.news_title;
                var html = val.title_pic_url;
                loadtw(name,html,callbacktw);
            });
        }
    });
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/AndroidTv/tv/showpic.do",
        contentType: false,    //不可缺
        processData: false,    //不可缺
        success:function(data){
            var newdata=JSON.parse(data);
            $(newdata).each(function(index){
                var	val = newdata[index];
                var html = val.pic_url;
                loadimage(html,callback);
            });
        }
    });

});
function user(){
    $("#user_manage li").mouseover(function(){
        $(this).addClass("lihover");
    });
    $("#user_manage li").mouseout(function(){
        $(this).removeClass("lihover");
    });
    $("#user_manage li").click(function(){
        $("#user_manage li").removeClass("liclick");
        $(this).attr("class","liclick");
        var mid=this.id;
        switch (mid)
        {
            case 'white':
                $("#blackuser").hide();
                $("#whiteuser").show();
                break;
            case 'black':
                $("#whiteuser").hide();
                $("#blackuser").show();
                break;
            default:
                alert("!!");
        }
    });
}
function material(){
    $("#material_manage li").mouseover(function(){
        $(this).addClass("lihover");
    });
    $("#material_manage li").mouseout(function(){
        $(this).removeClass("lihover");
    });
    $("#material_manage li").click(function(){
        $("#material_manage li").removeClass("liclick");
        $(this).attr("class","liclick");
        var mid=this.id;
        switch (mid)
        {
            case 'article':
                $(".right-bottom").hide();
                $("#right-bottom-article").show();
                break;
            case 'picture':
                $(".right-bottom").hide();
                $("#right-bottom-picture").show();
                break;
            case 'audio':
                $(".right-bottom").hide();
                $("#right-bottom-audio").show();
                break;
            case 'video':
                $(".right-bottom").hide();
                $("#right-bottom-video").show();
                break;
            default:
                alert("!!");
        }
    });
}
function twlencal() {
    var articlelen=$('.articledemo:visible').length;
    $('#articlenumber').html("图文消息（共"+articlelen+"条）");
    if(articlelen<1){
        $('#noarticle').show();
    }
}

function loadimage(url,callback){
    var img=new Image();
    img.onload=function(){
        img.onload=null;
        callback(img);
    }
    img.src=url;
}
function loadtw(name,url,callback){
    var img=new Image();
    img.onload=function(){
        img.onload=null;
        callback(img);
    }
    img.src=url;
    img.name=name;
}
function callbacktw(img){
    $(".content").prepend($(".articledemo:last").clone(true));
    $(".articledemo:first img").attr("src",img.src);
    $(".articledemo:first p").html(img.name);
    $(".articledemo:first").show().css("display","inline-block");
    var articlelen=$('.articledemo:visible').length;
    $('#articlenumber').html("图文消息（共"+articlelen+"条）");
    if(articlelen<1){
        $('#noarticle').show();
    }else{
        $('#noarticle').hide();
    }
}
function callback(img){
    $('#right-bottom-picture').prepend("<div></div>");
    $('#right-bottom-picture').children(":first").addClass('pictable');
    $('#right-bottom-picture').children(":first").css('background','url('+img.src+')');
    $('#right-bottom-picture').children(":first").css('background-size','100% 100%');
}