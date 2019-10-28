const menu = {
    _courses: {
        appetizers:[],
        mains:[],
        desserts:[]
    },

    get courses(){
        return{
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `The dishName : ${appetizer.name}, ${main.name}, ${dessert.name} and totalPrice : ${totalPrice}`;
    },   

    set appetizers(appetizersIn){
        this._courses['appetizers'].push(appetizersIn);
    },

    set mains(mainsIn){
        this._courses['mains'].push(mainsIn)
    },

    set desserts(dessertsIn){
        this._courese['desserts'].push(dessertsIn);
    },

    get appitizers(){
        return this._courses['appetizers'];
    },

    get mains(){
        return this._courses['mains'];
    },

    get desserts(){
        return this._courses['desserts'];
    }    
}

menu.addDishToCourse('appetizers','tomato salad',10);
menu.addDishToCourse('appetizers','watermelon salad',20);
menu.addDishToCourse('appetizers','basil soup',30);
menu.addDishToCourse('mains','Korean food',10);
menu.addDishToCourse('mains','Vietnamese food',20);
menu.addDishToCourse('mains','Thai food',30);
menu.addDishToCourse('desserts','Ice cream',10);
menu.addDishToCourse('desserts','Energy Drink',20);
menu.addDishToCourse('desserts','Coke Zero',30);

let meal = menu.generateRandomMeal();
console.log(meal);

