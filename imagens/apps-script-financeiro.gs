/**
 * Painel financeiro Laraminimaria
 * Como usar:
 * 1. Crie uma planilha Google em branco.
 * 2. Extensões > Apps Script.
 * 3. Cole este arquivo inteiro.
 * 4. Execute a função setupFinanceiroLara uma vez.
 * 5. Publique como Web App: Executar como você / Acesso: qualquer pessoa com o link.
 * 6. Copie a URL do Web App e cole em FINANCEIRO_WEB_APP_URL no index.html e no financeiro.js.
 */

const API_KEY = 'LARA-MINIMARIA-2026';
const SHEET_PRODUTOS = 'Produtos';
const SHEET_PEDIDOS = 'Pedidos';
const SHEET_ITENS = 'Itens';

const PRODUTOS_INICIAIS = [
  {
    "id": 1,
    "nome": "Arabic Collection Rosa",
    "categoria": "Feminino",
    "precoVenda": 119.9,
    "custoCompra": 74.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/arabic_collection_rosa_a002_lara.jpg",
    "ativo": true
  },
  {
    "id": 2,
    "nome": "Brand Collection Good Girl",
    "categoria": "Feminino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/brand_collection_good_girl.jpg",
    "ativo": true
  },
  {
    "id": 3,
    "nome": "Brand Collection No 019",
    "categoria": "Feminino",
    "precoVenda": 69.9,
    "custoCompra": 43.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/brand_collection_no_019.jpg",
    "ativo": true
  },
  {
    "id": 4,
    "nome": "Brand Collection No 188",
    "categoria": "Feminino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_brand_collection_188_01_lara.jpg",
    "ativo": true
  },
  {
    "id": 5,
    "nome": "Brand Collection No 194",
    "categoria": "Feminino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/brand_collection_no_194.jpg",
    "ativo": true
  },
  {
    "id": 6,
    "nome": "Carolina Herrera Good Girl Blush",
    "categoria": "Feminino",
    "precoVenda": 189.9,
    "custoCompra": 117.74,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/good_girl_blush.jpg",
    "ativo": true
  },
  {
    "id": 7,
    "nome": "Dream Brand Collection Beauty Girl",
    "categoria": "Feminino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/beauty_girl.jpg",
    "ativo": true
  },
  {
    "id": 8,
    "nome": "Durrat Al Aroos",
    "categoria": "Feminino",
    "precoVenda": 195.0,
    "custoCompra": 120.9,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/durrat_al_aroos.jpg",
    "ativo": true
  },
  {
    "id": 9,
    "nome": "Jean Paul Gaultier Scandal",
    "categoria": "Feminino",
    "precoVenda": 209.9,
    "custoCompra": 130.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/jpg_scandal.jpg",
    "ativo": true
  },
  {
    "id": 10,
    "nome": "Lattafa Eclaire",
    "categoria": "Feminino",
    "precoVenda": 295.0,
    "custoCompra": 182.9,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_eclaire.jpg",
    "ativo": true
  },
  {
    "id": 11,
    "nome": "Lattafa Haya",
    "categoria": "Feminino",
    "precoVenda": 159.9,
    "custoCompra": 99.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_haya.jpg",
    "ativo": true
  },
  {
    "id": 12,
    "nome": "Lattafa Victoria",
    "categoria": "Feminino",
    "precoVenda": 275.0,
    "custoCompra": 170.5,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_lattafa_victoria_lara.jpg",
    "ativo": true
  },
  {
    "id": 13,
    "nome": "Lattafa Yara",
    "categoria": "Feminino",
    "precoVenda": 255.0,
    "custoCompra": 158.1,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_lattafa_yara_lara.jpg",
    "ativo": true
  },
  {
    "id": 14,
    "nome": "Lattafa Yara Candy",
    "categoria": "Feminino",
    "precoVenda": 164.9,
    "custoCompra": 102.24,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_yara_candy.jpg",
    "ativo": true
  },
  {
    "id": 15,
    "nome": "Orientica Exclusive Dania",
    "categoria": "Feminino",
    "precoVenda": 189.9,
    "custoCompra": 117.74,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/orientica_dania.jpg",
    "ativo": true
  },
  {
    "id": 16,
    "nome": "Sabah Al Ward",
    "categoria": "Feminino",
    "precoVenda": 149.9,
    "custoCompra": 92.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/sabah_al_ward.jpg",
    "ativo": true
  },
  {
    "id": 17,
    "nome": "Victoria's Secret Aqua Kiss",
    "categoria": "Feminino",
    "precoVenda": 179.99,
    "custoCompra": 111.59,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/victorias_secret_aqua_kiss_body_splash_e_lotion_lara.jpg",
    "ativo": true
  },
  {
    "id": 18,
    "nome": "Victoria's Secret Bare Vanilla",
    "categoria": "Feminino",
    "precoVenda": 179.99,
    "custoCompra": 111.59,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/vs_bare_vanilla.jpg",
    "ativo": true
  },
  {
    "id": 19,
    "nome": "Victoria's Secret Pure Seduction",
    "categoria": "Feminino",
    "precoVenda": 179.99,
    "custoCompra": 111.59,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/victorias_secret_pure_seduction_body_splash_e_lotion_lara.jpg",
    "ativo": true
  },
  {
    "id": 31,
    "nome": "Brand Collection Teddy Branco",
    "categoria": "Feminino",
    "precoVenda": 59.9,
    "custoCompra": 37.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/teddy_branco.jpg",
    "ativo": true
  },
  {
    "id": 32,
    "nome": "Brand Collection Teddy Preto",
    "categoria": "Feminino",
    "precoVenda": 59.9,
    "custoCompra": 37.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/teddy_preto.jpg",
    "ativo": true
  },
  {
    "id": 33,
    "nome": "Brand Collection Teddy Rosa",
    "categoria": "Feminino",
    "precoVenda": 59.9,
    "custoCompra": 37.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/teddy_rosa.jpg",
    "ativo": true
  },
  {
    "id": 40,
    "nome": "Arabic Collection Rosa A002 e Doces A033",
    "categoria": "Feminino",
    "precoVenda": 119.9,
    "custoCompra": 74.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/arabic_collection_rosa_a002_e_doces_a033_lara.jpg",
    "ativo": true
  },
  {
    "id": 42,
    "nome": "Brand Collection No 087",
    "categoria": "Feminino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_brand_collection_087_lara.jpg",
    "ativo": true
  },
  {
    "id": 43,
    "nome": "Brand Collection No 329 Fame Couture",
    "categoria": "Feminino",
    "precoVenda": 69.9,
    "custoCompra": 43.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_brand_collection_329_fame_couture_lara.jpg",
    "ativo": true
  },
  {
    "id": 44,
    "nome": "Paco Rabanne Olympéa Aqua",
    "categoria": "Feminino",
    "precoVenda": 189.9,
    "custoCompra": 117.74,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_paco_rabanne_olympea_aqua_lara.jpg",
    "ativo": true
  },
  {
    "id": 20,
    "nome": "Armaf Club de Nuit Iconic",
    "categoria": "Masculino",
    "precoVenda": 199.9,
    "custoCompra": 123.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/armaf_iconic.jpg",
    "ativo": true
  },
  {
    "id": 21,
    "nome": "Brand Collection No 214 Invictus",
    "categoria": "Masculino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/brand_collection_214_invictus.jpg",
    "ativo": true
  },
  {
    "id": 22,
    "nome": "Brand Collection No 296 Phantom",
    "categoria": "Masculino",
    "precoVenda": 109.99,
    "custoCompra": 68.19,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_brand_collection_296_lara.jpg",
    "ativo": true
  },
  {
    "id": 23,
    "nome": "Carolina Herrera 212 VIP Black",
    "categoria": "Masculino",
    "precoVenda": 189.9,
    "custoCompra": 117.74,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/212_vip_black.jpg",
    "ativo": true
  },
  {
    "id": 24,
    "nome": "Dior Sauvage",
    "categoria": "Masculino",
    "precoVenda": 239.9,
    "custoCompra": 148.74,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/dior_sauvage.jpg",
    "ativo": true
  },
  {
    "id": 25,
    "nome": "Lattafa Asad Bourbon",
    "categoria": "Masculino",
    "precoVenda": 169.9,
    "custoCompra": 105.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_asad_bourbon.jpg",
    "ativo": true
  },
  {
    "id": 26,
    "nome": "Lattafa Asad Elixir",
    "categoria": "Masculino",
    "precoVenda": 345.0,
    "custoCompra": 213.9,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_asad_elixir.jpg",
    "ativo": true
  },
  {
    "id": 27,
    "nome": "Lattafa Fakhar Black",
    "categoria": "Masculino",
    "precoVenda": 265.0,
    "custoCompra": 164.3,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_fakhar_black.jpg",
    "ativo": true
  },
  {
    "id": 28,
    "nome": "Maison Alhambra No. 2 Men",
    "categoria": "Masculino",
    "precoVenda": 149.9,
    "custoCompra": 92.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/maison_no2men.jpg",
    "ativo": true
  },
  {
    "id": 29,
    "nome": "Paco Rabanne Invictus Victory",
    "categoria": "Masculino",
    "precoVenda": 199.9,
    "custoCompra": 123.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/invictus_victory.jpg",
    "ativo": true
  },
  {
    "id": 30,
    "nome": "Brand Collection No 402",
    "categoria": "Unissex",
    "precoVenda": 69.9,
    "custoCompra": 43.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/brand_collection_402.jpg",
    "ativo": true
  },
  {
    "id": 34,
    "nome": "Lattafa Al Noble Ameer",
    "categoria": "Unissex",
    "precoVenda": 159.9,
    "custoCompra": 99.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/al_noble_ameer.jpg",
    "ativo": true
  },
  {
    "id": 35,
    "nome": "Lattafa Al Noble Safeer",
    "categoria": "Unissex",
    "precoVenda": 159.9,
    "custoCompra": 99.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/al_noble_safeer.jpg",
    "ativo": true
  },
  {
    "id": 36,
    "nome": "Lattafa Al Noble Wazeer",
    "categoria": "Unissex",
    "precoVenda": 295.0,
    "custoCompra": 182.9,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/al_noble_wazeer.jpg",
    "ativo": true
  },
  {
    "id": 37,
    "nome": "Lattafa Fakhar",
    "categoria": "Unissex",
    "precoVenda": 149.9,
    "custoCompra": 92.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/lattafa_fakhar.jpg",
    "ativo": true
  },
  {
    "id": 39,
    "nome": "Orientica Royal Amber",
    "categoria": "Unissex",
    "precoVenda": 475.0,
    "custoCompra": 294.5,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/royal_amber.jpg",
    "ativo": true
  },
  {
    "id": 46,
    "nome": "Arabic Collection A024",
    "categoria": "Unissex",
    "precoVenda": 119.9,
    "custoCompra": 74.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_arabic_collection_a024_lara.jpg",
    "ativo": true
  },
  {
    "id": 47,
    "nome": "Arabic Collection A026",
    "categoria": "Unissex",
    "precoVenda": 119.9,
    "custoCompra": 74.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_arabic_collection_a026_lara.jpg",
    "ativo": true
  },
  {
    "id": 48,
    "nome": "Areej Árabe Dourado",
    "categoria": "Unissex",
    "precoVenda": 159.9,
    "custoCompra": 99.14,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_areej_arabico_dourado_lara.jpg",
    "ativo": true
  },
  {
    "id": 49,
    "nome": "Lattafa Pride Tharwah Gold",
    "categoria": "Unissex",
    "precoVenda": 295.0,
    "custoCompra": 182.9,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_lattafa_pride_tharwah_gold_lara.jpg",
    "ativo": true
  },
  {
    "id": 50,
    "nome": "Orientica Exclusive Oud",
    "categoria": "Unissex",
    "precoVenda": 199.9,
    "custoCompra": 123.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/perfume_orientica_exclusive_oud_lara.jpg",
    "ativo": true
  },
  {
    "id": 53,
    "nome": "Arabic Collection Doces A005",
    "categoria": "Feminino",
    "precoVenda": 119.9,
    "custoCompra": 74.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/arabic_collection_doces_a005.jpg",
    "ativo": true
  },
  {
    "id": 54,
    "nome": "Arabic Collection Tropical A003",
    "categoria": "Unissex",
    "precoVenda": 119.9,
    "custoCompra": 74.34,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/arabic_collection_tropical_a003.jpg",
    "ativo": true
  },
  {
    "id": 55,
    "nome": "Mini Perfume La Vie Est Belle 15ml",
    "categoria": "Feminino",
    "precoVenda": 49.9,
    "custoCompra": 30.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/mini_perfume_la_vie_est_belle_15ml.jpg",
    "ativo": true
  },
  {
    "id": 56,
    "nome": "Mini Perfume Good Girl 15ml",
    "categoria": "Feminino",
    "precoVenda": 49.9,
    "custoCompra": 30.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/mini_perfume_good_girl_15ml.jpg",
    "ativo": true
  },
  {
    "id": 57,
    "nome": "Mini Perfume Scandal 15ml",
    "categoria": "Feminino",
    "precoVenda": 49.9,
    "custoCompra": 30.94,
    "estoqueInicial": 5,
    "estoqueAtual": 5,
    "imagem": "./imagens/produtos/mini_perfume_scandal_15ml.jpg",
    "ativo": true
  }
];

