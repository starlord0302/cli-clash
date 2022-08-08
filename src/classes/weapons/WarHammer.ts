import { AbstractWeapon } from '../../interfaces/AbstractWeapon';
import weaponData from '../../utility/weapon-data.json'

export class WarHammer extends AbstractWeapon {
  name: string = weaponData.warHammer.name;
  whoCouldUse: string = weaponData.warHammer.whoCouldUse;
  minDamage: number = weaponData.warHammer.minDamage;
  maxDamage: number = weaponData.warHammer.maxDamage;
  hitChance: number = weaponData.warHammer.hitChance;
}