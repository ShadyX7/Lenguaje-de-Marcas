function validar(miformulario)
{ //validación del nombre
if (document.miformulario.nombre.value.length==0)
	{alert("Tiene que escribir su nombre"); //nombre incorrecto
	document.miformulario.nombre.focus();   //Se queda el foco
	return 0; // sale de la función sin enviar el formulario
	}
	
//validación de la edad
if (document.miformulario.edad.value<=18)
	{alert("Tiene que escribir la edad>18."); //edad incorrecta
	document.miformulario.edad.focus(); //Se queda el foco
	
return 0; //sale de la función sin enviar el formulario
}
//el formulario se enviar 
alert("Muchas gracias por enviar el formulario");
document.miformulario.submit(); //envia formulario a action
}
