import { AbstractWeapon } from '../../interfaces/AbstractWeapon';
import weaponData from '../../utility/weapon-data.json'

export class Wand extends AbstractWeapon {
  name: string = weaponData.wand.name;
  whoCouldUse: string = weaponData.wand.whoCouldUse;
  minDamage: number = weaponData.wand.minDamage;
  maxDamage: number = weaponData.wand.maxDamage;
  hitChance: number = weaponData.wand.hitChance;
}