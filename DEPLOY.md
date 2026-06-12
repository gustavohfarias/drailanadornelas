# 🚀 GUIA DE DEPLOY RÁPIDO

## ⏱️ CHECKLIST 5 MINUTOS

### ✅ Passo 1: Configurar Google Analytics (2 min)
```bash
# 1. Criar conta GA4 em https://analytics.google.com
# 2. Copiar o ID (formato: G-XXXXXXXXXX)
# 3. Substituir no arquivo:

# Abrir index.html e buscar (linha ~60):
G-XXXXXXXXXX

# Substituir por seu ID real, exemplo:
G-ABC123XYZ9
```

### ✅ Passo 2: Atualizar Domínio (1 min)
```bash
# Buscar e substituir em TODOS os arquivos:

# Em: index.html, sitemap.xml, robots.txt
Buscar:    https://drailanadornelas.com.br
Substituir: https://SEU_DOMINIO_REAL.com.br

# Exemplo:
https://ilanadornelasdermatologia.com.br
```

### ✅ Passo 3: Upload para servidor (1 min)
```bash
# Via FTP/SFTP ou painel de hospedagem:
1. Enviar TODOS os arquivos para pasta raiz (public_html)
2. Manter estrutura de pastas:
   ├── index.html
   ├── sitemap.xml
   ├── robots.txt
   ├── assets/
   │   ├── css/
   │   ├── js/
   │   └── images/

# Via Git (se usar Vercel/Netlify/Cloudflare Pages):
git add .
git commit -m "Deploy site otimizado"
git push origin main
```

### ✅ Passo 4: Google Search Console (1 min)
```bash
1. Acessar: https://search.google.com/search-console
2. Adicionar propriedade (seu domínio)
3. Verificar via HTML tag ou DNS
4. Enviar sitemap: https://SEU_DOMINIO/sitemap.xml
```

---

## 🎯 DEPLOY AUTOMÁTICO (Recomendado)

### Cloudflare Pages (GRÁTIS)
```bash
1. Criar conta em pages.cloudflare.com
2. Conectar repositório GitHub
3. Build settings:
   - Framework preset: None
   - Build command: (vazio)
   - Build output: /
4. Deploy! (automático a cada commit)
```

### Vercel (GRÁTIS)
```bash
1. Criar conta em vercel.com
2. Import Git Repository
3. Deploy (1 clique)
4. Domínio customizado: Settings → Domains
```

### Netlify (GRÁTIS)
```bash
1. Criar conta em netlify.com
2. Drag & drop a pasta do site
3. OU conectar Git repo
4. Deploy automático
```

---

## 📱 TESTE FINAL PÓS-DEPLOY

### 1. Performance
```
🔗 https://pagespeed.web.dev
   → Testar seu domínio
   ✅ Mobile: > 90
   ✅ Desktop: > 95
```

### 2. SEO
```
🔗 https://search.google.com/test/mobile-friendly
   → Verificar responsividade

🔗 https://validator.w3.org
   → Validar HTML
```

### 3. Open Graph
```
🔗 https://developers.facebook.com/tools/debug/
   → Testar preview no Facebook/WhatsApp
   
🔗 https://cards-dev.twitter.com/validator
   → Testar Twitter Card
```

### 4. Analytics
```
1. Abrir site
2. Apertar F12 → Console
3. Verificar se GA4 carregou:
   - Sem erros de CORS
   - gtag definido
4. Fazer teste de conversão:
   - Clicar "Agendar consulta"
   - Preencher formulário
   - Verificar evento no GA4 (24h depois)
```

---

## ⚠️ TROUBLESHOOTING

### Problema: Imagens não aparecem
```bash
✅ Verificar que pasta assets/ foi enviada
✅ Verificar permissões (chmod 755 para pastas)
✅ Verificar console do navegador (F12)
```

### Problema: WhatsApp não abre
```bash
✅ Número já configurado: 5511925243636
✅ Testar formato: https://wa.me/5511925243636
✅ Verificar se main.js carregou
```

### Problema: Formulário não valida
```bash
✅ Verificar que main.js foi carregado
✅ Abrir console (F12) e buscar erros
✅ Testar em modo anônimo (sem extensões)
```

### Problema: GA4 não rastreia
```bash
✅ ID correto? (formato G-XXXXXXXXXX)
✅ Script carregou? (verificar Network tab)
✅ Ad blocker desligado?
✅ Aguardar 24-48h para dados aparecerem
```

---

## 🔒 SEGURANÇA (Recomendado)

### SSL/HTTPS (OBRIGATÓRIO)
```bash
# Certificado gratuito via:
- Let's Encrypt (se VPS/dedicado)
- Cloudflare SSL (automático)
- Vercel/Netlify (automático)

✅ Forçar HTTPS:
   → Adicionar redirect no .htaccess
   → Ou configurar no painel da hospedagem
```

### Headers de Segurança
```bash
# Adicionar no .htaccess ou servidor:
Header set X-Frame-Options "SAMEORIGIN"
Header set X-Content-Type-Options "nosniff"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

---

## 📊 MONITORAMENTO CONTÍNUO

### Setup inicial (uma vez):
1. ✅ Google Analytics 4 (tráfego)
2. ✅ Google Search Console (SEO)
3. ⚠️ Cloudflare Analytics (performance)
4. ⚠️ Uptime Robot (disponibilidade)

### Revisar mensalmente:
- Taxa de conversão (formulário)
- Origem do tráfego (orgânico vs direto)
- Páginas mais visitadas
- Tempo médio na página

---

## 💰 CUSTOS

### GRÁTIS (Opção 1):
- Cloudflare Pages + domínio próprio
- SSL incluído
- CDN global
- Ilimitado bandwidth

### Básico (Opção 2):
- Hospedagem compartilhada: R$ 10-30/mês
- Domínio .com.br: R$ 40/ano
- SSL Let's Encrypt: GRÁTIS

### Premium (Opção 3):
- VPS: R$ 50-100/mês
- CDN Cloudflare Pro: $20/mês
- Backup automático

---

## ✅ CHECKLIST FINAL

Antes de considerar PRONTO:

- [ ] GA4 ID substituído e testado
- [ ] Domínio atualizado em todos os arquivos
- [ ] Site no ar e acessível via HTTPS
- [ ] Sitemap enviado ao Google Search Console
- [ ] Meta tags Open Graph testadas (Facebook debugger)
- [ ] Formulário testado (envio para WhatsApp)
- [ ] Mobile testado em iPhone/Android real
- [ ] PageSpeed score > 90 mobile
- [ ] Sem erros no console do navegador

---

🎉 **PRONTO PARA PRODUÇÃO!**

Qualquer dúvida, revisar `MELHORIAS.md` para detalhes técnicos.
