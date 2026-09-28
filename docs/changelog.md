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

---
