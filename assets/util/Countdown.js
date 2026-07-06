const { Chalk } = require('chalk');
const delay = require('./Delay');

/**
 * Adds a designated delay
 */
module.exports = async () => {
   const chalk = new Chalk({ level: 3 });
   const stages = ['3', '2', '1', '⚔ Compete! ⚔'];

   for (const stage of stages) {
      console.clear();
      console.log(chalk.redBright.bold(stage));
      await delay(700);
   }
};
