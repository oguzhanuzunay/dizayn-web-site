let K;
let BoruCinsi, Formul, AnmaCapi, AnmaBasinci;
let cazibe;
function init() {
  cazibe = document.getElementById('cazibe');
}

function boru_onchange() {
  cazibe.hiz_d.value = '';
  cazibe.dp.value = '';
  cazibe.Hmax.value = '';
  cazibe.Hmin.value = '';
  if (cazibe.debi.value != '') {
    if (cazibe.isl_bas.value != '') {
      RS();
    }
  }
}

function bas_onchange() {
  let et;

  AnmaCapi = document.cazibe.DN.options[document.cazibe.DN.selectedIndex].value;
  AnmaBasinci = document.cazibe.PN.options[document.cazibe.PN.selectedIndex].value;

  et = (AnmaCapi * AnmaBasinci) / (160 + Math.round(AnmaBasinci * 10) / 10);
  et = Math.round(et * 10) / 10;
  document.cazibe.etkal.value = et;

  document.cazibe.iccap.value = AnmaCapi - 2 * et;
  document.cazibe.hiz_d.value = '';
  document.cazibe.dp.value = '';
  document.cazibe.Hmax.value = '';
  document.cazibe.Hmin.value = '';
  if (cazibe.debi.value != '') {
    if (document.cazibe.isl_bas.value != '') {
      RS();
    }
  }
}

function RS() {
  let c;
  if (document.cazibe.boru_cinsi.options[0].selected) {
    K = 377;
  }
  if (document.cazibe.boru_cinsi.options[1].selected) {
    K = 33.3;
  }
  if (document.cazibe.boru_cinsi.options[2].selected) {
    K = 0.5;
  }
  if (document.cazibe.boru_cinsi.options[3].selected) {
    K = 1;
  }

  document.cazibe.hiz_d.value =
    (4 * document.cazibe.debi.value) /
    1000 /
    ((Math.PI * document.cazibe.iccap.value * document.cazibe.iccap.value) / 1000000);

  document.cazibe.hiz_d.value = Math.round(document.cazibe.hiz_d.value * 100) / 100;
  c = 9900 / Math.sqrt(48.3 + (K * document.cazibe.iccap.value) / document.cazibe.etkal.value);
  document.cazibe.dp.value = Math.round(((document.cazibe.hiz_d.value * c) / 9.81) * 10) / 10;
  document.cazibe.Hmax.value =
    Math.round(document.cazibe.isl_bas.value * 10 * 10) / 10 +
    Math.round(document.cazibe.dp.value * 10) / 10;
  document.cazibe.Hmin.value =
    Math.round(document.cazibe.isl_bas.value * 10 * 10) / 10 -
    Math.round(document.cazibe.dp.value * 10) / 10;
}

/* ---------------------------------------------- */
