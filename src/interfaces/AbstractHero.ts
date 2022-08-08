import { AbstractWeapon } from "./AbstractWeapon";
import { Hero } from "./Hero";
import { Weapon } from "./Weapon";

export abstract class AbstractHero implements Hero{
  abstract type: string;
  abstract healthPoint: number;
  abstract ability: string;
  abstract armour: number;
  abstract evasion: number;
  weapon: AbstractWeapon | undefined = undefined;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  equipWeapon(weapon: AbstractWeapon) {
    this.weapon = weapon;
    if (this.weapon.whoCouldUse != this.type && this.weapon.whoCouldUse != 'everybody') {
      this.weapon.minDamage = 0;
      this.weapon.maxDamage = 0;
    }
  }

  attack(opponent: Hero, intialDamageAdder: number, chanceToHit: number, evadeChance: number): number {
    if (chanceToHit <= this.weapon!.hitChance * 100 && this.weapon!.maxDamage > 0) {
      if (evadeChance >= opponent.evasion) {
        return this.weapon!.getDamage(intialDamageAdder) - Math.floor(opponent.armour / 3);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
}
