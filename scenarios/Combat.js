const { confirm } = require('@topcli/prompts');
const Scenario = require('../assets/classes/Scenario');
const delay = require('../assets/util/Delay');
const countdown = require('../assets/util/Countdown');
const winner = require('../assets/util/Winner');

module.exports = class extends Scenario {
   weights = {
      combat: 0.3,
      intelligence: 0.2,
      mischiefMayhem: 0.25,
      coolness: 0.15,
      popularity: 0.1
   };

   async run(game, chalk) {
      const fight = await confirm(chalk.redBright.bold('Begin the battle?'), { initial: true });

      if (!fight) {
         console.log(chalk.gray('\nThe warriors leave the arena...\n'));
         return;
      }

      await countdown();
      console.clear();

      console.log(chalk.yellowBright('⚔ The arena falls silent...'));
      await delay(900);

      console.log(`${game.card1.name} charges!`);
      await delay(800);

      console.log(`${game.card2.name} retaliates!`);
      await delay(800);

      console.log(chalk.gray('Steel clashes...'));
      await delay(900);

      console.log(chalk.gray('The dust settles...'));
      await delay(1200);

      console.log(chalk.gray('The suspense builds...'));
      await delay(1200);

      console.clear();
      winner(game, chalk);
   }
};
