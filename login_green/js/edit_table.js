var http ="http://192.168.1.103:8080";
function showTableData(){
    $('#editable-sample').children('tbody').empty();
    $.ajax({
        url:http+"/AndroidTv/tv/getAllNewsSender.do",
        type:'POST',
        dataType:"json"
    }).done(function(data){
        var tbody ="";
        $.each(data,function(index,el){
            var tr ="<tr>";
            tr+="<td>"+el.username+"</td>";
            tr+="<td>"+el.status+"</td>";
            tr+="<td>"+el.msgCount+"</td>";
            tr+="<td>"+"<button id='edit' class='btn btn-primary btn-sm' type='button'><i class='fa fa-edit'></i></button>"+"</td>";
            tr+="<td>"+"<button id='del' class='btn btn-danger btn-sm' type='button'><i class='fa fa-trash-o'></i></button>"+"</td>";
            tr+="</tr>";
            tbody+=tr;
        });
        $("#editable-sample").children('tbody').append(tbody);
        BindDataTableEvent();
    })
        .fail(function(){
            alert("Error");
        });
}
function BindDataTableEvent(){
    $("#editable-sample tbody.sel").children('tr').click(function(event){
        $(this).siblings('tr').removeClass('active');
        $(this).addClass('active');
    })
}
function newOne(){
    $('.edit-modal').modal();
}
function search(){
    var $searchInput = document.getElementById("searchInput").value;
    //$('#editable-sample').children('tbody').empty();
   $.ajax({
       url:http+'/AndroidTv/tv/search.do',
       type:'POST',
       dataType:"json",
       data:{
           keywords:$searchInput
       },
       success:function(data){
           $('#editable-sample').children('tbody').empty();
           var tbody="";
           $.each(data,function(index,el){
               var tr ="<tr>";
               tr+="<td>"+el.username+"</td>";
               tr+="<td>"+el.status+"</td>";
               tr+="<td>"+el.msgCount+"</td>";
               tr+="<td>"+"<button class='edit' class='btn btn-primary btn-sm' type='button'><i class='fa fa-edit'></i></button>"+"</td>";
               tr+="<td>"+"<button class='del' class='btn btn-danger btn-sm' type='button'><i class='fa fa-trash-o'></i></button>"+"</td>";
               tr+="</tr>";
               tbody+=tr;
           });
           $("#editable-sample").children('tbody').append(tbody);
           BindDataTableEvent();
       },
       error:function(){
           alert("服务器无响应，请重试！");
       }
   });
}
$(function(){
    showTableData();
    BindDataTableEvent();
    var tr;
    // $('#editable-sample tbody').on('click','button#edit',function () {
    //     $('.edit-modal').modal();
    //     tr = $(this).parents('tr');
    // });
    //     $('.edit-modal').on('click','button#save-confirm',function(){
    //         //var data=$('#editable-sample').row($(this).parents('tr')).data();
    //         var data = tr.children('td')[0].innerHTML;
    //         $('.edit-modal').modal('hide');
    //         var fields = $('#editForm').serializeArray();
    //         var name = fields[0].value;
    //         var password = fields[1].value;
    //         $.ajax({
    //             url:'',
    //             type:'POST',
    //             dataType:'json',
    //             data:{
    //                 username:data[0],
    //                 newUserName:name,
    //                 newPassword:password
    //             },
    //             success:function(data){
    //                 if(data=="success"){
    //                     alert('修改成功！');
    //                     showTableData();
    //                 }else{
    //                     alert('修改用户失败！');
    //                 }
    //             },
    //             error:function(){
    //                 alert("服务器无响应，请重试");
    //             }
    //         });
    //         $('input.form-control').val("");
    //     });

    $('.edit-modal').on('click','button#save-confirm',function(){
        $('.edit-modal').modal('hide');
        var fields = $('#editForm').serializeArray();
        var name = fields[0].value;
        var password = fields[1].value;
        var confirmpsd = fields[2].value;
        if(name ===""){
            alert("请输入用户名!");
        }else if(password ===""){
            alert("请输入密码！");
        }else if(confirmpsd ===""){
            alert("请再次确认密码！");
        }else if(password !== confirmpsd){
            alert("两次密码输入不一致，请重新输入");
        }else{
            $.ajax({
                url:http+'/AndroidTv/tv/addManagerSender.do',
                type:'POST',
                data:{
                    username:name,
                    password:password
                },
                success:function(data){
                    if(data=="success"){
                        alert('修改成功！');
                        showTableData();
                    }else{
                        alert('修改用户失败！');
                    }
                },
                error:function(){
                    alert("服务器无响应，请重试");
                }
            });
        }
    });

    $('#editable-sample tbody').on('click','button#del',function() {
        $('.del-modal').modal();
        tr = $(this).parents('tr');
    });
    $('.del-modal').on('click','button#del-confirm',function()
        {
            $(".del-modal").modal('hide');
            var data = tr.children('td')[0].innerHTML;
            $.ajax({
                url:http+'/AndroidTv/tv/deleteUser.do',
                type:'POST',
                data:{
                    username:data
                },
                success:function(data){
                    if(data==="success"){
                        alert('删除成功！');
                        showTableData();
                    }else{
                        alert('删除用户失败！');
                    }
                },
                error:function(){
                    alert("服务器无响应，请重试");
                }
            });
        });
});