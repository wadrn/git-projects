$(function () {
    $('#submit').click(function() {
        var username=$("#username").val();
        var password=$('#password').val();
        if(username==""){
            alert("请输入用户名！");
        }else if(password==""){
            alert("请输入密码！");
        }else{
            $.ajax({
                type: "POST",
                url: "http://192.168.1.110:8080/AndroidTv/tv/superlogincheck.do",
                data: {
                    username: $("#username").val(),
                    password: $("#password").val()
                },
                success: function (data) {
                    switch(data){
                        case '0':
                            alert("用户不存在！");
                            break;
                        case '1':
                            alert("密码错误");
                            break;
                        case '2':
                            window.location.href="manage.html";
                            break;
                    }
                }
            });
        }
    });
});