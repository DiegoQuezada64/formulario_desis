<?php
include "conn/db.php";

$nombre_apellido = $_POST['nombre_apellido'];
$alias = $_POST['alias'];
$rut = $_POST['rut'];
$email = $_POST['email'];
$region = $_POST['region'];
$comuna = $_POST['comuna'];
$candidato = $_POST['candidato'];
$web = $_POST['web'];
$tv = $_POST['tv'];
$redes = $_POST['redes'];
$amigo = $_POST['amigo'];


$mensaje = '';
$querySelect = "SELECT rut FROM votante where rut = '$rut'";
$tempContador = mysqli_num_rows(mysqli_query($conn, $querySelect));

if($tempContador == 0){
    $queryInsert="INSERT INTO votante (nombre_apellido, alias, rut, email, region, comuna, candidato, web, tv, redes, amigo) VALUES ('$nombre_apellido','$alias','$rut','$email','$region','$comuna','$candidato',$web, $tv, $redes, $amigo)";

    $return = mysqli_query($conn, $queryInsert);
    
    if(!$return){
        $mensaje  = 'Error de insert: '.'el voto no se ha ingresado al sistema';
    }
    else{
        $mensaje = '';
        $mensaje = 'voto enviado correctamente!';
    }

    echo $mensaje;
}else{
    $mensaje = 'Error encontrado, el Rut ya esta REGISTRADO';
    echo $mensaje;
}
?>