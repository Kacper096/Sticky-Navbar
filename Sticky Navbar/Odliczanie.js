function leadingZero(element)
{
    
    if(element < 10) return element = "0" + element;
    return element;
}

const showCount = function() 
{
    const currentYear = (new Date).getFullYear();
    const month = 10;
    const day = 16;
    const dateToday = new Date();
    
    //rok dzień miesiac godzina minuta naszej daty ;)
    const importantDate = new Date(currentYear,month-1,day,0,0);
    
    //jeden dzien w milisekundach
    const msInDay = 24 * 60 * 60 * 1000;
    
    //różnica naszej daty do dziś (to jest to co chcemy odliczac w ms)
    const timeDiffrence = (importantDate.getTime() - dateToday.getTime());
    
    //ilosc dni która nam pozostała
    const eDaysToDate = timeDiffrence/msInDay;
    const daysToDate = Math.floor(eDaysToDate); // zaokrąglamy nasze dni, bo wyjdą z resztą 
    
    //musimy sprawdzić czy przez przypadek daysToDate nie będzie 0
    //poniewaz pozniej bedziemy przez to dzielić 
    
    if(daysToDate < 1)
        daysToDateFix = 1;
    else
        daysToDateFix = daysToDate;
    
    //ilosc godzin która nam pozostała
    const eHoursToDate = (eDaysToDate % daysToDateFix) * 24; 
    const hoursToDate = Math.floor(eHoursToDate);
    
    //ilość minut, która nam pozostała
    const eMinutesToDate = (eHoursToDate - hoursToDate) * 60;
    const minutesToDate = Math.floor(eMinutesToDate);
    
    //ilosc sekund, która nam pozostała
    const eSecondsToDate = (eMinutesToDate - minutesToDate) * 60;
    const secondsToDate = Math.floor(eSecondsToDate);
    
    
    const tekst = "Do moich urodzin pozostało: "
    +daysToDate + " dni, " 
    +hoursToDate + " godzin, "
    +minutesToDate + " minut i "
    +leadingZero(secondsToDate) + " sekund";
    
    const element = document.getElementById('test');
    
    //jeżeli czas się skończył
    const timeDiff = importantDate - dateToday;
    if(timeDiff < 0)
        element.innerHTML = "Dziś są Twoje urodziny. Wszystkiego Najlepszego !"
    else
        {
            element.innerHTML = tekst;
            
            setTimeout(function()
                       {
                showCount();
            },1000);
        }
}

showCount();