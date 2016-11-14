window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: 'Dinghy',
        thumb: 'ship_0001_c.png',
        description: 'Multiplica el HP x1.3, incrementa el RCV del capitán en 120 unidades',
        hp: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ][p.boatLevel - 1];
        }
    },

    { // 1
        name: 'Merry Go',
        thumb: 'ship_0002_c.png',
        description: 'Multiplica el ATK x1.5, incrementa el HP del capitán en 300 unidades',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 100, 130, 150, 170, 190, 210, 230, 250, 270, 300 ][p.boatLevel - 1];
        },
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 2
        name: 'Navy Ship',
        thumb: 'ship_0003_c.png',
        description: 'Multiplica el HP x1.5, incrementa el ATK de los personajes Shooter en 100 unidades',
        atkStatic: function(p) {
            return !p.unit.class.has('Shooter') ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 3
        name: 'Baratie',
        thumb: 'ship_0004_c.png',
        description: 'Incrementa el HP del capitán en 2000 unidades',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: 'Coffin Boat',
        thumb: 'ship_0005_c.png',
        description: 'Multiplica el ATK y el HP de los personajes Slasher x1.5, reduce el RCV del capitán en 700 unidades',
        atk: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    { // 5
        name: 'Miss Love Duck',
        thumb: 'ship_0006_c.png',
        description: 'Reduce el daño recibido en un 10%, incrementa el ATK de los personajes Striker en 100 unidades',
        atkStatic: function(p) {
            return !p.unit.class.has('Striker') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 100 ][p.boatLevel -1];
        }
    },

    { // 6
        name: 'Merry Go Flying',
        thumb: 'ship_0007_c.png',
        description: 'Multiplica el ATK x1.2, regenera 350 HP al final de cada turno',
        atk: function(p) {
            return p.boatLevel < 7 ? 1 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        },
        heal: function(p) {
            return [ 50, 100, 125, 150, 175, 200, 250, 275, 300, 350 ][p.boatLevel - 1];
        }
    },

    { // 7
        name: 'Moby Dick',
        thumb: 'ship_0008_c1.png',
        description: 'Multiplica el ATK x1.5, multiplica el HP x1.4, reduce el HP en un 50% al inicio de la batalla',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 8
        name: 'Big Top',
        thumb: 'ship_0009_c1.png',
        description: 'Multiplica el ATK de los personajes con un coste de 20 o inferior x1.5, multiplica el HP de los personajes con 4 estrellas o menos x1.4',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    },

    { // 9
        name: 'Bezan Black',
        thumb: 'ship_0010_c1.png',
        description: 'Reduce la carga de todos los especiales en 1 turno, multiplica el ATK de los personajes QCK x1.4 y su HP x1.3',
        atk: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: 'Aokiji\'s Bike',
        thumb: 'ship_0011_c1.png',
        description: 'Multiplica el ATK y el HP de los personajes Striker x1.5, reduce altamente la aparición de orbes RCV',
        atk: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    { // 11
        name: 'Ace\'s Striker',
        thumb: 'ship_0012_c1.png',
        description: 'Multiplica el ATK de los personajes Shooter x1.5 y su HP x1.3, reduce la carga de todos los especiales en 1 turno',
        atk: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1.2, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 12
        name: 'Dreadnaught Sabre',
        thumb: 'ship_0014_c1.png',
        description: 'Multiplica el HP x1.5, hace 5000 en daño sin tipo al final de cada turno',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: 'Thousand Sunny',
        thumb: 'ship_0013_c.png',
        description: 'Multiplica el ATK x1.5. Especial: hace 50000 en daño sin tipo a todos los enemigos (carga: 15 turnos).',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: 'Kuja Pirate Ship',
        thumb: 'ship_0015_c1.png',
        description: 'Multiplica el ATK de los personajes Free Spirit x1.5 y su HP x1.35, reduce el HP de cualquier otro personaje en un 99%. Especial: Cura 6500 HP (carga: 15 turnos).',
        atk: function(p) {
            return !p.unit.class.has('Free Spirit') ? 1 :
            [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Free Spirit') ? 0.01 :
                [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { //15
        name: 'Ark Maxim',
        thumb: 'ship_0016_c1.png',
        description: 'Multiplica el ATK de los personajes QCK y PSY x1.5 y su HP x1.2. Especial: Hace 56560 en daño fijo a todos los enemigos (carga: 17 Turnos)',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: 'Red Force',
        thumb: 'ship_0017_c1.png',
        description: 'Multiplica el ATK de los personajes Cerebral x1.5 y su HP x1.35, incrementa la posibilidad de conseguir orbe beneficioso en los personajes Cerebral.',
        atk: function(p) {
            return  !p.unit.class.has('Cerebral') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Cerebral') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: '2nd Anniversary Thousand Sunny',
        thumb: 'ship_0018_c1.png',
        description: 'Multiplica el ATK x1.2.',
        atk: function(p) { return 1.2; },
    }, 
    
    { // 18
        name: 'Sun Pirates Ship',
        thumb: 'ship_0019_c.png',
        description: 'Multiplica el ATK y el HP de los personajes Fighter dependiendo del número de personajes Fighter en el equipo. Reduce enormemente el ATK y el HP de los personajes No-Fighter.',
        atk: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        }
    },
    
    { // 19
        name: "Doflamingo Ship",
        thumb: null,
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes Perfects easier to Hit for Driven characters. Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 20
        name: 'The Rocket Man',
        thumb: null,
        description: 'Multiplica el ATK de los personajes Powerhouse x1.55, cura al final de cada turno una cantidad variable que depende del número de personajes Powerhouse en el equipo. (Al MÁXIMO, cura 900 por turno con 9 personajes Powerhouse) Reduce enormemente el HP de los personajes No-Powerhouse. Especial: Deals 99999 en daño sin tipo a una unidad.  (carga: 17 Turnos)',
        atk: function(p) {
            return !p.unit.class.has('Powerhouse') ? 1 : [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class.has('Powerhouse') ? 1 : 0.01;
        },
        heal: function(p) {
            return p.classCount.Powerhouse == 1 ? 1 : p.classCount.Powerhouse == 2 ? 10 : p.classCount.Powerhouse == 3 ? 20 : p.classCount.Powerhouse == 4 ? 30 : p.classCount.Powerhouse == 5 ? 100 : p.classCount.Powerhouse == 6 ? 900 : 0;  
        },
        
    },
    
    { // 21
        name: 'Burning Whitebeard Ship',
        thumb: null,
        description: 'Multiplica el HP x1.3',
        hp: function(p) {
            return 1.3;
        },
    },
    
    { // 22
        name: 'Garp Ship',
        thumb: null,
        description: 'Multiplica el ATK de los personajes [STR] y [PSY] x1.5, y su HP x1.25',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //23
        name: 'Polar Tang',
        thumb: null,
        description: 'Boosts ATK of Slashers and Free Spirit characters by 1.5x and their HP by 1.25x. Special: Heals for 10k when low HP (cooldown MAX: 18 turns)',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1];
        },
    },

];
