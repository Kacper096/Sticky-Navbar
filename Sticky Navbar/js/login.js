window.onload = function()
{
   var currentNavi = actActive();
    


/*Pobieram modalny box*/
var modal = document.getElementById('modal');

/*Pobieram buttona logowania*/
var login = document.getElementById('login');

/*Pobieram spana do zamkniecia modala*/
var span = document.getElementsByClassName('close')[0];

var navi = document.getElementsByClassName('navi');

login.addEventListener("mousedown",function(){
    currentNavi = actActive();
})
/*Gdy klikniemy zaloguj pojawi się modal*/
login.onclick = function() {
    modal.style.display = "flex";
    currentNavi.classList.remove('active');
}

/*Gdy wcisniemy krzyzyk*/
span.onclick = function() {
    modal.style.display = "none";
    navi[navi.length - 1].classList.remove("active");
    currentNavi.classList.add('active');
}

/*Kiedy użytkownik naciśnie obok modala*/
window.onclick = function(event) {
    if(event.target == modal)
        {
            navi[navi.length - 1].classList.remove("active");
            modal.style.display = "none";
            currentNavi.classList.add('active');
            
        }
    }
}
/*Funkcja aktualna nawigacja klasy active*/
function actActive()
{
    var i = 0;
    var actNavi = document.body.getElementsByClassName('active')[0].parentNode.parentNode.parentNode.children;
    

    for(i; i < actNavi.length;i++)
        {
            var current = actNavi[i].firstChild.firstChild.classList.contains('active');
           if(current)
               {
                   return actNavi[i].firstChild.firstChild;
                   break;
               }
        }
}

