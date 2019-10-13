var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPoints, floatMidPoints, floatFinPoints, floatTotalPoints, intGradeOption, stringFinalGrade;

    floatHwPoints = parseFloat($("hw_points").value);
    floatMidPoints = parseFloat($("mid_points").value);
    floatFinPoints = parseFloat($("fin_points").value);
    floatTotalPoints = parseFloat(floatHwPoints+floatMidPoints+floatFinPoints);
    intGradeOption = parseInt($("grade_option").value);
    if (intGradeOption===1)
{
        if (floatTotalPoints>=80)
        {
            stringFinalGrade="Pass";
        }
        else
        {
            stringFinalGrade="Fail";
        }
    }
   else
   {
    if (floatTotalPoints>=90)
    {
        stringFinalGrade="A";
    }
    else
    {
        if (floatTotalPoints>=80 && floatTotalPoints<90)
        {
            stringFinalGrade="B";
        }
      else
      {
        if (floatTotalPoints>=70 && floatTotalPoints<80)
        {
            stringFinalGrade="C";
        }
        else
        {
            if (floatTotalPoints>=60 && floatTotalPoints<70)
            {
                stringFinalGrade="D";
            }
            else
            {
                if (floatTotalPoints<=59.5)
                {
                    stringFinalGrade="F";
                }
            }
        }
      }
    }
   }
                    $("final_grade").value=stringFinalGrade;
};


window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};