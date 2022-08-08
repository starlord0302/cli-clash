import { AbstractWeapon } from '../../interfaces/AbstractWeapon';
import weaponData from '../../utility/weapon-data.json';

export class Sword extends AbstractWeapon {
  name: string = weaponData.sword.name;
  whoCouldUse: string = weaponData.sword.whoCouldUse;
  minDamage: number = weaponData.sword.minDamage;
  maxDamage: number = weaponData.sword.maxDamage;
  hitChance: number = weaponData.sword.hitChance;
}