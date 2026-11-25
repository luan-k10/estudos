# Estudos — central de matérias

Página inicial para escolher o que estudar. Está organizada por **áreas**; cada área lista as suas matérias com o progresso salvo e atalhos diretos para cada seção.

**Acesse:** https://luan-k10.github.io/estudos/

## Áreas e matérias

| Área | Matéria | Site |
|---|---|---|
| [Engenharia](https://luan-k10.github.io/estudos/engenharia/) | Programação Distribuída e Paralela | https://luan-k10.github.io/estudo-programacao-distribuida/ |
| [Engenharia](https://luan-k10.github.io/estudos/engenharia/) | Avaliação e Desempenho de Sistemas Computacionais | https://luan-k10.github.io/estudo-avaliacao-desempenho/ |

## Como funciona

- A página inicial mostra as áreas; o botão **Engenharia →** abre as matérias dessa área.
- Cada cartão mostra quantas questões você respondeu e a sua taxa de acerto.
- "Seu progresso" soma o total respondido, o acerto e as questões para revisar.
- Os atalhos abrem a matéria direto em Resumos, Quiz, Simulado, Flashcards etc.
- Os sites das matérias têm o botão **← Matérias**, que volta para a área; a página da área tem **← Áreas**.
- O tema claro/escuro é compartilhado entre todas as páginas.

### Adicionar uma área nova

Crie uma pasta (ex.: `administracao/`) copiando `engenharia/index.html`. Depois adicione um cartão `.area` em `index.html` com `data-subjects="chave-progresso:total,..."`.

## Tecnologia

HTML, CSS e JavaScript puros, sem dependências. O progresso é lido do `localStorage` do navegador, que é compartilhado pelos sites em `luan-k10.github.io`. O visual segue o padrão do portfólio.
