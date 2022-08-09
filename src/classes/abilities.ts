import { Hero } from '../interfaces/Hero';
import abilityData from '../utility/ability-data.json';
import heroData from '../utility/hero-data.json';

export class Boost {
  static armour(hero: Hero): void {
    if (hero.ability === abilityData.armour.abilityName) {
      hero.armour += abilityData.armour.amount;
    }
  }

  static dodge(hero: Hero): void {
    if (hero.ability === abilityData.dodge.abilityName) {
      hero.evasion = abilityData.dodge.amount;
    }
  }

  static firestorm(hero: Hero): void {
    if (hero.ability === abilityData.firestorm.abilityName) {
      hero.weapon!.minDamage += abilityData.firestorm.amount;
      hero.weapon!.maxDamage += abilityData.firestorm.amount;
    }
  }
}

export class Decline {
  static armour(hero: Hero): void {
    if (hero.ability === abilityData.armour.abilityName) {

      if (hero.armour - abilityData.armour.amount < 0) {
        throw new Error('Armour can\'t go below 0!');
      } else {
        hero.armour -= abilityData.armour.amount;
      }
    }
  }

  static dodge(hero: Hero): void {
    if (hero.ability === abilityData.dodge.abilityName) {
      const initialEvasion = heroData[hero.type].evasion;
      hero.evasion = initialEvasion;
    }
  }

  static firestorm(hero: Hero): void {
    if (hero.ability === abilityData.firestorm.abilityName) {
      hero.weapon!.minDamage -= abilityData.firestorm.amount;
      hero.weapon!.maxDamage -= abilityData.firestorm.amount;
    }
  }
}

const methods: { [methodName: string]: Function } = {
    'add-armour': Boost.armour,
    'remove-armour': Decline.armour
};

export function boostMethod(hero: Hero) {
  return methods[`add-${hero.ability}`](hero);
}

export function declineMethod(hero: Hero) {
  return methods[`remove-${hero.ability}`](hero);
}