import { Priest } from './Priest';

describe('Priest', () => {

  it('should create a priest with the expected values', () => {
    let priest = new Priest('Michael');
    expect(priest.name).toBe('Michael');
    expect(priest.type).toBe('priest');
    expect(priest.healthPoint).toBe(90);
    expect(priest.ability).toBe('heal');
    expect(priest.armour).toBe(4);
    expect(priest.evasion).toBe(20);
  });
});