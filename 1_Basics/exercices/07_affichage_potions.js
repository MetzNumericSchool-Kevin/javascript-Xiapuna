// Affichage des potions

// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions_list = ["Healing potion", "Polyjuice Potion", "Shrinking Potion"]

console.log(potions_list[0])
console.log(potions_list[potions_list.length - 1])

for (potion in potions_list) {
    console.log(`We have ${potions_list[potion]}`)
}