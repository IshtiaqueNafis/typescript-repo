const {parse} = require('csv-parse');
const fs = require('fs');
const results = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === "CONFIRMED";
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('error', error => console.log(error))

    .on('data', data => {
        if(isHabitablePlanet(data)){
            results.push(data);  
        }

    }).on('end', () => {
    console.log({results})
})