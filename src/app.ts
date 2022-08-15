const button = document.getElementById("button");
const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;

interface Funcionario {
  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
  codigo: number;
  nome: string;
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = "João";

console.log(funcionarioObj);

function inserirNomeECod(
  numero1: number,
  numero2: string,
  printarResultado: boolean,
  frase: string
) {
  const resultado = numero1 + numero2;
  if (printarResultado) {
    console.log(frase + resultado);
  }
  return resultado;
}
// A variável abaixo tem seu tipo inferido pelo valor inicial
let printarResultado = true;
// já nesse caso estamos dizendo explicitamente qual é o seu tipo
let frase: string;
// E só depois iniciamos ela com um valor
frase = "O número é ";

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button) {
  button.addEventListener("click", () => {
    console.log(
      inserirNomeECod(
        Number(input1.value),
        String(input2.value),
        printarResultado,
        frase
      )
    );
  });
}
