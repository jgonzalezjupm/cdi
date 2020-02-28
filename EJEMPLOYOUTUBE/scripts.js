var nav = document.querySelector("nav");
var boton = document.querySelector(".icono");

var estadoMenu = false;

boton.addEventListener("click",menu);

function menu()
{
	if(!estadoMenu)
		nav.style.width = "260px";
	else
		nav.style.width = "100px";
	estadoMenu = !estadoMenu;
}