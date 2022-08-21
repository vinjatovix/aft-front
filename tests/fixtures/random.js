export const chance = require("chance").Chance();

export const arrayElement = (array = []) => chance.pickone(array);

export const description = (words = 5) => chance.sentence({ words });

export const name = () => chance.sentence().replace(/\s|\./g, "-");

export const uuid = (version = 4) => chance.guid({ version });

export const word = (length = 10) => chance.word({ length });
