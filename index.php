<html>
<head>
<title>Stick Run</title>
<link rel="stylesheet" href="css/main.css" type="text/css" media="">
<link href="https://fonts.googleapis.com/css?family=Patrick+Hand" rel="stylesheet">
</head>
<body>
<div id="borde"></div>
<div id="contenedor">
	
<?php
	
	if(isset($_GET["PAG"]))
	{

		switch($_GET["PAG"])
		{
			default:
			include "modules/main.php";
			break;
		}

	}else{
		include "modules/main.php";
	}

?>

</div>
<footer>
<center><p>Stick Run made in Canvas by <a href="https://github.com/FrancoPrime">FrancoPrime</a></p></center></footer>
<script src="js/main.js"></script>
<script src="js/inicio.js"></script>
<script src="js/variables.js"></script>
</body>
</html>