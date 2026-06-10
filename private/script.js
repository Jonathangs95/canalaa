const motivos = {
  boleto: {
    label: "Pagar boleto",
    icon: "receipt",
    insight: "Momento de recorrência: resolva rápido e abra uma revisão de plano sem pressão.",
    prioridade: "Alta",
    pergunta: "Você costuma vir todo mês para pagar ou prefere facilitar isso pelo app ou débito automático?",
    objecao: "Não precisa mudar nada agora. A ideia é só conferir se existe uma forma de pagar com mais praticidade ou ganhar mais benefício.",
    tom: "Enquanto eu resolvo isso para você, posso fazer uma checagem rápida do seu plano."
  },
  segundaVia: {
    label: "Segunda via",
    icon: "file-text",
    insight: "Momento de conta: investigue valor, vencimento, cobrança e conforto financeiro.",
    prioridade: "Média",
    pergunta: "Esse valor veio dentro do que você esperava ou ficou diferente do normal?",
    objecao: "Se estiver tudo certo, ótimo. Se estiver pesado, eu posso comparar com as condições atuais antes de qualquer decisão.",
    tom: "Vou puxar a segunda via e já posso conferir se o valor está alinhado ao seu uso."
  },
  internetLenta: {
    label: "Internet lenta",
    icon: "wifi-off",
    insight: "Momento de dor técnica: acolha o problema e conecte cobertura, estabilidade e experiência.",
    prioridade: "Muito alta",
    pergunta: "A lentidão acontece em todos os cômodos ou piora em algum lugar específico?",
    objecao: "Pode não ser só velocidade. Às vezes é cobertura, equipamento ou quantidade de aparelhos conectados.",
    tom: "Vamos entender essa lentidão para resolver do jeito certo."
  },
  trocarPlano: {
    label: "Trocar ou reduzir plano",
    icon: "trending-down",
    insight: "Momento de retenção: compare economia real com perda de benefício antes de reduzir.",
    prioridade: "Alta",
    pergunta: "Você quer reduzir porque o valor ficou alto ou porque sente que não usa tudo que paga hoje?",
    objecao: "Às vezes reduzir tira benefício importante e a economia fica pequena. Eu comparo primeiro para você decidir com segurança.",
    tom: "Antes de reduzir, deixa eu conferir seu uso e as ofertas atuais."
  },
  comprarCelular: {
    label: "Comprar celular",
    icon: "smartphone",
    insight: "Momento de compra: conecte aparelho, plano, proteção, internet e portabilidade.",
    prioridade: "Muito alta",
    pergunta: "Você prioriza câmera, bateria, desempenho ou preço?",
    objecao: "Comprar só o aparelho resolve uma parte. Com o plano certo, você aproveita melhor internet, apps e benefícios.",
    tom: "Para te indicar melhor, quero entender como você usa o celular no dia a dia."
  },
  chip: {
    label: "Comprar ou trocar chip",
    icon: "scan-line",
    insight: "Momento móvel: identifique linha nova, troca, portabilidade ou migração para controle.",
    prioridade: "Média",
    pergunta: "Esse chip é para linha nova, troca de aparelho ou trazer número de outra operadora?",
    objecao: "A troca é simples. O ponto é garantir que você saia com a linha funcionando e com o plano mais adequado.",
    tom: "Eu te ajudo com o chip e já vejo qual plano combina com essa linha."
  },
  cancelamento: {
    label: "Cancelar serviço",
    icon: "ban",
    insight: "Momento crítico: ouça primeiro, recupere confiança e só depois apresente alternativa.",
    prioridade: "Crítica",
    pergunta: "O principal motivo do cancelamento é preço, qualidade, atendimento ou mudança de endereço?",
    objecao: "Se cancelar for o melhor caminho, eu sigo. Antes, posso verificar se existe alternativa que resolva o motivo.",
    tom: "Entendo. Antes de seguir, deixa eu entender o motivo para tentar resolver melhor."
  }
};

