const dateFormat = require("dateformat");
module.exports = {
  first,
  generateTransactionCode,
  generatePartnerOrg,
  generateStr,
  randomIntFromInterval,
  generateAmount,
  generateAmount01,
  generateTransactionDate
};

function generateTransactionDate() {
  const rndCode = () => {
    let mm = randomIntFromInterval(1, 12);
    mm = mm.length === 1 ? "0" + mm : mm;
    let dd = randomIntFromInterval(1, 12);
    dd = dd.length === 1 ? "0" + dd : dd;
    return mm + "/" + dd + "/2019";
  };
  return rndCode();
}

function generateAmount() {
  const rndCode = () => {
    return (
      "$" + randomIntFromInterval(1, 99) + "." + randomIntFromInterval(1, 99)
    );
  };
  return rndCode();
}

function generateAmount01() {
  const rndCode = () => {
    return parseInt(randomIntFromInterval(100000, 1000000));
  };
  return rndCode();
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min) + "";
}

function generateStr() {
  const rndCode = () => {
    let note = [
      "Bypass R Ext Iliac Art to L Ext Ilia, Perc Endo Approach",
      "Dilate Splenic Art, Bifurc, w 2 Intralum Dev, Perc",
      "Destruction of Face Subcu/Fascia, Open Approach",
      "Occlusion R Hypogast Vein w Extralum Dev, Open",
      "Fluoroscopy of Sternum using High Osmolar Contrast",
      "Removal of Synth Sub from Abd Wall, Perc Endo Approach",
      "Bypass R Hepatic Duct to CBD w Intralum Dev, Perc Endo",
      "Extirpation of Matter from Right Trunk Tendon, Perc Approach",
      "Unspecified superficial injury of left thub",
      "Lacerat unsp blood vessel at lower leg level, unsp leg, init",
      "Breakdown (mechanical) of int fix of left humeru",
      "Driver of hv veh injured in clsn w 2/3-whl mv in traf, subs",
      "Dislocation of T1/T2 thoracic vertebra, subsequent encounter",
      "Postproc seroma of a resp sys org fol a resp sys procedure",
      "Hypertension secondary to other renal disorders",
      "Unsp injury of intrinsic musc/fasc/tend thmb at wrs/hnd lv",
      "Personal history of (corrected) congenital malform of ear",
      "Extirpation of Matter from L Fem Art, Bifurc, Open Approach"
    ];
    return note[Math.floor(Math.random() * note.length)];
  };
  return rndCode();
}

function generatePartnerOrg() {
  const rndCode = () => {
    let name = [
      "Andre",
      "Yoshua",
      "Figo",
      "Shanon",
      "Eci",
      "Tommi",
      "Rangga",
      "Tatas",
      "Putra"
    ];
    return name[Math.floor(Math.random() * name.length)];
  };
  return rndCode();
}

function generateTransactionCode() {
  const rndCode = () => {
    return (
      randomIntFromInterval(1, 9) +
      randomIntFromInterval(1, 9) +
      randomIntFromInterval(1, 9) +
      randomIntFromInterval(1, 9) +
      randomIntFromInterval(1, 9) +
      "-" +
      randomIntFromInterval(1, 9) +
      randomIntFromInterval(1, 9) +
      randomIntFromInterval(1, 9)
    );
  };
  return rndCode();
}

function first() {
  return generateCode01();
}

function generateCode01() {
  const rndCode = () => {
    let tess = dateFormat(new Date(), "ddmmyyyyHHMMssl");
    var res = tess.split("");

    var str = "";
    for (var x in res) {
      if (x % 3 == 0) {
        str += res[x] + rndAlphabet() + rndAlphabet() + rndAlphabet();
      } else {
        str += res[x];
      }
    }
    return str;
  };

  const rndAlphabet = () => {
    var alph = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    return alph[Math.floor(Math.random() * alph.length)];
  };
  return rndCode();
}
