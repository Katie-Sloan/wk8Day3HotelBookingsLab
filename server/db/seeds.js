use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Chris Kite",
        email: "chrisk@gmail.com",
        checkedIn: false
    },
    {
        name: "Katie Sloan",
        email: "katies@gmail.com",
        checkedIn: true
    },
    {
        name: "John Harper",
        email: "johnh@gmail.com",
        checkedIn: true
    }
]);