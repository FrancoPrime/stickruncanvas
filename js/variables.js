var frame = window.requestAnimationFrame || 
		    window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;

var animacion;

var canvas;
var ctx;

var info = {
	x:40,
	y:240,
	spritex:0,
	spritey:0,
	spritealto:180,
	spriteancho:100,
	back: null,
	box: null,
	fall: null,
	idle: null,
	jump: null,
	run: null,
	crouched: null,
	inicio: 3,
	avance: 0,
	imgjugador: null,
	saltando: 0,
	agachado: 0,
	ciclosprite: 0,
	trampa: null,
	trampax: -1,
	trampay: -1,
	trampaancho: -1,
	trampaalto: -1,
	velocidad: 10,
	puntaje: -100
}