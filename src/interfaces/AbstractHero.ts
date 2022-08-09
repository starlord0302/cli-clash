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
    if (
      this.weapon.whoCouldUse != this.type &&
      this.weapon.whoCouldUse != 'everybody'
    ) {
      this.weapon.minDamage = 0;
      this.weapon.maxDamage = 0;
    }
  }

  attack(
    opponent: AbstractHero,
    intialDamageAdder: number,
    chanceToHit: number,
    evadeChance: number
  ): number {
    if (
      chanceToHit <= this.weapon!.hitChance * 100 &&
      this.weapon!.maxDamage > 0
    ) {
      if (evadeChance >= opponent.evasion) {
        return (
          this.weapon!.getDamage(intialDamageAdder) -
          Math.floor(opponent.armour / 3)
        );
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  battle(
    opponent: AbstractHero,
    chanceOfPlayer: Chance,
    chanceOfOpponent: Chance
  ): string {
    let playerStatus = `ATTACKER: {name: ${this.name}, type: ${this.type}, ability: ${this.ability} `;
    let opponentStatus = `DEFENDER: {name: ${opponent.name}, type: ${opponent.type}, ability: ${opponent.ability} `;

    let boostOfPlayer = false;
    let boostOfOpponent = false;

    if (chanceOfPlayer.abilityChance <= 10) {
      boostOfPlayer = true;
      boostMethod(this);
      playerStatus += 'in use, ';
    } else {
      playerStatus += 'not in use, ';
    }

    if (chanceOfOpponent.abilityChance <= 10) {
      boostOfOpponent = true;
      boostMethod(opponent);
      opponentStatus += 'in use, ';
    } else {
      opponentStatus += 'not in use, ';
    }

    const finalDamageOfPlayer = this.attack(
      opponent,
      chanceOfPlayer.damageToAdd,
      chanceOfPlayer.hitChance,
      chanceOfOpponent.evasionChance
    );

    playerStatus += `damage made: ${finalDamageOfPlayer}}`;

    opponent.healthPoint -= finalDamageOfPlayer;

    opponentStatus += `HP after the attack: ${opponent.healthPoint}}`;

    if (boostOfPlayer) {
      declineMethod(this);
    }

    if (boostOfOpponent) {
      declineMethod(opponent);
    }

    let battleResult = `${playerStatus}\n${opponentStatus}`;

    return battleResult;
  }

  battleRound(
    opponent: AbstractHero,
    chanceOfPlayer: Chance,
    chanceOfOpponent: Chance,
    whoStarts: number
  ): void {
    let firstBattle = '';
    let secondBattle = '';
    if (whoStarts == 0) {
      firstBattle += this.battle(opponent, chanceOfPlayer, chanceOfOpponent);
      secondBattle += opponent.battle(this, chanceOfOpponent, chanceOfPlayer);
    } else {
      firstBattle += opponent.battle(this, chanceOfOpponent, chanceOfPlayer);
      secondBattle += this.battle(opponent, chanceOfPlayer, chanceOfOpponent);
    }
  }
}
