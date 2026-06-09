const recomendacoes = {
  boleto: {
    titulo: "Cliente veio pagar boleto",
    score: "Alta",
    abordagem: "Resolva a solicitação primeiro e use a espera natural do atendimento para abrir conversa sem parecer venda forçada.",
    oportunidade: "Débito automático, app da operadora, combo residencial, plano controle ou revisão do pacote atual.",
    pergunta: "Você costuma vir todo mês à loja para pagar ou gostaria de facilitar isso pelo app ou débito automático?",
    objecao: "Não precisa decidir nada agora. A ideia é só conferir se existe uma forma de você pagar com mais praticidade, economizar ou ganhar algum benefício.",
    fala: "Enquanto eu te ajudo com o boleto, posso conferir rapidinho se seu plano ainda está no melhor custo-benefício? Às vezes aparece oferta com mais internet ou mais benefício pelo mesmo valor.",
    acao: "Depois de resolver o boleto, ofereça uma checagem de plano em até 30 segundos."
  },
  segundaVia: {
    titulo: "Cliente pediu segunda via",
    score: "Média",
    abordagem: "Entregue a segunda via com agilidade e investigue se há desconforto com valor, cobrança, vencimento ou uso do pacote.",
    oportunidade: "Cadastro no app, débito automático, renegociação, ajuste de vencimento, plano controle ou combo.",
    pergunta: "Esse valor veio dentro do que você esperava ou ficou diferente do normal?",
    objecao: "Se estiver tudo certo, ótimo. Se estiver pesado, eu posso comparar com as condições atuais antes de você tomar qualquer decisão.",
    fala: "Vou puxar a segunda via para você. Aproveitando, esse valor está confortável ou quer que eu veja se existe uma opção mais alinhada com o seu uso?",
    acao: "Se o cliente reclamar de valor, compare plano atual com uma alternativa antes de falar em redução."
  },
  internetLenta: {
    titulo: "Cliente reclama de internet lenta",
    score: "Muito alta",
    abordagem: "Acolha a dor antes de ofertar. Entenda quantidade de pessoas, cômodos, aparelhos e momentos de maior lentidão.",
    oportunidade: "Upgrade de fibra, repetidor/mesh, troca de equipamento, visita técnica, combo com móvel ou plano de maior estabilidade.",
    pergunta: "A internet fica lenta em todos os cômodos ou piora em algum lugar específico da casa?",
    objecao: "Pode não ser só velocidade. Muitas vezes é cobertura, equipamento ou quantidade de aparelhos conectados. Por isso vale olhar o cenário completo.",
    fala: "Vamos entender essa lentidão para resolver do jeito certo. Vocês usam mais para TV, trabalho, jogos ou celular? Dependendo do uso, pode existir uma configuração melhor para sua casa.",
    acao: "Mapeie uso e cobertura antes de oferecer velocidade maior."
  },
  trocarPlano: {
    titulo: "Cliente quer trocar ou reduzir plano",
    score: "Alta",
    abordagem: "Não trate como simples downgrade. Descubra se o incômodo é preço, uso baixo, benefício não percebido ou comparação com concorrente.",
    oportunidade: "Retenção, plano mais aderente, combo, fidelização com benefício, migração para controle ou ajuste de pacote.",
    pergunta: "Você quer reduzir porque o valor ficou alto ou porque sente que não usa tudo que paga hoje?",
    objecao: "Às vezes reduzir tira benefício importante e a economia fica pequena. Eu comparo primeiro para você decidir com segurança.",
    fala: "Antes de reduzir, deixa eu conferir seu uso e as ofertas atuais. Pode ser que exista um plano mais equilibrado, com economia, sem você perder o que realmente usa.",
    acao: "Compare economia real versus perda de benefício antes de concluir o atendimento."
  },
  comprarCelular: {
    titulo: "Cliente quer comprar celular",
    score: "Muito alta",
    abordagem: "Use o aparelho como início da conversa: necessidade, uso, orçamento, plano, seguro, acessórios e portabilidade.",
    oportunidade: "Plano pós/controle, seguro, película, capa, chip, portabilidade, combo e desconto vinculado ao plano.",
    pergunta: "Você prioriza câmera, bateria, desempenho ou preço?",
    objecao: "Comprar só o aparelho resolve uma parte. Com o plano certo, você aproveita melhor internet, apps, benefícios e proteção.",
    fala: "Legal. Para eu te indicar melhor, você prefere câmera, bateria ou desempenho? E posso ver junto uma opção de plano que combine com esse uso e ajude no custo final.",
    acao: "Depois de entender o aparelho ideal, conecte a oferta a plano, seguro e acessórios."
  },
  chip: {
    titulo: "Cliente veio por chip",
    score: "Média",
    abordagem: "Entenda se é linha nova, troca, portabilidade ou problema técnico. Esse atendimento pode abrir uma venda móvel simples.",
    oportunidade: "Plano controle, migração do pré para controle, portabilidade, ativação, pacote de dados e cadastro no app.",
    pergunta: "Esse chip é para uma linha nova, troca de aparelho ou você quer trazer um número de outra operadora?",
    objecao: "A troca do chip é simples. O ponto é garantir que você já saia com a linha funcionando e com o plano mais adequado para seu uso.",
    fala: "Eu te ajudo com o chip. Essa linha vai ser mais para WhatsApp e redes sociais ou você usa bastante internet fora de casa?",
    acao: "Identifique se há portabilidade ou migração para controle antes de finalizar."
  },
  cancelamento: {
    titulo: "Cliente quer cancelar",
    score: "Crítica",
    abordagem: "Ouça primeiro, sem confronto. Descubra o motivo real e tente recuperar valor antes de falar em qualquer nova oferta.",
    oportunidade: "Retenção, ajuste de plano, suporte técnico, renegociação, visita técnica, upgrade com desconto ou combo mais adequado.",
    pergunta: "O principal motivo do cancelamento é preço, qualidade, atendimento ou mudança de endereço?",
    objecao: "Eu sigo com sua solicitação se for o melhor caminho. Antes, posso verificar se existe uma alternativa que resolva o motivo do cancelamento.",
    fala: "Entendo. Antes de seguir, deixa eu entender o motivo para ver se consigo resolver de uma forma melhor para você. Foi preço, qualidade do serviço ou alguma experiência ruim?",
    acao: "Faça uma pergunta de diagnóstico, repita a dor do cliente e só depois apresente alternativa."
  }
};

