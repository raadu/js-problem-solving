const text = "+88-01743906668";
const regex = /(\+88)?-?01[1-9]\d{8}/g;

const matches = text.match(regex);

console.log(matches);
