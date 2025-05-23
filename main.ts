function formatString (input: string, toUpper?: boolean): string{
    if(toUpper == false){
        return (input);
    }
    else{
        return(input.toUpperCase());
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const higherRating = items.filter(item=>item.rating>=4);
    return higherRating;
} 

function concatenateArrays<T>(...arrays: T[][]): T[]{
    const newArray = arrays.reduce((acc,curr)=>acc.concat(curr),[]);
    return newArray;
}

class Vehicle{
   private make: string;
   private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }
    getInfo(){
        return(`Make: ${this.make}, Year: ${this.year}`)
    }
}
class Car extends Vehicle{
    private model: string;
    constructor(make: string, year: number, model: string){
        super(make,year);
        this.model = model;
    }
    getModel(){
        return(`Model: ${this.model}`);
    }
}

function processValue(value: string | number): number{
    if(typeof value === 'number'){
        return value*2;
    }
    else{
        return value.length;
    }
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }
        let maxPriceProduct = products[0];
        for(const product of products){
            if(product.price > maxPriceProduct.price){
                maxPriceProduct=product;
            }
        }
        return maxPriceProduct;   
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    }else{
        return "Weekday";
    }
}

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Error: Negative numbers are not allowed");
    }
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}
