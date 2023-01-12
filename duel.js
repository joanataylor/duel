class Card{
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
}
class Unit extends Card{
  constructor(name, cost, power, res){
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target){
    target.res -= this.power;
    console.log(`${this.name} attacks ${target.name}, ${target.name}'s resilience is reduced by ${this.power}.`)
    if(target.res <= 0){
        console.log(`${target.name} has died`);
    }
    return this;
}
}
class Effect extends Card{
  constructor(name, cost, text, stat, magnitude){
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if( target instanceof Unit ) {
        console.log(`${this.name} was used on ${target.name}, and ${target.name}'s ${this.stat} ${this.text} ${this.magnitude}.`);
        this.stat === "power" ? target.power += this.magnitude : target.res+= this.magnitude;
        console.log('Red Belt Ninja power is now',redBeltNinja.power)
        console.log('Red Belt Ninja resilience is now',redBeltNinja.res)
        console.log('Black Belt Ninja power is now',blackBeltNinja.power)
        console.log('Black Belt Ninja resilience is now',blackBeltNinja.res)
    return target;
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
}

const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);

const hardAlgorithm = new Effect("Hard Algorithm",2,"increased target resilience by", "resilience", +3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"reduced target resilience by", "resilience", -2)
const pairProgramming = new Effect("Pair Programming",3,"increased target power by", "power", +2)

redBeltNinja.attack(blackBeltNinja);
hardAlgorithm.play(redBeltNinja);
blackBeltNinja.attack(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);