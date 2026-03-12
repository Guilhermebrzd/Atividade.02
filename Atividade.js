
let alturas = [];
let somaAlturaMasculino = 0;
let contMasculino = 0;
let contFeminino = 0;

console.log("Por favor, insira os dados das 5 pessoas:");

for (let i = 1; i <= 5; i++) {
    console.log(`--- Pessoa ${i} ---`);

    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i}:`));
    let genero = prompt("Digite o genero (M para Masculino / F para Feminino):").trim().toUpperCase();

    
    if (!isNaN(altura)) {
        alturas.push(altura);
    }

    
    if (genero === 'M') {
        somaAlturaMasculino += altura;
        contMasculino++;
    } else if (genero === 'F') {
        contFeminino++;
    } else {
        alert("Gênero inválido. Os dados desta pessoa não entrarão nas médias de gênero.");
    }
   
}

let maiorAltura = alturas.length > 0 ? Math.max(...alturas) : 0;
let mediaAlturaMasculino = contMasculino > 0 ? (somaAlturaMasculino / contMasculino) : 0;


console.log("\n" + "=".repeat(30));
console.log("RESULTADOS FINAIS");
console.log("=".repeat(30));
console.log(`A maior altura do grupo: ${maiorAltura.toFixed(2)}m`);
console.log(`A media de altura dos homens: ${mediaAlturaMasculino.toFixed(2)}m`);
console.log(`O numero de mulheres no grupo: ${contFeminino}`);
console.log("=".repeat(30));
alert("Resultados finais foram exibidos no console. Por favor, verifique o console para os detalhes.");