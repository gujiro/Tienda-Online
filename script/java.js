


function subtotal() {

	var resultadopan;
	var cantidadpan = document.getElementById("panqty").value;
	var valorpan = document.getElementById("val_pan").value;
	resultadopan = cantidadpan * valorpan;

	var resultadoleche;
	var cantidadleche = document.getElementById("lecheqty").value;
	var valorleche = document.getElementById("val_leche").value;
	resultadoleche = cantidadleche * valorleche;

	var resultadohuevos;
	var cantidadhuevo = document.getElementById("huevosqty").value;
	var valorhuevo = document.getElementById("val_huevos").value;
	resultadohuevos = cantidadhuevo * valorhuevo;

	var resultado1 = resultadopan + resultadoleche + resultadohuevos;
	document.getElementById("subtotal1").value = resultado1;

	var resultadojabon;
	var cantidadjabon = document.getElementById("jabonqty").value;
	var valorjabon = document.getElementById("val_jabon").value;
	resultadojabon = cantidadjabon * valorjabon;

	var resultadoshampoo;
	var cantidadshampoo = document.getElementById("shampooqty").value;
	var valorshampoo = document.getElementById("val_shampoo").value;
	resultadoshampoo = cantidadshampoo * valorshampoo;

	var resultadocrema;
	var cantidadcrema = document.getElementById("cremaqty").value;
	var valorcrema = document.getElementById("val_crema").value;
	resultadocrema = cantidadcrema * valorcrema;

	var resultado2 = resultadojabon + resultadoshampoo + resultadocrema;
	document.getElementById("subtotal2").value = resultado2;

	var iva1 = document.getElementById("valiva1").value;
	var iva2 = document.getElementById("valiva2").value;


	resiva = iva(resultado1, iva1);
	document.getElementById("iva1").value = resiva;

	//iva(resultadopan, iva2);
	resiva2 = iva(resultado2, iva2);
	document.getElementById("iva2").value = resiva2;

	var sumsubtotal = resultado1 + resultado2;
	document.getElementById("subtotalfinal").value = sumsubtotal;

	var ivafinal =	resiva + resiva2;
	document.getElementById("ivafinal").value = ivafinal;

	var total1 = sumsubtotal + ivafinal;
	document.getElementById("total").value = total1;
}

// Funcion de IVA
function iva(numero1, numero2) {

	var resultadoiva = numero1 * numero2;
	return resultadoiva;

}
