const { confirm } = require('@topcli/prompts');
const Scenario = require('../assets/classes/Scenario');
const delay = require('../assets/util/Delay');
const countdown = require('../assets/util/Countdown');
const winner = require('../assets/util/Winner');

module.exports = class extends Scenario {
   weights = {
      combat: 0.1,
      intelligence: 0.45,
      mischiefMayhem: 0.25,
      coolness: 0.2,
      popularity: 0.1
   };

   async run(game, chalk) {
      const fight = await confirm(chalk.redBright.bold('Are you ready to play?'), {
         initial: true
      });

      if (!fight) {
         console.log(chalk.gray('\nThe players leave the table...\n'));
         return;
      }

      await countdown();
      console.clear();

      console.log(chalk.yellowBright('⚔ The park falls silent...'));
      await delay(900);

      console.log(`${game.card1.name} offers the queens gambit!`);
      await delay(800);

      console.log(`${game.card2.name} accepts!`);
      await delay(800);

      console.log(chalk.gray('A sacrifice is made...'));
      await delay(900);

      console.log(chalk.gray('The queen is blundered...'));
      await delay(1200);

      console.log(chalk.gray('The suspense builds...'));
      await delay(1200);

      console.clear();
      winner(game, chalk);
   }
};
