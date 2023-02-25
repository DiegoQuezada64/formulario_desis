*VERISON PHP: 8.2.0. *VERISON APACHE: Apache/2.4.54 (Win64) OpenSSL/1.1.1p PHP/8.2.0. *VERSION XAMPP: Ultima Estable = PHP 8.2.0. *VERSION MYSQL = Ultima estable instalada junto con WorkBench = MYSQL80. *VERSION JQUERY: jQuery 3.6.3.

--PASOS DE INSTALACION--

1.- Debe contar con la ultima version estable de XAMMP, en su defecto, se debe descargar e instalar la ultima version estable de XAMMP (dependencias marcadas por defecto).

2.- Debe contar con la version de MySQL8.0 comunity version, en su defecto, se debe descargar e instalar MySQL8.0 Comunity Version asi como los dbc y Workbench.

3.-Una vez con los programas requeridos instalados en su sistema, debe iniciar el panel de control de XAMMP para ejecutar APACHE.

4.- Se debe iniciar MySQL Workbench e iniciar localhost con las variables de administrador ingresadas en el proceso de instalacion (configuracion local username:"root", password:"sasa").

5.- Ejecutar las querys en el siguiente orden: "tablas_formulario.sql" > "regiones.sql" > "comunas.sql" > "candidatos.sql" (en "comunas.sql" se debe seguir las instrucciones indicadas, esto para ejecutar "trim" y eliminar los valores en blanco)

--Estructura del proyecto--

-conn: carpeta donde se encuentra el archivo "db.php", el cual tiene la funcion de conectar el proyecto con la base de datos.

-css: carpeta donde se encuentran los archivos de diseño.

-js: carpeta donde se encuentran los archivos .js.

-sql: carpeta donde se encuentran los archivos .sql.

-raiz: carpeta principal del proyecto.