function setupFinanceiroLara() {
  const ss = SpreadsheetApp.getActive();
  const produtos = getOrCreateSheet_(ss, SHEET_PRODUTOS, ['id', 'nome', 'categoria', 'precoVenda', 'custoCompra', 'estoqueInicial', 'estoqueAtual', 'ativo', 'imagem']);
  const pedidos = getOrCreateSheet_(ss, SHEET_PEDIDOS, ['pedidoId', 'dataISO', 'clienteNome', 'telefone', 'status', 'origem', 'totalVenda', 'totalCusto', 'lucro', 'reposicao', 'qtdItens', 'atualizadoEm', 'estoqueBaixado']);
  const itens = getOrCreateSheet_(ss, SHEET_ITENS, ['pedidoId', 'produtoId', 'produtoNome', 'categoria', 'qtd', 'precoVenda', 'custoCompra', 'totalVenda', 'totalCusto', 'lucro', 'reposicao']);

  sincronizarProdutosIniciais_(produtos);

  [produtos, pedidos, itens].forEach(sheet => sheet.setFrozenRows(1));
  pedidos.getRange('B:B').setNumberFormat('dd/MM/yyyy HH:mm');
  pedidos.getRange('L:L').setNumberFormat('dd/MM/yyyy HH:mm');
  produtos.autoResizeColumns(1, 9);
  pedidos.autoResizeColumns(1, 13);
  itens.autoResizeColumns(1, 11);
}

