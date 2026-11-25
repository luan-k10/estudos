(() => {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  $("#ano").textContent = new Date().getFullYear();

  $("#theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    store.set("theme", next);
  });

  // Os sites das matérias ficam no mesmo domínio, então o progresso salvo por eles é lido aqui.
  function ler(key, total) {
    let prog = {};
    try { prog = JSON.parse(store.get(key)) || {}; } catch { prog = {}; }
    const vals = Object.entries(prog).filter(([k]) => +k < total).map(([, v]) => v);
    const certas = vals.filter(v => v === 1).length;
    return { feitas: vals.length, certas, erradas: vals.length - certas, total };
  }

  function render() {
    let feitas = 0, certas = 0, erradas = 0;
    $$(".subject").forEach(card => {
      const p = ler(card.dataset.key, +card.dataset.total);
      feitas += p.feitas; certas += p.certas; erradas += p.erradas;
      $(".bar > div", card).style.width = (p.feitas * 100 / p.total) + "%";
      $(".prog-text", card).textContent = p.feitas
        ? `${p.feitas}/${p.total} questões respondidas · ${Math.round(p.certas * 100 / p.feitas)}% de acerto`
        : "Você ainda não começou.";
    });
    $("#st-total").textContent = feitas;
    $("#st-acerto").textContent = (feitas ? Math.round(certas * 100 / feitas) : 0) + "%";
    $("#st-erradas").textContent = erradas;
    $("#st-dica").classList.toggle("hidden", feitas > 0);
  }

  render();
  // Ao voltar de uma matéria pelo botão "voltar" do navegador, atualiza os números.
  window.addEventListener("pageshow", render);
  window.addEventListener("storage", render);
})();
