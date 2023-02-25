<?php
include 'conn/db.php';

 
$query="SELECT region_id, nombre_region FROM regiones ORDER BY region_id";
$result = mysqli_query($conn, $query);


while (($fila = mysqli_fetch_array($result)) != NULL) {
    echo '<option value="'.$fila["region_id"].'">'.$fila["nombre_region"].'</option>';
}

mysqli_free_result($result);

?>