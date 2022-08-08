import { Sword } from './Sword';

describe('Sword', () => {

  let sword : Sword;

  beforeEach(() => {
    sword = new Sword();
  });

  it('should create a sword with the expected values', () => {
    expect(sword.name).toBe('sword');
    expect(sword.whoCouldUse).toBe('everybody');
    expect(sword.minDamage).toBe(8);
    expect(sword.maxDamage).toBe(12);
    expect(sword.hitChance).toBe(0.9); 
  });

  it('should get the minimum damage of the sword by calling the getDamage() method with the 0 argument', () => {
    expect(sword.getDamage(0)).toBe(8);
  });

  it('should get the maximum damage of the sword by calling the getDamage() method with the 0 argument', () => {
    expect(sword.getDamage(4)).toBe(12);
  });

  it('should throw an error when getDamage is getting a wrong argument', () => {
    expect(() => {
      let damage = sword.getDamage(5);
    }).toThrow('Maximum damage exceeded!');
  });
});