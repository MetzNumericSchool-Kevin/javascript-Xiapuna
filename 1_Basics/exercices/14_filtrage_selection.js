// Filtrage et sélection

// Inventaire de la boutique
let healing_potion_stock = 10
let healing_potion_price = 50

let polyjuice_potion_stock = 5
let polyjuice_potion_price = 30

let shrinking_potion_stock = 0
let shrinking_potion_price = 40

let amortentia_potion_stock = 3
let amortentia_potion_price = 60

let felixfelicis_potion_stock = 8
let felixfelicis_potion_price = 35

const healing_potion_info = {
  "name" : "Healing potion",
  "price" : healing_potion_price,
  "stock" : healing_potion_stock
}

const polyjuice_potion_info = {
  "name" : "Polyjuice potion",
  "price" : polyjuice_potion_price,
  "stock" : polyjuice_potion_stock
}

const shrinking_potion_info = {
  "name" : "Shrinking potion",
  "price" : shrinking_potion_price,
  "stock" : shrinking_potion_stock
}

const amortentia_potion_info = {
  "name" : "Amortentia potion",
  "price" : amortentia_potion_price,
  "stock" : amortentia_potion_stock
}

const felixfelicis_potion_info = {
  "name" : "Felix Felicis potion",
  "price" : felixfelicis_potion_price,
  "stock" : felixfelicis_potion_stock
}

const inventory = [healing_potion_info, polyjuice_potion_info, shrinking_potion_info, amortentia_potion_info]

let potions_in_stock = []

for (potion in inventory) {
  if (inventory[potion]["stock"] > 0) {
    potions_in_stock.push(inventory[potion])
  }
}

console.log(potions_in_stock)
console.log(potions_in_stock.length)

let cheap_potions = []

for (potion in inventory) {
  if (inventory[potion]["price"] < 40) {
    cheap_potions.push(inventory[potion])
  }
}

console.log(cheap_potions)
console.log(cheap_potions.length)