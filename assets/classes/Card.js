module.exports = class {
   /**
    * @param {{
    *    name: String
    *    combatAbility: Number,
    *    intelligence: Number,
    *    mischief: Number,
    *    coolness: Number,
    *    popularity: Number
    * }} data
    */
   constructor(data) {
      /**
       * @type {String}
       */
      this.name = data.name;

      /**
       * @type {{
       *    combat: Number,
       *    intelligence: Number,
       *    mischiefMayhem: Number,
       *    coolness: Number,
       *    popularity: Number,
       * }}
       */
      this.stats = {
         /**
          * @type {Number}
          */
         combat: data.combatAbility,
         /**
          * @type {Number}
          */
         intelligence: data.intelligence,
         /**
          * @type {Number}
          */
         mischiefMayhem: data.mischief,
         /**
          * @type {Number}
          */
         coolness: data.coolness,
         /**
          * @type {Number}
          */
         popularity: data.popularity
      };
   }

   /**
    * calculates the power score of the card
    * @param {{
    *    combat: Number,
    *    intelligence: Number,
    *    mischiefMayhem: Number,
    *    coolness: Number,
    *    popularity: Number,
    * }} weights
    * @returns {Number}
    */
   calculatePowerScore(weights) {
      return (
         this.stats.combat * weights.combat +
         this.stats.coolness * weights.coolness +
         this.stats.intelligence * weights.intelligence +
         this.stats.mischiefMayhem * weights.mischiefMayhem +
         this.stats.popularity * weights.popularity
      );
   }
};
