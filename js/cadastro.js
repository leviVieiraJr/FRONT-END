function irParaEtapa(numero) {
    for (let i = 1; i <= 3; i++) {
      document.getElementById(`etapa-${i}`).classList.add("d-none");
    }
    document.getElementById(`etapa-${numero}`).classList.remove("d-none");
  }
  
  document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Cadastro enviado com sucesso!");
    // Aqui você pode integrar com a API
  });
  