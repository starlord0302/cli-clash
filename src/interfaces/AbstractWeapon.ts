import { Weapon } from './Weapon';

export abstract class AbstractWeapon implements Weapon {
  abstract name: string;
  abstract whoCouldUse: string;
  abstract minDamage: number;
  abstract maxDamage: number;
  abstract hitChance: number;

  getDamage(amount: number): number {
    if (amount > this.maxDamage - this.minDamage) {
      throw new Error('Maximum damage exceeded!');
    }
    return this.minDamage + amount;
  }
}