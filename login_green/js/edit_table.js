function format(d){
    return '用户名:'+d.username+'<br>'+'身份:'+d.identity+'<br>'+'共发送'+d.msgCount+'条消息';
}
function newOne(){
    $('.edit-modal').modal();
    $('.edit-modal').on('click','button#save-confirm',function(){
        $('.edit-modal').modal('hide');
        var fields = $('#editForm').serializeArray();
        $.ajax({
            url:'',
            type:'POST',
            dataType:'json',
            data:{
                newinfo:fields
            },
            success:function(data){
                if(data=="success"){
                    alert('修改成功！');
                    dt.ajax.reload();
                }else{
                    alert('修改用户失败！');
                }
            },
            error:function(){
                alert("服务器无响应，请重试");
            }
        });
    });
}
$(function(){
    var dt = $("#editable-sample").DataTable({
        "processing":true,
        "serverSide":true,
        "ajax":"http://localhost/newServer/dataTable2.php",
        "bStateSave":true,
        "iDisplayLength":5,
        "aLengthMenu":[1,5,10,50,80],
        "iDisplayStart":0,
        columns:[
            {"data":"username"},
            {"data":"identity"},
            {
                "bSortable":      false,
                "data":           null,
                "sDefaultContent": "<button id='edit' class='btn btn-primary btn-sm' type='button'><i class='fa fa-edit'></i></button>"
            },
            {
                "bSortable":      false,
                "data":           null,
                "sDefaultContent": "<button id='del' class='btn btn-danger btn-sm' type='button'><i class='fa fa-trash-o'></i></button>"
            },
            {
                "class":          "details-control",
                "bSortable":      false,
                "data":           null,
                "sDefaultContent": ""
            }
        ],
        columnDefs:[
            {
                "targets":[0],
                "render":function(data,type,full){
                    return "<span style='color:green;font-weight: bold'>"+data+"</span>";
                }
            },
            {
                "targets":[4],
                "render":function(data,type,full){
                    return "<image src='https://www.datatables.net/examples/resources/details_open.png' style='cursor: pointer;'>"+"</image>";
                }
            }
        ],
        "oLanguage":{
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "抱歉， 没有找到",
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
            "sInfoEmpty": "没有数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
            },
            "sZeroRecords": "没有检索到数据",
            "sProcessing": "processing..."
        },
        "sPaginationType":"full_numbers"
    });
    var detailRows =[];
    $('#editable-sample tbody').on('click','tr td.details-control',function(){
        var tr =$(this).closest('tr');
        var row = dt.row(tr);
        var idx = $.inArray(tr.attr('id'),detailRows);
        if(row.child.isShown()){
            tr.removeClass('details');
            row.child.hide();
            detailRows.splice(idx,1);
        }else{
            tr.addClass('details');
            row.child(format(row.data())).show();
            if(idx === -1){
                detailRows.push(tr.attr('id'));
            }
        }
    });
    $('#editable-sample tbody').on('click','button#del',function(){
        $('.del-modal').modal();
        var tr = $(this).parents('tr');
        $('.del-modal').on('click','button#del-confirm',function()
        {
            $(".del-modal").modal('hide');
            var data = dt.row(tr).data();
            $.ajax({
                url:'',
                type:'POST',
                dataType:'json',
                data:{
                    username:data[0]
                },
                success:function(data){
                    if(data=="success"){
                        alert('删除成功！');
                        dt.ajax.reload();
                    }else{
                        alert('删除用户失败！');
                    }
                },
                error:function(){
                    alert("服务器无响应，请重试");
                }
            })

        });
    });
    $('#editable-sample tbody').on('click','button#edit',function () {
        $('.edit-modal').modal();
        $('.edit-modal').on('click','button#save-confirm',function(){
            var data=dt.row($(this).parents('tr')).data();
            $('.edit-modal').modal('hide');
            var fields = $('#editForm').serializeArray();
            $.ajax({
                url:'',
                type:'POST',
                dataType:'json',
                data:{
                    username:data[0],
                },
                success:function(data){
                    if(data=="success"){
                        alert('修改成功！');
                        dt.ajax.reload();
                    }else{
                        alert('修改用户失败！');
                    }
                },
                error:function(){
                    alert("服务器无响应，请重试");
                }
            });
        });
    });
    dt.on('draw',function(){
        $.each(detailRows,function(i,id){
            $('#'+id+' td.details-control').trigger('click');
        });
    });
});