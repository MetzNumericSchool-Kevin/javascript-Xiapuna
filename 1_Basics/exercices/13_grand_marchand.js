// Recherche dans l'inventaire

// Inventaire de la boutique
let healing_potion_stock = 10
let healing_potion_price = 50

let polyjuice_potion_stock = 5
let polyjuice_potion_price = 30

let shrinking_potion_stock = 0
let shrinking_potion_price = 40

let amortentia_potion_stock = 100
let amortentia_potion_price = 20

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

const inventory = [healing_potion_info, polyjuice_potion_info, shrinking_potion_info, amortentia_potion_info]

let highest_potion_price = 0
let highest_potion_price_name = ""

for (potion in inventory) {
  if (inventory[potion]["price"] > highest_potion_price) {
    highest_potion_price = inventory[potion]["price"]
    highest_potion_price_name = inventory[potion]["name"]
  }
}
console.log(`${highest_potion_price_name} : ${highest_potion_price}`)

let highest_potion_stock = 0
let highest_potion_stock_name = ""

for (potion in inventory) {
  if (inventory[potion]["stock"] > highest_potion_stock) {
    highest_potion_stock = inventory[potion]["stock"]
    highest_potion_stock_name = inventory[potion]["name"]
  }
}
console.log(`${highest_potion_stock_name} : ${highest_potion_stock}`)

let stock = 0

for (potion in inventory) {
  if (inventory[potion]["stock"] > 0) {
    stock += 1
  }
}
console.log(`${stock}`)