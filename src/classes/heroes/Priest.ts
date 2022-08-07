import { AbstractHero } from '../../interfaces/AbstractHero';
import heroData from '../../utility/hero-data.json'

export class Priest extends AbstractHero implements Hero {
  healthPoint: number = heroData.priest.HP;
  ability: string = heroData.priest.ability;
  armour: number = heroData.priest.armour;
  evasion: number = heroData.priest.evasion;
  
  constructor(name: string) {
    super(name);
  }
}