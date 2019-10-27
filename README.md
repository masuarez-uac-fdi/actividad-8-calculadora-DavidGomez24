# fdi-its-diseno-web-actividad-8-calculadora
Repositorio Base para la Actividad 8 de la Materia DISEÑO WEB (001028-1149-16) FI.ITS

<b>Objetivo</b>.- Implementar una calculadora con las operaciones aritméticas básicas (suma, resta, producto y división) por medio de HTML, PHP y AJAX.

<b>Estructura del Repositorio Base</b>.- un archivo HTML (calculadora.html) y cuatro archivos PHP (suma.php, resta.php, producto.php, division.php). 
<ul>
  <li>calculadora.html.- diseño de la interfaz de usuario.</li>
  <li>suma.php.- implementación de la operación de suma.</li>
  <li>resta.php.- implementación de la operación de resta.</li>
  <li>producto.php.- implementación de la operación producto.</li>
  <li>division.php.- implementación de la operación división.</li>
</ul>

<b>Instrucciones</b>.-
<ol>
  <li>La página HTML debe contener un diseño básico de dos cuadros de texto que sirvan para la entrada de dos operandos numéricos, cuatro botones, uno por operación aritmética y un cuadro de texto de sólo lectura que se utilice para mostrar la respuesta al usuario.</li>
  <li>Cada botón de la interfaz de usuario debe corresponderse con una operación aritmética básica y en su evento "onclick" se debe implementar una función JavaScript como respuesta.</li>
  <li>Cada función JavaScript de respuesta debe realizar una petición AJAX a su script PHP que implemente la correspondiente operación aritmética.</li>
  <li>Cada script PHP debe recibir los parámetros numéricos como entrada, realizar la operación y devolver el resultado a su petición AJAX la cuál debe desplegarlo en el cuadro de texto especificado para ello en la página HTML.</li>
</ol>

<b>Opcional</b>.- puede agregar al proyecto una hoja de estilo CSS para darle diseño a la página y un archivo externo JS para la separación de conceptos.
