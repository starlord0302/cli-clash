import { Priest } from './Priest';
import { Warrior } from './Warrior';
import { Mage } from './Mage';
import { Rouge } from './Rouge';
import { Archer } from './Archer';

describe('Hero', () => {

  it('should create a warrior with the expected values', () => {
    let warrior = new Warrior('Max');
    expect(warrior.name).toBe('Max');
    expect(warrior.type).toBe('warrior');
    expect(warrior.healthPoint).toBe(100);
    expect(warrior.ability).toBe('armour');
    expect(warrior.armour).toBe(5);
    expect(warrior.evasion).toBe(20); 
  });

  it('should create a priest with the expected values', () => {
    let priest = new Priest('Michael');
    expect(priest.name).toBe('Michael');
    expect(priest.type).toBe('priest');
    expect(priest.healthPoint).toBe(90);
    expect(priest.ability).toBe('heal');
    expect(priest.armour).toBe(4);
    expect(priest.evasion).toBe(20);
  });

  it('should create a mage with the expected values', () => {
    let mage = new Mage('Amanda');
    expect(mage.name).toBe('Amanda');
    expect(mage.type).toBe('mage');
    expect(mage.healthPoint).toBe(70);
    expect(mage.ability).toBe('firestorm');
    expect(mage.armour).toBe(1);
    expect(mage.evasion).toBe(5);
  });

  it('should create a rouge with the expected values', () => {
    let rouge = new Rouge('Ben');
    expect(rouge.name).toBe('Ben');
    expect(rouge.type).toBe('rouge');
    expect(rouge.healthPoint).toBe(80);
    expect(rouge.ability).toBe('dodge');
    expect(rouge.armour).toBe(3);
    expect(rouge.evasion).toBe(30);
  });

  it('should create an archer with the expected values', () => {
    let archer = new Archer('Elisabeth');
    expect(archer.name).toBe('Elisabeth');
    expect(archer.type).toBe('archer');
    expect(archer.healthPoint).toBe(80);
    expect(archer.ability).toBe('headshot');
    expect(archer.armour).toBe(2);
    expect(archer.evasion).toBe(15);
  });
});