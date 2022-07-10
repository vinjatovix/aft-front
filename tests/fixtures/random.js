const chance = require("chance").Chance();

const arrayElement = (array = []) => chance.pickone(array);

const description = (words = 5) => chance.sentence({ words });

const name = () => chance.sentence().replace(/[ ]|[\.]/g, "-");

const uuid = (version = 4) => chance.guid({ version });

const word = (length = 10) => chance.word({ length });

module.exports = {
  arrayElement,
  description,
  name,
  uuid,
  word,
};
