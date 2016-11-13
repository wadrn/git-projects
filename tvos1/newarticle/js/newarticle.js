/**
 * Created by User on 2016/8/2.
 */
$(function() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/AndroidTv/tv/getusername.do",
        contentType: false,    //不可缺
        processData: false,    //不可缺
        success:function(data){
            $('#username').html(data);
        }
    });
    var name=location.search.substring(1);
    if(name!=""){
    
        $.ajax({
            type:"POST",
            url:"http://localhost:8080/AndroidTv/tv/edit.do",
            data:{
            	titles:name
            	},
            success:function(data){
            	alert("receive");
                var newdata=JSON.parse(data);
    
                $("#firsttitle").attr("src",newdata.news_title_pic);
                $("#input-title").val(newdata.news_title);
                alert(newdata.content1);
                $("#input-word1").html(newdata.news_content1);
                alert((String)(newdata.pic1));
                $("#pic1").attr("src",newdata.pic1);
                alert(newdata.news_content2);
                $("#input-word2").html(newdata.news_content2);
                alert(newdata.pic2);
                $("#pic2").attr("src",newdata.pic2);
            }
        });
    }

    var lastFocusID="";
    function getFocus()
    {
        var divlist = document.getElementsByTagName('div');
        for(var i=0; i<divlist.length; i++)
        {
            var ta = divlist.item(i);
            if (window.getComputedStyle(ta, null).zIndex!=null && window.getComputedStyle(ta, null).zIndex == 100) {
                if(ta.id && ta.id!=null)
                    lastFocusID=ta.id.toString();
                else
                    lastFocusID="";
                break;
            }
            else
                lastFocusID="";
        }

    }
    //再加入一个全屏事件
    $(window).click(function(e)
    {
        if (window.getSelection)
        {
            var getevent=e.srcElement?e.srcElement:e.target;//不要告诉我不知道这句的意思

            if(getevent.tagName=="INPUT" && getevent.id!=null && getevent.id=="cmdInsert")
            {
                //代表 点了插入html的按钮
                //则不执行getFocus方法
            }
            else
                getFocus();//除非点了那个插入html的按钮 其他时候必须要执行getFocus来更新最后失去焦点的div
        }


    })

    //然后修改一下 insertHTML 这个方法
    function insertHTML(html)
    {
        var dthis=$(".input-word")[0];
        var sel, range;
        if (window.getSelection)
        {
            if(lastFocusID!="div3")
            {
                $(".input-word").html(dthis.innerHTML+html);//说明 用户可能在其他控件上 进行焦点或者其他操作 则
                return;//后面不执行了

            }

            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                var el = document.createElement('div');
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ( (node = el.firstChild) )
                {
                    lastNode = frag.appendChild(node);
                }

                range.insertNode(frag);
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }
        else if (document.selection && document.selection.type !='Control')
        {

            $(dthis).focus(); //在非标准浏览器中 要先让你需要插入html的div 获得焦点
            ierange= document.selection.createRange();//获取光标位置
            ierange.pasteHTML(html);	//在光标位置插入html 如果只是插入text 则就是fus.text="..."
            $(dthis).focus();

        }
    }
    $('#editControls a').click(function(e) {
        document.execCommand($(this).data('role'), false, null);
    })
    var picarray=$(".pictable",window.opener.document);
    for(var i=0;i<picarray.length;i++){
        var newpic=picarray[i].style.backgroundImage;
        newpic = newpic.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#insertpic-main").prepend("<div></div>");
        $("#insertpic-main").children(":first").addClass('insertpic-choose');
        $("#insertpic-main").children(":first").css('background','url('+newpic+')');
        $("#insertpic-main").children(":first").css('background-size','100% 100%');
    }
    $('#pic1,#pic2,#firsttitle').click(function(){
            var thispic=$(this);
            $(".insertpicture").show();
            $('#chooseensure').click(function(){
                if( $('.imgopacity').length==1){
                    var a=$('.imgopacity').css('backgroundImage');
                    a = a.replace('url(','').replace(')','').replace(/\"/gi, "");
                    thispic.attr("src",a);
                    var ab=thispic;
                    $(".insertpicture").hide();
                    $(this).unbind('click');
                }
                else{
                    alert("请选择图片！");
                }
            })
    });
    $('#input-title').keyup(function(){
        $('.firsttitle p').html($(this).val());
    });
    $('#localunload').change(function(){
        var data = new FormData($("#submit_form"));
        $.each($('#localunload')[0].files, function(i, file) {
            data.append('teacherPhoto', file);
        });
        $.ajax({
            type:"POST",
            url:"http://localhost:8080/AndroidTv/tv/PhotoUpload.do",
            data:data,
            contentType: false,    //不可缺
            processData: false,    //不可缺
            success:function(data){
                if(data!=""){
                    $("#insertpic-main").prepend("<div></div>");
                    $("#insertpic-main").children(":first").addClass('insertpic-choose');
                    $("#insertpic-main").children(":first").css('background','url('+data+')');
                    $("#insertpic-main").children(":first").css('background-size','100% 100%');
                }
            }
        });
    });
    $('#choosecancel,#off').click(function(){
        $(".insertpicture").hide();
    });
   $('#insertpic-main').on('click','.insertpic-choose',function(){
        if($(this).hasClass('imgopacity')){
            $(this).removeClass("imgopacity");
        }
        else{
            $('.insertpic-choose').removeClass("imgopacity");
            $(this).addClass("imgopacity");
        }
    });
    $('#preview').click(function(){
        $("#yulan").show();
        $('#yulan-title').html($("#input-title").val());
        // $('#yulan-author').html($('#username').html);
        $('#yulan-word1').hide();
        var a=$("#input-word1").html();
        if($("#input-word1").html()!=""&&$("#input-word1").html()!="<br>"){
            $('#yulan-word1').html($("#input-word1").html());
            $('#yulan-word1').show();
        }
        $('#yulan-pic1').hide();
        if($("#pic1").attr("src")!=""){
            $('#yulan-pic1').attr("src",$("#pic1").attr("src"));
            $('#yulan-pic1').show();
        }
        $('#yulan-word2').hide();
        if($("#input-word2").html()!=""&&$("#input-word2").html()!="<br>"){
            $('#yulan-word2').html($("#input-word2").html());
            $('#yulan-word2').show();
        }
        $('#yulan-pic2').hide();
        if($("#pic2").attr("src")!=""){
            $('#yulan-pic2').attr("src",$("#pic2").attr("src"));
            $('#yulan-pic2').show();
        }
    });
    $('#yulan-off').click(function(){
        $("#yulan").hide();
    });
    // function savetw(){
    //     $(".content",window.opener.document).prepend($(".articledemo:last",window.opener.document).clone(true));
    //     var titlepic=$("#firsttitle").attr("src");
    //     var titlecontent=$("#input-title").val();
    //     $(".articledemo:first img",window.opener.document).attr("src",titlepic);
    //     $(".articledemo:first p",window.opener.document).html(titlecontent);
    //     $(".articledemo:first",window.opener.document).show().css("display","inline-block");
    //     var articlelen=$('.articledemo:visible',window.opener.document).length;
    //     $('#articlenumber',window.opener.document).html("图文消息（共"+articlelen+"条）");
    //     if(articlelen<1){
    //         $('#noarticle',window.opener.document).show();
    //     }else{
    //         $('#noarticle',window.opener.document).hide();
    //     }
    // }
    $('#save').click(function () {
        var title=$("#input-title").val();
        var timg=$("#firsttitle").attr("src");
        var name=location.search.substring(1);
        if(title==""){
            alert("标题不得为空！");
        }else if(timg==""){
            alert("标题图片不得为空！");
        }else {
            if(name==""){
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/AndroidTv/tv/ArticleSave.do",
                    data: {
                    	//仅新建
                        send: 1,
                        pic_url0: $("#firsttitle").attr("src"),
                        title: $("#input-title").val(),
                        author: $('#username').html(),
                        content1: $("#input-word1").html(),
                        pic_url1: $("#pic1").attr("src"),
                        content2: $("#input-word2").html(),
                        pic_url2: $("#pic2").attr("src")
                    },
                    success: function (data) {
                        if (data="0") {//判断标题是否重复
                            alert("保存成功");
                            // savetw();
                            window.open("/AndroidTv/tvos1/home/home.html");
                        }
                        else {
                            alert("标题不得重复！");

                        }
                    }
                });
            }else{
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/AndroidTv/tv/ArticleSave.do",
                    data: {
                    	//仅覆盖
                        send: 2,
                        pic_url0: $("#firsttitle").attr("src"),
                        oldtitle:location.search.substring(1),
                        title: $("#input-title").val(),
                        author: $('#username').html(),
                        content1: $("#input-word1").html(),
                        pic_url1: $("#pic1").attr("src"),
                        content2: $("#input-word2").html(),
                        pic_url2: $("#pic2").attr("src")
                    },
                    success: function (data) {
                        if (data="0") {//判断标题是否重复
                            alert("保存成功");
                            window.open("/AndroidTv/tvos1/home/home.html");
                            // var titlepic=$("#firsttitle").attr("src");
                            // var titlecontent=$("#input-title").val();
                            // $(".articledemo p:contains(name)",window.opener.document).attr("src",titlepic);
                            // $(".articledemo p:contains(name)",window.opener.document).html(titlecontent);
                            // $(".articledemo p:contains(name)",window.opener.document).show().css("display","inline-block");
                            // var articlelen=$('.articledemo:visible',window.opener.document).length;
                            // $('#articlenumber',window.opener.document).html("图文消息（共"+articlelen+"条）");
                            // if(articlelen<1){
                            //     $('#noarticle',window.opener.document).show();
                            // }else{
                            //     $('#noarticle',window.opener.document).hide();
                            // }
                        }
                        else {

                            alert("标题不得重复！");
                        }
                    }
                });
            }
        }
    });
    
    $('#save-send').click(function() {
        var title = $("#input-title").val();
        var timg = $("#firsttitle").attr("src");
        var name = location.search.substring(1);
        if (title == "") {
            alert("标题不得为空！");
        } else if (timg == "") {
            alert("标题图片不得为空！");
        } else {
            if (name == "") {
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/AndroidTv/tv/ArticleSave.do",
                    data: {
                    	//新建并群发
                        send: 3,
                        pic_url0: $("#firsttitle").attr("src"),
                        title: $("#input-title").val(),
                        author: $('#username').html(),
                        content1: $("#input-word1").html(),
                        pic_url1: $("#pic1").attr("src"),
                        content2: $("#input-word2").html(),
                        pic_url2: $("#pic2").attr("src")
                    },
                    success: function (data) {
                        if (data) {//判断标题是否重复
                            alert("标题不得重复！");
                        }
                        else {
                            alert("保存成功");
                            // savetw();
                            window.open("/AndroidTv/tvos1/home/home.html");
                        }
                    }
                });
            } else {

                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/AndroidTv/tv/ArticleSave.do",
                    data: {
                    	//覆盖并群发
                        send: 4,
                        pic_url0: $("#firsttitle").attr("src"),
                        oldtitle:location.search.substring(1),
                        title: $("#input-title").val(),
                        author: $('#username').html(),
                        content1: $("#input-word1").html(),
                        pic_url1: $("#pic1").attr("src"),
                        content2: $("#input-word2").html(),
                        pic_url2: $("#pic2").attr("src")
                    },
                    success: function (data) {
                        if (data) {//判断标题是否重复
                           alert("标题不得重复！");
                        }
                        else {
                            alert("保存成功");
                            window.open("/AndroidTv/tvos1/home/home.html");
                            // var titlepic = $("#firsttitle").attr("src");
                            // var titlecontent = $("#input-title").val();
                            // $(".articledemo p:contains(name)", window.opener.document).attr("src", titlepic);
                            // $(".articledemo p:contains(name)", window.opener.document).html(titlecontent);
                            // $(".articledemo p:contains(name)", window.opener.document).show().css("display", "inline-block");
                            // var articlelen = $('.articledemo:visible', window.opener.document).length;
                            // $('#articlenumber', window.opener.document).html("图文消息（共" + articlelen + "条）");
                            // if (articlelen < 1) {
                            //     $('#noarticle', window.opener.document).show();
                            // } else {
                            //     $('#noarticle', window.opener.document).hide();
                            // }
                        }
                    }
                });
            }

        }
    });

});