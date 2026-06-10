const dashboardStatus = document.querySelector("#dashboardStatus");
const dashTotal = document.querySelector("#dashTotal");
const dashConversao = document.querySelector("#dashConversao");
const dashSucesso = document.querySelector("#dashSucesso");
const dashPerda = document.querySelector("#dashPerda");
const motivosRanking = document.querySelector("#motivosRanking");
const produtosRanking = document.querySelector("#produtosRanking");
const registrosTabela = document.querySelector("#registrosTabela");
const ultimaAtualizacao = document.querySelector("#ultimaAtualizacao");
const atualizarDashboard = document.querySelector("#atualizarDashboard");
const themeButtons = document.querySelectorAll(".theme-button");

function aplicarTema(theme) {
  const tema = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = tema;
  localStorage.setItem("portalTheme", tema);

  themeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeOption === tema);
  });
}

function atualizarIcones() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function formatarData(valor) {
  if (!valor) return "--";
  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) return "--";
  return data.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function contarPorCampo(registros, campo) {
  return registros.reduce((acc, registro) => {
    const valor = registro[campo] || "Não informado";
    acc[valor] = (acc[valor] || 0) + 1;
    return acc;
  }, {});
}

function renderRanking(element, dados) {
  const linhas = Object.entries(dados).sort((a, b) => b[1] - a[1]);

  if (!linhas.length) {
    element.innerHTML = '<p class="empty-state">Sem dados ainda.</p>';
    return;
  }

  element.innerHTML = linhas.map(([label, total]) => `
    <div class="ranking-item">
      <span>${label}</span>
      <strong>${total}</strong>
    </div>
  `).join("");
}

function renderTabela(registros) {
  if (!registros.length) {
    registrosTabela.innerHTML = '<tr><td colspan="8">Nenhum registro do login teste ainda.</td></tr>';
    return;
  }

  registrosTabela.innerHTML = registros.map((registro) => `
    <tr>
      <td>${formatarData(registro.data)}</td>
      <td><span class="table-pill ${registro.resultado === "sucesso" ? "is-success" : "is-loss"}">${registro.resultado === "sucesso" ? "Deu certo" : "Deu errado"}</span></td>
      <td>${registro.motivo || "--"}</td>
      <td>${registro.perfil || "--"}</td>
      <td>${registro.produtoAtual || "--"}</td>
      <td>${(registro.oferta || []).join(" + ") || "--"}</td>
      <td>${registro.posMotivo || "--"}</td>
      <td>${(registro.sinais || []).join("; ") || "--"}</td>
    </tr>
  `).join("");
}

function renderDashboard(registros) {
  const total = registros.length;
  const sucessos = registros.filter((registro) => registro.resultado === "sucesso").length;
  const perdas = registros.filter((registro) => registro.resultado === "perda").length;
  const conversao = total ? Math.round((sucessos / total) * 100) : 0;

  dashTotal.textContent = total;
  dashSucesso.textContent = sucessos;
  dashPerda.textContent = perdas;
  dashConversao.textContent = total ? `${conversao}%` : "--";

  renderRanking(motivosRanking, contarPorCampo(registros, "posMotivo"));
  renderRanking(produtosRanking, contarPorCampo(registros, "produtoAtual"));
  renderTabela(registros);

  dashboardStatus.textContent = total ? "Atualizado" : "Sem registros";
  dashboardStatus.dataset.outcome = total ? "sucesso" : "neutro";
  ultimaAtualizacao.textContent = `Atualizado em ${formatarData(new Date().toISOString())}`;
}

async function carregarDashboard() {
  dashboardStatus.textContent = "Carregando";
  try {
    const response = await fetch("/api/registros");
    if (!response.ok) throw new Error("Falha ao carregar registros");
    const data = await response.json();
    renderDashboard(data.registros || []);
  } catch (error) {
    dashboardStatus.textContent = "Erro";
    registrosTabela.innerHTML = '<tr><td colspan="8">Não foi possível carregar os registros.</td></tr>';
  }
}

aplicarTema(localStorage.getItem("portalTheme") || "light");
atualizarIcones();
carregarDashboard();

themeButtons.forEach((button) => {
  button.addEventListener("click", () => aplicarTema(button.dataset.themeOption));
});

atualizarDashboard.addEventListener("click", carregarDashboard);
