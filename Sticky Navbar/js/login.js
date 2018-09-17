/*Pobieram modalny box*/
var modal = document.getElementById('modal');

/*Pobieram buttona logowania*/
var login = document.getElementById('login');

/*Pobieram spana do zamkniecia modala*/
var span = document.getElementsByClassName('close')[0];

var navi = document.getElementsByClassName('navi');

/*Gdy klikniemy zaloguj pojawi się modal*/
login.onclick = function() {
    modal.style.display = "flex";
}

/*Gdy wcisniemy krzyzyk*/
span.onclick = function() {
    modal.style.display = "none";
    navi[navi.length - 1].classList.remove("active");
}

/*Kiedy użytkownik naciśnie obok modala*/
window.onclick = function(event) {
    if(event.target == modal)
        {
            navi[navi.length - 1].classList.remove("active");
            modal.style.display = "none";
        }
}

