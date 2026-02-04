// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let healing_potion_stock = 10
let healing_potion_price = 50
let purse_money_adventurer = 1500
let healing_potion_quantity = parseInt(prompt(`How many healing potion do you want, Adventurer ?`))
let healing_potion_total_price = console.log(`${healing_potion_quantity} Healing potions : ${healing_potion_price * healing_potion_quantity} 🪙. Adventurer.`)



if ((purse_money_adventurer >= healing_potion_total_price) && (healing_potion_quantity <= healing_potion_stock)) {
    console.log(`${healing_potion_quantity} Healing potions for you, Adventurer !`)
    purse_money_adventurer = purse_money_adventurer - healing_potion_total_price
} else if (purse_money_adventurer < healing_potion_total_price) {
    console.log(`You don't have enough money, Adventurer !`)
} else if (healing_potion_quantity > healing_potion_stock) {
    console.log(`There are only ${healing_potion_stock} in stock, Adventurer !`)
}
