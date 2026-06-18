const FINANCEIRO_WEB_APP_URL = ""; // Cole aqui a URL do Web App do Apps Script para conectar com Google Sheets.
const FINANCEIRO_API_KEY = "LARA-MINIMARIA-2026";
const ADMIN_PIN = "1234";

const DEFAULT_PRODUCTS = [
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

const STORAGE_PRODUCTS = "laraminimariaFinanceiroProdutosV1";
const STORAGE_ORDERS = "laraminimariaFinanceiroPedidosV1";
const SESSION_KEY = "laraminimariaFinanceiroSessao";

let state = {
  produtos: [],
  pedidos: [],
  statusFilter: "Todos",
  orderSearch: "",
  productSearch: "",
  heroValueHidden: false,
  remote: Boolean(FINANCEIRO_WEB_APP_URL)
};

const formatCurrency = value => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const formatDate = value => value ? new Date(value).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" }) : "-";
const normalize = value => String(value || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const moneyNumber = value => Number(String(value || "0").replace(/\./g, "").replace(",", ".")) || 0;

function showToast(message) {
  const toast = document.getElementById("financeToast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}


function updateHeroTotalVisibility() {
  const total = document.getElementById("heroTotal");
  const button = document.getElementById("toggleHeroTotal");
  const box = total ? total.closest(".hero-box") : null;
  if (!total || !button || !box) return;

  if (!total.dataset.visibleValue) total.dataset.visibleValue = total.textContent;
  box.classList.toggle("is-hidden", state.heroValueHidden);
  total.textContent = state.heroValueHidden ? "••••••" : total.dataset.visibleValue;
  button.setAttribute("aria-pressed", String(state.heroValueHidden));
  button.setAttribute("aria-label", state.heroValueHidden ? "Mostrar faturamento" : "Esconder faturamento");
}

function toggleHeroTotalVisibility() {
  state.heroValueHidden = !state.heroValueHidden;
  updateHeroTotalVisibility();
}


function mergeDefaultProducts(savedProducts = []) {
  const savedById = new Map(savedProducts.map(product => [String(product.id), product]));
  const merged = DEFAULT_PRODUCTS.map(defaultProduct => {
    const saved = savedById.get(String(defaultProduct.id));
    return saved ? {
      ...defaultProduct,
      custoCompra: saved.custoCompra ?? defaultProduct.custoCompra,
      estoqueInicial: saved.estoqueInicial ?? defaultProduct.estoqueInicial,
      estoqueAtual: saved.estoqueAtual ?? defaultProduct.estoqueAtual,
      ativo: saved.ativo ?? defaultProduct.ativo
    } : defaultProduct;
  });

  savedProducts.forEach(product => {
    if (!DEFAULT_PRODUCTS.some(defaultProduct => String(defaultProduct.id) === String(product.id))) {
      merged.push(product);
    }
  });

  return merged;
}

function syncLocalProductsWithDefaults() {
  const savedProducts = JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || "[]");
  const mergedProducts = mergeDefaultProducts(Array.isArray(savedProducts) ? savedProducts : []);
  localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(mergedProducts));
  return mergedProducts;
}

function initLocalData() {
  syncLocalProductsWithDefaults();
  if (!localStorage.getItem(STORAGE_ORDERS)) {
    localStorage.setItem(STORAGE_ORDERS, JSON.stringify([]));
  }
}

function readLocalData() {
  initLocalData();
  state.produtos = syncLocalProductsWithDefaults();
  state.pedidos = JSON.parse(localStorage.getItem(STORAGE_ORDERS) || "[]");
}

function saveLocalData() {
  localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(state.produtos));
  localStorage.setItem(STORAGE_ORDERS, JSON.stringify(state.pedidos));
}

function jsonp(action, params = {}) {
  return new Promise((resolve, reject) => {
    if (!FINANCEIRO_WEB_APP_URL) { reject(new Error("Web App URL não configurada")); return; }
    const callback = `cb_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const search = new URLSearchParams({ action, apiKey: FINANCEIRO_API_KEY, callback, ...params });
    window[callback] = data => {
      delete window[callback];
      script.remove();
      resolve(data);
    };
    script.onerror = () => {
      delete window[callback];
      script.remove();
      reject(new Error("Falha ao conectar com o Google Sheets"));
    };
    script.src = `${FINANCEIRO_WEB_APP_URL}?${search.toString()}`;
    document.body.appendChild(script);
  });
}

async function loadData() {
  if (FINANCEIRO_WEB_APP_URL) {
    try {
      const data = await jsonp("lerDados");
      state.produtos = Array.isArray(data.produtos) ? data.produtos : [];
      state.pedidos = Array.isArray(data.pedidos) ? data.pedidos : [];
      state.remote = true;
      renderAll();
      return;
    } catch (error) {
      console.warn(error);
      showToast("Usando dados locais porque a conexão falhou");
    }
  }
  state.remote = false;
  readLocalData();
  renderAll();
}

function productById(id) {
  return state.produtos.find(product => Number(product.id) === Number(id));
}

function orderTotals(order) {
  return (order.itens || []).reduce((totals, item) => {
    const product = productById(item.id) || { custoCompra: 0, precoVenda: item.precoVenda || 0 };
    const qtd = Number(item.qtd || 0);
    const vendaUnit = Number(item.precoVenda ?? product.precoVenda ?? 0);
    const custoUnit = Number(product.custoCompra || 0);
    totals.qtd += qtd;
    totals.venda += vendaUnit * qtd;
    totals.reposicao += custoUnit * qtd;
    return totals;
  }, { venda: 0, reposicao: 0, qtd: 0, lucro: 0 });
}

function paidOrders() { return state.pedidos.filter(order => order.status === "Pago"); }

function getSummary() {
  const pagos = paidOrders();
  const totals = pagos.reduce((acc, order) => {
    const t = orderTotals(order);
    acc.venda += t.venda;
    acc.reposicao += t.reposicao;
    acc.qtd += t.qtd;
    return acc;
  }, { venda: 0, reposicao: 0, qtd: 0 });
  totals.lucro = totals.venda - totals.reposicao;
  totals.pendentes = state.pedidos.filter(order => order.status === "Pendente").length;
  totals.pagos = pagos.length;
  totals.estoqueBaixo = state.produtos.filter(product => Number(product.estoqueAtual || 0) <= 1).length;
  return totals;
}

function renderSummary() {
  const s = getSummary();
  const heroTotal = document.getElementById("heroTotal");
  if (heroTotal) {
    heroTotal.dataset.visibleValue = formatCurrency(s.venda);
    heroTotal.textContent = formatCurrency(s.venda);
  }
  document.getElementById("summaryCards").innerHTML = `
    <article class="summary-card"><span>Faturamento</span><strong>${formatCurrency(s.venda)}</strong></article>
    <article class="summary-card"><span>Lucro</span><strong class="${s.lucro < 0 ? "loss" : "profit"}">${formatCurrency(s.lucro)}</strong></article>
    <article class="summary-card"><span>Reposição</span><strong class="replace">${formatCurrency(s.reposicao)}</strong></article>
    <article class="summary-card"><span>Pendentes</span><strong>${s.pendentes}</strong></article>
    <article class="summary-card"><span>Pagos</span><strong>${s.pagos}</strong></article>
    <article class="summary-card"><span>Itens vendidos</span><strong>${s.qtd}</strong></article>
  `;
  updateHeroTotalVisibility();
}


function cleanOrderCode(value) {
  return normalize(value).replace(/[^a-z0-9]/g, "");
}

function generateShortOrderId(prefix = "P") {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const existing = new Set(state.pedidos.map(order => String(order.id || "").toUpperCase()));
  let code = "";
  let tries = 0;
  do {
    code = Array.from({ length: 4 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
    tries += 1;
  } while (existing.has(`${prefix}-${code}`) && tries < 20);
  return `${prefix}-${code}`;
}

function findOrderByCode(value) {
  const code = cleanOrderCode(value);
  if (!code) return null;
  return state.pedidos.find(order => cleanOrderCode(order.id) === code)
    || state.pedidos.find(order => cleanOrderCode(order.id).includes(code));
}

function filteredOrders() {
  const code = cleanOrderCode(state.orderSearch);
  return state.pedidos
    .filter(order => state.statusFilter === "Todos" || order.status === state.statusFilter)
    .filter(order => !code || cleanOrderCode(order.id).includes(code))
    .sort((a, b) => new Date(b.dataISO || 0) - new Date(a.dataISO || 0));
}

function renderOrders() {
  const orders = filteredOrders();
  const body = document.getElementById("ordersTable");
  if (!orders.length) {
    body.innerHTML = `<tr><td colspan="8" class="empty-row">Nenhum pedido encontrado. Busque outro código ou finalize um carrinho no site.</td></tr>`;
    return;
  }
  body.innerHTML = orders.map(order => {
    const totals = orderTotals(order);
    const lucro = totals.venda - totals.reposicao;
    const itensText = (order.itens || []).map(item => `${item.qtd}x ${item.nome}`).join("<br>");
    return `
      <tr>
        <td><strong class="order-code">${order.id}</strong><br><small>${order.origem || "site"}</small></td>
        <td>${formatDate(order.dataISO)}</td>
        <td>${itensText || "-"}</td>
        <td class="money">${formatCurrency(totals.venda)}</td>
        <td class="money replace">${formatCurrency(totals.reposicao)}</td>
        <td class="money ${lucro < 0 ? "loss" : "profit"}">${formatCurrency(lucro)}</td>
        <td><span class="status ${order.status}">${order.status}</span></td>
        <td>
          <div class="row-actions">
            <button type="button" data-status="Pago" data-order="${order.id}">Pago</button>
            <button type="button" class="pending" data-status="Pendente" data-order="${order.id}">Pendente</button>
            <button type="button" class="cancel" data-status="Cancelado" data-order="${order.id}">Cancelar</button>
            <button type="button" class="delete" data-delete-order="${order.id}" aria-label="Excluir pedido ${order.id}">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"></path>
                <path d="M8 6V4h8v2"></path>
                <path d="M19 6l-1 15H6L5 6"></path>
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("\n");
}

function rankingData() {
  const ranking = new Map();
  paidOrders().forEach(order => {
    (order.itens || []).forEach(item => {
      const current = ranking.get(item.id) || { id: item.id, nome: item.nome, qtd: 0, total: 0 };
      current.qtd += Number(item.qtd || 0);
      current.total += Number(item.precoVenda || 0) * Number(item.qtd || 0);
      ranking.set(item.id, current);
    });
  });
  return Array.from(ranking.values()).sort((a,b) => b.qtd - a.qtd || b.total - a.total).slice(0, 6);
}

function renderRanking() {
  const data = rankingData();
  const el = document.getElementById("rankingList");
  if (!data.length) {
    el.innerHTML = `<div class="empty-row">Produtos pagos aparecerão aqui.</div>`;
    return;
  }
  el.innerHTML = data.map((item, index) => `
    <div class="ranking-item">
      <span class="ranking-pos">${index + 1}</span>
      <div><strong>${item.nome}</strong><span>${formatCurrency(item.total)} em vendas</span></div>
      <em>${item.qtd} un.</em>
    </div>
  `).join("");
}

function filteredProducts() {
  const term = normalize(state.productSearch);
  return state.produtos.filter(product => !term || normalize(product.nome + " " + product.categoria).includes(term));
}

function renderProducts() {
  const products = filteredProducts();
  const body = document.getElementById("productsTable");
  body.innerHTML = products.map(product => {
    const venda = Number(product.precoVenda || 0);
    const custo = Number(product.custoCompra || 0);
    const lucro = venda - custo;
    const estoque = Number(product.estoqueAtual || 0);
    return `
      <tr>
        <td>
          <div class="product-cell">
            <img src="${product.imagem || "./imagens/perfume-placeholder.svg"}" alt="${product.nome}" onerror="this.src='./imagens/perfume-placeholder.svg'">
            <div><strong>${product.nome}</strong><span>${product.categoria}</span></div>
          </div>
        </td>
        <td class="money">${formatCurrency(venda)}</td>
        <td><input class="product-input" type="text" value="${String(custo.toFixed(2)).replace(".", ",")}" data-cost="${product.id}"></td>
        <td class="money ${lucro < 0 ? "loss" : "profit"}">${formatCurrency(lucro)}</td>
        <td><input class="product-input" type="number" min="0" step="1" value="${estoque}" data-stock="${product.id}"></td>
        <td><span class="stock-pill ${estoque <= 1 ? "low-stock" : ""}">${estoque <= 1 ? "Baixo" : "OK"}</span></td>
        <td><button class="product-save" type="button" data-save-product="${product.id}">Salvar</button></td>
      </tr>
    `;
  }).join("");
}

function renderModeNotice() {
  const el = document.getElementById("modeNotice");
  if (state.remote) {
    el.innerHTML = `<strong>Conectado ao Google Sheets.</strong> Os pedidos e alterações estão sendo lidos do Web App configurado.`;
  } else {
    el.innerHTML = `<strong>Modo demonstração/local.</strong> O painel já funciona para visualização no navegador. Para ficar automático de verdade, publique o arquivo <strong>apps-script-financeiro.gs</strong> no Google Apps Script e cole a URL em <strong>index.html</strong> e <strong>financeiro.js</strong>.`;
  }
}

function renderAll() {
  renderModeNotice();
  renderSummary();
  renderOrders();
  renderRanking();
  renderProducts();
}

function moveStockForOrder(order, direction) {
  (order.itens || []).forEach(item => {
    const product = productById(item.id);
    if (!product) return;
    product.estoqueAtual = Math.max(0, Number(product.estoqueAtual || 0) + direction * Number(item.qtd || 0));
  });
}

async function updateOrderStatus(orderId, status) {
  if (FINANCEIRO_WEB_APP_URL) {
    try {
      await jsonp("atualizarStatus", { pedidoId: orderId, status });
      await loadData();
      showToast("Status atualizado no Google Sheets");
      return;
    } catch (error) { showToast("Falha ao atualizar no Google Sheets"); }
  }
  const order = state.pedidos.find(item => item.id === orderId);
  if (!order) return;
  const oldStatus = order.status;
  if (oldStatus !== "Pago" && status === "Pago") moveStockForOrder(order, -1);
  if (oldStatus === "Pago" && status !== "Pago") moveStockForOrder(order, 1);
  order.status = status;
  order.atualizadoEm = new Date().toISOString();
  saveLocalData();
  renderAll();
  showToast("Status atualizado");
}


async function deleteOrder(orderId) {
  const order = state.pedidos.find(item => item.id === orderId);
  if (!order) return;

  const confirmed = window.confirm(`Excluir o pedido ${orderId}?`);
  if (!confirmed) return;

  if (FINANCEIRO_WEB_APP_URL) {
    try {
      await jsonp("excluirPedido", { pedidoId: orderId });
      await loadData();
      showToast("Pedido excluído do Google Sheets");
      return;
    } catch (error) {
      showToast("Falha ao excluir no Google Sheets");
    }
  }

  if (order.status === "Pago") moveStockForOrder(order, 1);
  state.pedidos = state.pedidos.filter(item => item.id !== orderId);
  saveLocalData();
  renderAll();
  showToast("Pedido excluído");
}


async function saveProduct(productId) {
  const product = productById(productId);
  if (!product) return;
  const costInput = document.querySelector(`[data-cost="${productId}"]`);
  const stockInput = document.querySelector(`[data-stock="${productId}"]`);
  const custoCompra = moneyNumber(costInput.value);
  const estoqueAtual = Math.max(0, Number(stockInput.value || 0));
  if (FINANCEIRO_WEB_APP_URL) {
    try {
      await jsonp("salvarProduto", { id: productId, custoCompra, estoqueAtual });
      await loadData();
      showToast("Produto atualizado no Google Sheets");
      return;
    } catch (error) { showToast("Falha ao salvar no Google Sheets"); }
  }
  product.custoCompra = custoCompra;
  product.estoqueAtual = estoqueAtual;
  saveLocalData();
  renderAll();
  showToast("Produto atualizado");
}


function markSearchedOrderAsPaid() {
  const input = document.getElementById("orderSearch");
  const order = findOrderByCode(input ? input.value : "");
  if (!input || !input.value.trim()) {
    showToast("Digite o código do pedido");
    return;
  }
  if (!order) {
    showToast("Pedido não encontrado");
    return;
  }
  state.statusFilter = "Todos";
  const filter = document.getElementById("statusFilter");
  if (filter) filter.value = "Todos";
  input.value = order.id;
  state.orderSearch = order.id;
  updateOrderStatus(order.id, "Pago");
}

function reportWindow(title, subtitle, contentHTML) {
  const oldFrame = document.getElementById("financePrintFrame");
  if (oldFrame) oldFrame.remove();

  const frame = document.createElement("iframe");
  frame.id = "financePrintFrame";
  frame.style.position = "fixed";
  frame.style.right = "0";
  frame.style.bottom = "0";
  frame.style.width = "0";
  frame.style.height = "0";
  frame.style.border = "0";
  frame.style.opacity = "0";
  frame.setAttribute("aria-hidden", "true");
  document.body.appendChild(frame);

  const date = new Date().toLocaleString("pt-BR");
  const doc = frame.contentWindow && frame.contentWindow.document;
  if (!doc) {
    showToast("Não foi possível abrir o PDF");
    frame.remove();
    return;
  }

  doc.open();
  doc.write(`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
  @page { size: A4 landscape; margin: 10mm; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #121018; background: #fff; }
  .report-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; border-bottom: 2px solid #ffe4ef; padding-bottom: 12px; margin-bottom: 14px; }
  h1 { margin: 0 0 5px; font-size: 22px; }
  p { margin: 0; color: #5f5a68; font-size: 12px; }
  .stamp { text-align: right; font-size: 11px; color: #5f5a68; white-space: nowrap; }
  table { width: 100%; border-collapse: collapse; font-size: 10.5px; }
  th, td { border-bottom: 1px solid #eadfeb; padding: 7px 6px; text-align: left; vertical-align: top; }
  th { background: #fcf7fb; color: #5f5a68; text-transform: uppercase; letter-spacing: .04em; font-size: 9px; }
  .money { white-space: nowrap; font-weight: 700; }
  @media print { body { padding: 0; } }
</style>
</head>
<body>
  <div class="report-head">
    <div><h1>${title}</h1><p>${subtitle}</p></div>
    <div class="stamp">Laraminimaria<br>${date}</div>
  </div>
  ${contentHTML}
</body>
</html>`);
  doc.close();

  setTimeout(() => {
    try {
      frame.contentWindow.focus();
      frame.contentWindow.print();
      showToast("Escolha salvar como PDF");
    } catch (error) {
      showToast("Não foi possível gerar o PDF");
    }
    setTimeout(() => frame.remove(), 1600);
  }, 300);
}

function exportOrdersPdf() {
  const orders = filteredOrders();
  if (!orders.length) {
    showToast("Nenhum pedido para exportar");
    return;
  }
  const rows = orders.map(order => {
    const totals = orderTotals(order);
    const lucro = totals.venda - totals.reposicao;
    const itens = (order.itens || []).map(item => `${item.qtd}x ${item.nome}`).join("<br>") || "-";
    return `<tr>
      <td><strong>${order.id}</strong><br>${order.origem || "site"}</td>
      <td>${formatDate(order.dataISO)}</td>
      <td>${itens}</td>
      <td class="money">${formatCurrency(totals.venda)}</td>
      <td class="money">${formatCurrency(totals.reposicao)}</td>
      <td class="money">${formatCurrency(lucro)}</td>
      <td>${order.status}</td>
    </tr>`;
  }).join("");
  reportWindow("Relatório de pedidos", "Exportação dos pedidos filtrados no painel.", `<table><thead><tr><th>Pedido</th><th>Data</th><th>Itens</th><th>Venda</th><th>Reposição</th><th>Lucro</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`);
}

function exportProductsPdf() {
  const products = filteredProducts();
  if (!products.length) {
    showToast("Nenhum produto para exportar");
    return;
  }
  const rows = products.map(product => {
    const venda = Number(product.precoVenda || 0);
    const custo = Number(product.custoCompra || 0);
    const lucro = venda - custo;
    const estoque = Number(product.estoqueAtual || 0);
    return `<tr>
      <td><strong>${product.nome}</strong><br>${product.categoria || "-"}</td>
      <td class="money">${formatCurrency(venda)}</td>
      <td class="money">${formatCurrency(custo)}</td>
      <td class="money">${formatCurrency(lucro)}</td>
      <td>${estoque}</td>
      <td>${estoque <= 1 ? "Baixo" : "OK"}</td>
    </tr>`;
  }).join("");
  reportWindow("Relatório de produtos", "Custo, estoque e margem dos produtos filtrados no painel.", `<table><thead><tr><th>Produto</th><th>Venda</th><th>Custo</th><th>Lucro un.</th><th>Estoque</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`);
}

function createDemoOrder() {
  const sampleProducts = state.produtos.slice(0, 3).filter(Boolean);
  if (!sampleProducts.length) return;
  const first = sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
  const second = sampleProducts.find(p => p.id !== first.id);
  const itens = [first, second].filter(Boolean).slice(0, Math.random() > .5 ? 2 : 1).map((product, index) => ({
    id: product.id,
    nome: product.nome,
    categoria: product.categoria,
    qtd: index === 0 ? 1 : 2,
    precoVenda: Number(product.precoVenda || 0),
    subtotal: Number(product.precoVenda || 0) * (index === 0 ? 1 : 2)
  }));
  const total = itens.reduce((sum, item) => sum + item.subtotal, 0);
  const order = {
    id: generateShortOrderId("T"),
    dataISO: new Date().toISOString(),
    origem: "teste",
    status: "Pendente",
    total,
    itens
  };
  state.pedidos.unshift(order);
  saveLocalData();
  renderAll();
  showToast("Pedido teste criado");
}

function exportCsv() {
  const lines = [["Pedido", "Data", "Status", "Produto", "Qtd", "Venda", "Reposicao", "Lucro"]];
  state.pedidos.forEach(order => {
    (order.itens || []).forEach(item => {
      const product = productById(item.id) || { custoCompra: 0 };
      const qtd = Number(item.qtd || 0);
      const venda = Number(item.precoVenda || 0) * qtd;
      const reposicao = Number(product.custoCompra || 0) * qtd;
      lines.push([order.id, formatDate(order.dataISO), order.status, item.nome, qtd, venda.toFixed(2), reposicao.toFixed(2), (venda - reposicao).toFixed(2)]);
    });
  });
  const csv = lines.map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(";")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `relatorio-financeiro-${new Date().toISOString().slice(0,10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}


function setActiveFinanceTab(tabName) {
  document.querySelectorAll("[data-tab-target]").forEach(button => {
    button.classList.toggle("active", button.dataset.tabTarget === tabName);
  });
  document.querySelectorAll("[data-tab-panel]").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.tabPanel === tabName);
  });
}

function setupEvents() {
  document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const pin = document.getElementById("pinInput").value.trim();
    if (pin !== ADMIN_PIN) { showToast("Senha incorreta"); return; }
    sessionStorage.setItem(SESSION_KEY, "1");
    showApp();
  });
  document.getElementById("logoutButton").addEventListener("click", () => { sessionStorage.removeItem(SESSION_KEY); location.reload(); });
  document.getElementById("syncButton").addEventListener("click", loadData);
  document.getElementById("toggleHeroTotal").addEventListener("click", toggleHeroTotalVisibility);
  document.querySelectorAll("[data-tab-target]").forEach(button => {
    button.addEventListener("click", () => setActiveFinanceTab(button.dataset.tabTarget));
  });
  document.getElementById("demoOrderButton").addEventListener("click", createDemoOrder);
  document.getElementById("markPaidButton").addEventListener("click", markSearchedOrderAsPaid);
  document.getElementById("exportOrdersPdfButton").addEventListener("click", exportOrdersPdf);
  document.getElementById("exportProductsPdfButton").addEventListener("click", exportProductsPdf);
  document.getElementById("exportButton").addEventListener("click", exportCsv);
  document.getElementById("orderSearch").addEventListener("input", event => { state.orderSearch = event.target.value; renderOrders(); });
  document.getElementById("orderSearch").addEventListener("keydown", event => { if (event.key === "Enter") markSearchedOrderAsPaid(); });
  document.getElementById("statusFilter").addEventListener("change", event => { state.statusFilter = event.target.value; renderOrders(); });
  document.getElementById("productSearch").addEventListener("input", event => { state.productSearch = event.target.value; renderProducts(); });
  document.addEventListener("click", event => {
    const statusButton = event.target.closest("[data-status][data-order]");
    if (statusButton) { updateOrderStatus(statusButton.dataset.order, statusButton.dataset.status); return; }
    const saveButton = event.target.closest("[data-save-product]");
    if (saveButton) { saveProduct(Number(saveButton.dataset.saveProduct)); return; }
    const deleteButton = event.target.closest("[data-delete-order]");
    if (deleteButton) { deleteOrder(deleteButton.dataset.deleteOrder); }
  });
}

function showApp() {
  document.getElementById("loginScreen").hidden = true;
  document.getElementById("app").hidden = false;
  loadData();
}

setupEvents();
if (sessionStorage.getItem(SESSION_KEY) === "1") showApp();
