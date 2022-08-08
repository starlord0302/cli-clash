import { Mage } from './Mage';

describe('Mage', () => {

  it('should create a mage with the expected values', () => {
    let mage = new Mage('Amanda');
    expect(mage.name).toBe('Amanda');
    expect(mage.type).toBe('mage');
    expect(mage.healthPoint).toBe(70);
    expect(mage.ability).toBe('firestorm');
    expect(mage.armour).toBe(1);
    expect(mage.evasion).toBe(5);
  });
});