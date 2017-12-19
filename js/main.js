var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');
var countframes = 0;
var countframesa = 0;
var esperasalto = 0;
var numtrampa = 0;
var findeljuego = 0;
//fondo

var juego = {

	canvas: function()
	{
		// Borrar
		ctx.clearRect(0,0,canvas.width,canvas.height);
		// Fondo
		var grd=ctx.createLinearGradient(0,0,0,canvas.height);
		grd.addColorStop(0,"orange");
		grd.addColorStop(1,"white");
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,canvas.width,canvas.height);
		//Suelo
		ctx.fillStyle="grey";
		ctx.fillRect(0,400,600,50);
		//grafica trampas
		if(info.trampa != null)
		{
		ctx.drawImage(info.trampa, info.trampax-info.avance, info.trampay, info.trampaancho, info.trampaalto);}
		//Jugador
		ctx.drawImage(info.imgjugador, info.spritex, info.spritey, info.spriteancho, info.spritealto, info.x, info.y, info.spriteancho, info.spritealto);
	},

	fin: function(){
		findeljuego = 1;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var grd=ctx.createLinearGradient(0,0,0,canvas.height);
		grd.addColorStop(0,"orange");
		grd.addColorStop(1,"white");
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,canvas.width,canvas.height);
		document.querySelector("#puntaje").style.display = "none";
		document.querySelector("#puntajefinal").style.display = "block";
		document.querySelector('b.puntf').innerHTML = info.puntaje.toString();
	},

	teclado: function(){

		document.addEventListener("keydown", juego.oprimir)
		document.addEventListener("keyup", juego.soltar)

	},

	oprimir: function(tecla){
		tecla.preventDefault();
		if(info.saltando == 0 && esperasalto == 0){
		if(tecla.keyCode == 38){info.saltando = 1; info.ciclosprite = 0}}
		if(tecla.keyCode == 40){info.agachado = 1;}

	},

	soltar: function(tecla){

		tecla.preventDefault();
		if(tecla.keyCode == 40){info.agachado = 0;}

	},

	tiempo: function()
	{
		findeljuego = 0;
		juego.canvas();//Grafica el Canvas
		switch(numtrampa)//Verifica que no este colisionando
		{
			case 1:
				if((info.x + info.spriteancho >= info.trampax-info.avance) && info.x <= info.trampax-info.avance+info.trampaancho)
				{
					if(info.y+info.spritealto >= info.trampay)
					{
						juego.fin();
					}
				}
			break;
			case 2:
				if((info.x + info.spriteancho >= info.trampax-info.avance) && info.x <= info.trampax-info.avance+info.trampaancho)
				{
					if((info.y+info.spritealto >= info.trampay) && info.y <= info.trampay+info.trampaalto)
					{
						juego.fin();
					}
				}
			break;
			case 3:
				if((info.x + info.spriteancho >= info.trampax-info.avance) && info.x <= info.trampax-info.avance+info.trampaancho)
				{
					if(info.y <= info.trampay+info.trampaalto)
					{
						juego.fin();
					}
				}
			break;
		}
		if((info.trampax - info.avance) < -50)//Crea una trampa nueva en caso de que haya pasado la anterior
		{	
			numtrampa = Math.floor((Math.random() * 3) + 1);
			switch(numtrampa)
			{
				case 1:
				info.trampa.src = info.box.src;
				info.trampax = info.avance + 600;
				info.trampay = 298;
				info.trampaancho = 51;
				info.trampaalto = 102;
				break;
				case 2:
				info.trampa.src = info.box.src;
				info.trampax = info.avance + 600;
				info.trampay = 298;
				info.trampaancho = 153;
				info.trampaalto = 51;
				break;
				case 3:
				info.trampa.src = info.box.src;
				info.trampax = info.avance + 600;
				info.trampay = 0;
				info.trampaancho = 51;
				info.trampaalto = 350;
				break;
			}
			info.velocidad++;
			info.puntaje += 100;
			document.querySelector('b.punt').innerHTML = info.puntaje.toString();
		}
		if(info.inicio < 0)//Si ya comenzó el juego
		{
			if(info.saltando == 0 && info.agachado == 0){//Si esta corriendo
				info.imgjugador.src = info.run.src;
				info.spritealto = 180;
				info.spriteancho = 100;
				info.x = 40;
				info.y = 240;
				if(countframes > 10){
					if(info.ciclosprite > 1){info.ciclosprite = 0;}else{info.ciclosprite +=1;}
					countframes = 0;
					esperasalto = 0;
				}
				switch(info.ciclosprite)
					{
						case 0:
						info.spritex = 0;
						break;
						case 1:
						info.spritex = 100;
						break;
						case 2:
						info.spritex = 200;
						break;
					}
			}
			else if(info.agachado == 0)//Si esta saltando
			{
				info.spritealto = 120;
				info.spriteancho = 107;
				info.imgjugador.src = info.jump.src;
				info.x = 40;
				info.y = 175;
				if(countframes > 12){
					if(info.ciclosprite == 3){info.saltando = 0;esperasalto=1;info.ciclosprite=0;}else{info.ciclosprite +=1;}
					countframes = 0;
				}
				switch(info.ciclosprite)
					{
						case 0:
						info.spritex = 0;
						break;
						case 1:
						info.spritex = 107;
						break;
						case 2:
						info.spritex = 214;
						break;
						case 3:
						info.spritex = 321;
						break;
					}
			}
			else//Si esta agachado
			{
				info.spritex = 0;
				info.spritey = 0;
				info.spritealto = 55;
				info.spriteancho = 215;
				info.x = 40;
				info.y = 360;
				info.imgjugador.src = info.crouched.src;
			}
			if(countframesa > 1)
			{
				countframesa = 0;
				info.avance += info.velocidad;
			}
		}

		if(info.inicio > -1)//Contador
		{
			if(countframesa > 60)
			{
				countframesa = 0;
				info.inicio -= 1;
			}
			if(info.inicio < 1)
			{
				document.querySelector('p').innerHTML = "Go!";
			}
			else
			{
			document.querySelector('p').innerHTML = info.inicio.toString();
			}
		}
		else if(info.inicio == -1)
		{
			info.inicio == -2;
			document.querySelector('#contador').style.display = "none";
		}
		countframesa++;
		countframes++;
		if(!findeljuego){animacion = frame(juego.tiempo);}
	}

}