const ajustesPerfil = {
  basico: {
    abordagem: "Mantenha tudo curto, direto e sem termos técnicos.",
    fala: "Vou ser bem objetivo para não tomar seu tempo."
  },
  familia: {
    abordagem: "Destaque estabilidade, vários usuários, streaming, jogos, estudo e casa conectada.",
    fala: "Como tem mais gente usando, vale olhar estabilidade e cobertura, não só preço."
  },
  economico: {
    abordagem: "Destaque economia, controle do valor mensal e custo-benefício real.",
    fala: "A ideia é encontrar uma opção que faça sentido no bolso e evite surpresa na conta."
  },
  premium: {
    abordagem: "Destaque qualidade, experiência, velocidade, benefícios e suporte.",
    fala: "Se você busca uma experiência melhor, eu posso priorizar qualidade, estabilidade e benefícios."
  }
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
          "Entendeu uso de internet, aparelho ou conta",
          "Relacionou oferta com uma dor concreta",
          "Mostrou benefício prático, não só preço",
          "Cliente confirmou que a solução fazia sentido"
        ],
        leitura: "A conversão veio da leitura correta da necessidade, não de insistência comercial.",
        acao: "Reforçar perguntas de diagnóstico nas próximas abordagens."
      },
      oferta: {
        label: "Oferta aderente",
        descricao: "A proposta ficou clara, objetiva e compatível com o perfil percebido.",
        sinais: [
          "Oferta alinhada ao perfil do cliente",
          "Benefício percebido foi maior que a objeção",
          "Preço foi explicado com segurança",
          "Vendedor conectou plano, serviço ou acessório ao contexto"
        ],
        leitura: "O cliente avançou porque percebeu valor na oferta apresentada.",
        acao: "Mapear quais ofertas mais convertem por motivo de visita."
      },
      confianca: {
        label: "Confiança no atendimento",
        descricao: "A postura do vendedor transmitiu segurança e reduziu resistência.",
        sinais: [
          "Atendimento foi rápido e seguro",
          "Vendedor explicou sem excesso de termos técnicos",
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
        acao: "Treinar comparação de custo-benefício e economia real antes de falar em preço final."
      },
      urgencia: {
        label: "Sem urgência de compra",
        descricao: "O cliente resolveu o que precisava e não viu motivo para decidir naquele momento.",
        sinais: [
          "Veio apenas resolver boleto, conta ou chip",
          "Disse que iria pensar",
          "Não queria mudar nada naquele dia",
          "Encerrou a conversa logo após a solução inicial"
        ],
        leitura: "Faltou criar motivo claro para o cliente agir agora.",
        acao: "Usar benefícios com prazo, diagnóstico rápido e próxima etapa combinada."
      },
      abordagem: {
        label: "Abordagem fraca ou tardia",
        descricao: "A oferta entrou tarde demais, cedo demais ou sem conexão com a necessidade.",
        sinais: [
          "Vendedor só ofertou no fim",
          "Oferta pareceu genérica",
          "Não fez pergunta de diagnóstico",
          "Cliente sentiu venda forçada"
        ],
        leitura: "A perda aponta falha de condução comercial durante o atendimento.",
        acao: "Reforçar roteiro: resolver, perguntar, conectar benefício e só então ofertar."
      },
      produto: {
        label: "Produto ou oferta inadequada",
        descricao: "O que foi oferecido não encaixou com o perfil, uso ou momento do cliente.",
        sinais: [
          "Plano não combinava com o uso",
          "Cliente queria outra condição",
          "Benefício não foi relevante",
          "Faltou alternativa intermediária"
        ],
        leitura: "A oferta não teve aderência suficiente ao cenário do cliente.",
        acao: "Criar alternativas por perfil: econômico, família, objetivo e premium."
      },
      experiencia: {
        label: "Experiência anterior negativa",
        descricao: "O cliente chegou resistente por problema anterior de serviço, cobrança ou atendimento.",
        sinais: [
          "Reclamou de qualidade ou suporte",
          "Mencionou cobrança indevida",
          "Veio irritado ou desconfiado",
          "Queria cancelar antes de ouvir proposta"
        ],
        leitura: "A venda perdeu espaço porque a confiança precisava ser reconstruída primeiro.",
        acao: "Priorizar acolhimento, correção do problema e só depois oferta de retenção."
      }
    }
  }
};

