//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let numString = String(number);
  numString = numString.slice(-1);

  let numString2 = String(number);
  numString2 = numString2.slice(-2);

  if (numString === '1' && numString2 != '11') {
    return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  } else if (numString === '2' && numString2 != '12') {
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  } else if (numString === '3' && numString2 != '13') {
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  } else {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }
};
