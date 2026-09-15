function concluidoTresSegundos() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Concluído após 3 segundos');
    }, 3000);
  })
}

testeConcluido = async () => {
  console.log('Concluído PRÉ');

  const retorno = await concluidoTresSegundos();
  console.log(retorno);

  console.log('Concluído PÓS');
}

testeConcluido();