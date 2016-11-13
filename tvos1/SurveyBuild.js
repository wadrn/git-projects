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