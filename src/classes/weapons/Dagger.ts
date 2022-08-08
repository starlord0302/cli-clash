import { AbstractWeapon } from '../../interfaces/AbstractWeapon';
import weaponData from '../../utility/weapon-data.json'

export class Dagger extends AbstractWeapon {
  name: string = weaponData.dagger.name;
  whoCouldUse: string = weaponData.dagger.whoCouldUse;
  minDamage: number = weaponData.dagger.minDamage;
  maxDamage: number = weaponData.dagger.maxDamage;
  hitChance: number = weaponData.dagger.hitChance;
}