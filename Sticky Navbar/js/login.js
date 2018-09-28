window.onload = function()
{
   var currentNavi = actActive();


/*Pobieram modalny box*/
var modal = document.getElementById('modal');
/*Pobieram buttona logowania*/
var login = document.getElementById('login');

/*Pobieram spana do zamkniecia modala*/
var span = document.getElementsByClassName('close')[0];

/*Pobieram, aby później usunąć klasę active*/
var navi = document.getElementsByClassName('navi');

/*Pobieram downArrow, aby go pojawić kiedy zamknę modal-box'a*/
var downArrow = document.getElementsByClassName('downArrow');

var arrow = isAlive(downArrow);

/*Gdy najedziemy na login sprawdzamy czy jest aktualna klasa active*/
login.addEventListener("mousedown",function(){
    currentNavi = actActive();
    arrow = isAlive(downArrow);
})
/*Gdy klikniemy zaloguj pojawi się modal*/
login.onclick = function() {
    modal.style.display = "flex";
    currentNavi.classList.remove('active');
}

/*Gdy wcisniemy krzyzyk*/
span.onclick = function() {
    createDownArrow(arrow);
    modal.style.display = "none";
    navi[navi.length - 1].classList.remove("active");
    currentNavi.classList.add('active');
}

/*Kiedy użytkownik naciśnie obok modala*/
window.onclick = function(event) {
    if(event.target == modal)
        {
            createDownArrow(arrow);
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
/*Funkcja sprawdza czy obiekt downArrow istniał*/
function isAlive(elementArr)
{
    if(elementArr.length)
        {
            return elementArr;
        }
}
/*Funkcja tworzenia obiektu downArrow*/
function createDownArrow(elementArr)
{
    
    if((elementArr != undefined) && !(elementArr.length))
    {
        const element = document.createElement('span');
        element.classList.add('downArrow');
        document.querySelector('body').appendChild(element);
    }
    
}

