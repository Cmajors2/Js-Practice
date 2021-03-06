
const menu = {
 
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
 
    get courses() {
        return _courses;
    },
 
    addDishToCourse(courseName, dishName, dishPrice) {
        
        const dish = {
            name: dishName,
            price: dishPrice,
        };
 
        return this._courses[courseName].push(dish);
 
    },
 
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
 
    get appetizers() {
        return this._courses.appetizers;
 
    },
 
    set mains(mains) {
        this._courses.mains = mains;
    },
 
    get mains() {
        return this._courses.mains
    },
 
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
 
    get desserts() {
        return this._courses.desserts;
    },
 
    getRandomDishFromCourse(courseName) {
 
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
 
    generateRandomMeal() {
 
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.generateRandomMeal('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}`;
    }
    
};
 

menu.addDishToCourse('appetizers', 'salad', 5.00);
menu.addDishToCourse('appetizers', 'soup', 5.50);
menu.addDishToCourse('appetizers', 'nachos', 6.00);
menu.addDishToCourse('appetizers', 'brussels', 4.50);

 
menu.addDishToCourse('mains', 'salmon', 10.00);
menu.addDishToCourse('mains', 'wings', 11.50);
menu.addDishToCourse('mains', 'Chicken', 9.50);
menu.addDishToCourse('mains', 'steak', 20.50);
 
menu.addDishToCourse('desserts', 'Milkshake', 4.00);
menu.addDishToCourse('desserts', 'Pie', 3.50);
menu.addDishToCourse('desserts', 'Cake', 4.50);
menu.addDishToCourse('desserts', 'Ice Cream', 2.50);
 
const meal = menu.generateRandomMeal();
 
console.log(meal);