// import { v4 as uuid } from 'uuid';

// let hotels = [
//     {   name: 'Grand Hotel',
//         location: 'New York',
//         rating: 4.7,
//         checkAvailability: function() {
//           console.log('Checking availability...');
//         },
//         bookRoom: function() {
//           console.log('Booking room...');
//         }
//     },
//     {   name: 'Papandayan Resort',
//         location: 'Bandung',
//         rating: 4.8,
//         checkAvailability: function() {
//           console.log('Checking availability...');
//         },
//         bookRoom: function() {
//           console.log('Booking room...');
//         }
//     },
//     {   name: 'Hotel 101',
//         location: 'Jakarta',
//         rating: 4.5,
//         checkAvailability: function() {
//         console.log('Checking availability...');
//     },
//         bookRoom: function() {
//           console.log('Booking room...');
//     }
//     },
//     {   name: 'Djaakarta Hotel',
//         location: 'Jakarta',
//         rating: 4.5,
//         checkAvailability: function() {
//           console.log('Checking availability...');
//     },
//         bookRoom: function() {
//           console.log('Booking room...');
//     }
//     },
// ];

// export const getHotels = (req, res) => {
//     console.log(`Hotels in the database: ${hotels}`);

//     res.send(hotels);
// }

// // export const createUser = (req, res) => {   
// //     const user = req.body;

// //     users.push({...user, id: uuid()});
    
// //     console.log(`User [${user.username}] added to the database.`);
// // };

// // export const getUser = (req, res) => {
// //     res.send(req.params.id)
// // };

// // export const deleteUser = (req, res) => { 
// //     console.log(`user with id ${req.params.id} has been deleted`);
    
// //     users = users.filter((user) => user.id !== req.params.id);
// // };

// // export const updateUser =  (req,res) => {
// //     const user = users.find((user) => user.id === req.params.id);
    
// //     user.username = req.body.username;
// //     user.age = req.body.age;

// //     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
// // };


const hotels = [
    {
        "id": 1,
        "name": "Grand Hotel",
        "location": "Bandung",
        "rating": 4.7,
        "star": 4,
        "room_type": ["Deluxe","Superior","Luxury"], 
        "price": 1000000,
    },
    {
        "id": 2,
        "name": "Papandayan Resort",
        "location": "Bandung",
        "rating": 4.8,
        "star": 5,
        "room_type": ["Deluxe","Superior","Suite"], 
        "price": 2000000,
    },
    {
        "id": 3,
        "name": "Hotel 101",
        "location": "Jakarta",
        "rating": 4.5,
        "star": 3,
        "room_type": ["Deluxe","Superior"],
        "price": 500000,
    },
    {
        "id": 4,
        "name": 'Djakarta Hotel',
        "location": 'Jakarta',
        "rating": 4.5,
        "star": 4,
        "room_type": ['Deluxe','Superior','President Suite'],
        "price": 3000000,
    },
    {
        "id": 5,
        "name": "Hotel Nawala",
        "location": "Bandung",
        "rating": 3.0,
        "star": 2,
        "room_type": ["Standard","Superior"],
        "price": 200000,
    }
];

export const getHotels = (req, res) => {
    res.send(hotels);
}

export const addHotel = (req, res) => {
    const hotel = req.body;

    hotels.push({ ...hotel});

    res.send(`Hotel ${hotel.name} added to the database.`);
}

export const getHotelbyId = (req, res) => {
    const { id } = req.params;

    const foundHotelbyId = hotels.find((hotel) => hotel.id === parseInt(id));

    res.send(foundHotelbyId);
}

export const getHotelbyStar = (req, res) => {
    const { star } = req.params;

    const foundHotelbyStar = hotels.filter((hotel) => hotel.star === parseInt(star));

    res.send(foundHotelbyStar);
}

export const getRoomfromHotel = (req, res) => {
    const { id } = req.params;

    const foundRoomfromHotel = hotels.find((hotel) => hotel.id === parseInt(id));

    res.send(foundRoomfromHotel.room_type);
}

export const updateHotel = (req, res) => {
    const { id } = req.params;

    const { name, location, rating, star, room_type, price } = req.body;

    const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

    if (name) hotel.name = name;
    if (location) hotel.location = location;
    if (rating) hotel.rating = rating;
    if (star) hotel.star = star;
    if (room_type) hotel.room_type = room_type;
    if (price) hotel.price = price;

    res.send(`Hotel with the id ${id} has been updated.`);
}