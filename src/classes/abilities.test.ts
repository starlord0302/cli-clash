import { Boost, Decline } from "./abilities";
import { Archer } from "./heroes/Archer";
import { Mage } from "./heroes/Mage";
import { Priest } from "./heroes/Priest";
import { Rouge } from "./heroes/Rouge";
import { Warrior } from "./heroes/Warrior";
import { Sword } from "./weapons/Sword";
import { Wand } from "./weapons/Wand";

describe('Abilities', () => {
  let archer: Archer;
  let mage: Mage;
  let priest: Priest;
  let rouge: Rouge;
  let warrior: Warrior;

  beforeEach(() => {
    archer = new Archer('Tim');
    mage = new Mage('Jill');
    priest = new Priest('Scott');
    rouge = new Rouge('Peter');
    warrior = new Warrior('Jane');
  });

  it('should return 15 after the Boost.armour() was called on a warrior, checking the warrior.armour property', () => {
    Boost.armour(warrior);
    expect(warrior.armour).toBe(15);
  });

  it('should return 5 after the Decline.armour() was called on a warrior, checkoing the warrior.armour property', () => {
    Boost.armour(warrior);
    Decline.armour(warrior);
    expect(warrior.armour).toBe(5);
  });

  it('should return 1 after the Boost.armour() was called on a mage, should not effect the mage.armour property', () => {
    Boost.armour(mage);
    expect(mage.armour).toBe(1);
  });

  it('should throw an error when the Decline.armour() decreases the armour to a negative number', () => {
    expect(() => {
      Decline.armour(warrior);
      Decline.armour(warrior);
      Decline.armour(warrior);
    }).toThrow('Armour can\'t go below 0!');
  })

  it('should return 100 after Boost.dodge() was called on a rouge', () => {
    Boost.dodge(rouge);
    expect(rouge.evasion).toBe(100);
  });

  it('should return 30 after Decline.dodge() was called on rouge', () => {
    Boost.dodge(rouge);
    Decline.dodge(rouge);
    expect(rouge.evasion).toBe(30);
  });

  it('should return 20 after Boost.dodge() was called on a warrior', () => {
    Boost.dodge(warrior);
    expect(warrior.evasion).toBe(20);
  });

  it('should return 29 and 35 when the Boost.firestorm() was called on a mage, it checks the wand\'s  damage', () => {
    mage.equipWeapon(new Wand());
    Boost.firestorm(mage);
    expect(mage.weapon!.minDamage).toBe(29);
    expect(mage.weapon!.maxDamage).toBe(35);
  });

  it('should return 28 and 32 when the Boost.firestorm() was called on a mage, it checks the sword\'s  damage', () => {
    mage.equipWeapon(new Sword());
    Boost.firestorm(mage);
    expect(mage.weapon!.minDamage).toBe(28);
    expect(mage.weapon!.maxDamage).toBe(32);
  });

  it('should return 9 and 15 when the Decline.firestorm() was called on a mage, it checks the wand\'s  damage', () => {
    mage.equipWeapon(new Wand());
    Boost.firestorm(mage);
    Decline.firestorm(mage);
    expect(mage.weapon!.minDamage).toBe(9);
    expect(mage.weapon!.maxDamage).toBe(15);
  });
});