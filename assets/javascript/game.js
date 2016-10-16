// TODO: play (correct) sound on win
// TODO: header image
// TODO: side image
// TODO: parse type correctly
// TODO: use type for colors
// TODO: add pokeball? add list or image of what you've caught so far?
// TODO: figure out why there's no space when there are two of the same letter in a row.

// Initialize variables with correct types.
var wins = 0;
var types = [];
var word = '';
var guesses = -1;
var blanks = [];
var letters = [];
var lettersCorrect = [];
var lettersIncorrect = [];
var lettersRemaining = [];
var progress = [];
var number = 0;
var sound = true;
var pokeBag = [];

// Putting all the data here for now.
pokeData = {'pokemon_id':[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,475,476,477,478,479,480,481,482,483,484,485,486,488,489,490,491,493],
		    'type':['poison, grass','poison, grass','poison, grass','fire','fire','flying, fire','water','water','water','bug','bug','flying, bug','poison, bug','poison, bug','poison, bug','normal, flying','normal, flying','normal, flying','normal','normal','normal, flying','normal, flying','poison','poison','electric','electric','ground','ground','poison','poison, ground','poison','poison, ground','fairy','fairy','fire','fire','normal, fairy','normal, fairy','flying, poison','flying, poison','poison, grass','poison, grass','poison, grass','bug, grass','bug, grass','poison, bug','poison, bug','ground','ground','normal','normal','water','water','fighting','fighting','fire','fire','water','water','fighting, water','psychic','psychic','psychic','fighting','fighting','fighting','poison, grass','poison, grass','poison, grass','poison, water','poison, water','ground, rock','ground, rock','ground, rock','fire','fire','water, psychic','water, psychic','steel, electric','steel, electric','normal, flying','normal, flying','normal, flying','water','water, ice','poison','poison','water','water, ice','poison, ghost','poison, ghost','poison, ghost','ground, rock','psychic','psychic','water','water','electric','electric','grass, psychic','grass, psychic','ground','ground','fighting','fighting','normal','poison','poison','ground, rock','ground, rock','normal','grass','normal','water','water','water','water','water','water, psychic','flying, bug','psychic, ice','electric','fire','bug','normal','water','flying, water','water, ice','normal','normal','water','electric','fire','normal','rock, water','rock, water','rock, water','rock, water','flying, rock','normal','flying, ice','flying, electric','flying, fire','dragon','dragon','flying, dragon','psychic','psychic','grass','grass','grass','fire','fire','fire','water','water','water','normal','normal','normal, flying','normal, flying','flying, bug','flying, bug','poison, bug','poison, bug','flying, poison','water, electric','water, electric','electric','fairy','normal, fairy','fairy','flying, fairy','flying, psychic','flying, psychic','electric','electric','electric','grass','water, fairy','water, fairy','rock','water','flying, grass','flying, grass','flying, grass','normal','grass','grass','flying, bug','ground, water','ground, water','psychic','dark','flying, dark','water, psychic','ghost','psychic','psychic','normal, psychic','bug','bug, steel','normal','flying, ground','ground, steel','fairy','fairy','poison, water','bug, steel','rock, bug','fighting, bug','ice, dark','normal','normal','fire','rock, fire','ground, ice','ground, ice','rock, water','water','water','flying, ice','flying, water','flying, steel','fire, dark','fire, dark','water, dragon','ground','ground','normal','normal','fighting','fighting','psychic, ice','electric','fire','normal','normal','electric','fire','water','ground, rock','ground, rock','rock, dark','flying, psychic','grass, psychic','grass','grass','grass','fire','fighting, fire','fighting, fire','water','ground, water','ground, water','dark','dark','normal','normal','bug','bug','flying, bug','bug','poison, bug','water, grass','water, grass','water, grass','grass','grass, dark','grass, dark','normal, flying','normal, flying','flying, water','flying, water','psychic, fairy','psychic, fairy','psychic, fairy','bug, water','flying, bug','grass','fighting, grass','normal','normal','normal','ground, bug','flying, bug','bug, ghost','normal','normal','normal','fighting','fighting','normal, fairy','rock','normal','normal','ghost, dark','steel, fairy','rock, steel','rock, steel','rock, steel','fighting, psychic','fighting, psychic','electric','electric','electric','electric','bug','bug','poison, grass','poison','poison','water, dark','water, dark','water','water','ground, fire','ground, fire','fire','psychic','psychic','normal','ground','ground, dragon','ground, dragon','grass','grass, dark','normal, flying','flying, dragon','normal','poison','rock, psychic','rock, psychic','ground, water','ground, water','water','water, dark','ground, psychic','ground, psychic','rock, grass','rock, grass','rock, bug','rock, bug','water','water','normal','normal','ghost','ghost','ghost','ghost','flying, grass','psychic','dark','psychic','ice','ice','water, ice','water, ice','water, ice','water','water','water','rock, water','water','dragon','dragon','flying, dragon','steel, psychic','steel, psychic','steel, psychic','rock','ice','steel','psychic, dragon','psychic, dragon','water','ground','flying, dragon','steel, psychic','grass','grass','ground, grass','fire','fighting, fire','fighting, fire','water','water','steel, water','normal, flying','normal, flying','normal, flying','normal','normal, water','bug','bug','electric','electric','electric','poison, grass','poison, grass','rock','rock','rock, steel','rock, steel','bug','flying, bug','flying, bug','flying, bug','electric','water','water','grass','grass','water','ground, water','normal','flying, ghost','flying, ghost','normal','normal','ghost','flying, dark','normal','normal','psychic','poison, dark','poison, dark','steel, psychic','steel, psychic','rock','normal','normal, flying','ghost, dark','ground, dragon','ground, dragon','ground, dragon','normal','fighting','fighting, steel','ground','ground','poison, bug','poison, dark','fighting, poison','fighting, poison','grass','water','water','flying, water','grass, ice','grass, ice','ice, dark','steel, electric','normal','ground, rock','grass','electric','fire','flying, fairy','flying, bug','grass','ice','flying, ground','ground, ice','fighting, psychic','rock, steel','ghost','ghost, ice','ghost, electric','psychic','psychic','psychic','steel, dragon','water, dragon','steel, fire','normal','psychic','water','water','dark','normal'],
		    'name':['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidorina','nidoqueen','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb','electrode','exeggcute','exeggutor','cubone','marowak','hitmonlee','hitmonchan','lickitung','koffing','weezing','rhyhorn','rhydon','chansey','tangela','kangaskhan','horsea','seadra','goldeen','seaking','staryu','starmie','scyther','jynx','electabuzz','magmar','pinsir','tauros','magikarp','gyarados','lapras','ditto','eevee','vaporeon','jolteon','flareon','porygon','omanyte','omastar','kabuto','kabutops','aerodactyl','snorlax','articuno','zapdos','moltres','dratini','dragonair','dragonite','mewtwo','mew','chikorita','bayleef','meganium','cyndaquil','quilava','typhlosion','totodile','croconaw','feraligatr','sentret','furret','hoothoot','noctowl','ledyba','ledian','spinarak','ariados','crobat','chinchou','lanturn','pichu','cleffa','igglybuff','togepi','togetic','natu','xatu','mareep','flaaffy','ampharos','bellossom','marill','azumarill','sudowoodo','politoed','hoppip','skiploom','jumpluff','aipom','sunkern','sunflora','yanma','wooper','quagsire','espeon','umbreon','murkrow','slowking','misdreavus','unown','wobbuffet','girafarig','pineco','forretress','dunsparce','gligar','steelix','snubbull','granbull','qwilfish','scizor','shuckle','heracross','sneasel','teddiursa','ursaring','slugma','magcargo','swinub','piloswine','corsola','remoraid','octillery','delibird','mantine','skarmory','houndour','houndoom','kingdra','phanpy','donphan','stantler','smeargle','tyrogue','hitmontop','smoochum','elekid','magby','miltank','blissey','raikou','entei','suicune','larvitar','pupitar','tyranitar','lugia','celebi','treecko','grovyle','sceptile','torchic','combusken','blaziken','mudkip','marshtomp','swampert','poochyena','mightyena','zigzagoon','linoone','wurmple','silcoon','beautifly','cascoon','dustox','lotad','lombre','ludicolo','seedot','nuzleaf','shiftry','taillow','swellow','wingull','pelipper','ralts','kirlia','gardevoir','surskit','masquerain','shroomish','breloom','slakoth','vigoroth','slaking','nincada','ninjask','shedinja','whismur','loudred','exploud','makuhita','hariyama','azurill','nosepass','skitty','delcatty','sableye','mawile','aron','lairon','aggron','meditite','medicham','electrike','manectric','plusle','minun','volbeat','illumise','roselia','gulpin','swalot','carvanha','sharpedo','wailmer','wailord','numel','camerupt','torkoal','spoink','grumpig','spinda','trapinch','vibrava','flygon','cacnea','cacturne','swablu','altaria','zangoose','seviper','lunatone','solrock','barboach','whiscash','corphish','crawdaunt','baltoy','claydol','lileep','cradily','anorith','armaldo','feebas','milotic','castform','kecleon','shuppet','banette','duskull','dusclops','tropius','chimecho','absol','wynaut','snorunt','glalie','spheal','sealeo','walrein','clamperl','huntail','gorebyss','relicanth','luvdisc','bagon','shelgon','salamence','beldum','metang','metagross','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','jirachi','turtwig','grotle','torterra','chimchar','monferno','infernape','piplup','prinplup','empoleon','starly','staravia','staraptor','bidoof','bibarel','kricketot','kricketune','shinx','luxio','luxray','budew','roserade','cranidos','rampardos','shieldon','bastiodon','burmy','mothim','combee','vespiquen','pachirisu','buizel','floatzel','cherubi','cherrim','shellos','gastrodon','ambipom','drifloon','drifblim','buneary','lopunny','mismagius','honchkrow','glameow','purugly','chingling','stunky','skuntank','bronzor','bronzong','bonsly','happiny','chatot','spiritomb','gible','gabite','garchomp','munchlax','riolu','lucario','hippopotas','hippowdon','skorupi','drapion','croagunk','toxicroak','carnivine','finneon','lumineon','mantyke','snover','abomasnow','weavile','magnezone','lickilicky','rhyperior','tangrowth','electivire','magmortar','togekiss','yanmega','leafeon','glaceon','gliscor','mamoswine','gallade','probopass','dusknoir','froslass','rotom','uxie','mesprit','azelf','dialga','palkia','heatran','regigigas','cresselia','phione','manaphy','darkrai','arceus']};


