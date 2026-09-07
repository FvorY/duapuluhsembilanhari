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
      cerita: "Ketemu kamu pas napas lagi berantakan-berantakannya. Nggak ada yang sempet jaga image. Mungkin itu sebabnya aku gampang ngerasa aman sama kamu.",
      foto: "gunung.jpg", ikon: "gunung",
    },
    {
      tanggal: "10 Agustus, 22:41",
      judul: "“SUMPAH. MAU NGE SAVE NOMER. KEPENCET.”",
      cerita: "Empat pesan pertama kita, semuanya huruf gede. Kamu cuma mau nyimpen nomor, malah kepencet, terus panik, terus nulis “damai”. Sampai sekarang aku masih ketawa.",
      foto: "dm.jpg", ikon: "chat",
    },
    {
      tanggal: "11 Agustus",
      judul: "{{teramai}} pesan dalam satu hari",
      cerita: "Sehari setelah nomor kepencet itu. Dan sejak hari itu belum pernah ada satu hari pun yang kosong.",
      ikon: "petir",
    },
    {
      tanggal: "13 Agustus, 05:59",
      judul: "Jam segini masih ngobrol",
      cerita: "Pesan kamu masuk jam {{jamMalam}} pagi. Padahal dua-duanya besok kerja. Nggak ada yang mau nutup duluan.",
      ikon: "bulan",
    },
    {
      tanggal: "22 Agustus",
      judul: "Surabaya. Akhirnya punya nama.",
      cerita: "Paginya kita sibuk ngatur ketemu. Kamu mendadak disuruh ngurus kerjaan, aku udah di jalan duluan. Siangnya kamu nulis “take careeee”. Malamnya udah nggak perlu nanya “kita apa ya”.",
      foto: "jadian.jpg", ikon: "hati", sorot: true,
    },
    {
      tanggal: "24 Agustus",
      judul: "Hari “seng” lahir",
      cerita: "Awalnya kakak. Terus cinta. Terus sayang. Terus entah gimana jadi “seng”, dan nempel sampai sekarang. {{n_seng}} kali.",
      ikon: "bintang",
    },
    {
      tanggal: "9 September",
      judul: "Hari kamu",
      cerita: "Hari ini punya kamu. Dan kalau boleh milih ulang {{hariAktif}} hari kemarin, aku bakal milih yang sama.",
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
      "Kita ketemu waktu lagi capek-capeknya di gunung. Nggak ada yang sempet jaga image. Mungkin itu sebabnya aku gampang ngerasa aman sama kamu.",
      "Terus jam sebelas malam kamu kepencet nomorku, panik, terus nulis “damai”. Aku masih ketawa tiap inget itu.",
      "{{hariAktif}} hari. {{totalPesan}} pesan. Nggak ada satu hari pun yang kosong.",
      "Aku baru sadar pas ngitungin: kita hampir nggak pernah ngomong yang besar-besar. Yang diulang-ulang cuma “udah makan?”, {{n_udahmakan}} kali. Sisanya “hati-hati ya” sama “semangat”. Ternyata segitu doang, dan ternyata cukup.",
      "Kamu cantik, dan itu justru bagian yang paling gampang buat disebut.",
      "Yang susah dijelasin tuh: kamu bisa nyalain aku lagi pas aku lagi mati lampu. Kamu yang nyariin duluan pas aku milih diem. Kamu inget hal-hal kecil yang aku sendiri lupa.",
      "You shine, seng. And I'm still learning how to keep up. Tapi aku nggak ke mana-mana.",
      "Selamat ulang tahun. Makasih udah lahir. Makasih udah nyampe ke aku.",
    ],
    ttd: "— dari aku",
  },

  /* --- 5. HARAPAN (muncul setelah lilin ditiup) ------------------------ */
  harapan: {
    judul: "Sebelum lilinnya mati",
    kalimat: "Semoga tahun ini kamu lebih banyak ketawanya, lebih dikit overthinking-nya. Dan semoga aku masih yang nanyain kamu udah makan atau belum.",
  },

  /* --- 6. LAGU (opsional) ----------------------------------------------
     Taruh assets/audio/lagu.m4a — tombol putar muncul sendiri.     */
  lagu: "assets/audio/lagu.m4a?v=1fb6bad3",
};
