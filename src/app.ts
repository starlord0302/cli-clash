import { Arena } from "./classes/Arena";
import { Warrior } from "./classes/heroes/Warrior";
import { Sword } from "./classes/weapons/Sword";
import { WarHammer } from "./classes/weapons/WarHammer";

const bela = new Warrior('Bela');
bela.equipWeapon(new WarHammer());

const pista = new Warrior('Pista');
pista.equipWeapon(new Sword());

Arena.tournament(bela, pista);