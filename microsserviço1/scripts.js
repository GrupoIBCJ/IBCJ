let indiceAtual = 0;

function loadItemsByCategory(categoria_id) {
    fetch(`/itens/categoria/${categoria_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        // Aqui você pode criar a lógica para exibir os itens na página
        // ...
      })
      .catch((error) => {
        console.error("Erro ao buscar itens por categoria:", error);
      });
  }

  async function carregarInstrumentos(categoria_id) {
    console.log('Função carregarInstrumentos chamada');
    try {
      const response = await fetch(`http://localhost:3000/itens/categoria/${categoria_id}`);
      const data = await response.json();
      console.log(data);
      
      const resultsElement = document.getElementById('results');
      resultsElement.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.nome;
        resultsElement.appendChild(li);
      });
    } catch (error) {
      console.error('Erro ao carregar instrumentos:', error);
    }
  }
  



