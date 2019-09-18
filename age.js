var floatAge, floatDays, intWeeks,floatMonths,intFortnights ;
     floatAge = parseFloat(prompt("Enter age "));
     floatDays = parseFloat (floatAge*365.25).toFixed(2);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     alert( "you are :" + floatAge + floatDays + intWeeks + floatMonths + intFortnights);
     