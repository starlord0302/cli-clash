import { Wand } from './Wand';

describe('Wand', () => {

  it('should create a wand with the expected values', () => {
    let wand = new Wand();
    expect(wand.name).toBe('wand');
    expect(wand.whoCouldUse).toBe('mage');
    expect(wand.minDamage).toBe(9);
    expect(wand.maxDamage).toBe(15);
    expect(wand.hitChance).toBe(0.97); 
  });

});