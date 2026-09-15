function verificarCadastro(nome) {
  return new Promise((resolve, reject) => {
    if (nome) {
      resolve('Cadastro encontrado ' + nome);
    } else {
      reject('Nome não informado ' + nome);
    }
  })
}

verificarCadastro('Eduardo')
.then(retorno => {
  console.log(retorno);
})
.catch(erro => {
  console.log(erro);
})
.finally(() => {
  console.log('Verificação finalizada');
})

verificarCadastro()
.then(retorno => {
  console.log(retorno);
})
.catch(erro => {
  console.log(erro);
})
.finally(() => {
  console.log('Verificação finalizada');
})

verificarCadastro('Eduardo')
.then(retorno => {
  console.log(retorno);
})
.catch(erro => {
  console.log(erro);
})
.finally(() => {
  console.log('Verificação finalizada');
})