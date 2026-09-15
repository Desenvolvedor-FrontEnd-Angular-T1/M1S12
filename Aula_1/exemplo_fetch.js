fetch('https://randomuser.me/api/')
.then(retorno => retorno.json())
.then(retorno => {
  console.log(retorno);
})
.catch(err => {
  console.log('erro', err);
})
.finally(() => {
  console.log('Fim chamada');
})

