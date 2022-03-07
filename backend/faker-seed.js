const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")

const userSeed = (num) => {
    let i = 0;

    while (i < num) {
        const user = {
            email: faker.internet.email(),
            username: faker.internet.userName(),
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
            createdAt: faker.date.between("2020-01-01", "2022-01-01").toDateString(),
            updatedAt: faker.date.between("2020-01-01", "2022-01-01").toDateString()
        };

        console.log(user, ",")
        i++;
    }
}
