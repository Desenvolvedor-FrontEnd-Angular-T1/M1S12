
const promise = new Promise((resolve, reject) => {
  //Retorno de sucesso: resolve
  //resolve('Retorno resolve');

  //Retorno de falha: reject
  reject('Retorno reject')
});

function promisesThenCatch() {
  console.log('Execução INICIO');
  promise
  .then((retornoSucesso) => {
    console.log(retornoSucesso);
  })
  .catch((retornoErro) => {
    console.error(retornoErro);
  })
  .finally(() => {
    console.warn('Mensagem de finally');
  });
  console.log('Execução FIM');
}

async function promisesAsyncWait() {
  console.log('Execução INICIO');
  try {
    const retorno = await promise;
    console.log('retorno', retorno);
  } catch(erro) {
    console.log('erro', erro);
  }
  console.log('Execução FIM');
}

promisesThenCatch();
//promisesAsyncWait();