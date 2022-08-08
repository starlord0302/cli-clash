import { AbstractHero } from '../../interfaces/AbstractHero';
import heroData from '../../utility/hero-data.json';

export class Mage extends AbstractHero implements Hero {
  type: string = heroData.mage.type;
  healthPoint: number = heroData.mage.HP
  ability: string = heroData.mage.ability;
  armour: number = heroData.mage.armour;
  evasion: number = heroData.mage.evasion;

  constructor(name: string) {
    super(name);
  }
}