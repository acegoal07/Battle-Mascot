/**
 * @param {import('../classes/Game')} game
 * @param {import('chalk').ChalkInstance} chalk
 */
module.exports = (game, chalk) => {
   console.log(
      chalk.greenBright.bold(
         `\n██╗    ██╗██╗███╗   ██╗███╗   ██╗███████╗██████╗
██║    ██║██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
██║ █╗ ██║██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
██║███╗██║██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
╚███╔███╔╝██║██║ ╚████║██║ ╚████║███████╗██║  ██║
 ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝\n`
      )
   );

   console.log(chalk.yellowBright('══════════════════════════════════════════════'));
   console.log(
      chalk.greenBright.bold(
         `🏆 ${(game.decideWinner() ? game.card1 : game.card2).name.toUpperCase()} IS VICTORIOUS! 🏆`
      )
   );
   console.log(chalk.yellowBright('══════════════════════════════════════════════\n'));
};