// Functions, mostly in use order.

// Set up a new word.
function roundReset() {
	blanks = [];
	lettersIncorrect = [];
	lettersCorrect = [];
	progress = [];
	guesses = -3;
	number = Math.floor(Math.random()*pokeData.name.length);
	word = pokeData.name[number];
	id = pokeData.pokemon_id[number];
	letters = word.split('');
	types = pokeData.type[number];
	// Do some schmancy shit with pokemon types here.
	progressUpdate();
	document.getElementById('wins').innerHTML='<p>Wins: ' + wins + '</p>';
	document.getElementById('blanks').innerHTML='<p class="blank-p">' + progress.join('') + '</p>';
	document.getElementById('remaining').innerHTML='<p>Tries Remaining: ' + (letters.length - guesses) +
												   '<img src="assets/images/poke-ball.png" alt="A pokeball" class="icon"></p>';
	document.getElementById('guessed').innerHTML='<p>Letters already guessed:<br>' + lettersIncorrect.join(' ') + '</p>';
	document.getElementById('image').innerHTML='';
}

// Main game behavior.
document.onkeyup = function(event) {
	var currentGuess = String.fromCharCode(event.keyCode);
	
	if (isAlpha(currentGuess) && word.length > 0) {
		currentGuess = currentGuess.toLowerCase();

		if (lettersIncorrect.indexOf(currentGuess) !== -1) {
			letterReset();
		} else {
			if (letters.indexOf(currentGuess) !== -1) {
				lettersCorrect.push(currentGuess);
			} else {
				lettersIncorrect.push(currentGuess);
				guesses++;
			}

			for (var j=0;j < letters.length;j++) {
				if (lettersCorrect.indexOf(letters[j]) === -1) {
					lettersRemaining.push(letters[j]);
				}
			}

			if (lettersRemaining.length === 0) {
				winBehavior();
			} else if (letters.length - guesses < 1) {
				lossBehavior();
			} else {
				letterReset();
			}
		}
	} else if (currentGuess === ' ') {
		roundReset();
	}
};

