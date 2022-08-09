import { generateRandomTo100 } from "../utility/random-generator";

export class Chance {
  abilityChance: number;
  evasionChance: number;
  hitChance: number;
  damageToAdd: number;

  constructor(abilityChance: number, evasionChance: number, hitChance: number, damageToAdd: number) {
    this.abilityChance = abilityChance;
    this.evasionChance = evasionChance;
    this.hitChance = hitChance;
    this.damageToAdd = damageToAdd;
  }

  randomizeChances(): void {
    this.abilityChance = generateRandomTo100();
    this.evasionChance = generateRandomTo100();
    this.hitChance = generateRandomTo100();
  }
}