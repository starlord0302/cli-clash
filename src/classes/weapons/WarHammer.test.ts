import { WarHammer } from './WarHammer';

describe('War Hammer', () => {

  it('should create a war hammer with the expected values', () => {
    let warHammer = new WarHammer();
    expect(warHammer.name).toBe('war hammer');
    expect(warHammer.whoCouldUse).toBe('priest');
    expect(warHammer.minDamage).toBe(10);
    expect(warHammer.maxDamage).toBe(15);
    expect(warHammer.hitChance).toBe(0.93); 
  });

});