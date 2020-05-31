  var slideIndex = 1;
  var score = 0;
  var result = ["4", "3", "2", "3", "2"];

  showDivs(slideIndex);

  function plusDivs(n)
  {
    showDivs(slideIndex += n);
  }

  function currentDiv(n)
  {
    showDivs(slideIndex = n);
  }

  function showDivs(n)
  {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dem");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}

    if (n == x.length) document.querySelector('#submitQuiz').style.display = "block";

    var s = document.querySelector("#questionNum").innerHTML;
    s = s.toString().slice(0,-1);
    document.querySelector("#questionNum").innerHTML = s + slideIndex.toString();

    for (i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
      dots[i].className = dots[i].className.replace(" dot-current_quiz", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-current_quiz";
  }

  function radioClicked()
  {
    var i, j;
    var selectedArr = [];
    var dots = document.getElementsByClassName("dem");
    for (i = 1; i <= dots.length; i++)
    {
      dots[i-1].className = dots[i-1].className.replace(" dot-selected_quiz", "");
      var questionNumber = "radio-input" + i.toString();
      var option = document.getElementsByClassName(questionNumber);
      for(j = 1; j <= option.length; j++)
      {
        var optionId = "myRadio" + i.toString() + j.toString();
        if(document.getElementById(optionId).checked)
        {
          var selected = document.getElementById(optionId).value;
          selectedArr.push(i);
          break;
        }
      }
    }
    for (i = 0; i < selectedArr.length; i++)
    {
      var idx = selectedArr[i] - 1;
      dots[idx].className += " dot-selected_quiz";
    }
    showDivs(slideIndex = n);
  }

  var s= "";

  function getScore()
  {
    score = 0
    var selectedArr = [];
    var dots = document.getElementsByClassName("dem");
    var scoreDisplay = document.querySelector('#finalScore');
    for (i = 1; i <= dots.length; i++)
    {
      var questionNumber = "radio-input" + i.toString();
      var option = document.getElementsByClassName(questionNumber);
      for(j = 1; j <= option.length; j++)
      {
        var optionId = "myRadio" + i.toString() + j.toString();
        if(document.getElementById(optionId).checked)
        {
          var selected = document.getElementById(optionId).value;
          selectedArr.push(i);
          if (selected === result[i-1])
          {
            score = score + 1;
            break;
          }
        }
      }
    }
    s = scoreDisplay.innerHTML;
    scoreDisplay.innerHTML = s + score.toString() + " / " + dots.length.toString();
    console.log(score);
  }

  function resetModal(x)
  {
    document.querySelector('#finalScore').innerHTML = s;
    if (x == "retake")
      document.location = "quiz.html";
    else if (x == "home")
      document.location = "index.html";
  }
