# CLI Clash

A simple game, where warriors from a Fantasy world could battle each other.

## Prerequisites

- Node.js 18.7.0

## Project setup

- Clone this repository first.

### Install dependencies

`npm install`

### Start the application

`npm start`

### Test the application

`npm run test`

## Further Usage

The game could be run with the following kind of heroes:

| Type    | HP  | Abilities | Armour | Evasion |
|:--------|:----|:---------:|-------:|--------:|
| Warrior | 100 |   Armour  |      5 |      20 |
| Priest  | 90  |    Heal   |      4 |      20 |
| Mage    | 70  | Firestorm |      1 |       5 |
| Rouge   | 80  |   Dodge   |      3 |      30 |
| Archer  | 80  |  Headshot |      2 |      15 |

After creating the heroes, a weapon could be equiped to them:

| Weapon name | Who could use? | Damage | Hit Chance |
|-------------|----------------|:------:|-----------:|
| Sword       | Everyone       |  8-12  |        90% |
| Dagger      | Rouge          |   4-5  |        98% |
| War Hammer  | Priest         |  10-15 |        93% |
| Battle Axe  | Warrior        |  12-15 |        92% |
| Bow         | Archer         |  7-12  |        89% |
| Wand        | Mage           |  9-15  |        97% |

### Hero's abilities

In every round there is a 10% chance that a hero's ability could activate.

| Ability   | Effect                    |
|-----------|---------------------------|
| Armour    | +10 to armour for a round |
| Dodge     | evasion: 100 for a round  |
| Firestorm | +20 to damage for a round |
| Headshot  | +15 to damage for a round |
| Heal      | +10 for HP                |