$(function () {
    $('#ok').click(function() {
        var keys=$('#keywords').val();
        var username=$("#username").val();
        if(keys!=""&&username!=""){
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/AndroidTv/tv/logincheck.do",
                data: {
                    username: $("#username").val(),
                    keywords: $("#keywords").val()
                },
                success: function (data) {
                    switch (data) {
                        case "0":
                            alert("用户不存在！");
                            break;
                        case "1":
                            alert("密码错误！");
                            break;
                        case "2":
                            window.open("/AndroidTv/tvos1/home/home.html","_self");
                            break;
                    }
                }
            });
        }else{
            alert("用户名和密码不能为空！");
        }

    });
});
