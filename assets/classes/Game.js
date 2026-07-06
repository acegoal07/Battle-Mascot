module.exports = class {
   /**
    * @param {{
    *    combat: Number,
    *    intelligence: Number,
    *    mischiefMayhem: Number,
    *    coolness: Number,
    *    popularity: Number,
    * }} weights
    * @param {import('./Card')} card1
    * @param {import('./Card')} card2
    */
   constructor(weights, card1, card2) {
      /**
       * @type {{
       *    combat: Number,
       *    intelligence: Number,
       *    mischiefMayhem: Number,
       *    coolness: Number,
       *    popularity: Number,
       * }}
       */
      this.weights = weights;

      /**
       * @type {import('./Card')}
       */
      this.card1 = card1;

      /**
       * @type {Number}
       */
      this.card1PowerScore = card1.calculatePowerScore(weights);

      /**
       * @type {import('./Card')}
       */
      this.card2 = card2;

      /**
       * @type {Number}
       */
      this.card2PowerScore = card2.calculatePowerScore(weights);

      /**
       * @type {Number}
       */
      this.cardPowerScoreDiff = this.card1PowerScore - this.card2PowerScore;
   }

   /**
    * Gets card ones's win probability
    * @returns {Number}
    */
   getCard1WinProbability() {
      return 1 / (1 + Math.exp(-0.1 * this.cardPowerScoreDiff));
   }

   /**
    * Gets card two's win probability
    * @returns {Number}
    */
   getCard2WinProbability() {
      return 1 - this.getCard1WinProbability();
   }

   /**
    * Decides who wins and returns 0 for card 1 and 1 for card 2
    * @returns {Number}
    */
   decideWinner() {
      return Math.random() < this.getCard1WinProbability() ? 1 : 0;
   }
};