function sincronizarProdutosIniciais_(sheet) {
  const values = sheet.getDataRange().getValues();
  const headers = values[0] || ['id', 'nome', 'categoria', 'precoVenda', 'custoCompra', 'estoqueInicial', 'estoqueAtual', 'ativo', 'imagem'];
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  const existingIds = new Set(values.slice(1).map(row => String(row[idx.id])).filter(Boolean));
  const rows = PRODUTOS_INICIAIS
    .filter(product => !existingIds.has(String(product.id)))
    .map(product => [
      product.id,
      product.nome,
      product.categoria,
      product.precoVenda,
      product.custoCompra,
      product.estoqueInicial,
      product.estoqueAtual,
      product.ativo,
      product.imagem
    ]);

  if (rows.length) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }
}


function doGet(e) {
  return handleRequest_(e.parameter || {});
}

function doPost(e) {
  const params = Object.assign({}, e.parameter || {});
  if (e.postData && e.postData.contents) {
    try { Object.assign(params, JSON.parse(e.postData.contents)); } catch (err) {}
  }
  return handleRequest_(params);
}

function handleRequest_(params) {
  const callback = sanitizeCallback_(params.callback);
  try {
    const action = params.action || 'lerDados';
    if (API_KEY && params.apiKey !== API_KEY) throw new Error('API key inválida.');

    let data;
    if (action === 'lerDados') data = montarDados_();
    else if (action === 'criarPedido') data = criarPedido_(JSON.parse(params.payload || '{}'));
    else if (action === 'atualizarStatus') data = atualizarStatus_(params.pedidoId, params.status);
    else if (action === 'excluirPedido') data = excluirPedido_(params.pedidoId);
    else if (action === 'salvarProduto') data = salvarProduto_(params.id, params.custoCompra, params.estoqueAtual);
    else throw new Error('Ação inválida.');

    return output_({ ok: true, ...data }, callback);
  } catch (error) {
    return output_({ ok: false, error: String(error.message || error) }, callback);
  }
}

