const proposalList = [
    {
        "sentence": "En 2023, je crois en moi",
        "comment": "C'est vrai que «croire en nous» ça serait mieux...mais ça rime pas !"
    },
    {
        "sentence": "En 2023, je croit en mois",
        "comment": "Et en l'orthographe de surcroit..."
    },
    {
        "sentence": "En 2023, épouse-moi",
        "comment": "C'est un peu directe mais t'aimes ça ?!"
    },
    {
        "sentence": "En 2023, je perds du poids",
        "comment": "Ok ! C'est pas le voeu le plus réaliste...moi même j'y crois pas !"
    },
    {
        "sentence":"En 2023, je fais plus souvent caca",
        "comment":"Alors ça tombe bien parce que 2022 c'était l'année des traces de pneus..."
    },
    {
        "sentence":"En 2023, par la main, prends-moi",
        "comment":"Et ça ne sera pas que par la main parfois..."
    },
    {
        "sentence":"En 2023, honore-moi",
        "comment":"Mais surtout après essuies-toi..."
    },
    {
        "sentence":"En 2023, tu éjaculeras",
        "comment":"Une année pleine de promesse ma fois !"
    },
    {
        "sentence":"En 2023, le chien aboie",
        "comment":"Tant qu'il ne mord pas !"
    },
    {
        "sentence":"En 2023, je suis en fin de droit à pole-emploi",
        "comment":"Mais sur mon sort je ne veux pas qu'on larmoie"
    },
    {
        "sentence":"En 2023, je suis agenois",
        "comment":"Et le pruneau d'Agen, jamais à jeun, crois-moi !"
    },
    {
        "sentence":"En 2023, je suis albigeois",
        "comment":"Oui je sais c'est dur, mais ça aurait pu être aurillacois"
    },
    {
        "sentence":"En 2023, j'adopte des anchois",
        "comment":"C'est tellement mignon sur ma pizza !"
    },
    {
        "sentence":"En 2023, je bois des vins d'Arbois",
        "comment":"Comme s'il n'y avait que ça !"
    },
    {
        "sentence":"En 2023, je suis ardéchois",
        "comment":"Oui je sais c'est dur, mais ça aurait pu être ariégois !"
    },
    {
        "sentence":"En 2023, je suis ariégeois",
        "comment":"Oui je sais c'est dur, mais ça aurait pu être ardéchois !"
    },
    {
        "sentence":"En 2023, au toilette je m'assoie",
        "comment":"Honnêtement tu le faisais dejà !?"
    },
    {
        "sentence":"En 2023, je suis aurillacois",
        "comment":"Oui je sais c'est dur mais ça aurait pu être albigeois..."
    },
    {
        "sentence":"En 2023, je suis supporter auxerrois",
        "comment":"Et je fabrique des tours Eiffel en alumettes parfois..."
    },
    {
        "sentence":"En 2023, je bois de la Badois",
        "comment":"Mais avec modération, ça va de soit !"
    },
    {
        "sentence":"En 2023, je me tape un bavarois",
        "comment":"Je parle du gâteau...parce que Günther j'aime pas !"
    },
    {
        "sentence":"En 2023, j'habite en face du beffroi",
        "comment":"Parce que le «befchaud» n'existe pas"
    },
    {
        "sentence":"En 2023, je suis béninois",
        "comment":"Oui ok, je pars de loin là..."
    },
    {
        "sentence":"En 2023, je suis bergeracois",
        "comment":"Et Cyrano est en moi !"
    },
    {
        "sentence":"En 2023, je suis berlinois",
        "comment":"Et Kennedy est en moi !"
    },
    {
        "sentence":"En 2023, je suis biterrois",
        "comment":"C'est les habitants de quelle ville déjà ?"
    },
    {
        "sentence":"En 2023, conjuge avec moi : «je bois..»",
        "comment":"Ca transpire de vérité ça !"
    },
    {
        "sentence":"En 2023, pas de langue de bois",
        "comment":"Par contre la bite..."
    },
    {
        "sentence":"En 2023, de Brel, je chante «les bourgeois»",
        "comment":"...plus ça devient..."
    },
    {
        "sentence":"En 2023, j'ai plus d'une flèche dans mon carquois",
        "comment":"Oui, il faut bien bander pour bien tirer...sinon ça merdoie !"
    },
    {
        "sentence":"En 2023, je retrouve mon frère siamois",
        "comment":"Et je lui échange mon foie"
    },
    {
        "sentence":"En 2023, je passe au plan à trois",
        "comment":"Oui parce que «à quatre» ça faisait trop pour moi !"
    },
    {
        "sentence":"En 2023, je joue du hautbois",
        "comment":"Et je ne m'en remets pas..."
    },
    {
        "sentence":"En 2023, c'est lucarne du pied droit !",
        "comment":"Et sans argentin cette fois !"
    },
    {
        "sentence":"En 2023, je suis meldois",
        "comment":"C'est la gentillé de Meaux, mais ça donne des idées ma fois..."
    },
    {
        "sentence":"En 2023, je prends en combat Rocky Balboa",
        "comment":"Mais il est peut-être pas encore assez vieux pour ça !"
    },
    {
        "sentence":"En 2023, je mange du quinois",
        "comment":"Avec une énorme raclette et du gras !"
    },
    {
        "sentence":"En 2023, y'aura pas Régine mais je mets des boas",
        "comment":"Comme la grande Zoa!"
    },
    {
        "sentence":"En 2023, je suis cannois",
        "comment":"Pour devenir festivalois"
    },
    {
        "sentence":"En 2023, j'adopte un chamois",
        "comment":"Et je lui ferai la peau cette fois !"
    },
    {
        "sentence":"En 2023, je suis champenois",
        "comment":"Enfin, surtout pour le champagne que je bois"
    },
    {
        "sentence":"En 2023, je parle chinois",
        "comment":"我想赢得这场该死的比赛"
    },
    {
        "sentence":"En 2023, je ne serai pas clermontois",
        "comment":"Bah oui, c'est quand même moins bien que vichyssois"
    },
    {
        "sentence":"En 2023, je reste vichyssois",
        "comment":"Je ne vais quand même pas finir clermontois !"
    },
    {
        "sentence":"En 2023, j'adopte un malinois",
        "comment":"Et je ferais moins le malin à la noix !"
    },
    {
        "sentence":"En 2023, je serai moulinois",
        "comment":"Au moins le 14 janvier, une fois !"
    },
    {
        "sentence":"En 2023, je mange du paté comtois",
        "comment":"Si tu connais pas, recherche et cuisine-le et régale-toi"
    },
    {
        "sentence":"En 2023, je jouerai à contremplois",
        "comment":"Et j'aimerai ça !"
    },
    {
        "sentence":"En 2023, je roule en convoi",
        "comment":"Exceptionnel ou pas !"
    },
    {
        "sentence":"En 2023, je serai courtois",
        "comment":"En j'emmerde ceux qui ne le sont pas !"
    },
    {
        "sentence":"En 2023, je sortirai avec le gratin, dauphinois...",
        "comment":"Y'a que lui qui m'accepte comme ça !"
    },
    {
        "sentence":"En 2023, nous ne serons pas dans le désarrois",
        "comment":"Parce que je serai avec toi !"
    },
    {
        "sentence":"En 2023, je ne serais pas discourtois",
        "comment":"Parce que je serai avec toi!"
    },
    {
        "sentence":"En 2023, je jouerai avec mes doigts",
        "comment":"Comme tu n'imagines pas !"
    },
    {
        "sentence":"En 2023, je fuis les pissefroid",
        "comment":"Car la chaude-pisse j'y crois !"
    },
    {
        "sentence":"En 2023, il va faire froid",
        "comment":"Et la méteo j'y crois !"
    },
    {
        "sentence":"En 2023, j'utilise le mot corde, sans effroi",
        "comment":"Sans effroi...mais je le dirai dans ma tête, ça ira..."
    },
    {
        "sentence":"En 2023, être avec toi me rempli d'émoi",
        "comment":"Et pas que d'émoi..."
    },
    {
        "sentence":"En 2023, de belles conneries, j'entraperçois",
        "comment":"Quand je serai avec toi"
    },
    {
        "sentence":"En 2023, de belles rigolades, j'entrevois",
        "comment":"Quand je serai avec toi"
    },
    {
        "sentence":"En 2023, fini l'entresois",
        "comment":"Mélengeons-nous, et plus d'une fois !"
    },
    {
        "sentence":"En 2023, là-bas, au Connemara, on n'accepte pas la paix des Gallois",
        "comment":"...Ni celle des rois...d'Angleterre (tu l'as pour la journée dans la tête...c'est cadeau!)"
    },
    {
        "sentence":"En 2023, je resterai grivois",
        "comment":"Parce que j'aime ça. #Titre !"
    },
    {
        "sentence":"En 2023, je serai lavallois",
        "comment":"Une nouvelle dure à avaler ma fois!"
    },
    {
        "sentence":"En 2023, je serai lensois",
        "comment":"C'est mieux que lillois"
    },
    {
        "sentence":"En 2023, le chocolat sera liégois",
        "comment":"Avant qu'il ne soit viennois !"
    },
    {
        "sentence":"En 2023, je serai lillois",
        "comment":"C'et mieux que lensois"
    },
    {
        "sentence":"En 2023, je serai luxembourgeois",
        "comment":"Juste par amour pour la beauté du pays !"
    },
    {
        "sentence":"En 2023, je serai hongrois",
        "comment":"Meg fogom nyerni ezt a kibaszott meccset!"
    },
    {
        "sentence":"En 2023, je serai iroquois",
        "comment":"Avec plein de sioux avec moi !"
    },
    {
        "sentence":"En 2023, je mettrai en valeur mon minois",
        "comment":"Ouai parce que le cote-du-rhone ça aide pas !"
    },
    {
        "sentence":"En 2023, j'adopte un putois",
        "comment":"Et on verra pas la différence !"
    },
    {
        "sentence":"En 2023, je te fais apprendre le mot orfroi",
        "comment":"De rien c'est rien que pour toi !"
    },
    {
        "sentence":"En 2023, le monde est de ginguois",
        "comment":"Et ça ne changera pas"
    },
    {
        "sentence":"En 2023, au printemps je blondoie",
        "comment":"Avec les cheveux qu'il me restera !"
    },
    {
        "sentence":"En 2023, aurai-je encore ce petit air narquois ?",
        "comment":"Tu detestes aussi n'est-ce pas ?"
    },
    {
        "sentence":"En 2023, je serai quebecois",
        "comment":"Et l'accent sera validé cette fois !"
    },
    {
        "sentence":"En 2023, on se vouvoie",
        "comment":"Et tu...vous allez aimez ça !"
    },
    {
        "sentence":"En 2023, on se tutoie ",
        "comment":"Et vous...tu va aimez ça !"
    },
    {
        "sentence":"En 2023, le côte du Rhône me laissera toujours pantois",
        "comment":"Mais je ne gouterai pas que ça !"
    },
    {
        "sentence":"En 2023, je parlerai patois",
        "comment":"En s'en mettant dans la corniaule mon gars !"
    },
    {
        "sentence":"En 2023, je serai guérêtois",
        "comment":"Mais j'y crois guère, et toi ?"
    },
    {
        "sentence":"En 2023, pour me donner du courage je crirai «montjoie» !",
        "comment":"Histoire de me prendre pour un roi"
    },
    {
        "sentence":"En 2023, je me prendrai pour un roi",
        "comment":"Pour crier «Montjoie»"
    },
    {
        "sentence":"En 2023, on va se claquer la courroie !",
        "comment":"Ok, ça ne veut rien mais je te laisse imaginer ça !"
    },
    {
        "sentence":"En 2023, jamais je ne m'appitoie",
        "comment":"Et je garde la fois en moi !"
    },
    {
        "sentence":"En 2023, dis «au revoir» au XVIème Benoit !",
        "comment":"Et prépare-toi à François !"
    },
    {
        "sentence":"En 2023, je chante du «il était une fois»",
        "comment":"Que les draps s'en souviennent..."
    },
    {
        "sentence":"En 2023, il nous manque Paul Préboist",
        "comment":"Si tu ne sais pas qui c'est, la difficulté s'accroit "
    },
    {
        "sentence":"2023 ne connaîtra pas Linda de Souza !",
        "comment":"Mais j'ai peur de faire la même blague avec Yvan Colona"
    },
    {
        "sentence":"En 2023, je serai Valenciennois",
        "comment":"Voilà..."
    },
    {
        "sentence":"En 2023, dans la foule, je coudoie",
        "comment":"Et oui, coudoyer : je coudoie, tu coudoies, il ou elle coudoie..."
    },
    {
        "sentence":"En 2023, promis je nettoie",
        "comment":"Oui parce quand je suis content je vomis...tu vois"
    },
    {
        "sentence":"En 2023, je pète dans la soie",
        "comment":"On est dans de beaux draps !"
    },
    {
        "sentence":"En 2023, tous les jours on festoie",
        "comment":"Avec une pensé émue pour mon foie"
    },
    {
        "sentence":"En 2023, j'en parlerai à mon surmoi",
        "comment":"et Freud aime ça !"
    },    
    {
        "sentence":"En 2023, je suis supporter stéphanois",
        "comment":"Et en ligue 2 j'y tiens même pas !"
    },    
    {
        "sentence":"En 2023, je porte des chemises à pois",
        "comment":"Et ça ira avec mon poids"
    },    
    {
        "sentence":"En 2023, j'adopte un pékinois",
        "comment":"Mais avec l'accent chinois j'ai peur de pas comprendre mon chien quand il aboie"
    },    
    {
        "sentence":"En 2023, quand tu veux je te reçois",
        "comment":"L'apéro surprise, j'adore ça !"
    },    
    {
        "sentence":"En 2023, je suis strasbourgeois",
        "comment":"Mais pour une saucisse ne me prend pas !"
    },
    {
        "sentence":"En 2023, l'année dure 12 mois",
        "comment":"Si c'est pas étonnant ça ?"
    },
    {
        "sentence":"En 2023, en cassation je me pourvoie",
        "comment":"Et c'est assez classe de dire ça !"
    },
    {
        "sentence":"En 2023, je poserai plus souvent la question «Mais pourquoi ?»",
        "comment":"Non mais c'est vrai ça...Pourquoi ?"
    },
    {
        "sentence":"En 2023, contre la connerie je guerroie",
        "comment":"Et ça va pas être facile ça!"
    },
    {
        "sentence":"En 2023, tout seul, je visite le minervois",
        "comment":"Et avec une minerve tu vois !"
    },
    {
        "sentence":"En 2023, je me moque des puydomois",
        "comment":"Parce qu'ici, ici c'est le 03 !"
    },
    {
        "sentence":"En 2023, je serai zurichois",
        "comment":"Parce que tout n'est pas en berne !"
    },
    {
        "sentence":"En 2023, je rigolerai à mon endroit",
        "comment":"Avant de m'attaquer à toi"
    },
    {
        "sentence":"En 2023, le pain sera viennois",
        "comment":"Avant de lui mettre des noix"
    },
    {
        "sentence":"En 2023, je m'en bat les noix",
        "comment":"Tellement classe de dire ça..."
    },
    {
        "sentence":"En 2023, je n'aurai pas besoin de portevoix",
        "comment":"Mais quid du portenoix ?!"
    },
    {
        "sentence":"En 2023, il n'est pas impossible que tu me foudroies",
        "comment":"Du regard et de ta voix"
    },
    {
        "sentence":"En 2023, enfin je mue ma voix",
        "comment":"Fini les castras"
    },
    {
        "sentence":"En 2023, fini le desarroi",
        "comment":"Le bonheur s'accroit"
    },
    {
        "sentence":"En 2023, le bonheur s'accroit",
        "comment":"Fini le desarroi"
    },
    {
        "sentence":"En 2023, je m'éloigne des sournois",
        "comment":"Mais non, je ne parlais pas de toi"
    },
    {
        "sentence":"En 2023, je serai suédois",
        "comment":"Och jag kommer vinna den här jävla matchen"
    },
    {
        "sentence":"En 2023, tu auras toujours le choix",
        "comment":"Au restaurant, chez toi, chez moi !"
    },
    {
        "sentence":"En 2023, je serai toujours aussi maladroit",
        "comment":"C'est pas d'ma faute c'est comme ça !"
    },
    {
        "sentence":"En 2023, se lever tous les jours sera un exploit",
        "comment":"Et se laver aussi n'est-ce pas ?"
    },
    {
        "sentence":"En 2023, de mille feux tu chatoies",
        "comment":"Mais attention avant tu brillais déjà !"
    },
    {
        "sentence":"En 2023, je redeviens villageois",
        "comment":"Comme Astérix le gaulois"
    },
    {
        "sentence":"En 2023, tous les soirs je me mets sur le toit",
        "comment":"Et à la Station avec les copains on flamboie !"
    },
    {
        "sentence":"En 2023, je ne resterai pas étroit",
        "comment":"Et de mon esprit je ne parle pas !"
    },
    {
        "sentence":"En 2023, je n'aurai plus de renvoi",
        "comment":"Ou plus discrètement ça se fera !"
    },
    {
        "sentence":"En 2023, je trouve un donneur de foie",
        "comment":"Et le lui paie l'apéro pour féter ça !"
    },
    {
        "sentence":"En 2023, ça sera tous les jours la joie",
        "comment":"Et rien que ça me suffira"
    },
    {
        "sentence":"En 2023, je porte la croix",
        "comment":"En forme de tire-bouchon il va de soit !"
    },
    {
        "sentence":"En 2023, Pelé ne sera plus le roi",
        "comment":"Mais Killian le deviendra"
    },
    {
        "sentence":"En 2023, j'habite à Détroit",
        "comment":"C'est loin, c'est moche mais ça ira !"
    },
    {
        "sentence":"En 2023, je fais une fac de droit",
        "comment":"Et à rien, ça ne me servira !"
    },
    {
        "sentence":"En 2023, je ne te laisserai pas aux abois",
        "comment":"Et te renconforterai en mangeant des abats !"
    },
    {
        "sentence":"En 2023, je suis finnois",
        "comment":"Haluan voittaa tämän vitun pelin !"
    },
    {
        "sentence":"2023 sera l'année de Maryline Dubois",
        "comment":"Et rien que pour ça je deviendrai turinois !"
    },
    {
        "sentence":"En 2023 je serai plus adroit",
        "comment":"Autant que Philippe Croison le prévoit !"
    },
    {
        "sentence":"En 2023, je pense coucher avec Christina Aguilera",
        "comment":"Sauf que je trompe et fini avec Frédéric...le vichyssois"
    },
    {
        "sentence":"En 2023, je n'espère pas croiser Alexandre Benalla",
        "comment":"Surtout en manif il va de soit !"
    }, 
    {
        "sentence":"En 2023, je rape avec Booba",
        "comment":"La Honda, JSX, numéro dix, Maradona <br> \
        On a fumé l'espoir, faut toucher du bois (paw, paw, paw) <br> \
        Fuck ton abus de pouvoir (paw, paw, paw) <br> \
        chez moi c'est les balles qui font la loi (paw, paw, paw) <br> \
        Saint-Martin, côté Hollandais, paquet flottant, cocaïna <br> \
        Un cheat code pour la crypto' mettez moi deux Mona Lisa"
    },
    {
        "sentence":"En 2023, je regarde tous ce que tourne Cécile bois",
        "comment":"Candice Renoir ça ne parle pas ?!"
    },
    {
        "sentence":"En 2023, je porterai du Christian Lacroix",
        "comment":"Pas de bol c'est pas ma taille le 43 !"
    },
    {
        "sentence":"En 2023, je ne ferrai pas d'humour misogyne comme Olivier de Benoist",
        "comment":"Ou alors si peu que je ne me fourvoie!"
    },
    {
        "sentence":"En 2023, je vénère Claude François",
        "comment":"Pour les coupures électriques il va de soit !"
    },
    {
        "sentence":"En 2023, je rame autant que Maud Fontenoy",
        "comment":"Ouai mais à contre-courant ça merdoit !"
    },
    {
        "sentence":"En 2023, je cherche à prendre la voix de Gilbert Bribois",
        "comment":"Mais son cerveau ça risque pas !"
    },
    {
        "sentence":"En 2023, je chante du  Nolwenn Leroy",
        "comment":"Avec le costume de Pierre Mauroy..."
    },
    {
        "sentence":"En 2023, je suis Yannick Noah",
        "comment":"Le tennisman...mais le fumeur de surcroit !"
    },
    {
        "sentence":"En 2023, je me souviens de Patrick Roy",
        "comment":"Mais si ! «Une famille en or» ! Le présentateur ! Souviens-toi  !"
    },
    {
        "sentence":"En 2023, je suis Bertrand Chameroy",
        "comment":"Et je me prends au sérieux chez Hanouna"
    },
    {
        "sentence":"En 2023, la fondue sera de savoie",
        "comment":"Avec du pain frais et un coup de blanc ça envoie !"
    },
    {
        "sentence":"En 2023, je me rassoie",
        "comment":"Mon mal au cul passera !"
    }
];


/*
accroit, aloi, broie, choie, conçoit, croie, déchoie, déçoit, déploie, envoie, échoie, 
fois, fossoie, fourvoie, larmoie, louvoie, noie, parfois, paroi, pavois, perçois, pois, 
prévois, quelquefois, revois, rougeoie, sois, soudoie, sursois, surcrois, tournoi, tournoie,
toutefois, verdoie, vois, voie
*/
  
/////////////////////////////////////////////////////////////////////////////////

let previousProposal = null;
let proposalCount = proposalList.length; 
//Copie du tableau dans un tableau de tirage au sort
let proposalListDraw = proposalList.slice()

function selectRandomProposal() {
    // Sélectionne une proposition au hasard dans la liste
    const randomIndex = Math.floor(Math.random() * proposalListDraw.length);
    const proposal = proposalListDraw[randomIndex];

    // Retire la proposition sélectionnée du tableau proposalListDraw
    proposalListDraw.splice(randomIndex, 1);

    // Si le tableau proposalListDraw est vide, le recharger avec les propositions initiales
    if (proposalListDraw.length === 0) {
        proposalListDraw = proposalList.slice()
    }

    // Retourne la proposition sélectionnée
    return proposal;
}