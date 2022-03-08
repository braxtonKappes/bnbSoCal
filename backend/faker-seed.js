const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")

const userFakerSeed = (num) => {
    let i = 0;

    while (i < num) {
        const user = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
            createdAt: faker.date.between("2015-01-01", "2021-12-30").toDateString(),
            updatedAt: faker.date.between("2022-01-01", "2022-03-15").toDateString()
        };

        console.log(user, ",")
        i++;
    }
}

// userFakerSeed(25);

const spotsFakerSeed = (num) => {
    let i = 0;

    while (i < num) {
        const spot = {
            address: faker.address.streetAddress(),
            city: "",
            state: "California",
            country: "United States",
            name: "",
            price: faker.commerce.price(),
            createdAt: faker.date.between("2015-01-01", "2021-12-30").toDateString(),
            updatedAt: faker.date.between("2022-01-01", "2022-03-15").toDateString()
        };

        console.log(spot, ",")
        i++;
    }
}

spotsFakerSeed(12)
