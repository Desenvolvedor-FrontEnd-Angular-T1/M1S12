const titulo = document.getElementById("titulo");
const corpo = document.getElementById("corpo");

function salvarDados() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titulo.value,
      body: corpo.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      window.alert("Dados salvos com sucesso");
      console.log(json);
    });
}