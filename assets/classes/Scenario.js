module.exports = class {
   /**
    * The weights for the stats
    * @type {{
    *    combat: Number,
    *    intelligence: Number,
    *    mischiefMayhem: Number,
    *    coolness: Number,
    *    popularity: Number,
    * }}
    */
   weights = {
      combat: 0.1,
      intelligence: 0.1,
      mischiefMayhem: 0.1,
      coolness: 0.1,
      popularity: 0.1
   };

   /**
    * Runs the scenario
    * @param {import('./Game')} game
    * @param {import('chalk').ChalkInstance} chalk
    */
   async run(game, chalk) {
      console.log(chalk.red.bold('\nNo Game Implemented\n'));
      console.log(game);
   }
};
