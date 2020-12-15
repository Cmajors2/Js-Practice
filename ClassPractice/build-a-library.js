
class Media {
    constructor(title) {
        this._title = title;
        this._checkedOut = false;
        this._rating = [];
    }
    get title() {
        return this._title;
    }
    get checkedOut() {
        return this._checkedOut;
    }
    get rating() {
        return this._rating;
    }
    set checkedOut(value) {
        this._checkedOut = value;
    }
    toggleCheckOutStatus() {
        this.checkedOut = !this.checkedOut;
    }
    getAverageRating() {
        let ratingsSum = this.rating.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this.rating.length;
        return ratingsSum/lengthOfArray;
    }
    addRating(rating) {
        if (rating < 1 || rating > 5){
            return console.log('Please choose rating between 1 and 5');
        } else {
            return this.rating.push(rating); 
    }
}

}

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runtime){
        super(title);
        this._director = director;
        this._runtime = runtime;
    }
    get director() {
        return this._director;
    }
    get runtime(){
        return this._runtime;
    }
}

class CD extends Media {
    constructor(BandName, title, RunTime) {
        super(title);
        this._BandName = BandName;
        this._RunTime = RunTime;
        this._Song = [];
    }
    get randName() {
        return this._BandName;
    }
    get runtime() {
        return this._RunTime;
    }
    get song() {
        return this._Song;
    }

    addSong(song) {
        this._Song.push(song);
    }

  /* shuffle() {
       const arr = this.song;
        for (let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        };
        
    }
*/

}

let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
//console.log(historyOfEverything);




let blink182 = new CD('Blink-182', 'NINE', 41);

blink182.addSong('The First Time');
blink182.addSong('Happy Days');
blink182.addSong('Heaven');
blink182.addSong('Darkside');
blink182.addSong('Blame it On My Youth');
blink182.addSong('Generational Divide');
blink182.addSong('Run Away');
blink182.addSong('Black Rain');
blink182.addSong('I Really Wish I Hated You');
blink182.addSong('Pin the Grenade');
blink182.addSong('No Heart To Speak Of');
blink182.addSong('Ranson');
blink182.addSong('On Some Emo Shit');
blink182.addSong('Hungover You');
blink182.addSong('Remember To Forget Me');

console.log(blink182);