const perfis = {
  basico: {
    label: "Objetivo",
    icon: "user-check",
    detail: "Quer resolver rápido",
    orientacao: "Use frases curtas, benefício direto e próxima ação clara.",
    fala: "Vou ser bem objetivo para não tomar seu tempo."
  },
  familia: {
    label: "Família",
    icon: "users",
    detail: "Vários usuários",
    orientacao: "Fale de estabilidade, streaming, jogos, estudo e casa conectada.",
    fala: "Como tem mais gente usando, vale olhar estabilidade e cobertura, não só preço."
  },
  economico: {
    label: "Econômico",
    icon: "badge-dollar-sign",
    detail: "Sensível a preço",
    orientacao: "Mostre economia, previsibilidade e custo-benefício real.",
    fala: "A ideia é encontrar uma opção que faça sentido no bolso e evite surpresa na conta."
  },
  premium: {
    label: "Premium",
    icon: "gem",
    detail: "Busca experiência",
    orientacao: "Priorize qualidade, velocidade, benefícios e suporte.",
    fala: "Se você busca experiência melhor, eu posso priorizar qualidade, estabilidade e benefícios."
  }
};

const produtos = {
  tv: {
    label: "TV",
    icon: "tv",
    detail: "Cliente já usa TV",
    sugeridos: ["fibra", "movel"],
    direcao: "Use entretenimento como ponte para vender velocidade em casa e mobilidade fora dela."
  },
  fibra: {
    label: "Fibra",
    icon: "wifi",
    detail: "Cliente já usa internet fixa",
    sugeridos: ["tv", "movel"],
    direcao: "Use qualidade da conexão como base para ampliar a casa conectada e o móvel."
  },
  movel: {
    label: "Móvel",
    icon: "smartphone",
    detail: "Cliente já usa linha móvel",
    sugeridos: ["fibra", "tv"],
    direcao: "Use consumo de dados e rotina fora de casa para abrir conversa de internet residencial e TV."
  },
  pme: {
    label: "PME",
    icon: "briefcase-business",
    detail: "Cliente empresarial",
    sugeridos: [],
    direcao: "Não force cross-sell. Faça diagnóstico de operação, continuidade e suporte."
  },
  combo: {
    label: "Combo Multi",
    icon: "package-check",
    detail: "Cliente já é convergente",
    sugeridos: [],
    direcao: "Não abra novo leque. Reforce benefícios, fidelização, upgrade e experiência."
  }
};

const produtosLabel = {
  tv: "TV",
  fibra: "Fibra",
  movel: "Móvel",
  pme: "PME",
  combo: "Combo Multi"
};

