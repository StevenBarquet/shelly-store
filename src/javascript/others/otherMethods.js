export const priceFormat = number => {
  let num = number;
  num = num.toFixed(2);
  num = num.toString(10);
  const max = num.length;
  const comaIndex = max - 6;
  const half1 = str => {
    let cadena = '';
    for (let i = 0; i < comaIndex; i++) {
      cadena += str[i];
    }
    return cadena;
  };
  const half2 = str => {
    let cadena = '';
    for (let i = comaIndex; i < max; i++) {
      cadena += str[i];
    }
    return cadena;
  };

  const finalNum = '$' + half1(num) + ',' + half2(num);
  return finalNum;
};

export default null;
