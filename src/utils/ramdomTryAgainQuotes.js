const encouragementMessages = [
  [
    '"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better." ~ Samuel Beckett',
  ],
  [
    '"Mistakes in life teach you how to succeed because you want to try again and do it better." ~ Carolina Herrera',
  ],
  ['"Our greatest weakness lies in giving up." ~ Thomas A. Edison'],
  ['"Defeat happens only to those who refuse to try again." ~ Nick Vujicic'],
  [
    '"The successful man will profit from his mistakes and try again in a different way." ~ Dale Carnegie',
  ],
  [
    '"If at first you don\'t succeed, try, try, try again." ~ William Edward Hickson',
  ],
  ['"Never give up! All you have to do is try again." ~ Park Bom'],
  ['"When you fall, leap to your feet and try again." ~ Nadia Comaneci'],
  [
    '"When you lose, you get up, you make it better, you TRY AGAIN." ~ Serena Williams',
  ],
  ['"Failure is never a reason not to try again." ~ Martha Albrand'],
  ['"One fails forward toward success." ~ Charles Kettering'],
  ['"Find a faster way to fail, recover, and try again." ~ Aza Raskin'],
];

export default () => {
  const lengthOfMessages = encouragementMessages.length;
  const number = Math.floor(Math.random() * lengthOfMessages) + 1;

  return encouragementMessages[number];
};