const posCliente = {
  sucesso: {
    status: "Conversão positiva",
    titulo: "O atendimento gerou avanço comercial",
    resumo: "A venda ou avanço aconteceu porque o vendedor conectou necessidade, confiança e oferta no momento certo.",
    motivos: {
      abordagem: {
        label: "Abordagem bem conduzida",
        descricao: "O vendedor abriu conversa sem pressão e fez o cliente aceitar a análise.",
        sinais: [
          "Resolveu a demanda inicial antes da oferta",
          "Fez pergunta simples e natural",
          "Usou a fala pronta sem parecer decorado",
          "Cliente demonstrou abertura para ouvir"
        ],
        leitura: "A abordagem funcionou porque respeitou o tempo do cliente e criou permissão para vender.",
        acao: "Transformar essa abordagem em exemplo de treinamento para a equipe."
      },
      necessidade: {
        label: "Necessidade bem identificada",
        descricao: "O vendedor descobriu a dor real antes de apresentar produto ou plano.",
        sinais: [
          "Entendeu uso, produto atual e momento do cliente",
          "Relacionou oferta com uma dor concreta",
          "Mostrou benefício prático, não só preço",
          "Cliente confirmou que a solução fazia sentido"
        ],
        leitura: "A conversão veio da leitura correta da necessidade, não de insistência comercial.",
        acao: "Reforçar perguntas de diagnóstico nas próximas abordagens."
      },
      oferta: {
        label: "Oferta aderente",
        descricao: "A proposta combinou com motivo, perfil e produto atual.",
        sinais: [
          "Oferta alinhada ao perfil do cliente",
          "Produto sugerido fez sentido com o produto atual",
          "Benefício percebido foi maior que a objeção",
          "Preço foi explicado com segurança"
        ],
        leitura: "O cliente avançou porque percebeu valor na oferta apresentada.",
        acao: "Mapear quais combinações mais convertem por loja."
      },
      confianca: {
        label: "Confiança no atendimento",
        descricao: "A postura do vendedor transmitiu segurança e reduziu resistência.",
        sinais: [
          "Atendimento foi rápido e seguro",
          "Vendedor explicou sem excesso técnico",
          "Cliente fez perguntas de compra",
          "Objeção foi respondida sem confronto"
        ],
        leitura: "A confiança criada no atendimento sustentou a decisão do cliente.",
        acao: "Usar esse caso como referência de postura consultiva."
      }
    }
  },
  perda: {
    status: "Conversão perdida",
    titulo: "O atendimento não virou avanço comercial",
    resumo: "A oportunidade foi perdida por barreira de preço, timing, confiança, oferta ou execução da abordagem.",
    motivos: {
      preco: {
        label: "Preço ou orçamento",
        descricao: "O cliente não avançou porque o valor não coube ou não percebeu economia suficiente.",
        sinais: [
          "Cliente comparou com concorrente",
          "Disse que estava caro",
          "Queria apenas reduzir gasto",
          "Não enxergou ganho claro no valor mensal"
        ],
        leitura: "A barreira principal foi financeira ou de valor percebido.",
        acao: "Treinar comparação de custo-benefício antes de falar em preço final."
      },
      urgencia: {
        label: "Sem urgência",
        descricao: "O cliente resolveu o que precisava e não viu motivo para decidir agora.",
        sinais: [
          "Veio apenas resolver a demanda inicial",
          "Disse que iria pensar",
          "Não queria mudar nada naquele dia",
          "Encerrou a conversa logo após a solução"
        ],
        leitura: "Faltou criar motivo claro para o cliente agir agora.",
        acao: "Usar benefício com prazo, diagnóstico rápido e próxima etapa combinada."
      },
      abordagem: {
        label: "Abordagem fraca",
        descricao: "A oferta entrou tarde demais, cedo demais ou sem conexão.",
        sinais: [
          "Vendedor só ofertou no fim",
          "Oferta pareceu genérica",
          "Não fez pergunta de diagnóstico",
          "Cliente sentiu venda forçada"
        ],
        leitura: "A perda aponta falha de condução comercial durante o atendimento.",
        acao: "Reforçar roteiro: resolver, perguntar, conectar benefício e ofertar."
      },
      produto: {
        label: "Produto inadequado",
        descricao: "A oferta não encaixou com perfil, uso ou momento do cliente.",
        sinais: [
          "Produto sugerido não combinava com o uso",
          "Cliente queria outra condição",
          "Benefício não foi relevante",
          "Faltou alternativa intermediária"
        ],
        leitura: "A oferta não teve aderência suficiente ao cenário do cliente.",
        acao: "Criar alternativas por perfil e produto atual."
      },
      experiencia: {
        label: "Experiência negativa",
        descricao: "O cliente chegou resistente por problema anterior.",
        sinais: [
          "Reclamou de qualidade ou suporte",
          "Mencionou cobrança indevida",
          "Veio irritado ou desconfiado",
          "Queria cancelar antes de ouvir proposta"
        ],
        leitura: "A venda perdeu espaço porque a confiança precisava ser reconstruída primeiro.",
        acao: "Priorizar acolhimento e correção do problema antes de ofertar."
      }
    }
  }
};

const estado = {
  motivo: "",
  perfil: "",
  produto: ""
};

const estadoPos = {
  resultado: "",
  motivo: "",
  sinais: new Set()
};

const historicoPosCliente = JSON.parse(localStorage.getItem("historicoPosCliente") || "[]");