function montarDados_() {
  const ss = SpreadsheetApp.getActive();
  const produtosSheet = getOrCreateSheet_(ss, SHEET_PRODUTOS, ['id', 'nome', 'categoria', 'precoVenda', 'custoCompra', 'estoqueInicial', 'estoqueAtual', 'ativo', 'imagem']);
  const pedidosSheet = getOrCreateSheet_(ss, SHEET_PEDIDOS, ['pedidoId', 'dataISO', 'clienteNome', 'telefone', 'status', 'origem', 'totalVenda', 'totalCusto', 'lucro', 'reposicao', 'qtdItens', 'atualizadoEm', 'estoqueBaixado']);
  const itensSheet = getOrCreateSheet_(ss, SHEET_ITENS, ['pedidoId', 'produtoId', 'produtoNome', 'categoria', 'qtd', 'precoVenda', 'custoCompra', 'totalVenda', 'totalCusto', 'lucro', 'reposicao']);
  sincronizarProdutosIniciais_(produtosSheet);

  const produtosRows = getRows_(produtosSheet);
  const pedidosRows = getRows_(pedidosSheet);
  const itensRows = getRows_(itensSheet);

  const itensPorPedido = itensRows.reduce((map, item) => {
    const pedidoId = item.pedidoId;
    if (!map[pedidoId]) map[pedidoId] = [];
    map[pedidoId].push({
      id: Number(item.produtoId),
      nome: item.produtoNome,
      categoria: item.categoria,
      qtd: Number(item.qtd || 0),
      precoVenda: Number(item.precoVenda || 0),
      custoCompra: Number(item.custoCompra || 0)
    });
    return map;
  }, {});

  return {
    produtos: produtosRows.map(p => ({
      id: Number(p.id),
      nome: p.nome,
      categoria: p.categoria,
      precoVenda: Number(p.precoVenda || 0),
      custoCompra: Number(p.custoCompra || 0),
      estoqueInicial: Number(p.estoqueInicial || 0),
      estoqueAtual: Number(p.estoqueAtual || 0),
      ativo: String(p.ativo).toLowerCase() !== 'false',
      imagem: p.imagem
    })),
    pedidos: pedidosRows.map(p => ({
      id: p.pedidoId,
      dataISO: p.dataISO,
      clienteNome: p.clienteNome,
      telefone: p.telefone,
      status: p.status,
      origem: p.origem,
      total: Number(p.totalVenda || 0),
      atualizadoEm: p.atualizadoEm,
      estoqueBaixado: String(p.estoqueBaixado).toLowerCase() === 'true',
      itens: itensPorPedido[p.pedidoId] || []
    }))
  };
}

