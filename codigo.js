$('#suma').click(function(){
		
		var n1=$('#dato1').val();
		var n2=$('#dato2').val();
		var datos={'num1':n1,'num2':n2};
		console.log(datos);
		$.ajax({
			url:'suma.php',
			type:'POST',
			data:datos
		}).done(function(respuesta){
			console.log(respuesta);
			$('#resultado').val(respuesta);
		});
	});

	
	$("#resta").click(function(){

		var n1=$('#dato1').val();
		var n2=$('#dato2').val();
		var datos={'num1':n1,'num2':n2};
		console.log(datos);
		$.ajax({
			url:'resta.php',
			type:'POST',
			data:datos
		}).done(function(respuesta){
			console.log(respuesta);
			$('#resultado').val(respuesta);
		});
	});

	$("#multiplicacion").click(function(){

		var n1=$('#dato1').val();
		var n2=$('#dato2').val();
		var datos={'num1':n1,'num2':n2};
		console.log(datos);
		$.ajax({
			url:'producto.php',
			type:'POST',
			data:datos
		}).done(function(respuesta){
			console.log(respuesta);
			$('#resultado').val(respuesta);
		});
	});



	$("#divicion").click(function(){

		var n1=$('#dato1').val();
		var n2=$('#dato2').val();
		var datos={'num1':n1,'num2':n2};
		console.log(datos);
		$.ajax({
			url:'division.php',
			type:'POST',
			data:datos
		}).done(function(respuesta){
			console.log(respuesta);
			$('#resultado').val(respuesta);
		});
	});




