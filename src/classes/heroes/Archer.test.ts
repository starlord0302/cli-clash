import { Archer } from './Archer';

describe('Archer', () => {

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