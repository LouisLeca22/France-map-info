const data = [
    {
        id: "FR-GES",
        title: "Grand Est",
        desc: "Le Grand Est1 est une région administrative française résultant de la fusion des anciennes régions Alsace, Champagne-ArdenneNote 2 et Lorraine. Elle compte 5 550 389 habitants2 en 2020 et réunit, sur 57 441 km2, des territoires de l'Europe rhénane (l'Alsace, la Meurthe-et-Moselle, la Moselle et l'Est des Vosges) à l'est et des territoires du bassin parisien (les Ardennes et la Marne) à l'ouest, séparés par la diagonale du vide (qui inclut majoritairement des territoires de la Haute-Marne, de l'Aube et de la Meuse). "
    },

    {
        id: "FR-NAQ",
        title: "Nouvelle-Aquitaine",
        desc:"La Nouvelle-Aquitaine est une région administrative française, créée par la réforme territoriale de 2015 et effective au 1er janvier 2016, après les élections régionales de décembre 2015, Résultant de la fusion des anciennes régions Aquitaine, Limousin et Poitou-Charentes, elle a été dénommée à ses débuts Aquitaine-Limousin-Poitou-Charentes. Elle regroupe douze départements, s’étend sur 84 036 km2 (soit un huitième du territoire national) et compte 5 911 482 habitants (population municipale au 1er janvier 2015)3. "
    },
    {
        id: "FR-ARA",
        title: "Auvergne-Rhône-Alpes",
        desc:"Auvergne-Rhône-Alpes est une région administrative française située dans le quart-sud-est de la France. Elle a été créée par la réforme territoriale de 2015 et mise en place après les élections régionales de décembre 2015. Regroupant les anciennes régions Auvergne et Rhône-Alpes, elle se compose de 12 départements et d'une métropole à statut de collectivité territoriale, sa superficie est de 69 711 km2 et sa population s'élevait à 7 877 698 habitants8 en 2015 ; son chef-lieu est Lyon. "
    },
    {
        id: "FR-BFC",
        title: "Bourgogne-Franche-Comté",
        desc:"La Bourgogne-Franche-Comté (parfois abrégée BFC) est une région administrative située dans le Centre-Est de la France. Elle est issue de la fusion administrative, le 1er janvier 2016, des deux anciennes régions de Bourgogne et de Franche-Comté. D'une superficie de 47 784 km2, elle est la cinquième plus vaste des treize régions de France métropolitaine et rassemble huit départements : la Côte-d'Or, le Doubs, la Haute-Saône, le Jura, la Nièvre, la Saône-et-Loire, le Territoire de Belfort et l'Yonne. "
    },
    {
        id: "FR-BRE",
        title:"Bretagne",
        desc: "La Bretagne ; en breton : Breizh /brɛjs/2 ; en gallo : Bertègn) est une entité géographique et culturelle, et une des nations dites celtiques. Elle occupe une péninsule, à l'extrémité ouest de la France, située entre la Manche au nord, la mer Celtique et la mer d'Iroise à l'ouest et le golfe de Gascogne au sud. À la fin de l'Empire romain, elle connaît un afflux de population dû à une immigration 3,4 de Bretons insulaires dans une partie de l'ancienne Armorique, qui vont influencer durablement sa culture. Ceux-ci fondent un royaume5 au IXe siècle, qui devient ensuite un duché6 dépendant du royaume de France. Réunie à la couronne de France en 1532, elle intègre le domaine royal et devient une province française, jusqu'à sa partition administrative en 1790 en cinq départements : Côtes-du-Nord, Finistère, Ille-et-Vilaine, Loire-Inférieure et Morbihan. "
    },
    {
        id: "FR-CVL",
        title:"Centre-Val de Loire",
        desc: "Le Centre-Val de Loire (appelé Centre avant le 17 janvier 20152) est une région administrative du Centre Ouest de la France qui regroupe trois provinces historiques : le Berry, l'Orléanais et la Touraine. L'extrémité sud-est du territoire faisait partie d'une quatrième province : le Bourbonnais. Une partie de la région se situe dans la région naturelle du Val de Loire. Septième région par sa superficie, le Centre-Val de Loire s'étend sur 39 151 km2 et compte 2,58 millions d'habitants au 1er janvier 2014, soit 4 % de la population métropolitaine. Sa densité de population est de 66 hab/km2, soit moitié moindre que celle de la France métropolitaine, ce qui en fait une région peu peuplée. La densité de population est plus forte sur l'axe ligérien où vit la moitié de la population. "
    },
    {
        id: "FR-COR",
        title:"Corse",
        desc:"La Corse (en corse et en italien : Corsica ; en ligure : Còrsega) est une île située en mer Méditerranée et une collectivité territoriale unique française. Quatrième île de la mer Méditerranée par sa superficie, la Corse a été rattachée durant près de quatre siècles à la république de Gênes avant une brève indépendance comme royaume de Corse du 15 avril 1736 au mois de décembre 1740. En 1755, elle adopte la première constitution démocratique de l'histoire moderne et donne pour la première fois en partie le droit de vote aux femmes. Le 15 mai 1768, elle est cédée par la République de Gênes à la France, bien que Gênes n'ait qu'une emprise limitée sur l'île depuis la déclaration d'indépendance de la République corse en 1755. Elle est conquise militairement par le Royaume de France lors de la bataille de Ponte-Novo, le 9 mai 1769. "
    },
    {
        id: "FR-IDF",
        title: "Île-de-France",
        desc: "L'Île-de-France (/il də fʁɑ̃s/N 1) est une région historique et administrative française. Il s'agit d'une région très fortement peuplée, qui représente à elle seule 18,8 % de la population de la France métropolitaine sur seulement 2,2 % de sa superficie, ce qui en fait la région la plus peuplée (12,12 millions d'habitants en 2016) et la plus densément peuplée (1 006 hab/km2) de France. Ses habitants sont appelés les Franciliens. Parfois désignée par son ancien nom de « région parisienne », elle est fortement centralisée sur l'agglomération parisienne, qui s'étend sur 23,7 % de la surface régionale, mais où habite 88,6 % de sa population. L'aire urbaine de Paris (qui correspond à la notion de bassin d'emploi) recouvre, quant à elle, la quasi-totalité de la superficie francilienne et des portions de régions limitrophes"
    },
    {
        id: "FR-OCC",
        title: "Occitanie",
        desc: "L'Occitanie (en occitan : Occitània /utsiˈtanjɔ/, en catalan : Occitània /uksiˈtaniə/) est une région administrative du Sud-Ouest et Sud-est de la France résultant de la fusion des anciennes régions Languedoc-Roussillon et Midi-Pyrénées. Créée par la réforme territoriale de 2014, elle comporte 13 départements. Son chef-lieu est Toulouse.Elle s'étend sur 72 724 km2 ce qui en fait la troisième plus vaste région de France derrière la Nouvelle-Aquitaine et la Guyane, ainsi que la deuxième de France métropolitaine1. Elle compte 5 808 435 habitants (population municipale au 1er janvier 20162) et constitue ainsi la cinquième région française (et métropolitaine) la plus peuplée."
    },{
        id: "FR-HDF",
        title: "Hauts-de-France",
        desc: "Les Hauts-de-France sont une région administrative du nord de la France, créée par la réforme territoriale de 2014. Résultat de la fusion du Nord-Pas-de-Calais et de la Picardie (elles-mêmes créées en 1972), elle s'est d'abord appelée provisoirement « Nord-Pas-de-Calais-Picardie ».Elle s'étend sur 31 806 km2 et compte cinq départements : l'Aisne, le Nord, l'Oise, le Pas-de-Calais et la Somme. Elle est présidée par Xavier Bertrand depuis le 4 janvier 2016 et son chef-lieu est Lille, principale ville de la région et auparavant déjà chef-lieu du Nord-Pas-de-Calais. Amiens, chef-lieu de l'ancienne Picardie, est la deuxième ville de la région. "
    },
    {
        id: "FR-NOR",
        title: "Normandie",
        desc: "La Normandie (en normand : Normaundie, en anglais : NormandyNote 1) est une entité géographique et culturelle, située dans le Nord-Ouest de la France et bordée par la Manche ; elle a traversé différentes époques historiques, malgré une absence de reconnaissance administrative entre la Révolution française de 1789 et la réforme territoriale de 2015. Les frontières continentales historiques de la province de l'Ancien Régime épousent assez fidèlement celles de la région administrative contemporaine. "
    },
    {
        id: "FR-PDL",
        title: "Pays-de-Loire",
        desc: "Les Pays de la Loire sont une région du Grand Ouest français regroupant les départements de la Loire-Atlantique, de Maine-et-Loire, de la Mayenne, de la Sarthe et de la Vendée.La préfecture de région est Nantes, qui est aussi la ville la plus peuplée.Bordée à l’ouest par le golfe de Gascogne (océan Atlantique), elle est délimitée au nord par les régions Bretagne et Normandie, à l’est par le Centre-Val de Loire avec qui elle partage la région naturelle du Val de Loire et au sud par la Nouvelle-Aquitaine. La région doit son nom au principal fleuve qui la traverse : la Loire. "
    },
    {
        id: "FR-PAC",
        title: "Provence-Alpes Côte d'Azur",
        desc: "Provence-Alpes-Côte d'Azur2,3 (prononcé /pʁɔ.vɑ̃.s‿alp(ə) kot d‿a.zyʁ/ en français standard) est une région administrative du Sud-Est de la France. Son chef-lieu est Marseille, deuxième ville la plus peuplée de France.Provence-Alpes-Côte d'Azur est formée de six départements issus des anciennes provinces de Provence, du Comté de Nice, du Comtat Venaissin et d'une partie du Dauphiné : les Alpes-de-Haute-Provence, les Hautes-Alpes, les Alpes-Maritimes, les Bouches-du-Rhône, le Var et le Vaucluse. Elle est créée sous le nom de Provence-Côte d'Azur-Corse en 1960. Elle devient Provence-Côte d'Azur à la suite de la constitution de la région Corse en 1970 puis est rebaptisée Provence-Alpes-Côte d'Azur en 19764. "
    }

]

module.exports = data