// Determine whether the keypress was a letter.
function isAlpha(str) {
 	return /^[A-Z]+$/i.test(str);
}

// Update document based on last guess and prepare for a new guess.
function letterReset() {
	progressUpdate();
	lettersRemaining = [];
	document.getElementById('blanks').innerHTML='<p class="blank-p">' + progress.join('') + '</p>';
	document.getElementById('remaining').innerHTML='<p>Tries Remaining: ' + (letters.length - guesses) +
												   '<img src="assets/images/poke-ball.png" alt="A pokeball" class="icon"></p>';
	document.getElementById('guessed').innerHTML='<p>Letters already guessed:<br>' + lettersIncorrect.join(' ') + '</p>';
}

// Update the letters/blanks.
function progressUpdate() {
	for (var k=0;k < letters.length;k++) {
		if (lettersCorrect.indexOf(letters[k]) !== -1) {
			progress[k] = letters[k];
		} else {
			progress[k] = '_';
		}
	}
}

// On win, increment win and change document.
function winBehavior() {
	document.getElementById('blanks').innerHTML='<p>You caught ' + letters.join('') + '!' +
											    '<br>You win!!</p>';
	document.getElementById('remaining').innerHTML='';
	document.getElementById('guessed').innerHTML='';
	document.getElementById('image').innerHTML='<img src="assets/images/sprites/' +
												id + '.png" alt="Picture of '+ word + 
												'"class="sprite">';
	if (sound) {
		var audio = new Audio('assets/music/' + id + '.mp3');
		audio.play();
	}
	wins++;
	pokeBag.push('<img src="assets/images/sprites/' +
				 id + '.png" alt="Picture of '+ word +
				 '"class="sprite">');
	document.getElementById('bag').innerHTML=pokeBag.join(' ');
	word = '';
}

// On loss, change document.
function lossBehavior() {
	document.getElementById('blanks').innerHTML='<p>' + letters.join('') + ' got away...' +
											    '<br>You lose.</p>';
	document.getElementById('remaining').innerHTML='';
	document.getElementById('guessed').innerHTML='';
	document.getElementById('image').innerHTML='<img src="assets/images/sprites/' +
												id + '.png" alt="Picture of '+ word + 
												'"class="sprite">';
	word = '';
}

var toggleAudio = function() {
    if (sound === true) {
    	sound = false;
    	document.getElementById('toggle-audio').innerHTML='Turn sound on';
    } else {
    	sound = true;
    	document.getElementById('toggle-audio').innerHTML='Turn sound off';
    }
};

document.getElementById('toggle-audio').onclick = toggleAudio;