const motivo = document.querySelector("#motivo");
const perfil = document.querySelector("#perfil");
const gerar = document.querySelector("#gerar");
const copiarFala = document.querySelector("#copiarFala");
const aviso = document.querySelector("#aviso");
const resultado = document.querySelector("#resultado");
const score = document.querySelector("#score");
const fala = document.querySelector("#fala");
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
const totalRegistros = document.querySelector("#totalRegistros");
const taxaSucesso = document.querySelector("#taxaSucesso");
const historicoPosCliente = JSON.parse(localStorage.getItem("historicoPosCliente") || "[]");
const estadoPos = {
  resultado: "",
  motivo: "",
  sinais: new Set()
};

function preencher() {
  const item = recomendacoes[motivo.value];

  if (!item) {
    aviso.textContent = "Selecione o motivo da vinda do cliente para gerar o roteiro.";
    motivo.focus();
    return;
  }

  const ajuste = ajustesPerfil[perfil.value];
  const falaCompleta = `${item.fala} ${ajuste.fala}`;

  aviso.textContent = "";
  document.querySelector("#tituloResultado").textContent = item.titulo;
  score.textContent = item.score;
  score.dataset.score = item.score.toLowerCase().replaceAll(" ", "-");
  document.querySelector("#abordagem").textContent = `${item.abordagem} ${ajuste.abordagem}`;
  document.querySelector("#oportunidade").textContent = item.oportunidade;
  document.querySelector("#pergunta").textContent = item.pergunta;
  document.querySelector("#objecao").textContent = item.objecao;
  fala.textContent = falaCompleta;
  document.querySelector("#acao").textContent = item.acao;
  copiarFala.disabled = false;

  resultado.classList.remove("is-updated");
  window.requestAnimationFrame(() => resultado.classList.add("is-updated"));
}

