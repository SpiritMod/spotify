export const msToMin = (ms) => {
  let min = parseInt( ms/1000/60 );
  let sec = Math.floor((ms/1000) % 60);

  sec < 10 ? sec = `0${sec}` : sec = `${sec}`;
  min < 10 ? min = `0${min}` : min = `${min}`;

  return `${min}:${sec}`;
};