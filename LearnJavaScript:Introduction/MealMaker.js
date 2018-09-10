const menu = {
    _courses: {
        _appetizers: [],
        get appetizers() {
            return this._appetizers
        },
        set ['appetizers'](appetizer) {
            this._appetizers.push(appetizer);
            return this._appetizers
        },
        _mains: [],
        get mains() {
            return this._mains
        },
        set ['mains'](main) {
            this._mains.push(main);
            return this._mains
        },
        _desserts: [],
        get desserts() {
            return this._desserts
        },
        set ['desserts'](dessert) {
            this._desserts.push(dessert);
            return this._desserts
        }
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    addDishToCourse(courseName,dishName,dishPrice) {
        let dish = {name: dishName, price: dishPrice};
        return this._courses[courseName] = dish
    },
    getRandomDishFromCourse() {
        let allDishes = [];
        for (let key in this._courses.appetizers) {
            allDishes.push(this._courses.appetizers[key])
        }
        for (let key in this._courses.mains) {
            allDishes.push(this._courses.mains[key])
        }
        for (let key in this._courses.desserts) {
            allDishes.push(this._courses.desserts[key])
        }
        return allDishes[Math.floor(Math.random() * allDishes.length )]
    },
    getRandomMealFromCourse() {

        let appetizer = this._courses._appetizers[Math.floor(Math.random() * this._courses._appetizers.length)];
        let main = this._courses._mains[Math.floor(Math.random() * this._courses._mains.length)];
        let dessert = this._courses._desserts[Math.floor(Math.random() * this._courses._desserts.length)];
        let totalPrice = appetizer['price'] + main['price'] + dessert['price'];
        return ` Your meal will be: ${appetizer['name']}, ${main['name']}, ${dessert['name']} and the total is $${totalPrice}.`;
    },
};

menu.addDishToCourse('appetizers', 'wings', 5);
menu.addDishToCourse('appetizers', 'salad', 4);
menu.addDishToCourse('mains', 'steak', 15);
menu.addDishToCourse('mains', 'chicken', 10);
menu.addDishToCourse('desserts', 'jello', 3);
menu.addDishToCourse('desserts', 'ice cream', 2);

menu.getRandomDishFromCourse();

let meal = menu.getRandomMealFromCourse();

console.log(meal);
