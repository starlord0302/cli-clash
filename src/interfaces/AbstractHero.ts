import { Hero } from "./Hero";
import { Weapon } from "./Weapon";

export abstract class AbstractHero implements Hero{
  abstract type: string;
  abstract healthPoint: number;
  abstract ability: string;
  abstract armour: number;
  abstract evasion: number;
  weapon: Weapon | undefined;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  equipWeapon(weapon: Weapon) {
    this.weapon = weapon;
    if (this.weapon.whoCouldUse != this.type && this.weapon.whoCouldUse != 'everybody') {
      this.weapon.minDamage = 0;
      this.weapon.maxDamage = 0;
    }
  }
}
