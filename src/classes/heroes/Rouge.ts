import { AbstractHero } from '../../interfaces/AbstractHero';
import heroData from '../../utility/hero-data.json'

export class Rouge extends AbstractHero implements Hero {
  type: string = heroData.rouge.type;
  healthPoint: number = heroData.rouge.HP;
  ability: string = heroData.rouge.ability;
  armour: number = heroData.rouge.armour;
  evasion: number = heroData.rouge.evasion;

  constructor(name: string) {
    super(name);
  }
}