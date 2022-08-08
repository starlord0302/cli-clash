import { Rouge } from './Rouge';

describe('Rogue', () => {

  it('should create a rouge with the expected values', () => {
    let rouge = new Rouge('Ben');
    expect(rouge.name).toBe('Ben');
    expect(rouge.type).toBe('rouge');
    expect(rouge.healthPoint).toBe(80);
    expect(rouge.ability).toBe('dodge');
    expect(rouge.armour).toBe(3);
    expect(rouge.evasion).toBe(30);
  });
});