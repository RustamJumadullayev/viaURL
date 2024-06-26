/* namelarini chiqarish */

const planets = [
    {
       "name": "Tatooine",
       "diameter": "10465 km",
       "star": "Tatoo I & Tatoo II",
       "distance": "43000 light years from galactic core",
       "image": "https://www.nasa.gov/wp-content/uploads/2023/03/earthsun20170412.png",
       "moons": 3
    },
    {
        "name": "Pern",
        "diameter": "measurement is under dispute",
        "star": "Alpha Sagittarius (a.k.a. Rukbat)",
        "distance": "Varies - find a library",
        "image": "https://smd-cms.nasa.gov/wp-content/uploads/2023/07/stsci-01h44ay5ztcv1npb227b2p650j-temp-medium.jpg?w=2560&format=webp",
        "moons": 2
    },
    {
        "name": "Saturn/Titan",
        "diameter": "5149.5 km",
        "star": "Sol",
        "distance": "1.4 billion km from Earth",
        "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
        "moons": 0
    },
    {
        "name": "Mars",
        "diameter": "6779 km",
        "star": "Sol",
        "distance": "225 million km from Earth",
        "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
        "moons": 2
    },
    {
        "name": "K2-18b",
        "diameter": "34500 km",
        "star": "K2-18",
        "distance": "110 light years from Earth",
        "image": "https://www.nasa.gov/wp-content/uploads/2023/09/sep-11-23-stsci-01h9r8bbf7kfspgq2xx3a8sz34-1k.jpg",
        "moons": "unknown"
    },
    {
        "name": "Jupiter/Europa",
        "diameter": "3,121.6 km",
        "star": "Sol",
        "distance": "628.3 million km from Earth",
        "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
        "moons": 0
    }
];

function printPlanetNames(planets) {
    planets.forEach(planet => {
        console.log(planet.name);
    });
}
printPlanetNames(planets);
