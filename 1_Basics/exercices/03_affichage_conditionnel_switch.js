// Affichage conditionnel avec switch

// Variables des exercices précédents (modifie selon tes valeurs)
const shop_name = "Leaky Cauldron"
const wizard_name = "Severus"
let healing_potion_stock = 10
let healing_potion_price = 50

let ask = parseInt(prompt(` Welcome to my humble shop Adventurer. Wha do you want to know ?
    1. Shop's name
    2. Wizard's name
    3. Healing potion's price
    4. Healing potion's stock`))


switch (ask) {
    case 1 :
        console.log(`Shop's name : ${shop_name}`)
        break
    case 2 :
        console.log(`Wizard's name : Severus`)
        break
    case 3 :
        console.log(`Healing potion's price : ${healing_potion_price} 🪙`)
        break
    case 4 :
        console.log(`Healing potion's stock : ${healing_potion_stock}`)
        break
    default :
        console.log(`Mh... Sorry Adventurer, I don't understand what you want. Make your choice again !`)
}