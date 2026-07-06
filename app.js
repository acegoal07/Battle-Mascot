require('dotenv').config();

const { Chalk } = require('chalk');
const { select } = require('@topcli/prompts');
const Game = require('./assets/classes/Game');
const Card = require('./assets/classes/Card');
const renderCard = require('./assets/util/RenderCard');
const fs = require('fs');

const chalk = new Chalk({ level: 3 });

(async () => {
   console.clear();

   console.log(
      chalk.redBright.bold(`\n
   ██████╗  █████╗ ████████╗████████╗██╗     ███████╗
   ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██║     ██╔════╝
   ██████╔╝███████║   ██║      ██║   ██║     █████╗
   ██╔══██╗██╔══██║   ██║      ██║   ██║     ██╔══╝
   ██████╔╝██║  ██║   ██║      ██║   ███████╗███████╗
   ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝

   ███╗   ███╗ █████╗ ███████╗ ██████╗ ██████╗ ████████╗
   ████╗ ████║██╔══██╗██╔════╝██╔════╝██╔═══██╗╚══██╔══╝
   ██╔████╔██║███████║███████╗██║     ██║   ██║   ██║
   ██║╚██╔╝██║██╔══██║╚════██║██║     ██║   ██║   ██║
   ██║ ╚═╝ ██║██║  ██║███████║╚██████╗╚██████╔╝   ██║
   ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝    ╚═╝\n`)
   );

   const availableMascot = await fetch(process.env.CARDS_ENDPOINT).then((res) => res.json());

   if (availableMascot.length < 2) {
      console.log(chalk.bold.red("\nYou need at least 2 mascots\n"));
      return;
   }

   const card1Selected = await select('Choose Fighter 1', {
      choices: availableMascot.map((m) => m.name)
   });

   const card2Selected = await select('Choose Fighter 2', {
      choices: availableMascot.map((m) => m.name).filter((name) => name !== card1Selected)
   });

   const availableScenarios = await fs
      .readdirSync(process.env.SCENARIOS_FOLDER)
      .filter((res) => res.endsWith('.js'))
      .map((name) => name.split('.')[0]);

   const selectedScenario = await select('Choose your scenario', {
      choices: availableScenarios
   });

   const selectedScenarioImport = require(
      `${process.env.SCENARIOS_FOLDER}${selectedScenario.toLowerCase()}.js`
   );

   const scenario = new selectedScenarioImport();

   const game = new Game(
      scenario.weights,
      new Card(availableMascot.find((m) => m.name === card1Selected)),
      new Card(availableMascot.find((m) => m.name === card2Selected))
   );

   // const game = new Game(
   //    scenario.weights,
   //    new Card({
   //       name: 'Player 1',
   //       combatAbility: 43,
   //       intelligence: 70,
   //       mischief: 49,
   //       coolness: 32,
   //       popularity: 59
   //    }),
   //    new Card({
   //       name: 'Player 2',
   //       combatAbility: 54,
   //       intelligence: 65,
   //       mischief: 35,
   //       coolness: 24,
   //       popularity: 70
   //    })
   // );

   console.clear();
   console.log(
      `\n${chalk.greenBright.bold(game.card1.name)} ⚔  VS  ⚔ ${chalk.blueBright.bold(game.card2.name)}\n`
   );

   renderCard(game.card1, game.getCard1WinProbability(), chalk);
   renderCard(game.card2, game.getCard2WinProbability(), chalk);

   await scenario.run(game, chalk);
})();
