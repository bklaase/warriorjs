class Player {

  // constructor
  constructor()  {
    this.health = 20;
    this.resting = false;
  }


  playTurn(warrior) {        
    const feelings = warrior.feel();     
    const health = warrior.health();
    const enemy = feelings && feelings.getUnit() && feelings.getUnit().isEnemy();
    const hurtInPreviousTurn = (health < this.health);
    const criticallyInjured = health < 15;

    this.health = warrior.health();
    
    if(enemy)
      warrior.attack();
     else if(hurtInPreviousTurn) // taking dmg from range, charge!
       warrior.walk('forward');
     else if(criticallyInjured) //injured, but no incomming dmg, rest until sufficient health
       warrior.rest();
    else //nothing ... so just advance!
      warrior.walk();
  }
}

