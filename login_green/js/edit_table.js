function showTableData(){
    $('#editable-sample').children('tbody').empty();
    $.ajax({
       // url:"http://192.168.1.110:8080/AndroidTv/tv/getAllNewsSender.do",
        //url:"http://10.104.9.42:8080/AndroidTv/tv/getAllNewsSender.do",
        url:"http://localhost/newServer/newfile.php",
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
            url:'http://10.104.9.42:8080/AndroidTv/tv/addManagerSender.do',
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
}
function search(){
    var $searchInput = document.getElementById("searchInput").value;
    $('#editable-sample').children('tbody').empty();
   $.ajax({
       url:'http://10.104.9.42:8080/AndroidTv/tv/search.do',
       type:'POST',
       dataType:"json",
       data:{
           keywords:$searchInput
       },
       success:function(data){
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
    $('#editable-sample tbody').on('click','button#edit',function () {
        $('.edit-modal').modal();
        tr = $(this).parents('tr');
    });
        $('.edit-modal').on('click','button#save-confirm',function(){
            //var data=$('#editable-sample').row($(this).parents('tr')).data();
            var data = tr.children('td')[0].innerHTML;
            $('.edit-modal').modal('hide');
            var fields = $('#editForm').serializeArray();
            var name = fields[0].value;
            var password = fields[1].value;
            $.ajax({
                url:'',
                type:'POST',
                dataType:'json',
                data:{
                    username:data[0],
                    newUserName:name,
                    newPassword:password
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
            $('input.form-control').val("");
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
                //url:'http://10.104.9.42:8080/AndroidTv/tv/deleteUser.do',
                url:'http://localhost/newServer/newfile1.php',
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













// function format(d){
//     return '用户名:'+d.username+'<br>'+'身份:'+d.identity+'<br>'+'共发送'+d.msgCount+'条消息';
// }
// $(function(){
//     $.ajax({
//         type:"post",
//         url:"http://10.104.9.42:8080/AndroidTv/tv/getAllNewsSender.do",
//         dataType:"json",
//         success:function(data){
//             $("#editable-sample").DataTable({
//                 "data":data,
//                 "processing":true,
//                 "serverSide":true,
//                 "ajax":"http://localhost/newServer/dataTable2.php",
//                 "bStateSave":true,
//                 "iDisplayLength":5,
//                 "aLengthMenu":[1,5,10,50,80],
//                 "iDisplayStart":0,
//                 columns:[
//                     {"data":"username"},
//                     {"data":"identity"},
//                     {"data":"msgCount"}
//             ]
//             });
//         }
//     });
    // var dt = $("#editable-sample").DataTable({
    //     "processing":true,
    //     "serverSide":true,
    //     "ajax":"http://10.104.9.42:8080/AndroidTv/tv/getAllNewsSender.do",
    //     "bStateSave":true,
    //     "iDisplayLength":5,
    //     "aLengthMenu":[1,5,10,50,80],
    //     "iDisplayStart":0,
    //     columns:[
    //         {"data":"username"},
    //         {"data":"identity"},
    //         {"data":"msgCount"}
    //         // {
    //         //     "bSortable":      false,
    //         //     "data":           null,
    //         //     "sDefaultContent": "<button id='edit' class='btn btn-primary btn-sm' type='button'><i class='fa fa-edit'></i></button>"
    //         // },
    //         // {
    //         //     "bSortable":      false,
    //         //     "data":           null,
    //         //     "sDefaultContent": "<button id='del' class='btn btn-danger btn-sm' type='button'><i class='fa fa-trash-o'></i></button>"
    //         // },
    //         // {
    //         //     "class":          "details-control",
    //         //     "bSortable":      false,
    //         //     "data":           null,
    //         //     "sDefaultContent": ""
    //         // }
    //     ],
    //     columnDefs:[
    //         {
    //             "targets":[0],
    //             "render":function(data,type,full){
    //                 return "<span style='color:green;font-weight: bold'>"+data+"</span>";
    //             }
    //         },
    //         // {
    //         //     "targets":[4],
    //         //     "render":function(data,type,full){
    //         //         return "<image src='https://www.datatables.net/examples/resources/details_open.png' style='cursor: pointer;'>"+"</image>";
    //         //     }
    //         // }
    //     ],
    //     "oLanguage":{
    //         "sLengthMenu": "每页显示 _MENU_ 条记录",
    //         "sZeroRecords": "抱歉， 没有找到",
    //         "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
    //         "sInfoEmpty": "没有数据",
    //         "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
    //         "oPaginate": {
    //             "sFirst": "首页",
    //             "sPrevious": "前一页",
    //             "sNext": "后一页",
    //             "sLast": "尾页"
    //         },
    //         "sZeroRecords": "没有检索到数据",
    //         "sProcessing": "processing..."
    //     },
    //     "sPaginationType":"full_numbers"
    // });
    // var detailRows =[];
    // $('#editable-sample tbody').on('click','tr td.details-control',function(){
    //     var tr =$(this).closest('tr');
    //     var row = dt.row(tr);
    //     var idx = $.inArray(tr.attr('id'),detailRows);
    //     if(row.child.isShown()){
    //         tr.removeClass('details');
    //         row.child.hide();
    //         detailRows.splice(idx,1);
    //     }else{
    //         tr.addClass('details');
    //         row.child(format(row.data())).show();
    //         if(idx === -1){
    //             detailRows.push(tr.attr('id'));
    //         }
    //     }
    // });
    // $('#editable-sample tbody').on('click','button#del',function(){
    //     $('.del-modal').modal();
    //     var tr = $(this).parents('tr');
    //     $('.del-modal').on('click','button#del-confirm',function()
    //     {
    //         $(".del-modal").modal('hide');
    //         var data = dt.row(tr).data();
    //         $.ajax({
    //             url:'',
    //             type:'POST',
    //             dataType:'json',
    //             data:{
    //                 username:data[0]
    //             },
    //             success:function(data){
    //                 if(data=="success"){
    //                     alert('删除成功！');
    //                     dt.ajax.reload();
    //                 }else{
    //                     alert('删除用户失败！');
    //                 }
    //             },
    //             error:function(){
    //                 alert("服务器无响应，请重试");
    //             }
    //         })
    //
    //     });
    // });
    // $('#editable-sample tbody').on('click','button#edit',function () {
    //     $('.edit-modal').modal();
    //     $('.edit-modal').on('click','button#save-confirm',function(){
    //         var data=dt.row($(this).parents('tr')).data();
    //         $('.edit-modal').modal('hide');
    //         var fields = $('#editForm').serializeArray();
    //         $.ajax({
    //             url:'',
    //             type:'POST',
    //             dataType:'json',
    //             data:{
    //                 username:data[0],
    //             },
    //             success:function(data){
    //                 if(data=="success"){
    //                     alert('修改成功！');
    //                     dt.ajax.reload();
    //                 }else{
    //                     alert('修改用户失败！');
    //                 }
    //             },
    //             error:function(){
    //                 alert("服务器无响应，请重试");
    //             }
    //         });
    //     });
    // });
    // dt.on('draw',function(){
    //     $.each(detailRows,function(i,id){
    //         $('#'+id+' td.details-control').trigger('click');
    //     });
    // });
// });