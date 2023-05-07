function carregarInstrumentos(categoria_id) {
  console.log('carregarInstrumentos chamada com categoria_id:', categoria_id);
  fetch(`http://localhost:3000/itens/categoria/${categoria_id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Dados recebidos:", data);
      const resultsElement = document.getElementById("results");
      resultsElement.innerHTML = "";
      data.forEach((item) => {
        const div = document.createElement("div");
        div.className = "instrumento-item col-md-4 col-sm-6 mb-4";
        div.innerHTML = `<div class="card h-100">
                          <div class="card-body">
                            <h4 class="card-title">${item.nome}</h4>
                            <p class="card-text">
                              <strong>Marca:</strong> ${item.marca} <br>
                              <strong>Descrição:</strong> ${item.descricao} <br>
                              <strong>Preço:</strong> ${item.preco}<br>
                              <strong>Categoria:</strong> ${item.categoria}
                              </p>
                              </div>
                              </div>`;
                              resultsElement.appendChild(div);
                              });
                              })
                              .catch((error) => {
                              console.error("Erro ao carregar instrumentos:", error);
                              });
                              }
                              
                              document.addEventListener("DOMContentLoaded", () => {
                              const urlParams = new URLSearchParams(window.location.search);
                              const categoria_id = urlParams.get("categoria_id");
                              console.log("Categoria ID da URL:", categoria_id);
                              if (categoria_id) {
                              carregarInstrumentos(categoria_id);
                              }
                              });
                              
                              lua
