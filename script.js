
 /*   
    Kata 1 - Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)
    Kata 2- Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)
    Kata 3- Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)
    Kata 4- Exibir os números de -25 a -1: (-25, -24, -23, …, -2, -1)
    Kata 5- Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
    Kata 6- Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
    Kata 7- Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)
    Kata 8- Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    Kata 9- Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
    Kata 10 - Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
    Kata 11 - Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
    Kata 12 - Exibir todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)
    Kata 13 - Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)
    Kata 14 - Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
    Kata 15 - Exibir a soma de todos os números de 1 a 20.
    Kata 16 - Exibir a soma de todos os elementos de sampleArray.
    Kata 17 - Exibir o menor elemento de sampleArray.
    Kata 18 - Exibir o maior elemento de sampleArray.
*/
function showResult(results){
   const print = document.createElement('p')
   print.innerText = results
   return document.getElementsByTagName('body')[0].appendChild(print)
}

//Kata 1 - Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)
function integersOneToTwentyFive(){
    let OneToTwentyFive = []
    for(let i = 1; i <= 25; i++){
        OneToTwentyFive.push(i)
    }
    return showResult(OneToTwentyFive)
}
integersOneToTwentyFive() //tests
