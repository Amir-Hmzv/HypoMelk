export function convertToPersianNumber(number) {
    const persianDigits = {
      0: '۰',
      1: '۱',
      2: '۲',
      3: '۳',
      4: '۴',
      5: '۵',
      6: '۶',
      7: '۷',
      8: '۸',
      9: '۹',
    };
  
    const numberString = String(number);
    let result = '';
  
    for (let i = 0; i < numberString.length; i++) {
      const digit = numberString[i];
      result += persianDigits[digit] || digit;
    }
  
    return result;
  }
  