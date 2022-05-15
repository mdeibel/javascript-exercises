const ftoc = function(fTemp) {
  return Math.round((5 / 9 * (fTemp - 32)) * 10) / 10;
};

const ctof = function(cTemp) {
  return Math.round((9 / 5 * cTemp + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
