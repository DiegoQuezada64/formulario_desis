<?php ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <title>Formulario</title>
</head>
<body>
    <div class="container">
        <div class="formulario">
            <form action="post" id="form">
            <h1>Formulario de Votación</h1>
                <label for="name_apellido"> Nombre y Apellido </label>
                <input type="text" id="nombre_apellido" name="nombre_apellido" placeholder="Indique su nombre y apellido."><br>

                <label for="alias"> Alias </label>
                <input type="text" id="alias" name="alias" placeholder="Indique su alias"><br>

                <label for="rut"> RUT </label>
                <input type="text" id="rut" name="rut" placeholder="Indique su Rut"><br>

                <label for="email"> Email </label>
                <input type="email" id="email" name="email" placeholder="Indique su Email"><br>

                <label for="regiones"> Región </label>
                <select id="regiones"></select><br>

                <label for="comunas"> Comuna </label>
                <select id="comunas"></select><br>

                <label for="candidato">Candidato</label>
                <select id="candidato"></select><br>

                <label for="info">Como se entero de Nosotros</label><br>
                <input type="checkbox" id="web" name="info" value="web">
                <label for="web">Web</label>
                <input type="checkbox" id="tv" name="info" value="tv">
                <label for="tv">TV</label>
                <input type="checkbox" id="redes" name="info" value="redes">
                <label for="redes">Redes Sociales</label>
                <input type="checkbox" id="amigo" name="info" value="amigo">
                <label for="amigo">Amigo</label><br>
                <br>
                <input type="submit" value="submit" id="submit">
            </form>
        </div>
    </div>
</body>
</html>