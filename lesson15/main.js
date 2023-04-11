// super

class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage) {
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.applyDamage(this.damage)
  }
}

class RangedHero extends Hero { //subclass
  constructor(name, hp, damage, range) {
    super(name, hp, damage);
    this.range = range;
  }

  attack(enemy) {
    super.attack(enemy);
    this.hp += this.damage;
  }
}

const heroA = new RangedHero('A', 200, 20);
const heroB = new Hero('B', 400, 10);
console.log({heroA,heroB});
heroA.attack(heroB);
console.log({heroA,heroB});