class Food {
    constructor(name = "Unknown", color = "Unknown") {
        this.name = name
        this.color = color
    }

    cook() {
        console.log(`${this.name} is being grilled`)
    }
}

const grillFood = new Food("Steak", "Brown")
console.log(grillFood)

grillFood.cook()

// =============================================== extends (inheritence)

class FavoriteFood extends Food {
    constructor({ name, color, price, origin, ingredients }) {
        super(name, color)
        this.price = price
        this.origin = origin
        this.ingredients = ingredients
    }

    getPrice() {
        const formattedPrice = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(this.price)

        return formattedPrice
    }

    getOrigin() {
        return this.origin
    }
}

// ============================== new Object from inheritence

const myFavoriteFood = new FavoriteFood({
    name: "Satay Taichan",
    color: "Light Brown",
    price: 30000,
    origin: "Indonesia",
    ingredients: ["Chicken", "Chili Sauce", "Soy Sauce"]
})

console.log(myFavoriteFood)
console.log(myFavoriteFood.name)
console.log(myFavoriteFood.getOrigin())
console.log(myFavoriteFood.ingredients)
console.log(myFavoriteFood.getPrice())