import { Chance } from '../Chance';
import { Dagger } from '../weapons/Dagger';
import { Sword } from '../weapons/Sword';
import { Warrior } from './Warrior';

describe('Hero methods', () => {

  let hero: Warrior;
  let opponent: Warrior;

  beforeEach(() => {
    hero = new Warrior('Erik');
    opponent = new Warrior('John');
  });

  it('should return 0 when a warrior attacks another warrior with a dagger', () => {
    hero.equipWeapon(new Dagger());
    opponent.equipWeapon(new Sword());

    expect(hero.attack(opponent, 0, 90, 25)).toBe(0);
  });

  it('should return 7 when a warrior attacks another warrior with a min damage sword', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    expect(hero.attack(opponent, 0, 90, 25)).toBe(7);
  });

  it('should return 11 when a warrior attacks another warrior with a max damage sword', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    expect(hero.attack(opponent, 4, 90, 25)).toBe(11);
  });

  it('should return 0 when a warrior attacks another warrior with a sword, beacuse of a missed chance to hit', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    expect(hero.attack(opponent, 0, 95, 25)).toBe(0);
  });

  it('should return 0 when a warrior attack another warrior with a sword, beacuse the opponent could evade the atack', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    expect(hero.attack(opponent, 0, 95, 20)).toBe(0);
  });

  it('should return a string with the attacker and defender status when a warrior attacks another warrior with a sword, and all the chances are right, the opponent could evade the attack', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    const heroChance = new Chance(10, 10, 10, 4);
    const opponentChance = new Chance(10, 10, 10, 4);

    const battleResult = hero.battle(opponent, heroChance, opponentChance);
    const expectedResult = 'ATTACKER: {name: Erik, type: warrior, ability: armour in use, could not make a hit}\nDEFENDER: {name: John, type: warrior, ability: armour in use, evaded the hit}';

    expect(battleResult).toBe(expectedResult);
  });

  it('should return a string with the attacker and defender status when a warrior attacks another warrior with a sword, but the attacker missed the hit with the weapon', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    const heroChance = new Chance(10, 10, 91, 4);
    const opponentChance = new Chance(10, 25, 10, 4);

    const battleResult = hero.battle(opponent, heroChance, opponentChance);
    const expectedResult = 'ATTACKER: {name: Erik, type: warrior, ability: armour in use, hit missed by weapon}\nDEFENDER: {name: John, type: warrior, ability: armour in use}';

    expect(battleResult).toBe(expectedResult);
  });

  it('should return a string with the attacker and defender status when a warrior attacks another warrior with a dagger, the attacker unable to use weapon', () => {
    hero.equipWeapon(new Dagger());
    opponent.equipWeapon(new Sword());

    const heroChance = new Chance(10, 10, 10, 4);
    const opponentChance = new Chance(10, 25, 10, 4);

    const battleResult = hero.battle(opponent, heroChance, opponentChance);
    const expectedResult = 'ATTACKER: {name: Erik, type: warrior, ability: armour in use, unable to use weapon}\nDEFENDER: {name: John, type: warrior, ability: armour in use}';

    expect(battleResult).toBe(expectedResult);
  });

  it('should return a string with the attacker and defender status when a warrior attacks another warrior with a sword, and all the chances are right except the opponent\'s evasion', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    const heroChance = new Chance(10, 10, 10, 4);
    const opponentChance = new Chance(10, 25, 10, 4);

    const battleResult = hero.battle(opponent, heroChance, opponentChance);
    const expectedResult = 'ATTACKER: {name: Erik, type: warrior, ability: armour in use, damage made: 7}\nDEFENDER: {name: John, type: warrior, ability: armour in use, HP after the attack: 93}';

    expect(battleResult).toBe(expectedResult);
  });

  it('should return a string with the attacker and defender status when a warrior attacks another warrior with a sword, and all the chances are right except the opponent\'s evasion, and ability', () => {
    hero.equipWeapon(new Sword());
    opponent.equipWeapon(new Sword());

    const heroChance = new Chance(10, 10, 10, 4);
    const opponentChance = new Chance(15, 25, 10, 4);

    const battleResult = hero.battle(opponent, heroChance, opponentChance);
    const expectedResult = 'ATTACKER: {name: Erik, type: warrior, ability: armour in use, damage made: 11}\nDEFENDER: {name: John, type: warrior, ability: armour not in use, HP after the attack: 89}';

    expect(battleResult).toBe(expectedResult);
  });
});