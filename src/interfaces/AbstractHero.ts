import { AbstractWeapon } from "./AbstractWeapon";
import { Hero } from "./Hero";
import { Chance } from '../classes/Chance';
import { boostMethod, declineMethod } from "../classes/abilities";

export abstract class AbstractHero implements Hero {
  abstract type: string;
  abstract healthPoint: number;
  abstract ability: string;
  abstract armour: number;
  abstract evasion: number;
  weapon: AbstractWeapon | undefined = undefined;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  equipWeapon(weapon: AbstractWeapon) {
    this.weapon = weapon;
    if (this.weapon.whoCouldUse != this.type && this.weapon.whoCouldUse != 'everybody') {
      this.weapon.minDamage = 0;
      this.weapon.maxDamage = 0;
    }
  }

  attack(opponent: Hero, intialDamageAdder: number, chanceToHit: number, evadeChance: number): number {
    if (chanceToHit <= this.weapon!.hitChance * 100 && this.weapon!.maxDamage > 0) {
      if (evadeChance >= opponent.evasion) {
        return this.weapon!.getDamage(intialDamageAdder) - Math.floor(opponent.armour / 3);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  battleRound(opponent: Hero, chanceOfPlayer: Chance, chanceOfOpponent: Chance, whoStarts: number): string {

    let playerStatus = '';
    let opponentStatus = '';

    let boostOfPlayer = false;
    let boostOfOpponent = false;

    if (chanceOfPlayer.abilityChance <= 10) {
      boostOfPlayer = true;
      boostMethod(this);
      playerStatus += `${this.type} is using the ${this.ability} ability`;
    }

    if (chanceOfOpponent.abilityChance <= 10) {
      boostOfOpponent = true;
      boostMethod(opponent);
      opponentStatus += `${opponent.type} is using the ${this.ability} ability`;
    }

    if (whoStarts === 0) {
      const finalDamageOfPlayer = this.attack(opponent, chanceOfPlayer.damageToAdd, chanceOfPlayer.hitChance, chanceOfPlayer.evasionChance);
      opponent.healthPoint -= finalDamageOfPlayer;

      playerStatus += `, took an attack with a ${finalDamageOfPlayer} damage, opponent HP is ${opponent.healthPoint}`;

      const finalDamageOfOpponent = opponent.attack(this, chanceOfOpponent.damageToAdd, chanceOfOpponent.hitChance, chanceOfOpponent.evasionChance);
      this.healthPoint -= finalDamageOfOpponent;

      opponentStatus += `, took an attack with a ${finalDamageOfOpponent} damage, player HP is ${this.healthPoint}`;
    } else {
      const finalDamageOfOpponent = opponent.attack(this, chanceOfOpponent.damageToAdd, chanceOfOpponent.hitChance, chanceOfOpponent.evasionChance);
      this.healthPoint -= finalDamageOfOpponent;

      opponentStatus += `, took an attack with a ${finalDamageOfOpponent} damage, player HP is ${this.healthPoint}.`;

      const finalDamageOfPlayer = this.attack(opponent, chanceOfPlayer.damageToAdd, chanceOfPlayer.hitChance, chanceOfPlayer.evasionChance);
      opponent.healthPoint -= finalDamageOfPlayer;

      playerStatus += `, took an attack with a ${finalDamageOfPlayer} damage, opponent HP is ${opponent.healthPoint}.`;
    }

    if (boostOfPlayer) {
      declineMethod(this);
    }

    if (boostOfOpponent) {
      declineMethod(opponent);
    }

    return `${playerStatus}\n${opponentStatus}`;
  }
}
