<?php
include 'conn/db.php';

$idregion = $_POST['idregion'];
 
$query="SELECT comuna_id, nombre_comuna FROM comunas where region_id = $idregion ORDER BY comuna_id";
$result = mysqli_query($conn, $query);


while (($fila = mysqli_fetch_array($result)) != NULL) {
    echo '<option value="'.$fila["comuna_id"].'">'.$fila["nombre_comuna"].'</option>';
}

mysqli_free_result($result);

?>