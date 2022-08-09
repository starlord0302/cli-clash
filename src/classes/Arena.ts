import { AbstractHero } from "../interfaces/AbstractHero";
import { generateRandomToMax } from "../utility/random-generator";
import { Chance } from "./Chance";

export class Arena {
  static tournament(hero1: AbstractHero, hero2: AbstractHero) {
    console.log('Tournament: ');
    
    const hero1Chance: Chance = new Chance();
    const hero2Chance: Chance = new Chance();

    while (hero1.healthPoint >= 0 && hero2.healthPoint >= 0) {

      hero1Chance.randomizeChances();
      hero2Chance.randomizeChances();

      hero1Chance.damageToAdd = generateRandomToMax(hero1.weapon!.maxDamage - hero1.weapon!.minDamage);
      hero2Chance.damageToAdd = generateRandomToMax(hero2.weapon!.maxDamage - hero2.weapon!.minDamage);

      let whoStarts: number = generateRandomToMax(1);

      hero1.battleRound(hero2, hero1Chance, hero2Chance, whoStarts);
    }

    if (hero1.healthPoint <= 0) {
      console.log(`${hero2.name} WINS`);
      console.log(`${hero1.name} LOSES`);
    } else if (hero2.healthPoint <= 0) {
      console.log(`${hero1.name} WINS`);
      console.log(`${hero2.name} LOSES`);
    }
  }
}