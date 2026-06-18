PAINEL FINANCEIRO AUTOMÁTICO - LARAMINIMARIA

Arquivos adicionados:
- financeiro.html: painel administrativo visual.
- financeiro.css: estilo do painel.
- financeiro.js: lógica do painel e configuração da conexão.
- apps-script-financeiro.gs: script para conectar com Google Sheets.

Como funciona no ZIP:
1. Abra o site normalmente pelo index.html.
2. Adicione produtos ao carrinho.
3. Clique em Finalizar pelo WhatsApp.
4. O pedido é registrado como Pendente no painel financeiro.
5. Acesse financeiro.html.
6. Senha padrão: 1234.
7. Marque o pedido como Pago para calcular lucro e baixar estoque.

No modo local/demo, os dados ficam no navegador pelo localStorage.
Para ficar automático de verdade com Google Sheets:
1. Crie uma planilha Google em branco.
2. Vá em Extensões > Apps Script.
3. Cole o conteúdo do arquivo apps-script-financeiro.gs.
4. Execute setupFinanceiroLara uma vez.
5. Publique como Web App.
6. Copie a URL do Web App.
7. Cole essa URL em FINANCEIRO_WEB_APP_URL no index.html e no financeiro.js.

Importante:
- O site registra o pedido automaticamente quando o cliente clica em finalizar pelo WhatsApp.
- Como o pagamento ainda acontece fora do site, o painel deixa o pedido como Pendente.
- Quando a dona da loja confirmar que recebeu, ela marca como Pago.
- A partir disso, o painel calcula faturamento, reposição, lucro, produtos vendidos e estoque.
