/* =========================================================================
   config.js — ISI HALAMAN PUBLIK (index.html)
   AMAN kalau website ini disebar ke teman-temannya.
   Hal-hal pribadi kalian berdua ada di data/pribadi.js (halaman terpisah).
   Ganti isinya, simpan, refresh browser. Nggak perlu ngoding.
   ========================================================================= */

window.KITA = {

  /* --- 1. IDENTITAS ---------------------------------------------------- */
  dia: {
    nama: "Cinta",               // ← GANTI ke nama asli dia
    ulangTahun: "2026-09-09",
  },
  jadian: "2026-08-22",

  /* --- 2. PERJALANAN KITA ----------------------------------------------
     Diambil dari riwayat WhatsApp kalian.
     foto: taruh file di assets/img/, tulis namanya di sini.
           Kalau belum ada, otomatis jadi ilustrasi.                 */
  perjalanan: [
    {
      tanggal: "Sebelum semuanya",
      judul: "Di jalur pendakian",
      cerita: "Kita ketemu waktu napas sama-sama berantakan dan nggak ada yang sempat pura-pura keren. Mungkin itu alasannya kenapa aku ngerasa aman sama kamu dari awal — versi pertama kamu yang aku lihat adalah versi yang paling jujur.",
      foto: "gunung.jpg", ikon: "gunung",
    },
    {
      tanggal: "10 Agustus, 22:41",
      judul: "“SUMPAH. MAU NGE SAVE NOMER. KEPENCET.”",
      cerita: "Empat pesan pertama kita di WhatsApp, dan semuanya huruf kapital. Kamu cuma mau nyimpen nomor, terus kepencet, terus panik, terus bilang “damai”. Kalau itu kecelakaan, itu kecelakaan paling bagus yang pernah kejadian ke aku.",
      foto: "dm.jpg", ikon: "chat",
    },
    {
      tanggal: "11 Agustus",
      judul: "{{teramai}} pesan dalam satu hari",
      cerita: "Sehari setelah nomor kepencet itu, kita ngirim {{teramai}} pesan. Sembilan ratus tiga belas. Sejak hari itu nggak pernah ada satu hari pun yang kita lewat tanpa ngobrol.",
      ikon: "petir",
    },
    {
      tanggal: "13 Agustus, 05:59",
      judul: "Ngobrol sampai matahari nyaingin",
      cerita: "Pesan kamu masuk jam {{jamMalam}} pagi. Kita berdua tahu harus tidur, dan kita berdua tetap nggak mau duluan berhenti.",
      ikon: "bulan",
    },
    {
      tanggal: "22 Agustus",
      judul: "Surabaya. Akhirnya punya nama.",
      cerita: "Sepanjang pagi kita sibuk ngatur rencana ketemu — kamu mendadak disuruh ngurus kerjaan, aku udah duluan di jalan. Siangnya kamu bilang “take careeee”, aku bilang “kamu juga hati hati yaaa”. Malamnya semuanya berhenti jadi “kita apa ya?” dan mulai jadi “kita”.",
      foto: "jadian.jpg", ikon: "hati", sorot: true,
    },
    {
      tanggal: "24 Agustus",
      judul: "Hari “seng” lahir",
      cerita: "Awalnya aku manggil kamu kakak. Terus cinta. Terus sayang. Terus, entah dari mana, jadi “seng” — dan nempel. Sampai hari ini udah {{n_seng}} kali kita nyebut itu.",
      ikon: "bintang",
    },
    {
      tanggal: "9 September",
      judul: "Hari kamu",
      cerita: "Dan hari ini aku cuma mau kamu tahu satu hal: dari {{hariAktif}} hari yang udah kita lewatin, nggak ada satu pun yang aku mau tukar.",
      foto: "sekarang.jpg", ikon: "kue",
    },
  ],

  /* --- 3. UCAPAN DARI TEMAN --------------------------------------------
     Nambah ucapan: copy satu blok { dari, pesan: [...] }.
     Yang belum setor kata-kata: cukup { dari: "Nama", menyusul: true }   */
  ucapan: {
    judul: "Titipan dari temen-temen kamu",
    pengantar: "Bukan cuma aku yang nyiapin sesuatu hari ini.",
    // Karakter digambar dari kode (SVG), bukan foto asli.
    // poni: "samping" | "rata" | "belah".  kacamata: null | "bulat" | "kotak"
    // motif: "polos" | "garis" | "denim"
    orang: [
      // utama: true = yang ulang tahun. Otomatis ditaruh di tengah & ditonjolkan.
      { nama: "Cinta", utama: true, rupa: { kulit: "#F0CDB6", rambut: "#5A3C2A", poni: "belah",
          kacamata: null,    baju: "#7FA9D6", motif: "denim", jepit: "#F6C9DC" } },
      { nama: "Siska", rupa: { kulit: "#EFC9AE", rambut: "#3D2A20", poni: "rata",
          kacamata: "bulat", baju: "#EDEAF2", motif: "garis", garis2: "#22222B", pita: "#E8B9CF" } },
      { nama: "Cath",  rupa: { kulit: "#C68C68", rambut: "#1F1712", poni: "samping",
          kacamata: "kotak", baju: "#23212C", motif: "polos" } },
    ],
    daftar: [
      {
        dari: "Cath",
        pesan: [
          "Dear Cintaaa,",
          "Happy Birthdaaaayyy bestiiui, smoga kedepannya jadi pribadi lebih baik, lebih lembut, sabar, cantik, rejeki selalu berlimpah dan bisa memberi berkat pada orang sekitarr.",
          "Semoga hal hal baik selalu menyertai sepanjang tahun.. love u plus plus lahh",
          "Jangan lupa tobat yah, lopyu 🤍",
        ],
      },
      {
        dari: "Siska",
        pesan: [
          "Happy Birthday Cintaa❤️",
          "Cewe baikk, tuluss, ceria, seruuu bgt yg pernah aku kenall, atau bisa dibilang kembaranku yg superr kusayangg☺️🫶🏻",
          "Semoga bertambah umur kamu semakin bijak, makin bahagia, banyak impianmu yg tercapai, dikelilingi hal baik, dan jadi manusia yg lebih baik tentunyaa💕",
          "I know you have a soft heart, meskipun juga bar bar kalau ngomell hahaa. But, your empathy as a human make me so amaze with u girl, u are kind person🤍",
          "makasiii yaa udah mau jadi temenku, dan skrg jadi sahabat nadikuuu ahahaa🕺",
          "semogaa kita selalu bersahabat baik teruss dan holidayyy trs yuhuww!",
          "nice to meet u cintaaa🥰",
          "God bless u🤍",
        ],
      },
    ],
  },

  /* --- 4. SURAT --------------------------------------------------------
     GANTI pakai kalimat kamu sendiri. Ini cuma draf.               */
  surat: {
    judul: "Surat kecil buat kamu",
    paragraf: [
      "Kita ketemu di tempat yang nggak biasa — di jalur pendakian, waktu kita sama-sama capek dan nggak ada yang sempat jaga image. Terus kamu kepencet nomorku jam sebelas malam, panik, dan bilang “damai”. Aku masih ketawa tiap inget itu.",
      "{{hariAktif}} hari, {{totalPesan}} pesan, dan nggak ada satu hari pun yang bolong. Aku baru sadar pas ngitungnya: bahasa cinta kita ternyata sederhana banget. “Udah makan?” {{n_udahmakan}} kali. “Hati-hati ya.” {{n_hatihati}} kali. “Semangat.” {{n_semangat}} kali. Kita nggak pernah bilang hal-hal besar. Kita cuma mastiin satu sama lain nggak kelaparan dan nyampe rumah.",
      "Kamu cantik, kamu baik, kamu ceria — dan itu udah kelihatan dari jauh sebelum kita jadian. Tapi yang paling aku syukurin justru bukan itu.",
      "Kamu orang yang bisa nyalain lagi aku waktu aku lagi padam. Kamu yang aktif nyariin aku duluan waktu aku milih diem. Kamu peduli sampai ke hal-hal kecil yang orang lain nggak akan kepikiran. Kadang aku ngerasa susah ngimbangin gemerlap cahaya kamu yang seindah itu — tapi aku nggak mau berhenti nyoba, dan aku bersyukur banget dikasih tempat sedeket ini.",
      "Selamat ulang tahun, seng. Terima kasih udah lahir, dan udah nyasar ke jalur pendakian yang sama denganku.",
    ],
    ttd: "— dari aku",
  },

  /* --- 5. HARAPAN (muncul setelah lilin ditiup) ------------------------ */
  harapan: {
    judul: "Sebelum lilinnya mati",
    kalimat: "Semoga tahun ini kamu dapat lebih banyak hal yang bikin kamu ketawa lepas, lebih sedikit hal yang bikin kamu overthinking, dan tetap ada aku yang nanyain “udah makan?” tiap hari.",
  },

  /* --- 6. LAGU (opsional) ----------------------------------------------
     Taruh assets/audio/lagu.m4a — tombol putar muncul sendiri.     */
  lagu: "assets/audio/lagu.m4a?v=1e35118b",
};
