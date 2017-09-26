/*
calcular sueldo semanal de un trabajador, con base a las horas 
que trabaja.
Ej: Carol gana 10000 poe hora y
trabaja 20 horas a la semana
20000
Operacion sueldo * horas
20 * 10000
*/


function salaryweek (hours,payment) {
	return hours*payment;
}


function salaryweek (hours,payment){
var salary= hours* payment;
return salary;
}


/*
calcular la cantidad de digitos de un número,
por eje: 1986, debera retornar 4 
Definicion de ejercicio generico
*/

function numberOfDigits(number){
	var counter=0;
	var digits= number.toString();

	for(var i=0; i<digits.length; i++){
	counter++;
		
	}
	return counter;
}

//i+=2 --->i=i+2
// i++ ---> i=i+1

//Palabras Palindromas
function palindrome(word){
 var long=word.length;	
for(var i=0; i<word.length;i++)	{
	if(word[i] !=word[long-1-i]){
   return false;
	}
  }
  return true;
}
