# Changelog — drailanadornelas (site)

Todas as mudanças notáveis deste projeto.
Formato: [Keep a Changelog](https://keepachangelog.com/) + SemVer.

## [Unreleased]

### Changed
- `avaliacao-dermatologica-sao-paulo/index.html`: H1 alterado de "Avaliação Dermatológica em São Paulo" para "Dermatologista no Itaim Bibi e em Moema, São Paulo" — motivo: análise da Google Ads API (projeto `ilana-dornelas-ads`) apontou Quality Score baixo (2-3/10) em palavras-chave locais (dermatologista perto de mim, clinica dermatologica moema, dermatologista itaim bibi), consumindo 55% do orçamento de anúncios. Causa raiz: "Experiência da página" abaixo da média — H1 genérico não citava bairro (2026-09-28)

### Added
- Mapas do Google incorporados (iframe) nos cards de localização de Itaim Bibi e Moema, na mesma página (2026-09-28)
- Dado estruturado `MedicalClinic` (JSON-LD) com nome, endereço e telefone das duas unidades, na mesma página (2026-09-28)

### Deploy
- Publicado em produção (commit b5264ea, push 2026-09-28) — confirmado ao vivo via curl: H1 novo, 2 mapas, 2 blocos MedicalClinic presentes em drailanadornelas.com.br/avaliacao-dermatologica-sao-paulo/

## [Unreleased] (continuação, mesmo dia)

### Changed
- `queda-de-cabelo-sao-paulo/index.html`: mesma correção aplicada na página de tricologia (grupo de anúncios que já converte melhor, R$58,45/conv vs R$111,64/conv) — H1 "Queda de Cabelo em São Paulo" → "Tricologista no Itaim Bibi e em Moema, São Paulo" (2026-09-28)

### Added
- Mapas do Google incorporados nos cards de Itaim Bibi/Moema em `queda-de-cabelo-sao-paulo/index.html` (2026-09-28)
- Schema `MedicalClinic` (JSON-LD) nas duas unidades em `queda-de-cabelo-sao-paulo/index.html` (2026-09-28)

## [Unreleased] (revisão geral do site, mesmo dia)

### Changed
- `index.html`: schema.org reestruturado de `Person` isolado (só com endereço do Itaim Bibi) para `@graph` com Person + 2 `MedicalClinic` (Itaim Bibi e Moema) — home não citava a unidade Moema no dado estruturado, apesar de citar visualmente (2026-09-28)

### Removed
- 4 PNGs de logo não utilizados (`logo_light_solo.png`, `logo_light_horizontal.png`, `logo_dark_solo.png`, `logo_dark_horizontal.png`, 1,6MB total) — não eram referenciados em nenhuma página (logo real é SVG inline), só ocupavam espaço no repo (2026-09-28)

### Nota (revisão, nada a mudar)
- Home já tinha mapas incorporados e seção de localização completa (WhatsApp por unidade, CEP) — mais robusta que as landing pages tinham antes da correção de hoje
- GA4 ID substituído corretamente (sem placeholder G-XXXXXXXXXX), viewport/canonical/alt-text ok, sem placeholder esquecido

## [Unreleased] (auditoria de design vs. manual de marca, 2026-09-29)

Auditado contra `manual_marca_ID_v2.pdf` (No-No List, seção 09). Peso tipográfico do H1 (300, sem bold) e famílias de fonte (só Cormorant + Montserrat) já estavam corretos — sem mudança nesses pontos.

### Fixed
- Fundo branco puro (`#fff`) trocado por Cream (`#FAF8F5`) em `.tec-card`/`.tec-media` (index.html) e `.lp-card`/`.lp-cta h2` (avaliacao-dermatologica-sao-paulo e queda-de-cabelo-sao-paulo) — manual proíbe branco puro como fundo
- Gradientes fora da paleta em `assets/css/style.css`: `.esp-card-bg--laser` (era verde `#9eb0a8`→`#7a9088`) agora dourado (`#D4B896`→`#B8976A`); `.esp-card-bg--skincare` (era roxo `#c2b5c8`→`#9a8aa0`) agora dourado escuro (`#8B6F47`→`#1A1410`) — manual proíbe tons de verde/roxo/azul

### Not changed (exceção justificada)
- Botão flutuante de WhatsApp mantém o verde oficial da marca WhatsApp (`#25D366`) — tecnicamente contraria a regra "nunca verde" do manual, mas é padrão de mercado pra reconhecimento do botão; decidido manter

---
