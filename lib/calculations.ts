export const calculate = {
  suDarbesi: (
    boruCinsi: number,
    icCap: number,
    anmaCapı: number,
    anmaBasinci: number,
    etKalınlıgı: number,
    debi: number,
    islBas: number,
  ) => {
    
    const K = boruCinsi;

    const et =
      (parseFloat(debi) * parseFloat(islBas)) / (160 + Math.round(parseFloat(islBas) * 10) / 10);

    const iccap = parseFloat(debi) - 2 * et;

    const hiz_d = (4 * parseFloat(debi)) / 1000 / ((Math.PI * Math.pow(iccap, 2)) / 1000000);
    const roundedHizD = hiz_d.toFixed(2);

    const c = 9900 / Math.sqrt(48.3 + (K * iccap) / et);
    const dp = ((hiz_d * c) / 9.81).toFixed(1);

    const hmax = (parseFloat(islBas) * 10 + parseFloat(dp)).toFixed(1);
    const hmin = (parseFloat(islBas) * 10 - parseFloat(dp)).toFixed(1);

    return {
      hizD: roundedHizD,
      dp,
      hmax,
      hmin,
    };
  },

  kompansator: () => {},

  cazibeliHat: () => {},

  basıncKaybı: () => {},

  korugeBoru: () => {},
};
