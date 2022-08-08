import { BattleAxe } from './BattleAxe';

describe('Battle Axe', () => {

  it('should create a battle axe with the expected values', () => {
    let battleAxe = new BattleAxe();
    expect(battleAxe.name).toBe('battle axe');
    expect(battleAxe.whoCouldUse).toBe('warrior');
    expect(battleAxe.minDamage).toBe(12);
    expect(battleAxe.maxDamage).toBe(15);
    expect(battleAxe.hitChance).toBe(0.92); 
  });

});