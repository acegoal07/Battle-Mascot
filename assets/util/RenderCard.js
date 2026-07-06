const BAR_WIDTH = 22;

/**
 * @param {import('chalk').ChalkInstance} chalk
 * @param {String} value
 * @returns {String}
 */
function statBar(chalk, value) {
   const filled = Math.round((value / 100) * BAR_WIDTH);
   const empty = BAR_WIDTH - filled;

   let colour = chalk.redBright;

   if (value >= 80) colour = chalk.greenBright;
   else if (value >= 60) colour = chalk.green;
   else if (value >= 40) colour = chalk.yellow;
   else if (value >= 20) colour = chalk.hex('#ff8800');
   return (
      `${colour('█'.repeat(filled))}` +
      `${chalk.gray('░'.repeat(empty))}` +
      ` ${String(value).padStart(3)}`.padEnd(10)
   );
}

/**
 * @param {import('../classes/Card')} card
 * @param {Float} chance
 * @param {import('chalk').ChalkInstance} chalk
 */
module.exports = (card, chance, chalk) => {
   console.log(chalk.cyan('╔══════════════════════════════════════════════╗'));
   console.log(chalk.cyan('║ ') + chalk.bold.white(card.name.padEnd(45)) + chalk.cyan('║'));
   console.log(chalk.cyan('╠══════════════════════════════════════════════╣'));

   console.log(
      `${chalk.cyan('║')} Combat       ${statBar(chalk, card.stats.combat)}${chalk.cyan('║')}`
   );
   console.log(
      `${chalk.cyan('║')} Intelligence ${statBar(chalk, card.stats.intelligence)}${chalk.cyan('║')}`
   );
   console.log(
      `${chalk.cyan('║')} Mischief     ${statBar(chalk, card.stats.mischiefMayhem)}${chalk.cyan('║')}`
   );
   console.log(
      `${chalk.cyan('║')} Coolness     ${statBar(chalk, card.stats.coolness)}${chalk.cyan('║')}`
   );
   console.log(
      `${chalk.cyan('║')} Popularity   ${statBar(chalk, card.stats.popularity)}${chalk.cyan('║')}`
   );

   console.log(chalk.cyan('╠══════════════════════════════════════════════╣'));

   const colour =
      chance >= 0.6 ? chalk.greenBright : chance >= 0.45 ? chalk.yellowBright : chalk.redBright;

   console.log(
      chalk.cyan('║ ') +
         `Victory Chance : ${colour(`${(chance * 100).toFixed(1)}%`)}`.padEnd(55) +
         chalk.cyan('║')
   );

   console.log(chalk.cyan('╚══════════════════════════════════════════════╝\n'));
};
