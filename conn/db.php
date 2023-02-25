<?php 
$server = "localhost";
$user = "root";
$pass = "sasa";
$db = "formulario_desis";

$conn = mysqli_connect($server,$user,$pass,$db);

if(isset($conn)){
    echo "Proceso realizado, ";
}
?>