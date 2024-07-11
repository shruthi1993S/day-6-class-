 //https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


 class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(this.rating===undefined)
            {this.rating="PG"}
    }

    display() {
        console.log(`${this.title}, ${this.studio}, ${this.rating}`);
    }

    movieObject() {
        return {
            title: this.title,
            studio: this.studio,
            rating: this.rating
        };
    }

    static getPG(arr) {
        let data = arr.filter(film => film.rating === "PG");
        return data;
    }
}

// Creating movie instances
let Movie1 = new Movie("Inception","Legendary Entertainment");
let Movie2 = new Movie("Avatar", "Lightstorm Entertainment", "PG-13");
let Movie3 = new Movie("The Avengers", "Marvel Studios", "PG-13");
let Movie4 = new Movie("Interstellar","Paramount Pictures" );
let film = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Displaying details of individual movies
Movie1.display();
Movie2.display();
film.display();

// Creating an array of movie objects
let arr = [];
arr.push(Movie1.movieObject());
arr.push(Movie2.movieObject());
arr.push(Movie3.movieObject());
arr.push(Movie4.movieObject());

// Getting all PG movies from the array
let pgMovies = Movie.getPG(arr);
console.log(pgMovies.map(movie => movie.title));


// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class Circle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }

    setColor(color) {
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    getRadius() {
        return this.radius;
    }

    getArea() {
        let area = (Math.PI * this.radius * this.radius).toFixed(2);
        return `Area of circle is ${area}`;
    }

    getCircumference() {
        let circum = (2 * Math.PI * this.radius).toFixed(2);
        return `Circumference of circle is ${circum}`;
    }

    display() {
        return `[ radius : ${this.getRadius()} , color : ${this.getColor()} ]`;
    }
}

let circle1 = new Circle();
let circle2 = new Circle("red");
let circle3 = new Circle("blue", 4);

circle1.setRadius(6);
circle1.setColor("white");
circle2.setRadius(9);

console.log(circle1.display()); // Output: [ radius : 6 , color : white ]
console.log(circle2.display()); // Output: [ radius : 9 , color : red ]
console.log(circle3.getArea()); // Output: Area of circle is 50.27
console.log(circle3.getCircumference()); // Output: Circumference of circle is 25.13


// Write a “person” class to hold all the details.

class Person{
    constructor()
    {
    this.name="shruthi"
    this.age=30
    this.education="Master of Engineering-ECE"
    this.location="Coimbatore"
    
    }
getdetails()
{
   return(`Name : ${this.name}, Age: ${this.age}, Education: ${this.education},Location: ${this.location}`);
}
    
}
      
var obj=new Person()
console.log(obj.getdetails())


//  write a class to calculate the Uber price.

class UberPriceCalculator
{
     basefare=50
     distance_per_km=10
     time_per_min=5
    constructor(distance,duration)
    {
        this.distance=distance
        this.duration=duration
    }
    
    calculateuberprice()
    {
        const uberprice_in_distance=this.distance * this.distance_per_km
        const uberprice_in_time=this.duration *this.time_per_min
        const Totalfare = `Distance(in km):${this.distance},Duration(in minutes) ${this.duration},Total fare(in Rs)${this.basefare + uberprice_in_distance + uberprice_in_time}`
        return Totalfare

    }

}

let calculator=new UberPriceCalculator(15,20)
const fare=calculator.calculateuberprice()
console.log(fare)


