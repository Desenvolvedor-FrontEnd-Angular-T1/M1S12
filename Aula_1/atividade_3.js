const fotoUsuario = document.getElementById("fotoUsuario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const celular = document.getElementById("celular");

atualizaInfos = (retorno) => {
  fotoUsuario.src = retorno.results[0].picture.medium;
  nome.textContent = retorno.results[0].name.first + ' ' + retorno.results[0].name.last;
  email.textContent = retorno.results[0].email;
  celular.textContent = retorno.results[0].cell;
};

buscarUsuario = async () => {
  // fetch("https://randomuser.me/api/")
  //   .then((retorno) => retorno.json())
  //   .then((retorno) => {
  //     atualizaInfos(retorno);
  //   })
  //   .catch((err) => {
  //     console.log("erro", err);
  //   })
  //   .finally(() => {
  //     console.log("Fim chamada");
  //   });

  const retorno = await fetch("https://randomuser.me/api/");
  const resultado = await retorno.json();
  atualizaInfos(resultado);
};

buscarUsuario();
