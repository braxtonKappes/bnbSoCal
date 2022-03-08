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

// spotsFakerSeed(12)

const reviewsFakerSeed = (num) => {
    let i = 0;

    while (i < num) {
        const spot = {
            review: faker.lorem.paragraph(),
            rating: faker.datatype.number({
                'min': 1,
                'max': 5,
            }),
            createdAt: faker.date.between("2015-01-01", "2021-12-30").toDateString(),
            updatedAt: faker.date.between("2022-01-01", "2022-03-15").toDateString()
        };

        console.log(spot, ",")
        i++;
    }
}

reviewsFakerSeed(6)
