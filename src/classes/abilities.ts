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

  static headshot(hero: Hero): void {
    if (hero.ability === abilityData.headshot.abilityName) {
      hero.weapon!.minDamage += abilityData.headshot.amount;
      hero.weapon!.maxDamage += abilityData.headshot.amount;
    }
  }

  static heal(hero: Hero): void {
    if (hero.ability === abilityData.heal.abilityName) {
      hero.healthPoint += 10;
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

  static headshot(hero: Hero): void {
    if (hero.ability === abilityData.headshot.abilityName) {
      hero.weapon!.minDamage -= abilityData.headshot.amount;
      hero.weapon!.maxDamage -= abilityData.headshot.amount;
    }
  }

  static heal(hero: Hero): void {}
}

const methods: { [methodName: string]: Function } = {
    'add-armour': Boost.armour,
    'remove-armour': Decline.armour,
    'add-dodge': Boost.dodge,
    'remove-dodge': Decline.dodge,
    'add-firestorm': Boost.firestorm,
    'remove-firestorm': Decline.firestorm,
    'add-headshot': Boost.headshot,
    'remove-headshot': Decline.headshot,
    'add-heal': Boost.heal,
    'remove-heal': Decline.heal
};

export function boostMethod(hero: Hero) {
  return methods[`add-${hero.ability}`](hero);
}

export function declineMethod(hero: Hero) {
  return methods[`remove-${hero.ability}`](hero);
}