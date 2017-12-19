var inicio = {

	iniciar: function(){

		document.querySelector("#inicio").style.display = "none";
		document.querySelector("#contador").style.display = "block";
		document.querySelector("#puntaje").style.display = "block";
		document.querySelector("#puntajefinal").style.display = "none";

		/*=============================================
		CARGA DE IMÁGENES
		=============================================*/

		info.back = new Image();
		info.box = new Image();
		info.fall = new Image();
		info.idle = new Image();
		info.jump = new Image();
		info.run = new Image();
		info.crouched = new Image();
		info.trampa = new Image();

		info.back.src = "img/back.png";
		info.box.src = "img/box.png";
		info.fall.src = "img/fall.png";
		info.idle.src = "img/idle.png";
		info.jump.src = "img/jump.png";
		info.run.src = "img/run.png";
		info.crouched.src = "img/crouched.png";
		info.x=40;
		info.y=240;
		info.spritex=0;
		info.spritey=0;
		info.spritealto=180;
		info.spriteancho=100;
		info.inicio= 3;
		info.avance= 0;
		info.saltando= 0;
		info.agachado= 0;
		info.ciclosprite= 0;
		info.trampax= -1;
		info.trampay= -1;
		info.trampaancho= -1;
		info.trampaalto= -1;
		info.velocidad= 10;
		info.puntaje= -100;
		info.imgjugador = info.idle;
		juego.teclado();
		juego.tiempo();

	}
}