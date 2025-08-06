function log(titulo, condicao) {
  console.log(`${titulo}: ${condicao ? "✅ Passou" : "❌ Falhou"}`);
}

// Testes
window.onload = function () {
  console.log("=== Início dos Testes ===");

  const form = document.getElementById("form-cadastro");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  // Teste 1: Campos existem
  log("Campo 'nome' existe", !!nome);
  log("Campo 'email' existe", !!email);
  log("Campo 'senha' existe", !!senha);
  log("Formulário existe", !!form);

  // Teste 2: Valores padrão são vazios
  log("Campo 'nome' está vazio", nome.value === "");
  log("Campo 'email' está vazio", email.value === "");
  log("Campo 'senha' está vazio", senha.value === "");

  console.log("=== Fim dos Testes ===");
}
