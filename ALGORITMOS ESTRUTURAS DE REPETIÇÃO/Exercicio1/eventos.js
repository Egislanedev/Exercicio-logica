// Desenvolver um algoritmo que efetue a soma de todos os numeros impares que sao multiplos de
// tres e que se encontram no conjunto dos numeros de 1 ate 500.
  
  
  soma = 0;
 
 for (numero = 1; numero < 500; numero++) {  

    if (numero % 2 != 0) {

      if (numero % 3 == 0) {

        soma = soma + numero;

      }

    }

  }
  document.write ("O resultado da soma é: " + soma);



