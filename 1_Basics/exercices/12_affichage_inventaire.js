// Aventurier, regarde tout ce que je vends !
let healing_potion_stock = 10
let healing_potion_price = 50

let polyjuice_potion_stock = 4
let polyjuice_potion_price = 150

let shrinking_potion_stock = 35
let shrinking_potion_price = 75

const healing_potion_info = {
    "name" : "Healing potion",
    "price" : healing_potion_price,
    "stock" : healing_potion_stock
}

const polyjuice_potion_info = {
    "name" : "Healing potion",
    "price" : polyjuice_potion_price,
    "stock" : polyjuice_potion_stock
}

const shrinking_potion_info = {
    "name" : "Healing potion",
    "price" : shrinking_potion_price,
    "stock" : shrinking_potion_stock
}

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventory = [healing_potion_info, polyjuice_potion_info, shrinking_potion_info];

for (potion in inventory) {
    console.log(`Name : ${inventory[potion]["name"]}
Price : ${inventory[potion]["price"]}
Stock : ${inventory[potion]["stock"]}`)
}

for (potion in inventory) {
    for (const [key, value] of Object.entries(inventory[potion])) {
        console.log(`${key} : ${value}`)
    }
}