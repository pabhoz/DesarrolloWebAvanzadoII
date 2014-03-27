<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <title>Ejemplo de formulario</title>
        <link rel="stylesheet" href="css/stylesheet.css"/>
        <script src="js/src.js"></script>
    </head>
    <body>

        <form name="formulario" action="procesar.php" method="post" enctype="" autocomplete="off">
            <input name="texto" type="text" placeholder="Esto es un placeholder">
            <input name="password" type="password">
            <input name="number" type="number" required>
            <input name="date" type="date">
            <input name="color" type="file">
            <input name="enviar" type="submit">
        </form>

    </body>
</html>