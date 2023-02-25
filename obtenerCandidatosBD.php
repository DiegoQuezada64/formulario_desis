<?php
include 'conn/db.php';

 
$query="SELECT candidato_id, nombre_candidato FROM candidato ORDER BY candidato_id";
$result = mysqli_query($conn, $query);


while (($fila = mysqli_fetch_array($result)) != NULL) {
    echo '<option value="'.$fila["candidato_id"].'">'.$fila["nombre_candidato"].'</option>';
}

mysqli_free_result($result);

?>