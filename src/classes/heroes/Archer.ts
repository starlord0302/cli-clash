import { AbstractHero } from '../../interfaces/AbstractHero';
import heroData from '../../utility/hero-data.json'

export class Archer extends AbstractHero implements Hero {
  healthPoint: number = heroData.archer.HP;
  ability: string = heroData.archer.ability;
  armour: number = heroData.archer.armour;
  evasion: number = heroData.archer.evasion;
  
  constructor(name: string) {
    super(name);
  }
}