const motivoGrid = document.querySelector("#motivoGrid");
const perfilGrid = document.querySelector("#perfilGrid");
const produtoGrid = document.querySelector("#produtoGrid");
const copiarFala = document.querySelector("#copiarFala");
const fala = document.querySelector("#fala");
const pergunta = document.querySelector("#pergunta");
const objecao = document.querySelector("#objecao");
const prioridade = document.querySelector("#prioridade");
const tituloOferta = document.querySelector("#tituloOferta");
const resumoOferta = document.querySelector("#resumoOferta");
const produtosSugeridos = document.querySelector("#produtosSugeridos");
const totalRegistros = document.querySelector("#totalRegistros");
const taxaSucesso = document.querySelector("#taxaSucesso");
const outcomeButtons = document.querySelectorAll(".outcome-button");
const motivoPrincipal = document.querySelector("#motivoPrincipal");
const checklistTitulo = document.querySelector("#checklistTitulo");
const checklistOpcoes = document.querySelector("#checklistOpcoes");
const posStatus = document.querySelector("#posStatus");
const posTitulo = document.querySelector("#posTitulo");
const posResumo = document.querySelector("#posResumo");
const posTags = document.querySelector("#posTags");
const posAcao = document.querySelector("#posAcao");
const registrarPos = document.querySelector("#registrarPos");
const limparPos = document.querySelector("#limparPos");
const themeButtons = document.querySelectorAll(".theme-button");

function aplicarTema(theme) {
  const tema = theme === "light" ? "light" : "dark";
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

function optionButton({ id, label, detail, icon, type }) {
  return `
    <button class="choice-button" type="button" data-type="${type}" data-id="${id}" aria-label="${label}. ${detail}">
      <span class="choice-icon" aria-hidden="true"><i data-lucide="${icon}"></i></span>
      <strong>${label}</strong>
    </button>
  `;
}

function renderizarOpcoes() {
  motivoGrid.innerHTML = Object.entries(motivos).map(([id, item]) => optionButton({
    id,
    label: item.label,
    detail: item.insight,
    icon: item.icon,
    type: "motivo"
  })).join("");

  perfilGrid.innerHTML = Object.entries(perfis).map(([id, item]) => optionButton({
    id,
    label: item.label,
    detail: item.detail,
    icon: item.icon,
    type: "perfil"
  })).join("");

  produtoGrid.innerHTML = Object.entries(produtos).map(([id, item]) => optionButton({
    id,
    label: item.label,
    detail: item.detail,
    icon: item.icon,
    type: "produto"
  })).join("");

  atualizarIcones();
}

function selecionar(type, id) {
  estado[type] = id;

  if (type === "motivo") {
    estado.perfil = "";
    estado.produto = "";
  }

  if (type === "perfil") {
    estado.produto = "";
  }

  atualizarBotoes();
  atualizarEtapas();
  atualizarOferta();
}

function atualizarBotoes() {
  document.querySelectorAll(".choice-button").forEach((button) => {
    const type = button.dataset.type;
    button.classList.toggle("is-active", estado[type] === button.dataset.id);
  });
}

function atualizarEtapas() {
  const perfilAberto = Boolean(estado.motivo);
  const produtoAberto = Boolean(estado.motivo && estado.perfil);
  const ofertaAberta = Boolean(estado.motivo && estado.perfil && estado.produto);

  setEtapa("#stepPerfil", perfilAberto);
  setEtapa("#stepProduto", produtoAberto);
  setEtapa("#stepOferta", ofertaAberta);
  setEtapa("#posCliente", ofertaAberta);

  atualizarMapa("motivo", true);
  atualizarMapa("perfil", perfilAberto);
  atualizarMapa("produto", produtoAberto);
  atualizarMapa("oferta", ofertaAberta);
  atualizarMapa("pos", ofertaAberta);
}

function setEtapa(selector, aberta) {
  const step = document.querySelector(selector);
  step.classList.toggle("is-locked", !aberta);
  step.classList.toggle("is-open", aberta);
}

function atualizarMapa(step, ativo) {
  const item = document.querySelector(`[data-map-step="${step}"]`);
  item.classList.toggle("is-active", ativo);
}

function montarOferta() {
  const motivo = motivos[estado.motivo];
  const perfil = perfis[estado.perfil];
  const produto = produtos[estado.produto];

  if (!motivo || !perfil || !produto) return null;

  const sugeridos = produto.sugeridos.map((id) => produtosLabel[id]);
  const destino = sugeridos.length
    ? `ofertar ${sugeridos.join(" + ")}`
    : "aprofundar valor, retenção e experiência";
  const titulo = sugeridos.length
    ? `${produto.label} abre caminho para ${sugeridos.join(" + ")}`
    : `${produto.label}: foco em valor e diagnóstico`;

  return {
    motivo,
    perfil,
    produto,
    sugeridos,
    titulo,
    resumo: `${produto.direcao} Para este caso, o caminho é ${destino}.`,
    fala: `${motivo.tom} Hoje você já tem ${produto.label}. ${produto.direcao} ${perfil.fala}`,
    pergunta: motivo.pergunta,
    objecao: motivo.objecao,
    prioridade: motivo.prioridade
  };
}

function atualizarOferta() {
  const oferta = montarOferta();

  if (!oferta) {
    prioridade.textContent = "--";
    prioridade.dataset.score = "";
    tituloOferta.textContent = "Selecione as etapas anteriores";
    resumoOferta.textContent = "A recomendação será montada automaticamente conforme motivo, perfil e produto atual.";
    produtosSugeridos.innerHTML = "";
    fala.textContent = "A fala aparece quando a jornada estiver completa.";
    pergunta.textContent = "A pergunta-chave aparece aqui.";
    objecao.textContent = "A quebra de objeção aparece aqui.";
    copiarFala.disabled = true;
    return;
  }

  prioridade.textContent = oferta.prioridade;
  prioridade.dataset.score = normalizarScore(oferta.prioridade);
  tituloOferta.textContent = oferta.titulo;
  resumoOferta.textContent = oferta.resumo;
  produtosSugeridos.innerHTML = oferta.sugeridos.length
    ? oferta.sugeridos.map((item) => `<span>${item}</span>`).join("")
    : "<span>Sem novo leque</span><span>Diagnóstico consultivo</span>";
  fala.textContent = oferta.fala;
  pergunta.textContent = oferta.pergunta;
  objecao.textContent = oferta.objecao;
  copiarFala.disabled = false;
}

function normalizarScore(score) {
  return score.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-");
}

async function copiarTexto() {
  if (copiarFala.disabled) return;

  const texto = `${fala.textContent}\n\nPergunta-chave: ${pergunta.textContent}\nQuebra de objeção: ${objecao.textContent}`;

  try {
    await navigator.clipboard.writeText(texto);
    copiarFala.textContent = "Copiado";
    setTimeout(() => {
      copiarFala.textContent = "Copiar fala";
    }, 1600);
  } catch {
    copiarFala.textContent = "Selecione e copie";
  }
}

function atualizarIndicadores() {
  const total = historicoPosCliente.length;
  const sucessos = historicoPosCliente.filter((item) => item.resultado === "sucesso").length;

  totalRegistros.textContent = total;
  taxaSucesso.textContent = total ? `${Math.round((sucessos / total) * 100)}%` : "--";
}

function selecionarResultado(resultadoSelecionado) {
  estadoPos.resultado = resultadoSelecionado;
  estadoPos.motivo = "";
  estadoPos.sinais.clear();

  outcomeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.outcome === resultadoSelecionado);
  });

  renderizarMotivosPos();
  renderizarChecklist();
  atualizarLeitura();
}

