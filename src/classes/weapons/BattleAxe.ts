import { AbstractWeapon } from '../../interfaces/AbstractWeapon';
import weaponData from '../../utility/weapon-data.json'

export class BattleAxe extends AbstractWeapon {
  name: string = weaponData.battleAxe.name;
  whoCouldUse: string = weaponData.battleAxe.whoCouldUse;
  minDamage: number = weaponData.battleAxe.minDamage;
  maxDamage: number = weaponData.battleAxe.maxDamage;
  hitChance: number = weaponData.battleAxe.hitChance;
}