// class KedricksGame {

//     constructor(renderingType) {
//         renderType = renderingType;
//         this.setPlayers();
//     }

//     ufos = 6;

//     attack = 'Attack';

//     retreat = 'Retreat';

//     setSchwarz() {
//         this.schwarz = new Schwarz(20, 0.7, 5);
//     }

//     setInvaders() {
//         this.invaders = [];
//         for (let i = 0; i < this.ufos; i++) {
//             let fire = Math.round((Math.random() * (4 - 2)) + 2);
//             let hull = Math.round((Math.random() * (6 - 3)) + 3);
//             let accuracy = ((Math.random() * (.8 - .6)) + .6).toFixed(1);
//             let playerNameSuffix = i + 1;
//             let invaders = new Invaders(hull, accuracy, fire, playerNameSuffix);
//             this.invaders.push(invaders);
//         }
//     }

//     setPlayers() {
//         this.setSchwarz();
//         this.setInvaders();
//     }

//     attack(uss, enemy) {
//         let hitsTaken = 0;
//         let enemyNeutralized;
//         let randomChance = Math.random();
//         if (randomChance <= uss.accuracy) {
//             hitsTaken = uss.firePower;
//             print("Damage done by " + uss.playerName + " to " + enemy.playerName + " : " + hitsTaken);
//             enemyNeutralized = this.harmDone(enemy, hitsTaken);
//         } else {
//             print("Failed attack by " + uss.playerName);
//         }

//         let retaliation = new Retaliation(hitsTaken, enemyNeutralized);
//         return retaliation;
//     }

//     harmDone(enemy, hitsTaken) {
//         let enemyNeutralized = false;
//         if (hitsTaken != 0) {
//             let damagedHull = enemy.hull;
//             enemy.hull = damagedHull - hitsTaken;
//             if (enemy.hull <= 0) {
//                 print(enemy.playerName + " with hull " + damagedHull + " has been destroyed with damage " + hitsTaken);
//                 enemyNeutralized = true;
//             } else {
//                 print("Hull of " + enemy.playerName + " has been reduced from " + damagedHull + " to " + enemy.hull);
//             }
//         }
//         return enemyNeutralized;
//     }

//     playerInput() {
//         let a = this.attack.charAt(0);
//         let r = this.retreat.charAt(0);
//         let question = 'Choose "' + a + '" for ' + this.attack + ' & "' + r + '" for ' + this.retreat + ' : ';
//         let response = "";
//         while (response != a && response != r) {
//             response = userInput(question).toUpperCase();
//         }
//         return (response == a ? this.action : this.retreat);
//     }

//     printGame() {
//         print("You're the USS Schwarz vs " + this.ufos + " enemy invaders");
//     }

//     locateAlien() {
//         let enemy;
//         for (let i = 0; i < this.ufos; i++) {

//             if (this.invaders[i].hull > 0) {
//                 enemy = this.invaders[i];
//                 break;
//             }
//         }
//         return enemy;
//     }






//     play() {
//         this.printGame();
//         print("Schwarzenegger stats : " + this.schwarz.stats());

//         let gameDone = false;
//         let uss = this.schwarz;
//         let enemy = this.locateAlien();
//         while (!gameDone) {

//             let ussSchwarz = (uss instanceof Schwarz);

//             if (ussSchwarz) {

//                 print("USS Schwarz' turn vs Invaders with - " + enemy.stats());

//                 let action = this.playerInput();
//                 print("User chooses to " + action);

//                 if (action == this.attack) {
//                     let retaliation = this.attack(uss, enemy);

//                     uss = this.locateAlien();
//                     if (!uss) {
//                         print(`Schwarzenegger comes out on top! shield left: ${this.schwarz.hull}`);
//                         gameDone = true;
//                     }
//                     enemy = this.schwarz;

//                 }
//                 else if (action == this.retreat) {
//                     this.schwarz.retreat();
//                     gameDone = true;
//                 }
//             } else {
//             print("It's " + uss.playerName + "'s turn ");
//             let retaliation = this.attack(uss, enemy);
//              if (retaliation.enemyNeutralized) {
//                 print(`User has been defeated`);
//                     gameDOne = true;
//                 }

//                 enemy = uss;
//                 uss = this.schwarz;
//             }
//         } print("Game Over")
//     }}