function renderizarMotivosPos() {
  const grupo = posCliente[estadoPos.resultado];

  if (!grupo) {
    motivoPrincipal.className = "reason-grid is-disabled";
    motivoPrincipal.innerHTML = "<p>Selecione o resultado para abrir os motivos.</p>";
    return;
  }

  motivoPrincipal.className = "reason-grid";
  motivoPrincipal.innerHTML = Object.entries(grupo.motivos).map(([id, motivoItem]) => `
    <button class="reason-button" type="button" data-reason="${id}">
      <strong>${motivoItem.label}</strong>
      <span>${motivoItem.descricao}</span>
    </button>
  `).join("");

  motivoPrincipal.querySelectorAll(".reason-button").forEach((button) => {
    button.addEventListener("click", () => selecionarMotivoPos(button.dataset.reason));
  });
}

function selecionarMotivoPos(motivoSelecionado) {
  estadoPos.motivo = motivoSelecionado;
  estadoPos.sinais.clear();

  motivoPrincipal.querySelectorAll(".reason-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.reason === motivoSelecionado);
  });

  renderizarChecklist();
  atualizarLeitura();
}

function renderizarChecklist() {
  const motivoItem = posCliente[estadoPos.resultado]?.motivos[estadoPos.motivo];

  if (!motivoItem) {
    checklistTitulo.textContent = "Sinais observados";
    checklistOpcoes.className = "checkbox-grid is-disabled";
    checklistOpcoes.innerHTML = "<p>Depois do motivo principal, os checkboxes aparecem aqui.</p>";
    return;
  }

  checklistTitulo.textContent = `Sinais de: ${motivoItem.label}`;
  checklistOpcoes.className = "checkbox-grid";
  checklistOpcoes.innerHTML = motivoItem.sinais.map((sinal, index) => `
    <label class="checkbox-card">
      <input type="checkbox" value="${index}" />
      <span>${sinal}</span>
    </label>
  `).join("");

  checklistOpcoes.querySelectorAll("input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        estadoPos.sinais.add(Number(checkbox.value));
      } else {
        estadoPos.sinais.delete(Number(checkbox.value));
      }
      atualizarLeitura();
    });
  });
}

