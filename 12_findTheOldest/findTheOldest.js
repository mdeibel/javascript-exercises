const findTheOldest = function(people) {
    const oldest = people.reduce((prev, curr) => {
        const prevDeathYear = prev.yearOfDeath || new Date().getFullYear();
        const currDeathYear = curr.yearOfDeath || new Date().getFullYear();
        const prevAge = prevDeathYear - prev.yearOfBirth;
        const currAge = currDeathYear - curr.yearOfBirth;
        return currAge > prevAge ? curr : prev;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
