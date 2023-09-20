output ="";
class Player {
constructor(_name,_power,_health){
    this.name   = _name,
    this.power  = 10,
    this.health = 100
    }
    hit(power) {
        this.health -= power; 
      }
      useItem(item) {
        if (item.health > 0) {
          this.health += item.health;
        } else if (item.power > 0) {
          this.power += item.power;   
        }
      }

      showStatus() {
        console.log(`${this.name} (Jumlah Health => ${this.health},Jumlah Power => ${this.power})`);
      }
   

}
class ShootingGame {
    constructor(player1, player2) {
      this.players = [player1, player2]; 
    }
  
    getRandomItem() {
      return {
        health: Math.random() < 0.5 ? 10 : 0,
        power: Math.random() < 0.5 ? 10 : 0,  
        //health: Math.floor(Math.random() *10),
        //power: Math.floor(Math.random() * 10),
      };
    }
  
    start() {
      const [player1, player2] = this.players;
      const kosong = ""; 
  
      while (player1.health > 0 && player2.health > 0) {
        //console.log(`${player1.name}'s Turn:`);
        output +=(`${player1.name}'s Turn:`);
        player1.showStatus();
  
        //console.log(`${player2.name}'s Turn:`);
        output+=(`${player2.name}'s Turn:`);
        player2.showStatus();
  
        
        const player1Item = this.getRandomItem();
        const player2Item = this.getRandomItem();
        player1.useItem(player1Item);
        player2.useItem(player2Item);
  

        player1.showStatus();
        player2.showStatus();
  

        player1.hit(player2.power);
        player2.hit(player1.power);
      }
  
    
      if (player1.health > 0) {
        console.log(`${player1.name} wins!`);
      } else {
        console.log(`${player2.name} wins!`);
      }
    }
  }

  const player1 = new Player("KUCING");
  const player2 = new Player("TIKUS");   
  const shootingGame = new ShootingGame(player1, player2); 
  shootingGame.start();
    