function atualizarLeitura() {
  const grupo = posCliente[estadoPos.resultado];
  const motivoItem = grupo?.motivos[estadoPos.motivo];
  const sinaisSelecionados = motivoItem
    ? [...estadoPos.sinais].map((index) => motivoItem.sinais[index])
    : [];

  posStatus.textContent = grupo?.status || "Aguardando análise";
  posStatus.dataset.outcome = estadoPos.resultado || "neutro";
  posTitulo.textContent = motivoItem?.label || grupo?.titulo || "Ainda sem leitura do atendimento";
  posResumo.textContent = motivoItem?.leitura || grupo?.resumo || "A leitura automática aparece conforme a pesquisa pós-venda é preenchida.";
  posAcao.textContent = motivoItem?.acao || "Conclua a jornada comercial para liberar a pesquisa.";
  registrarPos.disabled = !motivoItem;
  posTags.innerHTML = sinaisSelecionados.map((sinal) => `<span>${sinal}</span>`).join("");

  if (motivoItem && !sinaisSelecionados.length) {
    posTags.innerHTML = "<span>Motivo principal selecionado</span>";
  }
}

function registrarPesquisaPosCliente() {
  const motivoItem = posCliente[estadoPos.resultado]?.motivos[estadoPos.motivo];
  const oferta = montarOferta();
  if (!motivoItem || !oferta) return;

  historicoPosCliente.push({
    data: new Date().toISOString(),
    motivo: motivos[estado.motivo].label,
    perfil: perfis[estado.perfil].label,
    produtoAtual: produtos[estado.produto].label,
    oferta: oferta.sugeridos,
    resultado: estadoPos.resultado,
    posMotivo: motivoItem.label,
    sinais: [...estadoPos.sinais].map((index) => motivoItem.sinais[index])
  });

  localStorage.setItem("historicoPosCliente", JSON.stringify(historicoPosCliente));
  atualizarIndicadores();
  registrarPos.textContent = "Registrado";
  setTimeout(() => {
    registrarPos.textContent = "Registrar pós-venda";
  }, 1500);
}

function limparPesquisaPosCliente() {
  estadoPos.resultado = "";
  estadoPos.motivo = "";
  estadoPos.sinais.clear();
  outcomeButtons.forEach((button) => button.classList.remove("is-active"));
  renderizarMotivosPos();
  renderizarChecklist();
  atualizarLeitura();
}

renderizarOpcoes();
atualizarEtapas();
atualizarIndicadores();
aplicarTema(localStorage.getItem("portalTheme") || "dark");
atualizarIcones();

document.querySelectorAll(".choice-button").forEach((button) => {
  button.addEventListener("click", () => selecionar(button.dataset.type, button.dataset.id));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => aplicarTema(button.dataset.themeOption));
});

copiarFala.addEventListener("click", copiarTexto);
registrarPos.addEventListener("click", registrarPesquisaPosCliente);
limparPos.addEventListener("click", limparPesquisaPosCliente);
outcomeButtons.forEach((button) => {
  button.addEventListener("click", () => selecionarResultado(button.dataset.outcome));
});
