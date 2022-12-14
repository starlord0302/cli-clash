import { AbstractHero } from '../../interfaces/AbstractHero';
import heroData from '../../utility/hero-data.json';

export class Warrior extends AbstractHero {
  type: string = heroData.warrior.type;
  healthPoint: number = heroData.warrior.HP;
  ability: string = heroData.warrior.ability;
  armour: number = heroData.warrior.armour;
  evasion: number = heroData.warrior.evasion;

  constructor(name: string) {
    super(name);
  }
}