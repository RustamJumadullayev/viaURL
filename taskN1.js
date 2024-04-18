/*Berilgan, har bir insonning tug'ilish va vafot etish yillari bilan ifodalangan ob'ektlar massividagi eng keksa insonni aniqlash.
 Funksiyani yozish: Insonlarning tug'ilish va vafot etish yillarini o'z ichiga olgan ob'ektlar massividan eng keksa insonni
topadigan funksiya yozing.Bu funksiya eng uzun umr ko'rgan insonni qaytarishi kerak. */

function findLongestLivingPerson(people) {
    let longestLivingPerson = null;
    let longestLife = 0;

    for (const person of people) {
        const lifeSpan = person.deathYear - person.birthYear;
        if (lifeSpan > longestLife) {
            longestLife = lifeSpan;
            longestLivingPerson = person;
        }
    }

    return longestLivingPerson;
}

const people = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Vali", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Husan", birthYear: 1905, deathYear: 1960 }
];

const longestLivingPerson = findLongestLivingPerson(people);
console.log(longestLivingPerson);
