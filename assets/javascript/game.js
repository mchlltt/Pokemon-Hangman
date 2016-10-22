// OBJECTS
// Audio button
var button = document.getElementById("toggle-audio");

// Game components
var game = {
	// Initial variable states.
	wins: 0,
	word: '',
	guesses: -1,
	blanks: [],
	letters: [],
	lettersGuessed: [],
	progress: [],
	sound: true,
	pokeBag: [],
	pokeball: '<img src="assets/images/poke-ball.png" alt="A pokeball" class="icon">',


	// Data sources.
	pokeData: [
		{id: 1, name: 'bulbasaur', type: 'poison, grass'}, {id: 2, name: 'ivysaur', type: 'poison, grass'}, {id: 3, name: 'venusaur', type: 'poison, grass'}, {id: 4, name: 'charmander', type: 'fire'}, {id: 5, name: 'charmeleon', type: 'fire'}, {id: 6, name: 'charizard', type: 'flying, fire'}, {id: 7, name: 'squirtle', type: 'water'}, {id: 8, name: 'wartortle', type: 'water'}, {id: 9, name: 'blastoise', type: 'water'}, {id: 10, name: 'caterpie', type: 'bug'}, {id: 11, name: 'metapod', type: 'bug'}, {id: 12, name: 'butterfree', type: 'flying, bug'}, {id: 13, name: 'weedle', type: 'poison, bug'}, {id: 14, name: 'kakuna', type: 'poison, bug'}, {id: 15, name: 'beedrill', type: 'poison, bug'}, {id: 16, name: 'pidgey', type: 'normal, flying'}, {id: 17, name: 'pidgeotto', type: 'normal, flying'}, {id: 18, name: 'pidgeot', type: 'normal, flying'}, {id: 19, name: 'rattata', type: 'normal'}, {id: 20, name: 'raticate', type: 'normal'}, {id: 21, name: 'spearow', type: 'normal, flying'}, {id: 22, name: 'fearow', type: 'normal, flying'}, {id: 23, name: 'ekans', type: 'poison'}, {id: 24, name: 'arbok', type: 'poison'}, {id: 25, name: 'pikachu', type: 'electric'}, {id: 26, name: 'raichu', type: 'electric'}, {id: 27, name: 'sandshrew', type: 'ground'}, {id: 28, name: 'sandslash', type: 'ground'}, {id: 30, name: 'nidorina', type: 'poison'}, {id: 31, name: 'nidoqueen', type: 'poison, ground'}, {id: 33, name: 'nidorino', type: 'poison'}, {id: 34, name: 'nidoking', type: 'poison, ground'}, {id: 35, name: 'clefairy', type: 'fairy'}, {id: 36, name: 'clefable', type: 'fairy'}, {id: 37, name: 'vulpix', type: 'fire'}, {id: 38, name: 'ninetales', type: 'fire'}, {id: 39, name: 'jigglypuff', type: 'normal, fairy'}, {id: 40, name: 'wigglytuff', type: 'normal, fairy'}, {id: 41, name: 'zubat', type: 'flying, poison'}, {id: 42, name: 'golbat', type: 'flying, poison'}, {id: 43, name: 'oddish', type: 'poison, grass'}, {id: 44, name: 'gloom', type: 'poison, grass'}, {id: 45, name: 'vileplume', type: 'poison, grass'}, {id: 46, name: 'paras', type: 'bug, grass'}, {id: 47, name: 'parasect', type: 'bug, grass'}, {id: 48, name: 'venonat', type: 'poison, bug'}, {id: 49, name: 'venomoth', type: 'poison, bug'}, {id: 50, name: 'diglett', type: 'ground'}, {id: 51, name: 'dugtrio', type: 'ground'}, {id: 52, name: 'meowth', type: 'normal'}, {id: 53, name: 'persian', type: 'normal'}, {id: 54, name: 'psyduck', type: 'water'}, {id: 55, name: 'golduck', type: 'water'}, {id: 56, name: 'mankey', type: 'fighting'}, {id: 57, name: 'primeape', type: 'fighting'}, {id: 58, name: 'growlithe', type: 'fire'}, {id: 59, name: 'arcanine', type: 'fire'}, {id: 60, name: 'poliwag', type: 'water'}, {id: 61, name: 'poliwhirl', type: 'water'}, {id: 62, name: 'poliwrath', type: 'fighting, water'}, {id: 63, name: 'abra', type: 'psychic'}, {id: 64, name: 'kadabra', type: 'psychic'}, {id: 65, name: 'alakazam', type: 'psychic'}, {id: 66, name: 'machop', type: 'fighting'}, {id: 67, name: 'machoke', type: 'fighting'}, {id: 68, name: 'machamp', type: 'fighting'}, {id: 69, name: 'bellsprout', type: 'poison, grass'}, {id: 70, name: 'weepinbell', type: 'poison, grass'}, {id: 71, name: 'victreebel', type: 'poison, grass'}, {id: 72, name: 'tentacool', type: 'poison, water'}, {id: 73, name: 'tentacruel', type: 'poison, water'}, {id: 74, name: 'geodude', type: 'ground, rock'}, {id: 75, name: 'graveler', type: 'ground, rock'}, {id: 76, name: 'golem', type: 'ground, rock'}, {id: 77, name: 'ponyta', type: 'fire'}, {id: 78, name: 'rapidash', type: 'fire'}, {id: 79, name: 'slowpoke', type: 'water, psychic'}, {id: 80, name: 'slowbro', type: 'water, psychic'}, {id: 81, name: 'magnemite', type: 'steel, electric'}, {id: 82, name: 'magneton', type: 'steel, electric'}, {id: 83, name: 'farfetchd', type: 'normal, flying'}, {id: 84, name: 'doduo', type: 'normal, flying'}, {id: 85, name: 'dodrio', type: 'normal, flying'}, {id: 86, name: 'seel', type: 'water'}, {id: 87, name: 'dewgong', type: 'water, ice'}, {id: 88, name: 'grimer', type: 'poison'}, {id: 89, name: 'muk', type: 'poison'}, {id: 90, name: 'shellder', type: 'water'}, {id: 91, name: 'cloyster', type: 'water, ice'}, {id: 92, name: 'gastly', type: 'poison, ghost'}, {id: 93, name: 'haunter', type: 'poison, ghost'}, {id: 94, name: 'gengar', type: 'poison, ghost'}, {id: 95, name: 'onix', type: 'ground, rock'}, {id: 96, name: 'drowzee', type: 'psychic'}, {id: 97, name: 'hypno', type: 'psychic'}, {id: 98, name: 'krabby', type: 'water'}, {id: 99, name: 'kingler', type: 'water'}, {id: 100, name: 'voltorb', type: 'electric'}, {id: 101, name: 'electrode', type: 'electric'}, {id: 102, name: 'exeggcute', type: 'grass, psychic'}, {id: 103, name: 'exeggutor', type: 'grass, psychic'}, {id: 104, name: 'cubone', type: 'ground'}, {id: 105, name: 'marowak', type: 'ground'}, {id: 106, name: 'hitmonlee', type: 'fighting'}, {id: 107, name: 'hitmonchan', type: 'fighting'}, {id: 108, name: 'lickitung', type: 'normal'}, {id: 109, name: 'koffing', type: 'poison'}, {id: 110, name: 'weezing', type: 'poison'}, {id: 111, name: 'rhyhorn', type: 'ground, rock'}, {id: 112, name: 'rhydon', type: 'ground, rock'}, {id: 113, name: 'chansey', type: 'normal'}, {id: 114, name: 'tangela', type: 'grass'}, {id: 115, name: 'kangaskhan', type: 'normal'}, {id: 116, name: 'horsea', type: 'water'}, {id: 117, name: 'seadra', type: 'water'}, {id: 118, name: 'goldeen', type: 'water'}, {id: 119, name: 'seaking', type: 'water'}, {id: 120, name: 'staryu', type: 'water'}, {id: 121, name: 'starmie', type: 'water, psychic'}, {id: 123, name: 'scyther', type: 'flying, bug'}, {id: 124, name: 'jynx', type: 'psychic, ice'}, {id: 125, name: 'electabuzz', type: 'electric'}, {id: 126, name: 'magmar', type: 'fire'}, {id: 127, name: 'pinsir', type: 'bug'}, {id: 128, name: 'tauros', type: 'normal'}, {id: 129, name: 'magikarp', type: 'water'}, {id: 130, name: 'gyarados', type: 'flying, water'}, {id: 131, name: 'lapras', type: 'water, ice'}, {id: 132, name: 'ditto', type: 'normal'}, {id: 133, name: 'eevee', type: 'normal'}, {id: 134, name: 'vaporeon', type: 'water'}, {id: 135, name: 'jolteon', type: 'electric'}, {id: 136, name: 'flareon', type: 'fire'}, {id: 137, name: 'porygon', type: 'normal'}, {id: 138, name: 'omanyte', type: 'rock, water'}, {id: 139, name: 'omastar', type: 'rock, water'}, {id: 140, name: 'kabuto', type: 'rock, water'}, {id: 141, name: 'kabutops', type: 'rock, water'}, {id: 142, name: 'aerodactyl', type: 'flying, rock'}, {id: 143, name: 'snorlax', type: 'normal'}, {id: 144, name: 'articuno', type: 'flying, ice'}, {id: 145, name: 'zapdos', type: 'flying, electric'}, {id: 146, name: 'moltres', type: 'flying, fire'}, {id: 147, name: 'dratini', type: 'dragon'}, {id: 148, name: 'dragonair', type: 'dragon'}, {id: 149, name: 'dragonite', type: 'flying, dragon'}, {id: 150, name: 'mewtwo', type: 'psychic'}, {id: 151, name: 'mew', type: 'psychic'}, {id: 152, name: 'chikorita', type: 'grass'}, {id: 153, name: 'bayleef', type: 'grass'}, {id: 154, name: 'meganium', type: 'grass'}, {id: 155, name: 'cyndaquil', type: 'fire'}, {id: 156, name: 'quilava', type: 'fire'}, {id: 157, name: 'typhlosion', type: 'fire'}, {id: 158, name: 'totodile', type: 'water'}, {id: 159, name: 'croconaw', type: 'water'}, {id: 160, name: 'feraligatr', type: 'water'}, {id: 161, name: 'sentret', type: 'normal'}, {id: 162, name: 'furret', type: 'normal'}, {id: 163, name: 'hoothoot', type: 'normal, flying'}, {id: 164, name: 'noctowl', type: 'normal, flying'}, {id: 165, name: 'ledyba', type: 'flying, bug'}, {id: 166, name: 'ledian', type: 'flying, bug'}, {id: 167, name: 'spinarak', type: 'poison, bug'}, {id: 168, name: 'ariados', type: 'poison, bug'}, {id: 169, name: 'crobat', type: 'flying, poison'}, {id: 170, name: 'chinchou', type: 'water, electric'}, {id: 171, name: 'lanturn', type: 'water, electric'}, {id: 172, name: 'pichu', type: 'electric'}, {id: 173, name: 'cleffa', type: 'fairy'}, {id: 174, name: 'igglybuff', type: 'normal, fairy'}, {id: 175, name: 'togepi', type: 'fairy'}, {id: 176, name: 'togetic', type: 'flying, fairy'}, {id: 177, name: 'natu', type: 'flying, psychic'}, {id: 178, name: 'xatu', type: 'flying, psychic'}, {id: 179, name: 'mareep', type: 'electric'}, {id: 180, name: 'flaaffy', type: 'electric'}, {id: 181, name: 'ampharos', type: 'electric'}, {id: 182, name: 'bellossom', type: 'grass'}, {id: 183, name: 'marill', type: 'water, fairy'}, {id: 184, name: 'azumarill', type: 'water, fairy'}, {id: 185, name: 'sudowoodo', type: 'rock'}, {id: 186, name: 'politoed', type: 'water'}, {id: 187, name: 'hoppip', type: 'flying, grass'}, {id: 188, name: 'skiploom', type: 'flying, grass'}, {id: 189, name: 'jumpluff', type: 'flying, grass'}, {id: 190, name: 'aipom', type: 'normal'}, {id: 191, name: 'sunkern', type: 'grass'}, {id: 192, name: 'sunflora', type: 'grass'}, {id: 193, name: 'yanma', type: 'flying, bug'}, {id: 194, name: 'wooper', type: 'ground, water'}, {id: 195, name: 'quagsire', type: 'ground, water'}, {id: 196, name: 'espeon', type: 'psychic'}, {id: 197, name: 'umbreon', type: 'dark'}, {id: 198, name: 'murkrow', type: 'flying, dark'}, {id: 199, name: 'slowking', type: 'water, psychic'}, {id: 200, name: 'misdreavus', type: 'ghost'}, {id: 201, name: 'unown', type: 'psychic'}, {id: 202, name: 'wobbuffet', type: 'psychic'}, {id: 203, name: 'girafarig', type: 'normal, psychic'}, {id: 204, name: 'pineco', type: 'bug'}, {id: 205, name: 'forretress', type: 'bug, steel'}, {id: 206, name: 'dunsparce', type: 'normal'}, {id: 207, name: 'gligar', type: 'flying, ground'}, {id: 208, name: 'steelix', type: 'ground, steel'}, {id: 209, name: 'snubbull', type: 'fairy'}, {id: 210, name: 'granbull', type: 'fairy'}, {id: 211, name: 'qwilfish', type: 'poison, water'}, {id: 212, name: 'scizor', type: 'bug, steel'}, {id: 213, name: 'shuckle', type: 'rock, bug'}, {id: 214, name: 'heracross', type: 'fighting, bug'}, {id: 215, name: 'sneasel', type: 'ice, dark'}, {id: 216, name: 'teddiursa', type: 'normal'}, {id: 217, name: 'ursaring', type: 'normal'}, {id: 218, name: 'slugma', type: 'fire'}, {id: 219, name: 'magcargo', type: 'rock, fire'}, {id: 220, name: 'swinub', type: 'ground, ice'}, {id: 221, name: 'piloswine', type: 'ground, ice'}, {id: 222, name: 'corsola', type: 'rock, water'}, {id: 223, name: 'remoraid', type: 'water'}, {id: 224, name: 'octillery', type: 'water'}, {id: 225, name: 'delibird', type: 'flying, ice'}, {id: 226, name: 'mantine', type: 'flying, water'}, {id: 227, name: 'skarmory', type: 'flying, steel'}, {id: 228, name: 'houndour', type: 'fire, dark'}, {id: 229, name: 'houndoom', type: 'fire, dark'}, {id: 230, name: 'kingdra', type: 'water, dragon'}, {id: 231, name: 'phanpy', type: 'ground'}, {id: 232, name: 'donphan', type: 'ground'}, {id: 234, name: 'stantler', type: 'normal'}, {id: 235, name: 'smeargle', type: 'normal'}, {id: 236, name: 'tyrogue', type: 'fighting'}, {id: 237, name: 'hitmontop', type: 'fighting'}, {id: 238, name: 'smoochum', type: 'psychic, ice'}, {id: 239, name: 'elekid', type: 'electric'}, {id: 240, name: 'magby', type: 'fire'}, {id: 241, name: 'miltank', type: 'normal'}, {id: 242, name: 'blissey', type: 'normal'}, {id: 243, name: 'raikou', type: 'electric'}, {id: 244, name: 'entei', type: 'fire'}, {id: 245, name: 'suicune', type: 'water'}, {id: 246, name: 'larvitar', type: 'ground, rock'}, {id: 247, name: 'pupitar', type: 'ground, rock'}, {id: 248, name: 'tyranitar', type: 'rock, dark'}, {id: 249, name: 'lugia', type: 'flying, psychic'}, {id: 251, name: 'celebi', type: 'grass, psychic'}, {id: 252, name: 'treecko', type: 'grass'}, {id: 253, name: 'grovyle', type: 'grass'}, {id: 254, name: 'sceptile', type: 'grass'}, {id: 255, name: 'torchic', type: 'fire'}, {id: 256, name: 'combusken', type: 'fighting, fire'}, {id: 257, name: 'blaziken', type: 'fighting, fire'}, {id: 258, name: 'mudkip', type: 'water'}, {id: 259, name: 'marshtomp', type: 'ground, water'}, {id: 260, name: 'swampert', type: 'ground, water'}, {id: 261, name: 'poochyena', type: 'dark'}, {id: 262, name: 'mightyena', type: 'dark'}, {id: 263, name: 'zigzagoon', type: 'normal'}, {id: 264, name: 'linoone', type: 'normal'}, {id: 265, name: 'wurmple', type: 'bug'}, {id: 266, name: 'silcoon', type: 'bug'}, {id: 267, name: 'beautifly', type: 'flying, bug'}, {id: 268, name: 'cascoon', type: 'bug'}, {id: 269, name: 'dustox', type: 'poison, bug'}, {id: 270, name: 'lotad', type: 'water, grass'}, {id: 271, name: 'lombre', type: 'water, grass'}, {id: 272, name: 'ludicolo', type: 'water, grass'}, {id: 273, name: 'seedot', type: 'grass'}, {id: 274, name: 'nuzleaf', type: 'grass, dark'}, {id: 275, name: 'shiftry', type: 'grass, dark'}, {id: 276, name: 'taillow', type: 'normal, flying'}, {id: 277, name: 'swellow', type: 'normal, flying'}, {id: 278, name: 'wingull', type: 'flying, water'}, {id: 279, name: 'pelipper', type: 'flying, water'}, {id: 280, name: 'ralts', type: 'psychic, fairy'}, {id: 281, name: 'kirlia', type: 'psychic, fairy'}, {id: 282, name: 'gardevoir', type: 'psychic, fairy'}, {id: 283, name: 'surskit', type: 'bug, water'}, {id: 284, name: 'masquerain', type: 'flying, bug'}, {id: 285, name: 'shroomish', type: 'grass'}, {id: 286, name: 'breloom', type: 'fighting, grass'}, {id: 287, name: 'slakoth', type: 'normal'}, {id: 288, name: 'vigoroth', type: 'normal'}, {id: 289, name: 'slaking', type: 'normal'}, {id: 290, name: 'nincada', type: 'ground, bug'}, {id: 291, name: 'ninjask', type: 'flying, bug'}, {id: 292, name: 'shedinja', type: 'bug, ghost'}, {id: 293, name: 'whismur', type: 'normal'}, {id: 294, name: 'loudred', type: 'normal'}, {id: 295, name: 'exploud', type: 'normal'}, {id: 296, name: 'makuhita', type: 'fighting'}, {id: 297, name: 'hariyama', type: 'fighting'}, {id: 298, name: 'azurill', type: 'normal, fairy'}, {id: 299, name: 'nosepass', type: 'rock'}, {id: 300, name: 'skitty', type: 'normal'}, {id: 301, name: 'delcatty', type: 'normal'}, {id: 302, name: 'sableye', type: 'ghost, dark'}, {id: 303, name: 'mawile', type: 'steel, fairy'}, {id: 304, name: 'aron', type: 'rock, steel'}, {id: 305, name: 'lairon', type: 'rock, steel'}, {id: 306, name: 'aggron', type: 'rock, steel'}, {id: 307, name: 'meditite', type: 'fighting, psychic'}, {id: 308, name: 'medicham', type: 'fighting, psychic'}, {id: 309, name: 'electrike', type: 'electric'}, {id: 310, name: 'manectric', type: 'electric'}, {id: 311, name: 'plusle', type: 'electric'}, {id: 312, name: 'minun', type: 'electric'}, {id: 313, name: 'volbeat', type: 'bug'}, {id: 314, name: 'illumise', type: 'bug'}, {id: 315, name: 'roselia', type: 'poison, grass'}, {id: 316, name: 'gulpin', type: 'poison'}, {id: 317, name: 'swalot', type: 'poison'}, {id: 318, name: 'carvanha', type: 'water, dark'}, {id: 319, name: 'sharpedo', type: 'water, dark'}, {id: 320, name: 'wailmer', type: 'water'}, {id: 321, name: 'wailord', type: 'water'}, {id: 322, name: 'numel', type: 'ground, fire'}, {id: 323, name: 'camerupt', type: 'ground, fire'}, {id: 324, name: 'torkoal', type: 'fire'}, {id: 325, name: 'spoink', type: 'psychic'}, {id: 326, name: 'grumpig', type: 'psychic'}, {id: 327, name: 'spinda', type: 'normal'}, {id: 328, name: 'trapinch', type: 'ground'}, {id: 329, name: 'vibrava', type: 'ground, dragon'}, {id: 330, name: 'flygon', type: 'ground, dragon'}, {id: 331, name: 'cacnea', type: 'grass'}, {id: 332, name: 'cacturne', type: 'grass, dark'}, {id: 333, name: 'swablu', type: 'normal, flying'}, {id: 334, name: 'altaria', type: 'flying, dragon'}, {id: 335, name: 'zangoose', type: 'normal'}, {id: 336, name: 'seviper', type: 'poison'}, {id: 337, name: 'lunatone', type: 'rock, psychic'}, {id: 338, name: 'solrock', type: 'rock, psychic'}, {id: 339, name: 'barboach', type: 'ground, water'}, {id: 340, name: 'whiscash', type: 'ground, water'}, {id: 341, name: 'corphish', type: 'water'}, {id: 342, name: 'crawdaunt', type: 'water, dark'}, {id: 343, name: 'baltoy', type: 'ground, psychic'}, {id: 344, name: 'claydol', type: 'ground, psychic'}, {id: 345, name: 'lileep', type: 'rock, grass'}, {id: 346, name: 'cradily', type: 'rock, grass'}, {id: 347, name: 'anorith', type: 'rock, bug'}, {id: 348, name: 'armaldo', type: 'rock, bug'}, {id: 349, name: 'feebas', type: 'water'}, {id: 350, name: 'milotic', type: 'water'}, {id: 351, name: 'castform', type: 'normal'}, {id: 352, name: 'kecleon', type: 'normal'}, {id: 353, name: 'shuppet', type: 'ghost'}, {id: 354, name: 'banette', type: 'ghost'}, {id: 355, name: 'duskull', type: 'ghost'}, {id: 356, name: 'dusclops', type: 'ghost'}, {id: 357, name: 'tropius', type: 'flying, grass'}, {id: 358, name: 'chimecho', type: 'psychic'}, {id: 359, name: 'absol', type: 'dark'}, {id: 360, name: 'wynaut', type: 'psychic'}, {id: 361, name: 'snorunt', type: 'ice'}, {id: 362, name: 'glalie', type: 'ice'}, {id: 363, name: 'spheal', type: 'water, ice'}, {id: 364, name: 'sealeo', type: 'water, ice'}, {id: 365, name: 'walrein', type: 'water, ice'}, {id: 366, name: 'clamperl', type: 'water'}, {id: 367, name: 'huntail', type: 'water'}, {id: 368, name: 'gorebyss', type: 'water'}, {id: 369, name: 'relicanth', type: 'rock, water'}, {id: 370, name: 'luvdisc', type: 'water'}, {id: 371, name: 'bagon', type: 'dragon'}, {id: 372, name: 'shelgon', type: 'dragon'}, {id: 373, name: 'salamence', type: 'flying, dragon'}, {id: 374, name: 'beldum', type: 'steel, psychic'}, {id: 375, name: 'metang', type: 'steel, psychic'}, {id: 376, name: 'metagross', type: 'steel, psychic'}, {id: 377, name: 'regirock', type: 'rock'}, {id: 378, name: 'regice', type: 'ice'}, {id: 379, name: 'registeel', type: 'steel'}, {id: 380, name: 'latias', type: 'psychic, dragon'}, {id: 381, name: 'latios', type: 'psychic, dragon'}, {id: 382, name: 'kyogre', type: 'water'}, {id: 383, name: 'groudon', type: 'ground'}, {id: 384, name: 'rayquaza', type: 'flying, dragon'}, {id: 385, name: 'jirachi', type: 'steel, psychic'}, {id: 387, name: 'turtwig', type: 'grass'}, {id: 388, name: 'grotle', type: 'grass'}, {id: 389, name: 'torterra', type: 'ground, grass'}, {id: 390, name: 'chimchar', type: 'fire'}, {id: 391, name: 'monferno', type: 'fighting, fire'}, {id: 392, name: 'infernape', type: 'fighting, fire'}, {id: 393, name: 'piplup', type: 'water'}, {id: 394, name: 'prinplup', type: 'water'}, {id: 395, name: 'empoleon', type: 'steel, water'}, {id: 396, name: 'starly', type: 'normal, flying'}, {id: 397, name: 'staravia', type: 'normal, flying'}, {id: 398, name: 'staraptor', type: 'normal, flying'}, {id: 399, name: 'bidoof', type: 'normal'}, {id: 400, name: 'bibarel', type: 'normal, water'}, {id: 401, name: 'kricketot', type: 'bug'}, {id: 402, name: 'kricketune', type: 'bug'}, {id: 403, name: 'shinx', type: 'electric'}, {id: 404, name: 'luxio', type: 'electric'}, {id: 405, name: 'luxray', type: 'electric'}, {id: 406, name: 'budew', type: 'poison, grass'}, {id: 407, name: 'roserade', type: 'poison, grass'}, {id: 408, name: 'cranidos', type: 'rock'}, {id: 409, name: 'rampardos', type: 'rock'}, {id: 410, name: 'shieldon', type: 'rock, steel'}, {id: 411, name: 'bastiodon', type: 'rock, steel'}, {id: 412, name: 'burmy', type: 'bug'}, {id: 414, name: 'mothim', type: 'flying, bug'}, {id: 415, name: 'combee', type: 'flying, bug'}, {id: 416, name: 'vespiquen', type: 'flying, bug'}, {id: 417, name: 'pachirisu', type: 'electric'}, {id: 418, name: 'buizel', type: 'water'}, {id: 419, name: 'floatzel', type: 'water'}, {id: 420, name: 'cherubi', type: 'grass'}, {id: 421, name: 'cherrim', type: 'grass'}, {id: 422, name: 'shellos', type: 'water'}, {id: 423, name: 'gastrodon', type: 'ground, water'}, {id: 424, name: 'ambipom', type: 'normal'}, {id: 425, name: 'drifloon', type: 'flying, ghost'}, {id: 426, name: 'drifblim', type: 'flying, ghost'}, {id: 427, name: 'buneary', type: 'normal'}, {id: 428, name: 'lopunny', type: 'normal'}, {id: 429, name: 'mismagius', type: 'ghost'}, {id: 430, name: 'honchkrow', type: 'flying, dark'}, {id: 431, name: 'glameow', type: 'normal'}, {id: 432, name: 'purugly', type: 'normal'}, {id: 433, name: 'chingling', type: 'psychic'}, {id: 434, name: 'stunky', type: 'poison, dark'}, {id: 435, name: 'skuntank', type: 'poison, dark'}, {id: 436, name: 'bronzor', type: 'steel, psychic'}, {id: 437, name: 'bronzong', type: 'steel, psychic'}, {id: 438, name: 'bonsly', type: 'rock'}, {id: 440, name: 'happiny', type: 'normal'}, {id: 441, name: 'chatot', type: 'normal, flying'}, {id: 442, name: 'spiritomb', type: 'ghost, dark'}, {id: 443, name: 'gible', type: 'ground, dragon'}, {id: 444, name: 'gabite', type: 'ground, dragon'}, {id: 445, name: 'garchomp', type: 'ground, dragon'}, {id: 446, name: 'munchlax', type: 'normal'}, {id: 447, name: 'riolu', type: 'fighting'}, {id: 448, name: 'lucario', type: 'fighting, steel'}, {id: 449, name: 'hippopotas', type: 'ground'}, {id: 450, name: 'hippowdon', type: 'ground'}, {id: 451, name: 'skorupi', type: 'poison, bug'}, {id: 452, name: 'drapion', type: 'poison, dark'}, {id: 453, name: 'croagunk', type: 'fighting, poison'}, {id: 454, name: 'toxicroak', type: 'fighting, poison'}, {id: 455, name: 'carnivine', type: 'grass'}, {id: 456, name: 'finneon', type: 'water'}, {id: 457, name: 'lumineon', type: 'water'}, {id: 458, name: 'mantyke', type: 'flying, water'}, {id: 459, name: 'snover', type: 'grass, ice'}, {id: 460, name: 'abomasnow', type: 'grass, ice'}, {id: 461, name: 'weavile', type: 'ice, dark'}, {id: 462, name: 'magnezone', type: 'steel, electric'}, {id: 463, name: 'lickilicky', type: 'normal'}, {id: 464, name: 'rhyperior', type: 'ground, rock'}, {id: 465, name: 'tangrowth', type: 'grass'}, {id: 466, name: 'electivire', type: 'electric'}, {id: 467, name: 'magmortar', type: 'fire'}, {id: 468, name: 'togekiss', type: 'flying, fairy'}, {id: 469, name: 'yanmega', type: 'flying, bug'}, {id: 470, name: 'leafeon', type: 'grass'}, {id: 471, name: 'glaceon', type: 'ice'}, {id: 472, name: 'gliscor', type: 'flying, ground'}, {id: 473, name: 'mamoswine', type: 'ground, ice'}, {id: 475, name: 'gallade', type: 'fighting, psychic'}, {id: 476, name: 'probopass', type: 'rock, steel'}, {id: 477, name: 'dusknoir', type: 'ghost'}, {id: 478, name: 'froslass', type: 'ghost, ice'}, {id: 479, name: 'rotom', type: 'ghost, electric'}, {id: 480, name: 'uxie', type: 'psychic'}, {id: 481, name: 'mesprit', type: 'psychic'}, {id: 482, name: 'azelf', type: 'psychic'}, {id: 483, name: 'dialga', type: 'steel, dragon'}, {id: 484, name: 'palkia', type: 'water, dragon'}, {id: 485, name: 'heatran', type: 'steel, fire'}, {id: 486, name: 'regigigas', type: 'normal'}, {id: 488, name: 'cresselia', type: 'psychic'}, {id: 489, name: 'phione', type: 'water'}, {id: 490, name: 'manaphy', type: 'water'}, {id: 491, name: 'darkrai', type: 'dark'}, {id: 493, name: 'arceus', type: 'normal'} 
	],

	typeColors: {
		'normal': 'a8a77a', 'fire': 'ee8130', 'water': '6390f0', 'electric': 'f7d02c', 'grass': '7ac74c', 'ice': '96d9d6', 'fighting': 'c22e28', 'poison': 'a33ea1', 'ground': 'e2bf65', 'flying': 'a98ff3', 'psychic': 'f95587', 'bug': 'a6b91a', 'rock': 'b6a136', 'ghost': '735797', 'dragon': '6f35fc', 'dark': '705746', 'steel': 'b7b7ce', 'fairy': 'd685ad'
	},


	// Set up a new word.
	roundReset: function() {
		// Reset some variables to their initial states.
		game.blanks = [];
		game.progress = [];
		game.guesses = -1;
		game.lettersGuessed = [];
		// Pick a number and pull the word and its letters, then generate blanks.
		var number = Math.floor(Math.random()*game.pokeData.length);
		game.word = game.pokeData[number].name;
		game.id = game.pokeData[number].id;
		game.letters = game.word.split('');
		game.progressUpdate();
		// Pull Pokemon types and recolor borders.
		var types = game.pokeData[number].type;
		var typeArray = types.split(', ');
		var colorOne = game.typeColors[typeArray[0]];
		var colorTwo = game.typeColors[typeArray[1]];
		if (colorTwo === undefined) {
			colorTwo = colorOne;
		}
		document.getElementById('top-box').style.borderColor = '#' + colorOne;
		document.getElementById('bottom-box').style.borderColor = '#' + colorTwo;
		document.getElementById('instructions').innerHTML='Press a key to make a guess.';
		document.getElementById('wins').innerHTML='Wins: ' + game.wins;
		document.getElementById('blanks').innerHTML='<p class="blank-p">' + game.progress.join('') + '</p>';
		document.getElementById('remaining').innerHTML='Tries Remaining: ' + 
														(game.letters.length - game.guesses) + game.pokeball;
		document.getElementById('guessed').innerHTML='Letters already guessed:<br>';
	},


	// Test whether a string is a letter.
	isAlpha: function(str) {
	 	return /^[A-Z]+$/i.test(str);
	},


	checkLetter: function(x){
		// Check if a word is in progress.
		if (game.word.length > 0) {
			// Check if the guess is a letter.
			if (game.isAlpha(x)) {
				// Convert the guess to lowercase.
				x = x.toLowerCase();
				// If the letter is already in the guessed letters, do nothing.
				if (game.lettersGuessed.indexOf(x) !== -1) {
					return;
				} else {
					// Add the letter to the array of guesses.
					game.lettersGuessed.push(x);
					// If the letter isn't in the word, remove a guess.
					if (game.letters.indexOf(x) === -1) {
						game.guesses++;
					}

					// Check whether there are any letters in the word that aren't in the array of correct letters.
					// If this is true for any letter in the word, win gets set to false.
					var win = true;
					for (var j=0;j < game.letters.length;j++) {
						if (game.lettersGuessed.indexOf(game.letters[j]) === -1) {
							win = false;
						}
					}

					// If there weren't any letters in the word are that hadn't been guessed, you win!
					if (win) {
						game.winBehavior();
					// If you're out of guesses, you lose.
					} else if (game.letters.length - game.guesses < 1) {
						game.lossBehavior();
					// Otherwise, just get variables ready for a new guess.
					} else {
						game.letterReset();
					}
				}
			}
		} else {
			// If a word isn't already in progress, keypress begins one.
			game.roundReset();
		}
	},


	// Update HTML based on last guess and prepare for a new guess.
	letterReset: function() {
		game.progressUpdate();
		lettersIncorrect = [];
		for (var i=0;i < game.lettersGuessed.length;i++) {
			if (game.letters.indexOf(game.lettersGuessed[i]) === -1) {
				lettersIncorrect.push(game.lettersGuessed[i]);
			}
		}
		document.getElementById('blanks').innerHTML='<p class="blank-p">' + game.progress.join('') + '</p>';
		document.getElementById('remaining').innerHTML='Tries Remaining: ' +
														(game.letters.length - game.guesses) + game.pokeball;
		document.getElementById('guessed').innerHTML='Letters already guessed:<br>' + lettersIncorrect.join(' ');
	},


	// Update the blanks variable upon word creation and after each guess.
	progressUpdate: function() {
		for (var k=0;k < game.letters.length;k++) {
			if (game.lettersGuessed.indexOf(game.letters[k]) !== -1) {
				game.progress[k] = game.letters[k];
			} else {
				game.progress[k] = '_';
			}
		}
	},


	// On win, increment win, change HTML, play music, and empty word.
	winBehavior: function() {
		document.getElementById('instructions').innerHTML='Press a key to start a new word.</p>';
		document.getElementById('blanks').innerHTML='<p class="flow-text">You caught ' + game.word + '!</p>' +
												    '<p class="flow-text">You win!!</p>';
		document.getElementById('remaining').innerHTML='';
		document.getElementById('guessed').innerHTML='';
		if (game.sound) {
			var audio = new Audio('assets/music/' + game.id + '.mp3');
			audio.play();
		}
		game.wins++;
		document.getElementById('wins').innerHTML='Wins: ' + game.wins;
		game.pokeBag.push('<img src="assets/images/sprites/' +
					 game.id + '.png" alt="Picture of '+ game.word +
					 '"class="sprite">');
		document.getElementById('bag').innerHTML=game.pokeBag.join(' ');
		game.word = '';
	},


	// On loss, change HTML and empty word.
	lossBehavior: function() {
		document.getElementById('instructions').innerHTML='Press a key to start a new word.</p>';
		document.getElementById('blanks').innerHTML='<p class="flow-text">' + game.word + ' got away...</p>' +
												    '<p class="flow-text">You lose.</p>';
		document.getElementById('remaining').innerHTML='';
		document.getElementById('guessed').innerHTML='';
		game.word = '';
	},


	// Toggle sound on/off.
	toggleAudio: function() {
		if (game.sound === true) {
			game.sound = false;
			button.innerHTML='Sound: Off';
		} else {
			game.sound = true;
			button.innerHTML='Sound: On';
		}
	}
};


// CALLS
// Main game behavior
document.onkeyup = function(event) {
	var currentGuess = String.fromCharCode(event.keyCode);
	// Hand it off to the functions inside game unless they were hitting ctrl or cmd.
	if ([17, 91, 93].indexOf(event.keyCode) !== -1) {
		return;
	} else {
		game.checkLetter(currentGuess);
	}
};


// Event listener for sound button clicks.
button.addEventListener("click", function(e){
	game.toggleAudio();
});
