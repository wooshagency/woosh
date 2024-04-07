<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NJGames Library</title>
    <link rel="stylesheet" href="css-info/estilos-info.css">
</head>
<body>
    <?php
        $to = "wooshdesignanddev@gmail.com";
        $subject = "Mail desde el formulario";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" .
        "\r\n";
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $mensaje = $_POST['mensaje'];
        $message = "
        <html>
        <head>
        <title>HTML</title>
        </head>
        <body>
        <h1>Información del formulario</h1>
        <p>Nombre: $nombre </p>
        <p>Email: $email </p>
        <p>Consulta: $mensaje </p>
        </body>
        </html>";
        echo 'Gracias por comunicarse con nosotros';
        mail($to, $subject, $message, $headers);
        ?>
    </body>
</html>