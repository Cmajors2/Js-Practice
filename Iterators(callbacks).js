const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(function(a) {
    return a < 250;
});

//console.log(smallNumbers);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(element => {
    return element.length > 7;
});

//console.log(longFavoriteWords);

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(b => {
    if (b === 'elephant'){
        return b;
    }
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(s => {
    if (s[0] === 's'){
        return s;
    }
});

console.log(startsWithS);