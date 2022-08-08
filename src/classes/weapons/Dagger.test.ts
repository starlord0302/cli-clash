import { Dagger } from './Dagger';

describe('Dagger', () => {

  it('should create a dagger with the expected values', () => {
    let dagger = new Dagger();
    expect(dagger.name).toBe('dagger');
    expect(dagger.whoCouldUse).toBe('rouge');
    expect(dagger.minDamage).toBe(4);
    expect(dagger.maxDamage).toBe(5);
    expect(dagger.hitChance).toBe(0.98); 
  });

});