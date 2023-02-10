export const getSigns = () => {
  return fetch("http://sandipbgt.com/theastrologer/api/sunsigns/").then(
    (response) => response.json()
  );
};

export const getHoroscope = (sign, timeframe) => {
  return fetch(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}/`
  )
    .then((response) => response.json())
    .then(({ horoscope }) => horoscope);
};
