<?php // Implementación de la operación producto
header('Content-Type: applicacion/json');
$num1=floatval($_POST["num1"]);
$num2=floatval($_POST["num2"]);
$resultado = $num1*$num2;
echo json_encode($resultado,JSON_FORCE_OBJECT);


?>