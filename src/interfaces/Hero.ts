import { Weapon } from './Weapon';

export interface Hero {
  type: string;
  healthPoint: number;
  ability: string;
  armour: number;
  evasion: number;
  weapon: Weapon | undefined;
}