/* main.js — merangkai config.js + stats.js jadi halaman */
(() => {
"use strict";
const K = window.KITA, S = window.STATS;
const $ = (s, r = document) => r.querySelector(s);
let mulaiMusik = () => {};   // diisi oleh musik(), dipicu tombol "Buka"
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const angka = n => n.toLocaleString("id-ID");
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const tgl = iso => { const d = new Date(iso + "T00:00:00"); return `${d.getDate()} ${BULAN[d.getMonth()]}`; };

/* {{kunci}} di config.js diganti angka asli dari stats.js */
const KAMUS = {
  totalPesan: angka(S.totalPesan), totalKata: angka(S.totalKata), hariAktif: S.hariAktif,
  rataPerHari: angka(S.rataPerHari), teramai: angka(S.hariTeramai.jumlah),
  tglTeramai: tgl(S.hariTeramai.tanggal), jamMalam: S.palingMalam.jam, tglMalam: tgl(S.palingMalam.tanggal),
  nama: K.dia.nama,
};
S.frasa.forEach(f => { KAMUS["n_" + f.teks.replace(/[^a-z]/gi, "")] = angka(f.n); });
const isi = t => String(t).replace(/\{\{(\w+)\}\}/g, (m, k) => (k in KAMUS ? KAMUS[k] : m));

/* ---------- ikon ---------- */
const IKON = {
  gunung: '<path d="M1 20 L7 6 L11 13 L14 9 L23 20Z"/>',
  chat:   '<path d="M2 4h20v13H8l-6 5z"/>',
  petir:  '<path d="M13 1 4 14h6l-1 9 9-13h-6z"/>',
  bulan:  '<path d="M20 15A9 9 0 1 1 9 4a7 7 0 0 0 11 11z"/>',
  hati:   '<path d="M12 21C5 15.5 2 12 2 8.5A5 5 0 0 1 12 6a5 5 0 0 1 10 2.5C22 12 19 15.5 12 21z"/>',
  bintang:'<path d="M12 1l3 7 8 .6-6 5 2 8-7-4.3L5 22l2-8-6-5 8-.6z"/>',
  kue:    '<path d="M12 1c1 2 2 3 0 4-2-1-1-2 0-4zM4 10h16v4H4zM3 15h18v7H3z"/>',
};
const svg = n => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${IKON[n] || IKON.hati}</svg>`;

/* ================= HERO + PENGHITUNG ================= */
function hero() {
  $("#nama").textContent = K.dia.nama;
  const ul = new Date(K.dia.ulangTahun + "T00:00:00");
  $("#tglLahir").textContent = `${ul.getDate()} ${BULAN[ul.getMonth()]} ${ul.getFullYear()}`;
  document.title = `Selamat Ulang Tahun, ${K.dia.nama}`;
}

function penghitung() {
  const kini = new Date();
  const ul = new Date(K.dia.ulangTahun + "T00:00:00");
  const hariH = kini.getMonth() === ul.getMonth() && kini.getDate() === ul.getDate();

  const sel = [
    { n: angka(S.totalPesan), l: "pesan terkirim" },
    { n: S.hariAktif, l: S.tanpaBolong ? "hari tanpa satu pun bolong" : "hari kita ngobrol" },
    { n: angka(S.totalKata),  l: "kata yang kita tulis" },
  ];
  const g = $("#counterGrid");
  sel.forEach(c => {
    const d = el("div", "count-cell");
    d.append(el("div", "count-num", c.n), el("div", "count-lbl", c.l));
    g.append(d);
  });
  if (hariH) document.body.dataset.hariH = "1";
}

/* ================= PERJALANAN ================= */
function perjalanan() {
  const t = $("#timeline");
  K.perjalanan.forEach(c => {
    const a = el("article", "chapter reveal" + (c.sorot ? " sorot" : ""));
    a.append(el("div", "dot", svg(c.ikon)));
    a.append(el("div", "ch-date", c.tanggal));
    a.append(el("h3", "ch-title", isi(c.judul)));
    a.append(el("p", "ch-text", isi(c.cerita)));
    if (c.foto) {
      const f = el("div", "ch-photo");
      const img = new Image();
      img.src = "assets/img/" + c.foto;
      img.alt = c.judul;
      img.loading = "lazy";
      img.onerror = () => f.replaceChildren(el("div", "ph-empty",
        `<div>Taruh fotonya di sini</div><code>assets/img/${c.foto}</code>`));
      f.append(img);
      a.append(f);
    }
    t.append(a);
  });
}

/* ================= ANGKA KITA ================= */
function angkaKita() {
  const g = $("#statGrid");
  [
    { n: angka(S.totalPesan), l: `pesan dalam ${S.hariAktif} hari — rata-rata ${angka(S.rataPerHari)} tiap hari` },
    { n: angka(S.totalKata),  l: "kata. Kira-kira setebal novel tipis." },
    { n: angka(S.hariTeramai.jumlah), l: `pesan cuma di ${tgl(S.hariTeramai.tanggal)} — hari terpanjang kita` },
    { n: S.palingMalam.jam,   l: `pesan paling subuh, ${tgl(S.palingMalam.tanggal)}. Nggak ada yang mau berhenti duluan.` },
    { n: angka(S.totalMedia), l: "foto & stiker yang dikirim tanpa alasan jelas" },
    { n: `${S.jamTersibuk}.00`, l: "jam paling ramai. Jam istirahat, dan kita pilih ngobrol." },
  ].forEach(s => {
    const d = el("div", "stat reveal");
    d.append(el("div", "stat-num", s.n), el("div", "stat-lbl", s.l));
    g.append(d);
  });

  const w = $("#frasa");
  S.frasa.forEach(f => w.append(el("div", "word", `<b>${angka(f.n)}×</b> <span>“${f.teks}” — ${f.ket}</span>`)));

  const maks = Math.max(...S.jam), h = $("#jam");
  S.jam.forEach((v, i) => {
    const c = el("div", "hour" + (i === S.jamTersibuk ? " puncak" : ""));
    const b = el("i"); b.dataset.h = Math.max(2, Math.round(v / maks * 100)) + "%";
    b.title = `${i}.00 — ${angka(v)} pesan`;
    c.append(b, el("u", null, String(i).padStart(2, "0")));
    h.append(c);
  });
  $("#jamKet").textContent =
    `Paling ramai jam ${S.jamTersibuk}.00 — ${angka(S.jam[S.jamTersibuk])} pesan. Sumbu bawah = jam 00 sampai 23.`;

  $("#emoji").innerHTML = S.emojiTop
    .map(e => `<div class="word"><b>${e.e}</b> <span>${angka(e.n)}×</span></div>`).join("");
}

/* ================= KARAKTER (avatar SVG) ================= */
const teduh = (hex, f) => {                    // gelapkan/terangkan warna
  const n = parseInt(hex.slice(1), 16);
  return "#" + [n >> 16, (n >> 8) & 255, n & 255]
    .map(v => Math.max(0, Math.min(255, Math.round(v * f))).toString(16).padStart(2, "0")).join("");
};

const PONI = {
  rata:    "M30 50 Q55 26 80 50 Q78 37 55 35 Q32 37 30 50 Z",
  belah:   "M55 31 Q33 33 29 55 Q35 40 55 39 Q75 40 81 55 Q77 33 55 31 Z",
  samping: "M27 53 Q39 29 70 31 Q85 33 83 53 Q76 39 57 42 Q39 45 27 53 Z",
};

function avatar(r, id) {
  const kulit2 = teduh(r.kulit, .89);
  const baju2  = teduh(r.baju, .82);
  const mata   = "#2A2233";
  const garis  = r.garis2 || baju2;
  const badan  = "M6 150 C6 117, 29 104, 55 104 C81 104, 104 117, 104 150 Z";

  const belang = r.motif === "garis"
    ? '<g clip-path="url(#b' + id + ')">' +
      [0, 1, 2, 3, 4].map(i =>
        '<rect x="0" y="' + (108 + i * 11) + '" width="110" height="5.5" fill="' + garis + '"/>').join("") +
      "</g>"
    : "";
  const denim = r.motif === "denim"
    ? '<path d="M44 106 L55 122 L66 106" fill="none" stroke="' + baju2 + '" stroke-width="2.4"/>' +
      '<path d="M55 122 L55 150" stroke="' + baju2 + '" stroke-width="1.6"/>'
    : "";

  const kacamata = !r.kacamata ? "" : r.kacamata === "bulat"
    ? '<g fill="none" stroke="' + mata + '" stroke-width="2" opacity=".85">' +
      '<circle cx="44" cy="65" r="10"/><circle cx="66" cy="65" r="10"/>' +
      '<path d="M54 65 h2"/><path d="M34 63 l-5 -2"/><path d="M76 63 l5 -2"/></g>'
    : '<g fill="none" stroke="' + mata + '" stroke-width="2.4" opacity=".9">' +
      '<rect x="33" y="57" width="21" height="15" rx="4"/>' +
      '<rect x="56" y="57" width="21" height="15" rx="4"/>' +
      '<path d="M54 64 h2"/><path d="M33 61 l-4 -2"/><path d="M77 61 l4 -2"/></g>';

  const jepit = r.jepit
    ? '<rect x="30" y="34" width="11" height="4.5" rx="2" fill="' + r.jepit + '" transform="rotate(-18 35 36)"/>'
    : "";
  const pita = r.pita
    ? '<g fill="' + r.pita + '"><ellipse cx="48" cy="24" rx="6" ry="4.5"/>' +
      '<ellipse cx="62" cy="24" rx="6" ry="4.5"/><circle cx="55" cy="24" r="3"/></g>'
    : "";

  return '<svg class="tokoh" viewBox="0 0 110 150" role="img" aria-label="ilustrasi ' + (r.nama || "") + '">' +
    '<defs><clipPath id="b' + id + '"><path d="' + badan + '"/></clipPath></defs>' +
    '<path d="M55 16 C79 16, 93 35, 93 62 C93 92, 89 112, 85 126 L74 126 C78 109, 80 92, 79 73' +
    ' C70 81, 40 81, 31 73 C30 92, 32 109, 36 126 L25 126 C21 112, 17 92, 17 62' +
    ' C17 35, 31 16, 55 16 Z" fill="' + r.rambut + '"/>' +
    '<rect x="47" y="86" width="16" height="20" rx="7" fill="' + kulit2 + '"/>' +
    '<path d="' + badan + '" fill="' + r.baju + '"/>' + belang + denim +
    '<ellipse cx="31" cy="66" rx="4" ry="6" fill="' + kulit2 + '"/>' +
    '<ellipse cx="79" cy="66" rx="4" ry="6" fill="' + kulit2 + '"/>' +
    '<ellipse cx="55" cy="62" rx="24" ry="28" fill="' + r.kulit + '"/>' +
    '<path d="' + (PONI[r.poni] || PONI.rata) + '" fill="' + r.rambut + '"/>' +
    '<g fill="' + mata + '"><ellipse cx="44" cy="65" rx="2.6" ry="3"/><ellipse cx="66" cy="65" rx="2.6" ry="3"/></g>' +
    '<g fill="#FFF" opacity=".85"><circle cx="45" cy="64" r=".9"/><circle cx="67" cy="64" r=".9"/></g>' +
    '<g fill="none" stroke="' + teduh(r.rambut, 1.35) + '" stroke-width="1.8" stroke-linecap="round">' +
    '<path d="M38 56 Q44 53 50 56"/><path d="M60 56 Q66 53 72 56"/></g>' +
    '<g fill="#E8899B" opacity=".28"><ellipse cx="38" cy="73" rx="5" ry="3"/><ellipse cx="72" cy="73" rx="5" ry="3"/></g>' +
    '<path d="M49 76 Q55 82 61 76" fill="none" stroke="' + mata + '" stroke-width="2" stroke-linecap="round"/>' +
    kacamata + jepit + pita + '</svg>';
}

function ucapan() {
  const U = K.ucapan;
  if (!U) return;
  $("#ucapanJudul").textContent = U.judul;
  $("#ucapanLead").textContent  = U.pengantar;

  const g = $("#geng");
  (U.orang || []).forEach((o, i) => {
    const fig = el("figure", i === 1 ? "tengah" : null, avatar(o.rupa, i));
    fig.append(el("figcaption", null, o.nama));
    g.append(fig);
  });

  const list = $("#ucapanList");
  U.daftar.forEach(u => {
    if (u.menyusul) {
      list.append(el("div", "kartu-ucapan menyusul reveal",
        `<div><b>${u.dari}</b>lagi nyusun kata-katanya…</div>`));
      return;
    }
    const d = el("div", "kartu-ucapan reveal");
    u.pesan.forEach(p => d.append(el("p", null, p)));
    d.append(el("p", "dari", "— " + u.dari));
    list.append(d);
  });
}

/* ================= BEDA / USAHA / SURAT ================= */
function statis() {
  $("#suratJudul").textContent = K.surat.judul;
  const s = $("#suratIsi");
  K.surat.paragraf.forEach(p => s.append(el("p", null, isi(p))));
  s.append(el("p", "ttd", K.surat.ttd));

  $("#harapanJudul").textContent = K.harapan.judul;
  $("#harapanTeks").textContent  = isi(K.harapan.kalimat);
}

/* ================= LILIN + CONFETTI ================= */
function lilin() {
  const kue = $("#kue"), api = [...document.querySelectorAll(".flame")];
  let mati = false;
  kue.addEventListener("click", () => {
    if (mati) return;
    mati = true;
    api.forEach((f, i) => setTimeout(() => f.classList.add("off"), i * 190));
    setTimeout(() => {
      $("#wish").classList.add("on");
      $("#tiup").textContent = "selamat ulang tahun 💜";
      confetti();
    }, api.length * 190 + 260);
  });
}

function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = $("#confetti"), x = c.getContext("2d");
  const W = () => { c.width = innerWidth; c.height = innerHeight; };
  W(); addEventListener("resize", W);
  const warna = ["#38BDF8", "#7DD3FC", "#A78BFA", "#BAE6FD", "#F472B6", "#FFFFFF"];
  const p = Array.from({ length: 140 }, () => ({
    x: innerWidth / 2 + (Math.random() - .5) * 220, y: innerHeight * .62,
    vx: (Math.random() - .5) * 11, vy: -Math.random() * 15 - 5,
    s: Math.random() * 7 + 3, r: Math.random() * 6.3, vr: (Math.random() - .5) * .3,
    c: warna[(Math.random() * warna.length) | 0], a: 1,
  }));
  let t = 0;
  (function loop() {
    x.clearRect(0, 0, c.width, c.height);
    let hidup = false;
    p.forEach(o => {
      o.vy += .34; o.x += o.vx; o.y += o.vy; o.r += o.vr;
      if (t > 90) o.a -= .016;
      if (o.a > 0 && o.y < c.height + 60) {
        hidup = true;
        x.save(); x.globalAlpha = Math.max(0, o.a); x.translate(o.x, o.y); x.rotate(o.r);
        x.fillStyle = o.c; x.fillRect(-o.s / 2, -o.s / 2, o.s, o.s * .62); x.restore();
      }
    });
    t++;
    if (hidup) requestAnimationFrame(loop); else x.clearRect(0, 0, c.width, c.height);
  })();
}

/* ================= LATAR: BINTANG + PARALAKS ================= */
function bintang() {
  const c = $("#stars");
  if (!c || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const x = c.getContext("2d");
  let b = [];
  const set = () => {
    c.width = innerWidth; c.height = c.parentElement.offsetHeight;
    b = Array.from({ length: Math.min(150, (innerWidth * c.height) / 9000) }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height * .82,
      r: Math.random() * 1.25 + .25, f: Math.random() * 6.3, s: Math.random() * .022 + .006,
      c: ["#FFFFFF", "#BAE6FD", "#DCEBFF", "#7DD3FC"][(Math.random() * 4) | 0],
    }));
  };
  set(); addEventListener("resize", set);
  (function loop() {
    x.clearRect(0, 0, c.width, c.height);
    b.forEach(o => {
      o.f += o.s;
      x.globalAlpha = .28 + Math.sin(o.f) * .3;
      x.fillStyle = o.c;
      x.beginPath(); x.arc(o.x, o.y, o.r, 0, 6.284); x.fill();
    });
    requestAnimationFrame(loop);
  })();
}

function paralaks() {
  const l = [...document.querySelectorAll(".ridge")];
  if (!l.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let tick = false;
  addEventListener("scroll", () => {
    if (tick) return;
    tick = true;
    requestAnimationFrame(() => {
      const y = scrollY;
      l.forEach((r, i) => { r.style.transform = `translateY(${y * (0.14 + i * 0.1)}px)`; });
      tick = false;
    });
  }, { passive: true });
}

/* ================= REVEAL + NAV + MUSIK ================= */
function reveal() {
  const io = new IntersectionObserver((es) => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("tampil");
    e.target.querySelectorAll("[data-w]").forEach(b => b.style.width = b.dataset.w);
    e.target.querySelectorAll("[data-h]").forEach(b => b.style.height = b.dataset.h);
    io.unobserve(e.target);
  }), { threshold: .16, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(n => io.observe(n));

  // bar chart jam ikut animasi saat sectionnya kelihatan
  const jam = $("#jam");
  if (jam) new IntersectionObserver((es, o) => es.forEach(e => {
    if (!e.isIntersecting) return;
    jam.querySelectorAll("i").forEach(b => b.style.height = b.dataset.h);
    o.disconnect();
  }), { threshold: .3 }).observe(jam);
}

function nav() {
  const dots = [...document.querySelectorAll(".navdots a")];
  const secs = dots.map(d => $(d.getAttribute("href")));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    dots.forEach(d => d.classList.remove("aktif"));
    const i = secs.indexOf(e.target);
    if (i > -1) dots[i].classList.add("aktif");
  }), { threshold: .35 });
  secs.forEach(s => s && io.observe(s));
}

function musik() {
  if (!K.lagu) return;
  const b = $("#musik"), a = new Audio(K.lagu);
  a.loop = true; a.preload = "auto"; a.volume = 0;

  const naik = () => {                       // masuk pelan, jangan ngagetin
    let v = a.volume;
    const t = setInterval(() => {
      v = Math.min(.45, v + .012);
      a.volume = v;
      if (v >= .45) clearInterval(t);
    }, 55);
  };

  // browser melarang suara otomatis sebelum ada interaksi — jadi disiapkan dua jalur
  const GERAK = ["pointerdown", "touchstart", "keydown", "scroll", "wheel", "click"];
  const lepas = () => GERAK.forEach(e => removeEventListener(e, pemicu));
  function pemicu() { mulai(); }

  function mulai() {
    return a.play().then(() => {
      b.classList.add("main", "pernah");
      b.textContent = "❚❚";
      naik();
      lepas();
    }).catch(() => {});                      // ditolak: tunggu sentuhan pertama
  }

  mulaiMusik = mulai;
  a.addEventListener("canplaythrough", () => b.classList.add("ada"), { once: true });
  a.addEventListener("loadeddata", mulai, { once: true });   // percobaan autoplay
  GERAK.forEach(e => addEventListener(e, pemicu, { passive: true }));

  b.addEventListener("click", e => {
    e.stopPropagation();
    b.classList.add("pernah");
    if (a.paused) mulai();
    else { a.pause(); b.classList.remove("main"); b.textContent = "♪"; }
  });
}

/* ================= GERBANG (layar pembuka) ================= */
function gerbang() {
  const g = $("#gerbang");
  if (!g) return;
  $("#gerbangNama").textContent = K.dia.nama;
  document.body.style.overflow = "hidden";        // jangan sampai keintip duluan
  scrollTo(0, 0);

  const buka = () => {
    if (g.dataset.buka) return;
    g.dataset.buka = "1";
    g.classList.add("buka");
    mulaiMusik();                                  // klik ini = izin suara dari browser
    setTimeout(() => g.classList.add("pergi"), 820);
    setTimeout(() => {
      g.remove();
      document.body.style.overflow = "";
      scrollTo(0, 0);
      if (document.body.dataset.hariH) confetti();
    }, 1700);
  };
  g.addEventListener("click", buka);
  $("#bukaBtn").addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); buka(); }
  });
}

/* ================= JALAN ================= */
document.addEventListener("DOMContentLoaded", () => {
  hero(); penghitung(); perjalanan(); angkaKita(); ucapan(); statis();
  lilin(); bintang(); paralaks(); reveal(); nav();
  musik(); gerbang();
});
})();
