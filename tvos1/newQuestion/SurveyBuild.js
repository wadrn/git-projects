        function saveQuestion(node){
            var questionNumber = document.getElementById("qcode").value;
            var question = node.value;
            var questionLi = document.getElementById(questionNumber);
            var questionTitle = questionLi.getElementsByClassName("question-question")[0];
            questionTitle.innerHTML = question;
}
        function saveAnswer(node){
            var questionNumber =document.getElementById("qcode").value;
            var answer = node.value;
            var questionLi = document.getElementById(questionNumber);
            var questionAnswer = questionLi.getElementsByClassName("question-answer")[0];
            var AnswerContent = questionAnswer.getElementsByTagName("tr")[0];
            var Answers = AnswerContent.children;
            var option = $(node).parent().prev().children()[0].value;
            switch(option){
                case 'A':
                    Answers[1].innerHTML =answer;
                    break;
                case 'B':
                    Answers[2].innerHTML =answer;
                    break;
                case 'C':
                    Answers[3].innerHTML =answer;
                    break;
                case 'D':
                    Answers[4].innerHTML =answer;
                    break;
                default:
                    break;
            }
        }
function saveCorrectAnswer(){
    var questionNumber =document.getElementById("qcode").value;
    var questionLi =document.getElementById(questionNumber);
    var correctAnswer = questionLi.getElementsByClassName("correctAnswer")[0];
    var correct = document.getElementById("correct").value;
    //alert(correct);
    if(correct!=='A'&&correct!=='B'&&correct!=='C'&&correct!=='D'){
        alert("请输入正确答案选项（A、B、C、D）！");
}else{
    correctAnswer.innerHTML = correct;
}
}
$(function(){
    var questionnaire;
    $('#preview').on('click',function(){
        var $question1 = $("#Q1 .question-question").html();
        var $question2 = $("#Q2 .question-question").html();
        var $question3 = $("#Q3 .question-question").html();
        var $question4 = $("#Q4 .question-question").html();
        var $question5 = $("#Q5 .question-question").html();
        var $question6 = $("#Q6 .question-question").html();
        var $question7 = $("#Q7 .question-question").html();
        var $question8 = $("#Q8 .question-question").html();
        var $question9 = $("#Q9 .question-question").html();
        var $question10 = $("#Q10 .question-question").html();
        var answer1 = [],
            answer2 = [],
            answer3 = [],
            answer4 = [],
            answer5 = [],
            answer6 = [],
            answer7 = [],
            answer8 = [],
            answer9 = [],
            answer10 = [];
        var A =$("#Q1 .question-answer tr:first td:eq(1)").text();
        var B =$("#Q1 .question-answer tr:first td:eq(2)").text();
        var C =$("#Q1 .question-answer tr:first td:eq(3)").text();
        var D =$("#Q1 .question-answer tr:first td:eq(4)").text();
        var CrAns =$("#Q1 .correctAnswer").text();
        answer1.push(A,B,C,D,CrAns);
        A = $("#Q2 .question-answer tr:first td:eq(1)").text();
        B = $("#Q2 .question-answer tr:first td:eq(2)").text();
        C = $("#Q2 .question-answer tr:first td:eq(3)").text();
        D = $("#Q2 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q2 .correctAnswer").text();
        answer2.push(A,B,C,D,CrAns);
        A = $("#Q3 .question-answer tr:first td:eq(1)").text();
        B = $("#Q3 .question-answer tr:first td:eq(2)").text();
        C = $("#Q3 .question-answer tr:first td:eq(3)").text();
        D = $("#Q3 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q3 .correctAnswer").text();
        answer3.push(A,B,C,D,CrAns);
        A = $("#Q4 .question-answer tr:first td:eq(1)").text();
        B = $("#Q4 .question-answer tr:first td:eq(2)").text();
        C = $("#Q4 .question-answer tr:first td:eq(3)").text();
        D = $("#Q4 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q4 .correctAnswer").text();
        answer4.push(A,B,C,D,CrAns);
        A = $("#Q5 .question-answer tr:first td:eq(1)").text();
        B = $("#Q5 .question-answer tr:first td:eq(2)").text();
        C = $("#Q5 .question-answer tr:first td:eq(3)").text();
        D = $("#Q5 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q5 .correctAnswer").text();
        answer5.push(A,B,C,D,CrAns);
        A = $("#Q6 .question-answer tr:first td:eq(1)").text();
        B = $("#Q6 .question-answer tr:first td:eq(2)").text();
        C = $("#Q6 .question-answer tr:first td:eq(3)").text();
        D = $("#Q6 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q6 .correctAnswer").text();
        answer6.push(A,B,C,D,CrAns);
        A = $("#Q7 .question-answer tr:first td:eq(1)").text();
        B = $("#Q7 .question-answer tr:first td:eq(2)").text();
        C = $("#Q7 .question-answer tr:first td:eq(3)").text();
        D = $("#Q7 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q7 .correctAnswer").text();
        answer7.push(A,B,C,D,CrAns);
        A = $("#Q8 .question-answer tr:first td:eq(1)").text();
        B = $("#Q8 .question-answer tr:first td:eq(2)").text();
        C = $("#Q8 .question-answer tr:first td:eq(3)").text();
        D = $("#Q8 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q8 .correctAnswer").text();
        answer8.push(A,B,C,D,CrAns);
        A = $("#Q9 .question-answer tr:first td:eq(1)").text();
        B = $("#Q9 .question-answer tr:first td:eq(2)").text();
        C = $("#Q9 .question-answer tr:first td:eq(3)").text();
        D = $("#Q9 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q9 .correctAnswer").text();
        answer9.push(A,B,C,D,CrAns);
        A = $("#Q10 .question-answer tr:first td:eq(1)").text();
        B = $("#Q10 .question-answer tr:first td:eq(2)").text();
        C = $("#Q10 .question-answer tr:first td:eq(3)").text();
        D = $("#Q10 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q10 .correctAnswer").text();
        answer10.push(A,B,C,D,CrAns);

        var questionnaire = {
            Q1 :{questionTitle:$question1,answer:answer1},
            Q2 :{questionTitle:$question2,answer:answer2},
            Q3 :{questionTitle:$question3,answer:answer3},
            Q4 :{questionTitle:$question4,answer:answer4},
            Q5 :{questionTitle:$question5,answer:answer5},
            Q6 :{questionTitle:$question6,answer:answer6},
            Q7 :{questionTitle:$question7,answer:answer7},
            Q8 :{questionTitle:$question8,answer:answer8},
            Q9 :{questionTitle:$question9,answer:answer9},
            Q10 :{questionTitle:$question10,answer:answer10}
        };
        questionnaire = JSON.stringify(questionnaire);
        sessionStorage.setItem("questionnaire",questionnaire);
        window.open("../previewPage/previewPage.html","_blank");
    });
    $('#saveAndSend').on('click',function(){
        var $question1 = $("#Q1 .question-question").html();
        var $question2 = $("#Q2 .question-question").html();
        var $question3 = $("#Q3 .question-question").html();
        var $question4 = $("#Q4 .question-question").html();
        var $question5 = $("#Q5 .question-question").html();
        var $question6 = $("#Q6 .question-question").html();
        var $question7 = $("#Q7 .question-question").html();
        var $question8 = $("#Q8 .question-question").html();
        var $question9 = $("#Q9 .question-question").html();
        var $question10 = $("#Q10 .question-question").html();
        var answer1 = [],
            answer2 = [],
            answer3 = [],
            answer4 = [],
            answer5 = [],
            answer6 = [],
            answer7 = [],
            answer8 = [],
            answer9 = [],
            answer10 = [];
        var A =$("#Q1 .question-answer tr:first td:eq(1)").text();
        var B =$("#Q1 .question-answer tr:first td:eq(2)").text();
        var C =$("#Q1 .question-answer tr:first td:eq(3)").text();
        var D =$("#Q1 .question-answer tr:first td:eq(4)").text();
        var CrAns =$("#Q1 .correctAnswer").text();
        answer1.push(A,B,C,D,CrAns);
        A = $("#Q2 .question-answer tr:first td:eq(1)").text();
        B = $("#Q2 .question-answer tr:first td:eq(2)").text();
        C = $("#Q2 .question-answer tr:first td:eq(3)").text();
        D = $("#Q2 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q2 .correctAnswer").text();
        answer2.push(A,B,C,D,CrAns);
        A = $("#Q3 .question-answer tr:first td:eq(1)").text();
        B = $("#Q3 .question-answer tr:first td:eq(2)").text();
        C = $("#Q3 .question-answer tr:first td:eq(3)").text();
        D = $("#Q3 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q3 .correctAnswer").text();
        answer3.push(A,B,C,D,CrAns);
        A = $("#Q4 .question-answer tr:first td:eq(1)").text();
        B = $("#Q4 .question-answer tr:first td:eq(2)").text();
        C = $("#Q4 .question-answer tr:first td:eq(3)").text();
        D = $("#Q4 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q4 .correctAnswer").text();
        answer4.push(A,B,C,D,CrAns);
        A = $("#Q5 .question-answer tr:first td:eq(1)").text();
        B = $("#Q5 .question-answer tr:first td:eq(2)").text();
        C = $("#Q5 .question-answer tr:first td:eq(3)").text();
        D = $("#Q5 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q5 .correctAnswer").text();
        answer5.push(A,B,C,D,CrAns);
        A = $("#Q6 .question-answer tr:first td:eq(1)").text();
        B = $("#Q6 .question-answer tr:first td:eq(2)").text();
        C = $("#Q6 .question-answer tr:first td:eq(3)").text();
        D = $("#Q6 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q6 .correctAnswer").text();
        answer6.push(A,B,C,D,CrAns);
        A = $("#Q7 .question-answer tr:first td:eq(1)").text();
        B = $("#Q7 .question-answer tr:first td:eq(2)").text();
        C = $("#Q7 .question-answer tr:first td:eq(3)").text();
        D = $("#Q7 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q7 .correctAnswer").text();
        answer7.push(A,B,C,D,CrAns);
        A = $("#Q8 .question-answer tr:first td:eq(1)").text();
        B = $("#Q8 .question-answer tr:first td:eq(2)").text();
        C = $("#Q8 .question-answer tr:first td:eq(3)").text();
        D = $("#Q8 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q8 .correctAnswer").text();
        answer8.push(A,B,C,D,CrAns);
        A = $("#Q9 .question-answer tr:first td:eq(1)").text();
        B = $("#Q9 .question-answer tr:first td:eq(2)").text();
        C = $("#Q9 .question-answer tr:first td:eq(3)").text();
        D = $("#Q9 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q9 .correctAnswer").text();
        answer9.push(A,B,C,D,CrAns);
        A = $("#Q10 .question-answer tr:first td:eq(1)").text();
        B = $("#Q10 .question-answer tr:first td:eq(2)").text();
        C = $("#Q10 .question-answer tr:first td:eq(3)").text();
        D = $("#Q10 .question-answer tr:first td:eq(4)").text();
        CrAns = $("#Q10 .correctAnswer").text();
        answer10.push(A,B,C,D,CrAns);

        questionnaire = {
            Q1 :{questionTitle:$question1,answer:answer1},
            Q2 :{questionTitle:$question2,answer:answer2},
            Q3 :{questionTitle:$question3,answer:answer3},
            Q4 :{questionTitle:$question4,answer:answer4},
            Q5 :{questionTitle:$question5,answer:answer5},
            Q6 :{questionTitle:$question6,answer:answer6},
            Q7 :{questionTitle:$question7,answer:answer7},
            Q8 :{questionTitle:$question8,answer:answer8},
            Q9 :{questionTitle:$question9,answer:answer9},
            Q10 :{questionTitle:$question10,answer:answer10}
        };
        questionnaire = JSON.stringify(questionnaire);
        $("#saveQuestionnaire").modal('show');
    });
    $('#saveQuestionnaire').on('click','#saveQues',function(){
        var $questionnaireName = $('#questionnaire-name').val();
        $("#saveQuestionnaire").modal('hide');
         window.location.href = "../home/home.html";
        // $.ajax({
        //     type: "POST",
        //     url: "",
        //     data: {
        //         questionnaire:questionnaire
        //     },
        //     success: function (data) {
        //        if(data ==='success'){
        //            alert("保存成功");
        //            //显示此调查问卷名
        //        }else{
        //
        //        }
        //     },
        //     error:function(){
        //
        //     }
        // });
    })
});