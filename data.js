// Poses SVG originales : [x tête, y tête, tracé]
const P={st:[60,12,'M60 18V42M60 22L48 36M60 22L72 36M60 42L52 68M60 42L68 68'],
jk:[60,12,'M60 18V42M60 22L42 8M60 22L78 8M60 42L44 68M60 42L76 68'],
sh:[60,12,'M60 18V42M60 22L30 22M60 22L90 22M60 42L52 68M60 42L68 68'],
cr:[60,6,'M60 12V36M60 16L48 30M60 16L72 30M60 36L53 62M60 36L67 62'],
sq:[50,20,'M53 26L62 46M55 30L76 30M62 46L80 48L74 68'],
lg:[60,12,'M60 18V42M60 22L50 36M60 22L70 36M60 42L80 46V68M60 42L42 60L34 68'],
pl:[20,36,'M26 40L98 58M32 44V64M98 58V66'],
pd:[20,52,'M26 56L98 64M32 58L44 54L34 66M98 64V68'],
pk:[62,56,'M24 68L54 38L88 68'],pk2:[40,60,'M24 68L54 42L88 68'],
bd:[12,62,'M18 64H60L78 46L84 66'],bu:[12,62,'M18 64L60 48L78 46L84 66'],
sd:[12,60,'M18 62H100'],su:[12,54,'M18 62L60 64L100 54M18 62L6 50'],
sp:[20,38,'M26 42L100 60M30 46V66'],
bh:[26,32,'M32 36L74 40M36 38V64M74 40V64'],bx:[26,32,'M32 36L74 40M40 38V64M72 40V64M36 38L10 34M74 40L108 36'],
cd:[12,62,'M18 64H56L74 46L80 66'],cu:[22,50,'M28 54L56 64L74 46L80 66'],
ws:[36,20,'M32 26V46H58V68M34 30L54 36'],fw:[84,56,'M50 40L80 54M50 40V68M80 54V68'],
ca:[26,40,'M32 40Q54 24 74 40M36 40V64M74 40V64'],co:[24,26,'M32 38Q54 52 74 38M36 40V64M74 40V64']};
const BR={t:'Respire calmement, sans bloquer l\u2019air.',r:'Expire pendant l\u2019effort, inspire au retour.'};
const EX={};
function E(id,n,g,m,v,r,a,b,lv,m1,m2,steps,err,tip,easy,hard,br){EX[id]={id,n,g,m,v,r,a,b,lv,m1,m2,steps:steps.split('|'),err,tip,easy,hard,br:br||BR[m=='r'?'r':'t']}}
E('jj','Jumping jacks','Cardio','t',40,15,'st','jk','Facile','Cardio, mollets','Épaules, fessiers','Debout, pieds joints|Saute en écartant les jambes et lève les bras|Reviens pieds joints, bras le long du corps|Garde un rythme régulier','Atterrir sur des jambes raides','Atterris doucement sur l\u2019avant du pied.','Step touch sans saut','Jumping jacks plus rapides');
E('hk','High knees adaptés','Cardio','t',40,15,'st','cr','Facile','Cardio, quadriceps','Abdominaux','Debout, dos droit|Monte un genou à hauteur de hanche|Alterne en marchant vite sur place|Balance les bras','Pencher le buste en arrière','Reste sur la pointe des pieds, sans impact fort.','Marche rapide sur place','Genoux plus hauts, tempo rapide');
E('sc','Cercles d\u2019épaules','Mobilité','t',30,5,'st','sh','Facile','Épaules','Haut du dos','Debout, bras le long du corps|Monte les épaules vers les oreilles|Fais de grands cercles lents vers l\u2019arrière|Inverse le sens à mi-temps','Aller trop vite','Mouvement ample et contrôlé.','Petits cercles','Bras tendus en croix, cercles');
E('pp','Pompes classiques','Poitrine','r',8,60,'pl','pd','Moyen','Pectoraux','Triceps, épaules, gainage','Mains sous les épaules, corps aligné|Contracte ventre et fessiers|Descends poitrine vers le sol en contrôlant|Pousse pour revenir bras tendus','Bassin qui s\u2019affaisse ou monte; coudes trop écartés','Coudes à ~45° du corps; qualité avant quantité.','Pompes sur les genoux ou inclinées','Pompes tempo (3 s en descente)');
E('pg','Pompes sur les genoux','Poitrine','r',10,45,'pl','pd','Facile','Pectoraux','Triceps, épaules','Genoux au sol, corps aligné genoux-tête|Descends poitrine vers le sol|Pousse jusqu\u2019aux bras tendus|Garde le ventre gainé','Fesses en arrière','Pose les genoux sur un tapis.','Pompes murales','Pompes classiques');
E('pi','Pompes inclinées','Poitrine','r',10,45,'pl','pd','Facile','Pectoraux (bas)','Triceps, épaules','Mains sur un support STABLE (banc, mur solide)|Corps aligné|Descends la poitrine vers le support|Pousse pour remonter','Support instable','Plus le support est haut, plus c\u2019est facile.','Support plus haut','Support plus bas');
E('ps','Pompes serrées','Bras','r',8,60,'pl','pd','Moyen','Triceps','Pectoraux, épaules','Mains rapprochées sous la poitrine|Corps aligné|Descends en gardant les coudes près du corps|Pousse pour remonter','Coudes écartés','Mets-toi sur les genoux si nécessaire.','Sur les genoux','Pompes diamant');
E('pk','Pike push-ups','Épaules','r',6,60,'pk','pk2','Moyen','Épaules','Triceps, haut de poitrine','Forme un V inversé, hanches hautes|Plie les coudes, tête vers le sol entre les mains|Pousse pour revenir|Garde les jambes presque tendues','Appuyer sur la tête','Avance les pieds pour plus de difficulté.','Mains surélevées','Pieds surélevés');
E('yy','Élévations Y-T-W','Épaules','t',40,30,'sd','su','Facile','Haut du dos, deltoïdes','Trapèzes','Allongé sur le ventre|Lève bras en Y, puis T, puis W|Serre les omoplates|Reviens lentement','Cambrer le bas du dos','Mouvements petits et précis.','Sans lever la poitrine','Maintiens 2 s en haut');
E('sm','Superman','Dos','t',30,30,'sd','su','Facile','Lombaires, fessiers','Haut du dos','Allongé sur le ventre, bras tendus|Lève bras et jambes de quelques cm|Tiens 2 s|Redescends lentement','Lever la tête en arrière','Regarde le sol.','Lever bras ou jambes seuls','Superman alterné');
E('bd','Bird-dog','Tronc','r',8,30,'bh','bx','Facile','Lombaires, fessiers, abdominaux','Épaules','À quatre pattes, dos plat|Tends le bras droit et la jambe gauche|Tiens 2 s sans basculer le bassin|Change de côté','Bassin qui tourne','Imagine un verre posé sur ton dos.','Seulement les jambes','Pause 5 s');
E('pl','Planche','Abdos','t',30,30,'pl','pl','Moyen','Abdominaux profonds','Épaules, fessiers','Avant-bras au sol, coudes sous les épaules|Corps aligné|Serre abdos et fessiers|Respire en continu','Dos creux ou fesses en l\u2019air','Arrête dès que la forme se dégrade.','Sur les genoux','Planche avec lever de jambe');
E('sp','Planche latérale','Abdos','t',20,30,'sp','sp','Moyen','Obliques','Épaules, fessiers','Sur le côté, avant-bras au sol|Soulève le bassin|Corps en ligne droite|Tiens, puis change de côté','Bassin qui tombe','Genou du bas posé au début.','Genoux au sol','Ajoute un lever de bras');
E('db','Dead bug','Abdos','r',8,30,'cd','cd','Facile','Abdominaux profonds','Fléchisseurs de hanches','Dos plaqué au sol, bras tendus au plafond|Genoux à 90°|Étends bras droit et jambe gauche|Reviens et alterne','Dos qui se cambre','Plaque le bas du dos au sol.','Bouge seulement les jambes','Mouvement plus lent');
E('cc','Crunch abdominal','Abdos','r',12,30,'cd','cu','Facile','Grand droit de l\u2019abdomen','Obliques','Dos au sol, genoux pliés|Mains sur les tempes|Enroule les épaules vers le bassin|Redescends lentement','Tirer sur la nuque','Ne monte que de quelques cm.','Bras croisés devant','Bicycle crunch');
E('mc','Mountain climbers','Cardio','t',30,30,'pl','pl','Moyen','Cardio, abdominaux','Épaules, quadriceps','En position de pompe|Ramène un genou vers la poitrine|Alterne rapidement|Garde le bassin stable','Fesses en l\u2019air','Rythme maîtrisé.','Version lente','Plus rapide');
E('sq','Squats','Jambes','r',12,45,'st','sq','Facile','Quadriceps, fessiers','Ischio-jambiers, tronc','Pieds largeur d\u2019épaules|Assieds-toi vers l\u2019arrière|Genoux dans l\u2019axe des pieds|Remonte en poussant dans les talons','Genoux vers l\u2019intérieur; talons décollés','Poitrine ouverte, dos neutre.','Squat à amplitude réduite','Squat tempo ou avec pause');
E('ft','Fentes avant','Jambes','r',10,45,'st','lg','Moyen','Quadriceps, fessiers','Ischio-jambiers, équilibre','Debout, pieds joints|Grand pas en avant|Descends à 90° aux deux genoux|Pousse pour revenir, alterne','Genou avant qui dépasse trop','Appuie-toi à un mur si besoin d\u2019équilibre.','Fentes arrière','Split squat');
E('ws','Wall sit','Jambes','t',30,30,'ws','ws','Moyen','Quadriceps','Fessiers','Dos au mur|Descends jusqu\u2019à 90° aux genoux|Tiens la position|Remonte lentement','Genoux qui rentrent','Reste à un angle confortable.','Moins profond','Plus long');
E('gb','Glute bridge','Fessiers','r',12,30,'bd','bu','Facile','Fessiers','Ischio-jambiers, lombaires','Dos au sol, pieds près des fesses|Pousse dans les talons|Monte le bassin jusqu\u2019à l\u2019alignement|Serre les fessiers 1 s, redescends','Cambrer le bas du dos','Menton rentré, ventre serré.','Amplitude réduite','Sur une jambe');
E('cf','Montées sur pointes','Mollets','r',15,30,'st','cr','Facile','Mollets','Équilibre','Debout, pieds largeur de hanches|Monte lentement sur la pointe|Pause 1 s|Redescends en contrôlant','Rebondir','Appuie-toi légèrement au mur.','Deux pieds','Une jambe');
E('cb','Cat-cow','Mobilité','t',40,5,'ca','co','Facile','Colonne vertébrale','Abdominaux','À quatre pattes|Expire en arrondissant le dos|Inspire en creusant doucement|Alterne lentement','Forcer l\u2019amplitude','Bouge vertèbre par vertèbre.','Amplitude réduite','Plus lent');
E('et','Étirement des pectoraux','Mobilité','t',30,5,'st','sh','Facile','Pectoraux','Épaules','Debout près d\u2019un mur|Pose l\u2019avant-bras contre le mur|Tourne doucement le buste|30 s de chaque côté','Étirer jusqu\u2019à la douleur','Tension légère uniquement.','Moins d\u2019amplitude','Bras plus haut');
E('is','Étirement des ischio-jambiers','Mobilité','t',30,5,'fw','fw','Facile','Ischio-jambiers','Bas du dos','Debout, jambes presque tendues|Penche-toi vers l\u2019avant|Laisse la tête et les bras pendre|Remonte lentement','Arrondir brusquement le dos','Plie légèrement les genoux.','Genoux pliés','Tiens plus longtemps');
const PROG={1:{t:'Poitrine, épaules, triceps, jambes, abdos',w:['jj','sc'],m:['pp','pi','ps','pk','sq','ft','pl','cc'],c:['et','is']},
2:{t:'Dos, posture, jambes, tronc',w:['jj','sc'],m:['sm','bd','yy','sq','gb','db','pl'],c:['cb','is']},
3:{t:'Jambes, fessiers, mollets, abdos',w:['hk','sc'],m:['sq','ft','gb','cf','ws','cc','db'],c:['cb','is']},
4:{t:'Récupération active : mobilité et posture',w:['sc'],m:['cb','et','is','yy','sm'],c:[]},
5:{t:'Poitrine, épaules, bras, dos, abdos',w:['jj','sc'],m:['pp','pg','pk','ps','yy','sm','cc','pl'],c:['et','is']},
6:{t:'Corps entier, endurance, équilibre',w:['jj','hk'],m:['sq','pp','mc','sp','bd','gb','cf'],c:['cb','is']}};
