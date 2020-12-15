
const menu = {
    _courses: {
        appetizers: [],
        mains:[],
        desserts: []
    },

    set appetizers(appetizers){
        this._courses.appetizers = appetizers;
    },

    set mains(mains){
        this._courses.mains = mains;
    },

    set desserts(desserts){
        this._courses.desserts = desserts;
    },

    get appetizers() {
        return this._courses.appetizers;
    },

    get mains() {
        return this._courses.mains;
    },

    get desserts() {
        return this._courses.desserts;
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };

    },

    addDishToCourse(courseName, dishName, dishPrice) {
        
        const dish = {
            name: dishName,
            price: dishPrice
        }

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, ... The price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'Soup', 4.50);
menu.addDishToCourse('appetizers', 'Salad', 3.50);

menu.addDishToCourse('mains', 'steak', 12.50);
menu.addDishToCourse('mains', 'chicken', 10.50);

menu.addDishToCourse('desserts', 'ice cream', 4.00);
menu.addDishToCourse('desserts', 'cake', 4.50);


console.log(menu.generateRandomMeal());

console.log(menu);