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
});