function criarPedido_(pedido) {
  if (!pedido || !pedido.id) throw new Error('Pedido sem ID.');
  const ss = SpreadsheetApp.getActive();
  const pedidosSheet = ss.getSheetByName(SHEET_PEDIDOS);
  const itensSheet = ss.getSheetByName(SHEET_ITENS);
  const existentes = getRows_(pedidosSheet).map(row => String(row.pedidoId));
  if (existentes.includes(String(pedido.id))) return { mensagem: 'Pedido já registrado.' };

  const produtosMap = getProdutosMap_();
  let totalVenda = 0, totalCusto = 0, qtdItens = 0;
  const itensRows = (pedido.itens || []).map(item => {
    const produto = produtosMap[String(item.id)] || { custoCompra: 0 };
    const qtd = Number(item.qtd || 0);
    const precoVenda = Number(item.precoVenda || 0);
    const custoCompra = Number(produto.custoCompra || 0);
    const venda = precoVenda * qtd;
    const custo = custoCompra * qtd;
    totalVenda += venda;
    totalCusto += custo;
    qtdItens += qtd;
    return [pedido.id, item.id, item.nome, item.categoria, qtd, precoVenda, custoCompra, venda, custo, venda - custo, custo];
  });

  const dataPedido = pedido.dataISO ? new Date(pedido.dataISO) : new Date();
  pedidosSheet.appendRow([pedido.id, dataPedido, pedido.clienteNome || '', pedido.telefone || '', pedido.status || 'Pendente', pedido.origem || 'site', totalVenda, totalCusto, totalVenda - totalCusto, totalCusto, qtdItens, new Date(), false]);
  const lastPedidoRow = pedidosSheet.getLastRow();
  pedidosSheet.getRange(lastPedidoRow, 2).setNumberFormat('dd/MM/yyyy HH:mm');
  pedidosSheet.getRange(lastPedidoRow, 12).setNumberFormat('dd/MM/yyyy HH:mm');
  if (itensRows.length) itensSheet.getRange(itensSheet.getLastRow() + 1, 1, itensRows.length, itensRows[0].length).setValues(itensRows);
  return { pedidoId: pedido.id };
}

