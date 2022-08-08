import { Bow } from './Bow';

describe('Bow', () => {

  it('should create a bow with the expected values', () => {
    let bow = new Bow();
    expect(bow.name).toBe('bow');
    expect(bow.whoCouldUse).toBe('archer');
    expect(bow.minDamage).toBe(7);
    expect(bow.maxDamage).toBe(12);
    expect(bow.hitChance).toBe(0.89); 
  });

});