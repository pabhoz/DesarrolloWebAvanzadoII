<html>
	<head>
		<?php $charset = "utf-8"; ?>
		<title>Ejemplo PHP</title>
		<meta charset="<?php echo $charset; ?>">
	</head>
	<body>
		<?php 
			$a = 200;

			for ($i=0; $i <$a ; $i++) { 
				echo $i."</br>";
			}
		?>
	</body>
</html>