function atualizarStatus_(pedidoId, status) {
  if (!pedidoId) throw new Error('Pedido não informado.');
  if (!['Pendente', 'Pago', 'Cancelado'].includes(status)) throw new Error('Status inválido.');
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(SHEET_PEDIDOS);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  const rowIndex = values.findIndex((row, i) => i > 0 && String(row[idx.pedidoId]) === String(pedidoId));
  if (rowIndex < 0) throw new Error('Pedido não encontrado.');

  const oldStatus = values[rowIndex][idx.status];
  const estoqueBaixado = String(values[rowIndex][idx.estoqueBaixado]).toLowerCase() === 'true';
  if (oldStatus !== 'Pago' && status === 'Pago' && !estoqueBaixado) movimentarEstoque_(pedidoId, -1);
  if (oldStatus === 'Pago' && status !== 'Pago' && estoqueBaixado) movimentarEstoque_(pedidoId, 1);

  sheet.getRange(rowIndex + 1, idx.status + 1).setValue(status);
  sheet.getRange(rowIndex + 1, idx.atualizadoEm + 1).setValue(new Date().toISOString());
  sheet.getRange(rowIndex + 1, idx.estoqueBaixado + 1).setValue(status === 'Pago');
  return { pedidoId, status };
}


function excluirPedido_(pedidoId) {
  if (!pedidoId) throw new Error('Pedido não informado.');
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(SHEET_PEDIDOS);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  const rowIndex = values.findIndex((row, i) => i > 0 && String(row[idx.pedidoId]) === String(pedidoId));
  if (rowIndex < 0) throw new Error('Pedido não encontrado.');

  const status = values[rowIndex][idx.status];
  const estoqueBaixado = String(values[rowIndex][idx.estoqueBaixado]).toLowerCase() === 'true';
  if (status === 'Pago' && estoqueBaixado) movimentarEstoque_(pedidoId, 1);

  sheet.deleteRow(rowIndex + 1);
  return { pedidoId, excluido: true };
}


function salvarProduto_(id, custoCompra, estoqueAtual) {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(SHEET_PRODUTOS);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  const rowIndex = values.findIndex((row, i) => i > 0 && Number(row[idx.id]) === Number(id));
  if (rowIndex < 0) throw new Error('Produto não encontrado.');
  sheet.getRange(rowIndex + 1, idx.custoCompra + 1).setValue(Number(custoCompra || 0));
  sheet.getRange(rowIndex + 1, idx.estoqueAtual + 1).setValue(Number(estoqueAtual || 0));
  return { id: Number(id) };
}

function movimentarEstoque_(pedidoId, direction) {
  const ss = SpreadsheetApp.getActive();
  const produtosSheet = ss.getSheetByName(SHEET_PRODUTOS);
  const itens = getRows_(ss.getSheetByName(SHEET_ITENS)).filter(item => String(item.pedidoId) === String(pedidoId));
  const values = produtosSheet.getDataRange().getValues();
  const headers = values[0];
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  itens.forEach(item => {
    const rowIndex = values.findIndex((row, i) => i > 0 && Number(row[idx.id]) === Number(item.produtoId));
    if (rowIndex < 0) return;
    const current = Number(values[rowIndex][idx.estoqueAtual] || 0);
    const next = Math.max(0, current + direction * Number(item.qtd || 0));
    produtosSheet.getRange(rowIndex + 1, idx.estoqueAtual + 1).setValue(next);
  });
}

function getProdutosMap_() {
  return getRows_(SpreadsheetApp.getActive().getSheetByName(SHEET_PRODUTOS)).reduce((map, row) => {
    map[String(row.id)] = row;
    return map;
  }, {});
}

function getRows_(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values.shift();
  return values.filter(row => row.some(cell => cell !== '')).map(row => Object.fromEntries(headers.map((h, i) => [h, row[i]])));
}

function getOrCreateSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  return sheet;
}

function output_(data, callback) {
  const json = JSON.stringify(data);
  if (callback) return ContentService.createTextOutput(callback + '(' + json + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function sanitizeCallback_(value) {
  return value ? String(value).replace(/[^a-zA-Z0-9_$\.]/g, '') : '';
}
