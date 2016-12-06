$(function(){
    $(".answer-table-radio").on("click",function() {
       $(this).closest('td').siblings('td').children('div').removeClass('checked');
        $(this).addClass('checked');
    });
    var questionnaire = sessionStorage.getItem("questionnaire");
    questionnaire = JSON.parse(questionnaire);
    $("#Q1 .question-text").html(questionnaire.Q1.questionTitle);
    $("#Q1 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q1.answer[0]);
    $("#Q1 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q1.answer[1]);
    $("#Q1 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q1.answer[2]);
    $("#Q1 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q1.answer[3]);
    $("#Q2 .question-text").html(questionnaire.Q2.questionTitle);
    $("#Q2 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q2.answer[0]);
    $("#Q2 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q2.answer[1]);
    $("#Q2 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q2.answer[2]);
    $("#Q2 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q2.answer[3]);
    $("#Q3 .question-text").html(questionnaire.Q3.questionTitle);
    $("#Q3 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q3.answer[0]);
    $("#Q3 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q3.answer[1]);
    $("#Q3 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q3.answer[2]);
    $("#Q3 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q3.answer[3]);
    $("#Q4 .question-text").html(questionnaire.Q4.questionTitle);
    $("#Q4 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q4.answer[0]);
    $("#Q4 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q4.answer[1]);
    $("#Q4 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q4.answer[2]);
    $("#Q4 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q4.answer[3]);
    $("#Q5 .question-text").html(questionnaire.Q5.questionTitle);
    $("#Q5 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q5.answer[0]);
    $("#Q5 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q5.answer[1]);
    $("#Q5 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q5.answer[2]);
    $("#Q5 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q5.answer[3]);
    $("#Q6 .question-text").html(questionnaire.Q6.questionTitle);
    $("#Q6 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q6.answer[0]);
    $("#Q6 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q6.answer[1]);
    $("#Q6 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q6.answer[2]);
    $("#Q6 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q6.answer[3]);
    $("#Q7 .question-text").html(questionnaire.Q7.questionTitle);
    $("#Q7 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q7.answer[0]);
    $("#Q7 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q7.answer[1]);
    $("#Q7 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q7.answer[2]);
    $("#Q7 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q7.answer[3]);
    $("#Q8 .question-text").html(questionnaire.Q8.questionTitle);
    $("#Q8 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q8.answer[0]);
    $("#Q8 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q8.answer[1]);
    $("#Q8 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q8.answer[2]);
    $("#Q8 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q8.answer[3]);
    $("#Q9 .question-text").html(questionnaire.Q9.questionTitle);
    $("#Q9 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q9.answer[0]);
    $("#Q9 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q9.answer[1]);
    $("#Q9 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q9.answer[2]);
    $("#Q9 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q9.answer[3]);
    $("#Q10 .question-text").html(questionnaire.Q10.questionTitle);
    $("#Q10 .table-col-text:eq(0)").html('<strong>'+'A.'+'</strong>'+questionnaire.Q10.answer[0]);
    $("#Q10 .table-col-text:eq(1)").html('<strong>'+'B.'+'</strong>'+questionnaire.Q10.answer[1]);
    $("#Q10 .table-col-text:eq(2)").html('<strong>'+'C.'+'</strong>'+questionnaire.Q10.answer[2]);
    $("#Q10 .table-col-text:eq(3)").html('<strong>'+'D.'+'</strong>'+questionnaire.Q10.answer[3]);


    // $("#page-next").on('click',function(){
    //     var pare = window.opener;
    //     if(pare){
    //         var question = pare.document.getElementById('Q1');
    //         var questionTitle = question.getElementsByClassName('question-question')[0];
    //         var $questionTitle = $(questionTitle).html();
    //         $("#Q1 .question-text").html($questionTitle);
    //     }
    // });
});
