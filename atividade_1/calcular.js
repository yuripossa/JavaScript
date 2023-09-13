/*Código JAVASCRIPT*/
function Calcular(){
    //Declaração das variáveis que recebem os valores informados pelo usuário
    nome = window.prompt('Digite o seu nome: ');
    nota1 = window.prompt('Didite a nota 1:');
    nota2 = window.prompt('Digite a nota 2: ');
    nota3 = window.prompt('Digite a nota 3: ');
    //Variáveis de cálculos
    media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
    
    //Imprimir os dados inseridos e calculados pelo usuário
    document.getElementById('nome').innerHTML = nome;
    document.getElementById('notas').innerHTML = nota1+', '+nota2+', '+nota3;
    document.getElementById('media').innerHTML = media;

    //Verificar se o aluno está aprovado ou reprovado
    if(media>=6){
        document.getElementById('mensagem').innerHTML = 'Meus parabéns!';
    }else{
        document.getElementById('mensagem').innerHTML = 'Que pena, média não alcançada!';
    }
}