async function copiarTexto() {
  if (copiarFala.disabled) return;

  try {
    await navigator.clipboard.writeText(fala.textContent);
    copiarFala.textContent = "Copiado";
    setTimeout(() => {
      copiarFala.textContent = "Copiar fala";
    }, 1600);
  } catch {
    aviso.textContent = "Não consegui copiar automaticamente. Selecione a fala e copie manualmente.";
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

  renderizarMotivos();
  renderizarChecklist();
  atualizarLeitura();
}

function renderizarMotivos() {
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
    button.addEventListener("click", () => selecionarMotivo(button.dataset.reason));
  });
}

function selecionarMotivo(motivoSelecionado) {
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
  posResumo.textContent = motivoItem?.leitura || grupo?.resumo || "A ferramenta vai montar uma leitura automática para liderança e treinamento assim que os cliques forem feitos.";
  posAcao.textContent = motivoItem?.acao || "Selecione o resultado para liberar a recomendação.";
  registrarPos.disabled = !motivoItem;
  posTags.innerHTML = sinaisSelecionados.map((sinal) => `<span>${sinal}</span>`).join("");

  if (motivoItem && !sinaisSelecionados.length) {
    posTags.innerHTML = "<span>Motivo principal selecionado</span>";
  }
}

function registrarPesquisaPosCliente() {
  const motivoItem = posCliente[estadoPos.resultado]?.motivos[estadoPos.motivo];
  if (!motivoItem) return;

  historicoPosCliente.push({
    data: new Date().toISOString(),
    atendimento: motivo.value || "nao_informado",
    perfil: perfil.value,
    resultado: estadoPos.resultado,
    motivo: motivoItem.label,
    sinais: [...estadoPos.sinais].map((index) => motivoItem.sinais[index])
  });

  localStorage.setItem("historicoPosCliente", JSON.stringify(historicoPosCliente));
  atualizarIndicadores();
  registrarPos.textContent = "Registrado";
  setTimeout(() => {
    registrarPos.textContent = "Registrar pós-cliente";
  }, 1500);
}

function limparPesquisaPosCliente() {
  estadoPos.resultado = "";
  estadoPos.motivo = "";
  estadoPos.sinais.clear();
  outcomeButtons.forEach((button) => button.classList.remove("is-active"));
  renderizarMotivos();
  renderizarChecklist();
  atualizarLeitura();
}

gerar.addEventListener("click", preencher);
copiarFala.addEventListener("click", copiarTexto);
registrarPos.addEventListener("click", registrarPesquisaPosCliente);
limparPos.addEventListener("click", limparPesquisaPosCliente);
outcomeButtons.forEach((button) => {
  button.addEventListener("click", () => selecionarResultado(button.dataset.outcome));
});

motivo.addEventListener("change", () => {
  if (motivo.value) preencher();
});

perfil.addEventListener("change", () => {
  if (motivo.value) preencher();
});

atualizarIndicadores();
