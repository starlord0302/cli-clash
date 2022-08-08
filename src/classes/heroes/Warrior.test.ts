import { Warrior } from './Warrior';
import { Dagger } from '../weapons/Dagger';
import { Sword } from '../weapons/Sword';
import { BattleAxe } from '../weapons/BattleAxe';

describe('Warrior', () => {

  let warrior: Warrior;

  beforeEach(() => {
    warrior = new Warrior('Max');
  })

  it('should create a warrior with the expected values', () => {
    expect(warrior.name).toBe('Max');
    expect(warrior.type).toBe('warrior');
    expect(warrior.healthPoint).toBe(100);
    expect(warrior.ability).toBe('armour');
    expect(warrior.armour).toBe(5);
    expect(warrior.evasion).toBe(20); 
  });

  it('should set warrior\'s dagger weapon damage to 0', () => {
    warrior.equipWeapon(new Dagger());
    expect(warrior.weapon?.minDamage).toBe(0);
    expect(warrior.weapon?.maxDamage).toBe(0);
  });

  it('should not set 0 damage to warrior\'s sword weapon', () => {
    warrior.equipWeapon(new Sword());
    expect(warrior.weapon?.minDamage).toBe(8);
    expect(warrior.weapon?.maxDamage).toBe(12);
  });

  it('should not set 0 damage to warrior\s battle axe', () => {
    warrior.equipWeapon(new BattleAxe());
    expect(warrior.weapon?.minDamage).toBe(12);
    expect(warrior.weapon?.maxDamage).toBe(15);
  });
});