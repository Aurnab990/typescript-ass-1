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

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
]; 

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
