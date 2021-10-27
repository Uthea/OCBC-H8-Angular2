const kursi = {
  warna: "putih salju",
  bahan: "kain",
  merk: "FSD OCBC",
  jumlahKaki: 40,
  kategori: "gaming",
  harga: 750000,
  bebanMaksimal: 200,
};

function getValue(obj, key) {
  return obj[key];
}

// const getValue = function (obj, key) {};

const getValueArrowFunction = () => {};
console.log(getValue(kursi, "harga"));
