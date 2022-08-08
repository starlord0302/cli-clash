import { AbstractWeapon } from '../../interfaces/AbstractWeapon';
import weaponData from '../../utility/weapon-data.json'

export class Bow extends AbstractWeapon {
  name: string = weaponData.bow.name;
  whoCouldUse: string = weaponData.bow.whoCouldUse;
  minDamage: number = weaponData.bow.minDamage;
  maxDamage: number = weaponData.bow.maxDamage;
  hitChance: number = weaponData.bow.hitChance;
}