/* ============================================================
   Manette S.A.S. — Mini-juegos del Mundial
   Juego 1: Tanda de penales · Juego 2: Memotest de banderas
   Sin dependencias. Bilingüe (sigue el switch ES/EN del cabezal).
   ============================================================ */
(function () {
  "use strict";

  var lang = document.body.getAttribute("data-lang") || "es";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function wait(ms) { return new Promise(function (r) { setTimeout(r, reduce ? Math.min(ms, 120) : ms); }); }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* Selecciones (código → nombre + colores) */
  var C = {
    URU: { es: "Uruguay", en: "Uruguay", c1: "#4AA3DF", c2: "#0A3D62" },
    BRA: { es: "Brasil", en: "Brazil", c1: "#009C3B", c2: "#FFDF00" },
    ARG: { es: "Argentina", en: "Argentina", c1: "#75AADB", c2: "#FFFFFF" },
    ESP: { es: "España", en: "Spain", c1: "#C60B1E", c2: "#FFC400" },
    FRA: { es: "Francia", en: "France", c1: "#0055A4", c2: "#EF4135" },
    ENG: { es: "Inglaterra", en: "England", c1: "#CF142B", c2: "#012169" },
    GER: { es: "Alemania", en: "Germany", c1: "#111111", c2: "#FFCC00" },
    NED: { es: "Países Bajos", en: "Netherlands", c1: "#FF6C00", c2: "#21468B" },
    POR: { es: "Portugal", en: "Portugal", c1: "#C8102E", c2: "#006600" },
    USA: { es: "Estados Unidos", en: "USA", c1: "#3C3B6E", c2: "#B22234" },
    ITA: { es: "Italia", en: "Italy", c1: "#0066CC", c2: "#FFFFFF" },
    MEX: { es: "México", en: "Mexico", c1: "#006847", c2: "#CE1126" },
    CRO: { es: "Croacia", en: "Croatia", c1: "#E7E7E7", c2: "#C8102E" },
    JPN: { es: "Japón", en: "Japan", c1: "#F0F0F0", c2: "#BC002D" }
  };
  var RIVALS = ["BRA", "ESP", "FRA", "ENG", "GER", "NED", "POR", "USA"];
  var MEMO_POOL = ["URU", "BRA", "ARG", "ESP", "FRA", "ENG", "GER", "NED", "POR", "USA", "ITA", "MEX", "CRO", "JPN"];

  function cname(code) { return C[code][lang] || C[code].es; }
  function shield(code, cls) {
    var t = C[code];
    return '<span class="shield ' + (cls || "") + '" style="background:linear-gradient(135deg,' + t.c1 + ' 50%,' + t.c2 + ' 50%)">' + code + '</span>';
  }

  var BALL =
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#F4F6FA" stroke="#0B0E14" stroke-width="0.9"/>' +
    '<polygon points="12,7.4 16,10.3 14.5,15 9.5,15 8,10.3" fill="#0B0E14"/>' +
    '<g stroke="#0B0E14" stroke-width="1" stroke-linecap="round">' +
    '<line x1="12" y1="7.4" x2="12" y2="1.6"/><line x1="16" y1="10.3" x2="21.6" y2="8.6"/>' +
    '<line x1="14.5" y1="15" x2="18.9" y2="19.7"/><line x1="9.5" y1="15" x2="5.1" y2="19.7"/>' +
    '<line x1="8" y1="10.3" x2="2.4" y2="8.6"/></g></svg>';
  var GLOVE =
    '<svg viewBox="0 0 48 48" fill="currentColor">' +
    '<rect x="10" y="22" width="28" height="20" rx="7"/>' +
    '<rect x="11" y="12" width="6.5" height="16" rx="3.25"/>' +
    '<rect x="19" y="9" width="6.5" height="19" rx="3.25"/>' +
    '<rect x="27" y="12" width="6.5" height="16" rx="3.25"/>' +
    '<rect x="34" y="16" width="6.5" height="14" rx="3.25"/>' +
    '<rect x="4" y="25" width="9" height="7" rx="3.5"/></svg>';
  var TARGET =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/></svg>';
  var TROPHY =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4Z"/><path d="M6 6H3.5a2.5 2.5 0 0 0 2.5 4M18 6h2.5a2.5 2.5 0 0 1-2.5 4"/></svg>';

  function header(k, ti, le) {
    document.getElementById("gKicker").textContent = k;
    document.getElementById("gTitle").textContent = ti;
    document.getElementById("gLead").textContent = le;
  }
  function backTxt() { return lang === "es" ? "← Volver al sitio" : "← Back to the site"; }
  function backLink() { return '<a class="game-back" href="index.html">' + backTxt() + '</a>'; }

  /* ============================================================
     JUEGO 1 — TANDA DE PENALES
     ============================================================ */
  function createPenales(root) {
    var alive = true, screen = "board", st = null;
    var T = {
      es: {
        kicker: "Mundial 2026 · Penales", title: "Tanda de penales",
        lead: "Uruguay en la tanda, al mejor de cinco. Cuando pateás, elegí dónde rematar; cuando le toca al rival, atajás vos.",
        pillShoot: "Pateás vos", pillSave: "Atajás vos",
        aimShoot: "Elegí dónde patear", aimSave: "Elegí hacia dónde tirarte",
        goalTag: "¡GOL!", savedTag: "¡Atajada!",
        youGoalSub: "La clavaste en un rincón.", youSavedSub: "El arquero adivinó el palo.",
        youSaveSub: "¡Volaste y la sacaste!", rivalGoalSub: "El rival no perdona.",
        roundTxt: "Ronda {n} de 5", sdTxt: "Muerte súbita · {n}",
        winTitle: "¡Uruguay gana la tanda!", loseTitle: "Uruguay queda afuera",
        winMsg: "La celeste pasa de ronda. Bancá los trapos.", loseMsg: "Se escapó en los penales. Habrá revancha.",
        finalScore: "Resultado final", replay: "Jugar de nuevo"
      },
      en: {
        kicker: "World Cup 2026 · Penalties", title: "Penalty shootout",
        lead: "Uruguay in the shootout, best of five. When you kick, pick where to shoot; when the rival shoots, you play keeper.",
        pillShoot: "You shoot", pillSave: "You save",
        aimShoot: "Pick where to shoot", aimSave: "Pick where to dive",
        goalTag: "GOAL!", savedTag: "Saved!",
        youGoalSub: "Buried it in the corner.", youSavedSub: "The keeper read the corner.",
        youSaveSub: "You flew across and saved it!", rivalGoalSub: "The rival makes no mistake.",
        roundTxt: "Round {n} of 5", sdTxt: "Sudden death · {n}",
        winTitle: "Uruguay wins the shootout!", loseTitle: "Uruguay is knocked out",
        winMsg: "La Celeste goes through. Let's go!", loseMsg: "Lost it on penalties. There'll be a rematch.",
        finalScore: "Final score", replay: "Play again"
      }
    };
    function L() { return T[lang]; }

    function freshState() {
      return {
        phase: "regular", kicker: "you",
        youShots: 0, cpuShots: 0, youScore: 0, cpuScore: 0,
        youRes: [], cpuRes: [], over: false, winner: null, busy: false,
        rivalCode: RIVALS[rnd(RIVALS.length)]
      };
    }
    function zonePos(z) { var col = z % 3, row = Math.floor(z / 3); return { x: (col + 0.5) / 3 * 100, y: (row + 0.5) / 2 * 100 }; }
    function setHeader() { header(L().kicker, L().title, L().lead); }
    function $(s) { return root.querySelector(s); }

    function renderBoard() {
      root.innerHTML =
        '<div class="scoreboard">' +
          '<div class="team you">' + shield("URU") + '<span class="team-name">' + cname("URU") + '</span></div>' +
          '<div class="score-center"><div class="score-nums" id="scoreNums">0 — 0</div><div class="score-round" id="scoreRound"></div></div>' +
          '<div class="team cpu"><span class="team-name">' + cname(st.rivalCode) + '</span>' + shield(st.rivalCode) + '</div>' +
        '</div>' +
        '<div class="tracks"><div class="track you" id="trackYou"></div><div class="track cpu" id="trackCpu"></div></div>' +
        '<div class="phase-row"><span class="phase-pill" id="phasePill"></span></div>' +
        '<div class="pitch">' +
          '<div class="goal" id="goal">' +
            '<div class="zones" id="zones">' +
              [0, 1, 2, 3, 4, 5].map(function (z) { return '<button class="zone" data-z="' + z + '" aria-label="zona ' + (z + 1) + '"></button>'; }).join("") +
            '</div>' +
            '<div class="keeper" id="keeper">' + GLOVE + '</div>' +
            '<div class="gameball" id="gameball">' + BALL + '</div>' +
            '<div class="flash" id="flash"></div>' +
          '</div>' +
          '<div class="grass"></div>' +
        '</div>' +
        '<p class="game-msg" id="gameMsg"></p>' +
        '<p class="game-sub" id="gameSub"></p>' +
        '<div class="game-controls">' + backLink() + '</div>';
      root.querySelectorAll(".zone").forEach(function (b) {
        b.addEventListener("click", function () { onZone(parseInt(b.getAttribute("data-z"), 10)); });
      });
      updateScore();
    }

    function updateScore() {
      $("#scoreNums").textContent = st.youScore + " — " + st.cpuScore;
      var upcoming = (st.kicker === "you" ? st.youShots : st.cpuShots) + 1;
      var rd = $("#scoreRound");
      if (st.phase === "sd") { rd.textContent = L().sdTxt.replace("{n}", upcoming - 5); rd.classList.add("sd"); }
      else { rd.textContent = L().roundTxt.replace("{n}", Math.min(upcoming, 5)); rd.classList.remove("sd"); }
      track("trackYou", st.youRes); track("trackCpu", st.cpuRes);
    }
    function track(id, arr) { $("#" + id).innerHTML = arr.map(function (r) { return '<span class="pip ' + (r ? "is-goal" : "is-miss") + '"></span>'; }).join(""); }
    function setMsg(h) { $("#gameMsg").innerHTML = h || ""; }
    function setSub(x) { $("#gameSub").textContent = x || ""; }
    function setPill(youKick) {
      var p = $("#phasePill");
      p.className = "phase-pill " + (youKick ? "shoot" : "save");
      p.innerHTML = (youKick ? TARGET : GLOVE) + "<span>" + (youKick ? L().pillShoot : L().pillSave) + "</span>";
    }

    function nextTurn() {
      if (!alive || st.over) return;
      st.busy = false;
      updateScore();
      var goal = $("#goal"), ball = $("#gameball"), keeper = $("#keeper"), flash = $("#flash");
      var youKick = st.kicker === "you";
      // reset sin animar
      ball.style.transition = "none"; keeper.style.transition = "none";
      ball.className = "gameball"; keeper.className = "keeper"; flash.className = "flash";
      ball.style.left = "50%"; ball.style.top = "118%"; ball.style.transform = "translate(-50%,-50%) rotate(0deg)";
      ball.classList.add(youKick ? "glow-you" : "glow-cpu");
      if (!youKick) ball.style.setProperty("--cpu-glow", C[st.rivalCode].c1);
      keeper.style.left = "50%"; keeper.style.top = "50%";
      if (!youKick) keeper.classList.add("you", "show");   // atajás vos → guantes ya en el arco
      void ball.offsetWidth; ball.style.transition = ""; keeper.style.transition = "";
      goal.className = "goal aim " + (youKick ? "shoot" : "save");
      setPill(youKick);
      setMsg(youKick ? L().aimShoot : L().aimSave);
      setSub("");
    }

    async function onZone(z) {
      if (!alive || !st || st.busy || st.over) return;
      var goal = $("#goal");
      if (!goal.classList.contains("aim")) return;
      st.busy = true;
      var youKick = st.kicker === "you";
      goal.className = "goal " + (youKick ? "shoot" : "save");
      setMsg("");
      var shotZone = youKick ? z : rnd(6);
      var diveZone = youKick ? rnd(6) : z;
      var ball = $("#gameball"), keeper = $("#keeper"), flash = $("#flash");
      keeper.classList.add("show");
      if (youKick) keeper.classList.remove("you");
      var dp = zonePos(diveZone); keeper.style.left = dp.x + "%"; keeper.style.top = dp.y + "%";
      var sp = zonePos(shotZone);
      await wait(40); if (!alive) return;
      ball.style.left = sp.x + "%"; ball.style.top = sp.y + "%";
      ball.style.transform = "translate(-50%,-50%) rotate(" + (youKick ? 540 : -540) + "deg)";
      await wait(640); if (!alive) return;

      var saved = shotZone === diveZone;
      if (saved) {
        flash.classList.add("is-saved");
        (youKick ? st.youRes : st.cpuRes).push(false);
        setMsg('<span class="tag-saved">' + L().savedTag + "</span>");
        setSub(youKick ? L().youSavedSub : L().youSaveSub);
      } else {
        flash.classList.add("is-goal");
        if (youKick) { st.youScore++; st.youRes.push(true); } else { st.cpuScore++; st.cpuRes.push(true); }
        setMsg('<span class="tag-goal">' + L().goalTag + "</span>");
        setSub(youKick ? L().youGoalSub : L().rivalGoalSub);
      }
      if (youKick) st.youShots++; else st.cpuShots++;
      track("trackYou", st.youRes); track("trackCpu", st.cpuRes);
      $("#scoreNums").textContent = st.youScore + " — " + st.cpuScore;

      var res = checkEnd();
      await wait(1150); if (!alive) return;
      if (res) { endGame(res); return; }
      st.kicker = youKick ? "cpu" : "you";
      nextTurn();
    }

    function checkEnd() {
      if (st.phase === "regular") {
        var yRem = 5 - st.youShots, cRem = 5 - st.cpuShots;
        if (st.youScore > st.cpuScore + cRem) return "you";
        if (st.cpuScore > st.youScore + yRem) return "cpu";
        if (st.youShots === 5 && st.cpuShots === 5) {
          if (st.youScore !== st.cpuScore) return st.youScore > st.cpuScore ? "you" : "cpu";
          st.phase = "sd";
        }
        return null;
      }
      if (st.youShots === st.cpuShots && st.youShots > 5 && st.youScore !== st.cpuScore) {
        return st.youScore > st.cpuScore ? "you" : "cpu";
      }
      return null;
    }

    function endGame(winner) {
      st.over = true; st.winner = winner; screen = "end";
      var win = winner === "you";
      root.innerHTML =
        '<div class="endcard ' + (win ? "win" : "lose") + '">' +
          (win ? '<div class="trophy">' + TROPHY + "</div>" : "") +
          '<h2 class="end-title">' + (win ? L().winTitle : L().loseTitle) + "</h2>" +
          '<p class="end-final">' + L().finalScore + ": <b>" + cname("URU") + " " + st.youScore + " — " + st.cpuScore + " " + cname(st.rivalCode) + "</b></p>" +
          '<p class="end-msg">' + (win ? L().winMsg : L().loseMsg) + "</p>" +
        "</div>" +
        '<div class="game-controls"><button class="btn btn-primary" id="replayBtn">' + L().replay + "</button>" + backLink() + "</div>";
      $("#replayBtn").addEventListener("click", start);
    }

    function start() { st = freshState(); screen = "board"; setHeader(); renderBoard(); nextTurn(); }

    function relabel() {
      setHeader();
      if (st && st.over) { endGame(st.winner); return; }
      if (!st) return;
      var sb = $(".scoreboard");
      if (sb) { sb.querySelector(".team.you .team-name").textContent = cname("URU"); sb.querySelector(".team.cpu .team-name").textContent = cname(st.rivalCode); }
      updateScore();
      var back = $(".game-back"); if (back) back.textContent = backTxt();
      var goal = $("#goal");
      if (goal && goal.classList.contains("aim")) { setPill(st.kicker === "you"); setMsg(st.kicker === "you" ? L().aimShoot : L().aimSave); }
    }

    start();
    return { onLang: relabel, destroy: function () { alive = false; } };
  }

  /* ============================================================
     JUEGO 2 — MEMOTEST DE BANDERAS
     ============================================================ */
  function createMemotest(root) {
    var alive = true, screen = "board";
    var deck = [], first = null, lock = false, moves = 0, matched = 0, total = 8, t0 = 0, timer = null, lastSecs = 0;
    var T = {
      es: {
        kicker: "Mundial 2026 · Memotest", title: "Memotest de banderas",
        lead: "Encontrá las parejas de selecciones. Tocá dos tarjetas: si coinciden, quedan descubiertas. Resolvelo en la menor cantidad de intentos.",
        moves: "Intentos", pairs: "Pares", time: "Tiempo",
        winTitle: "¡Las encontraste todas!", winMsg: "Resolviste el memotest. ¿Vas por un mejor tiempo?",
        finalLine: "{m} intentos · {t}", replay: "Jugar de nuevo"
      },
      en: {
        kicker: "World Cup 2026 · Memory", title: "Flags memory match",
        lead: "Find the pairs of national teams. Tap two cards: if they match, they stay face up. Solve it in as few tries as possible.",
        moves: "Tries", pairs: "Pairs", time: "Time",
        winTitle: "You found them all!", winMsg: "You cleared the board. Fancy a better time?",
        finalLine: "{m} tries · {t}", replay: "Play again"
      }
    };
    function L() { return T[lang]; }
    function $(s) { return root.querySelector(s); }
    function fmt(s) { var m = Math.floor(s / 60), ss = s % 60; return m + ":" + (ss < 10 ? "0" : "") + ss; }
    function elapsed() { return Math.floor((Date.now() - t0) / 1000); }

    function startTimer() { stopTimer(); timer = setInterval(function () { if (!alive) { stopTimer(); return; } var e = $("#mtTime"); if (e) e.textContent = fmt(elapsed()); }, 1000); }
    function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }

    function render() {
      root.innerHTML =
        '<div class="mt-hud">' +
          "<span>" + L().moves + ': <b id="mtMoves">' + moves + "</b></span>" +
          "<span>" + L().pairs + ': <b id="mtPairs">' + matched + "/" + total + "</b></span>" +
          "<span>" + L().time + ': <b id="mtTime">' + fmt(elapsed()) + "</b></span>" +
        "</div>" +
        '<div class="mt-grid" id="mtGrid">' +
          deck.map(function (c) {
            return '<div class="mt-card' + (c.flipped ? " flipped" : "") + (c.matched ? " matched" : "") + '" data-id="' + c.id + '">' +
              '<div class="mt-inner">' +
                '<div class="mt-face mt-back">' + BALL + "</div>" +
                '<div class="mt-face mt-front">' + shield(c.code) + '<span class="mt-name">' + cname(c.code) + "</span></div>" +
              "</div></div>";
          }).join("") +
        "</div>" +
        '<div class="game-controls" style="margin-top:1.4rem">' + backLink() + "</div>";
      root.querySelectorAll(".mt-card").forEach(function (el) {
        el.addEventListener("click", function () { onCard(parseInt(el.getAttribute("data-id"), 10)); });
      });
    }

    function setHud() { var m = $("#mtMoves"); if (m) m.textContent = moves; var p = $("#mtPairs"); if (p) p.textContent = matched + "/" + total; }
    function flipDom(id, on) { var el = root.querySelector('.mt-card[data-id="' + id + '"]'); if (el) el.classList.toggle("flipped", on); }

    function onCard(id) {
      if (!alive || lock) return;
      var card = deck.filter(function (c) { return c.id === id; })[0];
      if (!card || card.flipped || card.matched) return;
      card.flipped = true; flipDom(id, true);
      if (!first) { first = card; return; }
      moves++; setHud();
      if (first.code === card.code) {
        first.matched = true; card.matched = true; matched++;
        var a = first, b = card; first = null; setHud();
        root.querySelector('.mt-card[data-id="' + a.id + '"]').classList.add("matched");
        root.querySelector('.mt-card[data-id="' + b.id + '"]').classList.add("matched");
        if (matched === total) win();
      } else {
        lock = true;
        var f = first, s = card; first = null;
        setTimeout(function () {
          if (!alive) return;
          f.flipped = false; s.flipped = false;
          flipDom(f.id, false); flipDom(s.id, false);
          lock = false;
        }, reduce ? 250 : 820);
      }
    }

    function win() {
      stopTimer(); screen = "end"; lastSecs = elapsed(); renderEnd();
    }
    function renderEnd() {
      root.innerHTML =
        '<div class="endcard win"><div class="trophy">' + TROPHY + "</div>" +
          '<h2 class="end-title">' + L().winTitle + "</h2>" +
          '<p class="end-final"><b>' + L().finalLine.replace("{m}", moves).replace("{t}", fmt(lastSecs)) + "</b></p>" +
          '<p class="end-msg">' + L().winMsg + "</p></div>" +
        '<div class="game-controls"><button class="btn btn-primary" id="mtReplay">' + L().replay + "</button>" + backLink() + "</div>";
      $("#mtReplay").addEventListener("click", build);
    }

    function build() {
      header(L().kicker, L().title, L().lead);
      var codes = shuffle(MEMO_POOL.slice()).slice(0, total);
      deck = shuffle(codes.concat(codes).map(function (code, i) { return { id: i, code: code, flipped: false, matched: false }; }));
      moves = 0; matched = 0; first = null; lock = false; screen = "board"; t0 = Date.now();
      render(); startTimer();
    }

    function relabel() {
      header(L().kicker, L().title, L().lead);
      if (screen === "end") { renderEnd(); } else { render(); }
    }

    build();
    return { onLang: relabel, destroy: function () { alive = false; stopTimer(); } };
  }

  /* ============================================================
     JUEGO 3 — DOMINADAS (keepie-ups)
     ============================================================ */
  var domBest = 0; // récord de la sesión (persiste entre partidas y pestañas)
  function createDominadas(root) {
    var alive = true, state = "ready", raf = 0;
    var px = 0, py = 0, vx = 0, vy = 0, rot = 0, score = 0, last = 0;
    var W = 0, H = 0, r = 0, g0 = 1500;
    var T = {
      es: {
        kicker: "Mundial 2026 · Dominadas", title: "Dominadas",
        lead: "Mantené la pelota en el aire: tocala (o clic) antes de que caiga. Cada toque la impulsa hacia el lado contrario. ¿Cuántas seguidas hacés?",
        best: "Récord", startHint: "Tocá la pelota para empezar",
        overTitle: "¡Se cayó!", overMsg: "Buen intento. Probá de nuevo y superá tu récord.",
        newRecord: "¡Nuevo récord!", finalLine: "{n} dominadas", replay: "Jugar de nuevo"
      },
      en: {
        kicker: "World Cup 2026 · Keepie-ups", title: "Keepie-ups",
        lead: "Keep the ball in the air: tap (or click) it before it drops. Each touch sends it the other way. How many in a row can you do?",
        best: "Best", startHint: "Tap the ball to start",
        overTitle: "Dropped it!", overMsg: "Nice try. Go again and beat your best.",
        newRecord: "New best!", finalLine: "{n} keepie-ups", replay: "Play again"
      }
    };
    function L() { return T[lang]; }
    function $(s) { return root.querySelector(s); }

    function render() {
      header(L().kicker, L().title, L().lead);
      root.innerHTML =
        '<div class="dom-hud"><span>' + L().best + ': <b id="domBest">' + domBest + "</b></span></div>" +
        '<div class="dom-area" id="domArea">' +
          '<div class="dom-bignum" id="domBig">0</div>' +
          '<div class="dom-ball" id="domBall">' + BALL + "</div>" +
          '<div class="dom-floor"></div>' +
        "</div>" +
        '<p class="dom-hint" id="domHint">' + L().startHint + "</p>" +
        '<div class="game-controls" style="margin-top:1.1rem">' + backLink() + "</div>";
      var area = $("#domArea");
      area.addEventListener("pointerdown", onPoke);
      requestAnimationFrame(function () { if (!alive) return; measure(); resetBall(); draw(); });
    }
    function measure() { var a = $("#domArea"); if (!a) return; W = a.clientWidth; H = a.clientHeight; r = W * 0.085; }
    function resetBall() { px = W / 2; py = H * 0.32; vx = 0; vy = 0; rot = 0; }
    function draw() { var b = $("#domBall"); if (!b) return; b.style.left = px + "px"; b.style.top = py + "px"; b.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg)"; }

    function onPoke(e) {
      if (!alive || state === "over") return;
      var rect = $("#domArea").getBoundingClientRect();
      var x = e.clientX - rect.left, y = e.clientY - rect.top;
      if (Math.hypot(x - px, y - py) > r * 2.2) return; // tocaste lejos de la pelota
      vy = -Math.sqrt(2 * g0 * (H * 0.55));
      var off = px - x;
      vx = Math.max(-W * 0.9, Math.min(W * 0.9, off * 3.4));
      score++;
      var big = $("#domBig"); if (big) big.textContent = score;
      if (state === "ready") { state = "play"; $("#domHint").textContent = ""; last = performance.now(); raf = requestAnimationFrame(frame); }
    }

    function frame(ts) {
      if (!alive || state !== "play") return;
      var g = Math.min(g0 * (1 + score * 0.012), g0 * 2.4);
      var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      vy += g * dt; px += vx * dt; py += vy * dt; vx *= 0.995;
      if (px < r) { px = r; vx = Math.abs(vx) * 0.8; }
      if (px > W - r) { px = W - r; vx = -Math.abs(vx) * 0.8; }
      if (py < r) { py = r; vy = Math.abs(vy) * 0.45; }
      if (py > H - r) { over(); return; }
      rot += vx * dt * 0.6; draw();
      raf = requestAnimationFrame(frame);
    }

    var lastScore = 0, lastRec = false;
    function over() {
      state = "over"; cancelAnimationFrame(raf);
      lastScore = score; lastRec = score > domBest; if (lastRec) domBest = score;
      renderOver();
    }
    function renderOver() {
      root.innerHTML =
        '<div class="endcard win"><div class="trophy">' + (lastRec ? TROPHY : BALL) + "</div>" +
          '<h2 class="end-title">' + (lastRec ? L().newRecord : L().overTitle) + "</h2>" +
          '<p class="end-final"><b>' + L().finalLine.replace("{n}", lastScore) + "</b> · " + L().best + ": " + domBest + "</p>" +
          '<p class="end-msg">' + L().overMsg + "</p></div>" +
        '<div class="game-controls"><button class="btn btn-primary" id="domReplay">' + L().replay + "</button>" + backLink() + "</div>";
      var rb = $("#domReplay"); if (rb) rb.addEventListener("click", start);
      if (!lastRec) { var ec = $(".endcard"); if (ec) ec.classList.remove("win"); var tr = $(".trophy"); if (tr) tr.style.color = "var(--steel)"; }
    }

    function start() { state = "ready"; score = 0; render(); }

    function relabel() {
      header(L().kicker, L().title, L().lead);
      if (state === "over") { renderOver(); return; }
      var hb = $("#domBest"); if (hb) hb.textContent = domBest;
      var hint = $("#domHint"); if (hint && state === "ready") hint.textContent = L().startHint;
      var back = $(".game-back"); if (back) back.textContent = backTxt();
    }

    start();
    return { onLang: relabel, destroy: function () { alive = false; cancelAnimationFrame(raf); } };
  }

  /* ============================================================
     JUEGO 4 — PELOTA VOLADORA (estilo flappy)
     ============================================================ */
  var flapBest = 0;
  function createFlappy(root) {
    var alive = true, state = "ready", raf = 0, keyHandler = null;
    var W = 0, H = 0, FLOOR = 24, r = 0, ballX = 0;
    var y = 0, vy = 0, rot = 0, score = 0, last = 0;
    var g = 0, flap = 0, speed = 0, gap = 0, pw = 0, spacing = 0;
    var obs = [];
    var lastScore = 0, lastRec = false;
    var T = {
      es: {
        kicker: "Mundial 2026 · Flappy", title: "Pelota voladora",
        lead: "Tocá (o clic / barra espaciadora) para que la pelota aletee y pasá entre los arcos sin chocar. ¿Hasta dónde llegás?",
        best: "Récord", startHint: "Tocá para empezar a volar",
        overTitle: "¡Chocaste!", newRecord: "¡Nuevo récord!",
        overMsg: "Probá de nuevo y pasá más arcos.", finalLine: "{n} arcos", replay: "Jugar de nuevo"
      },
      en: {
        kicker: "World Cup 2026 · Flappy", title: "Flying ball",
        lead: "Tap (or click / spacebar) to make the ball flap and fly through the goals without crashing. How far can you get?",
        best: "Best", startHint: "Tap to start flying",
        overTitle: "Crashed!", newRecord: "New best!",
        overMsg: "Go again and clear more goals.", finalLine: "{n} goals", replay: "Play again"
      }
    };
    function L() { return T[lang]; }
    function $(s) { return root.querySelector(s); }

    function render() {
      header(L().kicker, L().title, L().lead);
      root.innerHTML =
        '<div class="dom-hud"><span>' + L().best + ': <b id="flapBest">' + flapBest + "</b></span></div>" +
        '<div class="flap-area" id="flapArea">' +
          '<div class="flap-bignum" id="flapBig">0</div>' +
          '<div class="flap-ball" id="flapBall">' + BALL + "</div>" +
          '<div class="flap-floor"></div>' +
        "</div>" +
        '<p class="dom-hint" id="flapHint">' + L().startHint + "</p>" +
        '<div class="game-controls" style="margin-top:1.1rem">' + backLink() + "</div>";
      $("#flapArea").addEventListener("pointerdown", doFlap);
      keyHandler = function (e) { if (e.code === "Space" || e.key === " ") { e.preventDefault(); doFlap(); } };
      document.addEventListener("keydown", keyHandler);
      requestAnimationFrame(function () { if (!alive) return; measure(); resetWorld(); draw(); });
    }
    function measure() {
      var a = $("#flapArea"); if (!a) return;
      W = a.clientWidth; H = a.clientHeight; r = W * 0.055; ballX = W * 0.30;
      g = H * 1.35; flap = -(H * 0.48); speed = W * 0.42; gap = H * 0.32; pw = W * 0.16; spacing = W * 0.80;
    }
    function resetWorld() {
      y = H * 0.42; vy = 0; rot = 0;
      obs.forEach(function (o) { if (o.el && o.el.parentNode) o.el.parentNode.removeChild(o.el); });
      obs = [];
    }
    function draw() {
      var b = $("#flapBall"); if (!b) return;
      b.style.left = ballX + "px"; b.style.top = y + "px";
      b.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg)";
      obs.forEach(function (o) { o.el.style.transform = "translateX(" + o.x + "px)"; });
    }

    function spawn(x) {
      var groundY = H - FLOOR;
      var curGap = Math.max(H * 0.19, gap - score * H * 0.0065); // se achica al sumar
      var minC = curGap / 2 + H * 0.09, maxC = groundY - curGap / 2 - H * 0.05;
      var gapY = minC + Math.random() * (maxC - minC);
      var topH = gapY - curGap / 2, botH = groundY - (gapY + curGap / 2);
      var el = document.createElement("div");
      el.className = "flap-pipe";
      el.style.width = pw + "px";
      el.innerHTML =
        '<div class="flap-pipe-top" style="height:' + topH + 'px"></div>' +
        '<div class="flap-pipe-bot" style="height:' + botH + "px;bottom:" + FLOOR + 'px"></div>';
      $("#flapArea").appendChild(el);
      obs.push({ x: x, gapY: gapY, gap: curGap, passed: false, el: el });
    }

    function doFlap() {
      if (!alive || state === "over") return;
      vy = flap;
      if (state === "ready") {
        state = "play"; $("#flapHint").textContent = "";
        spawn(W * 1.15);
        last = performance.now(); raf = requestAnimationFrame(frame);
      }
    }

    function hitRect(cx, cy, rr, rx, ry, rw, rh) {
      var nx = Math.max(rx, Math.min(cx, rx + rw)), ny = Math.max(ry, Math.min(cy, ry + rh));
      return (cx - nx) * (cx - nx) + (cy - ny) * (cy - ny) < rr * rr;
    }

    function frame(ts) {
      if (!alive || state !== "play") return;
      var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      vy += g * dt; y += vy * dt;
      rot = Math.max(-25, Math.min(70, vy * 0.06));
      var groundY = H - FLOOR;
      if (y - r < 0) { y = r; vy = 0; }
      var dead = (y + r > groundY);
      var sp = speed * (1 + Math.min(score * 0.05, 1.2)); // acelera al sumar (hasta 2.2x)

      for (var i = obs.length - 1; i >= 0; i--) {
        var o = obs[i];
        o.x -= sp * dt;
        if (!o.passed && o.x + pw < ballX) { o.passed = true; score++; var bg = $("#flapBig"); if (bg) bg.textContent = score; }
        var topH = o.gapY - o.gap / 2, botTop = o.gapY + o.gap / 2;
        if (hitRect(ballX, y, r, o.x, 0, pw, topH) || hitRect(ballX, y, r, o.x, botTop, pw, groundY - botTop)) dead = true;
        if (o.x + pw < -4) { if (o.el && o.el.parentNode) o.el.parentNode.removeChild(o.el); obs.splice(i, 1); }
      }
      var lastObs = obs.length ? obs[obs.length - 1] : null;
      if (!lastObs || lastObs.x < W - spacing) spawn(W);

      if (dead) { over(); return; }
      draw();
      raf = requestAnimationFrame(frame);
    }

    function over() {
      state = "over"; cancelAnimationFrame(raf);
      lastScore = score; lastRec = score > flapBest; if (lastRec) flapBest = score;
      renderOver();
    }
    function renderOver() {
      if (keyHandler) { document.removeEventListener("keydown", keyHandler); keyHandler = null; }
      root.innerHTML =
        '<div class="endcard win"><div class="trophy">' + (lastRec ? TROPHY : BALL) + "</div>" +
          '<h2 class="end-title">' + (lastRec ? L().newRecord : L().overTitle) + "</h2>" +
          '<p class="end-final"><b>' + L().finalLine.replace("{n}", lastScore) + "</b> · " + L().best + ": " + flapBest + "</p>" +
          '<p class="end-msg">' + L().overMsg + "</p></div>" +
        '<div class="game-controls"><button class="btn btn-primary" id="flapReplay">' + L().replay + "</button>" + backLink() + "</div>";
      var rb = $("#flapReplay"); if (rb) rb.addEventListener("click", start);
      if (!lastRec) { var ec = $(".endcard"); if (ec) ec.classList.remove("win"); var tr = $(".trophy"); if (tr) tr.style.color = "var(--steel)"; }
    }

    function start() {
      if (keyHandler) { document.removeEventListener("keydown", keyHandler); keyHandler = null; }
      state = "ready"; score = 0; render();
    }

    function relabel() {
      header(L().kicker, L().title, L().lead);
      if (state === "over") { renderOver(); return; }
      var hb = $("#flapBest"); if (hb) hb.textContent = flapBest;
      var hint = $("#flapHint"); if (hint && state === "ready") hint.textContent = L().startHint;
      var back = $(".game-back"); if (back) back.textContent = backTxt();
    }

    start();
    return { onLang: relabel, destroy: function () { alive = false; cancelAnimationFrame(raf); if (keyHandler) { document.removeEventListener("keydown", keyHandler); keyHandler = null; } } };
  }

  /* ============================================================
     CONTROLADOR — pestañas + idioma
     ============================================================ */
  var GAMES = [
    { key: "penales", label: { es: "Penales", en: "Penalties" }, create: createPenales },
    { key: "memotest", label: { es: "Memotest", en: "Memory" }, create: createMemotest },
    { key: "dominadas", label: { es: "Dominadas", en: "Keepie-ups" }, create: createDominadas },
    { key: "flappy", label: { es: "Flappy", en: "Flappy" }, create: createFlappy }
  ];
  var active = null, activeKey = null;
  var gameRoot = document.getElementById("game");
  var tabsEl = document.getElementById("gameTabs");

  function renderTabs() {
    tabsEl.innerHTML = GAMES.map(function (g) {
      return '<button class="game-tab' + (g.key === activeKey ? " active" : "") + '" data-key="' + g.key + '">' + (g.label[lang] || g.label.es) + "</button>";
    }).join("");
    tabsEl.querySelectorAll(".game-tab").forEach(function (b) {
      b.addEventListener("click", function () { select(b.getAttribute("data-key")); });
    });
  }
  function select(key) {
    if (key === activeKey && active) return;
    if (active && active.destroy) active.destroy();
    gameRoot.innerHTML = "";
    activeKey = key;
    var g = GAMES.filter(function (x) { return x.key === key; })[0];
    active = g.create(gameRoot);
    renderTabs();
  }
  new MutationObserver(function () {
    var l = document.body.getAttribute("data-lang") || "es";
    if (l === lang) return;
    lang = l;
    renderTabs();
    if (active && active.onLang) active.onLang();
  }).observe(document.body, { attributes: true, attributeFilter: ["data-lang"] });

  select("penales");
})();
