const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  indexOfPotion(name) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === name) {
        return i;
      }
    }
    return -1;
  },

  addPotion(newPotion) {
    if (this.indexOfPotion(newPotion.name) !== -1) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const potionIndex = this.indexOfPotion(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.indexOfPotion(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    const newPotion = { name: newName, price: this.potions[potionIndex].price };

    this.potions.splice(potionIndex, 1, newPotion);
  },

  // Change code above this line
};

console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
console.log(atTheOldToad.getPotions());
console.log(
  'atTheOldToad(second)=' +
    atTheOldToad.addPotion({ name: 'Power potion', price: 270 })
);
