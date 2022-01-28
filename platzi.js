//var z;
/* for (var i = 0; i < 10; i++) {
 z= aleatorio(1, 5);
 if (i<9)
 {
 document.write(z + " ,");
 }
 else
 document.write(z);
}
*/

var vp=document.getElementById('villaplatzi');
var papel=vp.getContext("2d");

var teclas = { UP: 38, DOWN: 40, LEFT: 37 , RIGHT: 39 };
document.addEventListener("keydown", moverCerdo);

var vaca = {url: "vaca.png", cargaOK:false, posicion:{x:[], y:[]} };
vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);
const vacax=[], vacay=[];

var pollo = {url: "pollo.png", cargaOK:false, posicion:{x:[], y:[]} };
pollo.imagen = new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

var cerdo = {url: "cerdo.png", cargaOK:false, x:0, y:0};
cerdo.imagen = new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

var fondo = {url: "tile.png", cargaOK:false};
fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

var cantidad=aleatorio(0,25);


function cargarFondo()
{
  fondo.cargaOK=true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK=true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK=true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK=true;
}

function dibujar()
{
  if (fondo.cargaOK==true)
  {
  papel.drawImage(fondo.imagen, 0,0);
  }

  if (vaca.cargaOK)
  {

    for (var v = 0; v<cantidad; v++)
    {
        vaca.posicion.x[v]=aleatorio(0,5)*60;
        vaca.posicion.y[v]=aleatorio(0,5)*60;
      papel.drawImage(vaca.imagen, vaca.posicion.x[v], vaca.posicion.y[v]);
    }
  }

  if (pollo.cargaOK)
  {
    for (var v = 0; v <cantidad; v++)
    {
      pollo.posicion.x[v]=aleatorio(0,5)*60;
      pollo.posicion.y[v]=aleatorio(0,5)*60;
    papel.drawImage(pollo.imagen, pollo.posicion.x[v], pollo.posicion.y[v]);
    }
  }

    if (cerdo.cargaOK)
    {
      cerdo.x=aleatorio(0,5)*60;
      cerdo.y=aleatorio(0,5)*60;
      papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
    }
}

function moverCerdo(evento)
{

  var movimiento = 5;
switch (evento.keyCode) {
        case teclas.UP:
        refreshcerdo();
          papel.drawImage(fondo.imagen, 0,0);
          for (var v = 0; v<cantidad; v++)
          {
            papel.drawImage(vaca.imagen, vaca.posicion.x[v], vaca.posicion.y[v]);
            papel.drawImage(pollo.imagen, pollo.posicion.x[v], pollo.posicion.y[v]);
          }
            papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y-movimiento);
            cerdo.y = cerdo.y-movimiento;
          break;
        case teclas.DOWN:
        refreshcerdo();
          papel.drawImage(fondo.imagen, 0,0);
          for (var v = 0; v<cantidad; v++)
          {
            papel.drawImage(vaca.imagen, vaca.posicion.x[v], vaca.posicion.y[v]);
            papel.drawImage(pollo.imagen, pollo.posicion.x[v], pollo.posicion.y[v]);
          }
              papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y+movimiento);
            cerdo.y =  cerdo.y+movimiento;
          break;
        case teclas.LEFT:
        refreshcerdo();
          papel.drawImage(fondo.imagen, 0,0);
          for (var v = 0; v<cantidad; v++)
          {
            papel.drawImage(vaca.imagen, vaca.posicion.x[v], vaca.posicion.y[v]);
            papel.drawImage(pollo.imagen, pollo.posicion.x[v], pollo.posicion.y[v]);
          }
          papel.drawImage(cerdo.imagen, cerdo.x-movimiento, cerdo.y);
            cerdo.x= cerdo.x-movimiento;
          break;
        case teclas.RIGHT:
        refreshcerdo();
          papel.drawImage(fondo.imagen, 0,0);
          for (var v = 0; v<cantidad; v++)
          {
            papel.drawImage(vaca.imagen, vaca.posicion.x[v], vaca.posicion.y[v]);
            papel.drawImage(pollo.imagen, pollo.posicion.x[v], pollo.posicion.y[v]);
          }
        papel.drawImage(cerdo.imagen, cerdo.x+movimiento, cerdo.y);
          cerdo.x= cerdo.x+movimiento;
          break;
        default:
          console.log("presiona algo bueno!!");
        break;
        }

 }

 function refreshcerdo(){
  papel.clearRect(0,0, vp.width, vp.height);
  }

function aleatorio (min, max)
{
  var resultado;
  resultado= Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
  }
