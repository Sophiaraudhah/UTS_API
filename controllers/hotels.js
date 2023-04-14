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

//Endpoint Get All Hotels
export const getHotels = (req, res) => {
    res.send(hotels);
}

//Endpoint Add Hotel
export const addHotel = (req, res) => {
    const hotel = req.body;

    hotels.push({ ...hotel});

    res.send(`Hotel ${hotel.name} added to the database.`);
}

//Endpoint Get Hotel by ID
export const getHotelbyId = (req, res) => {
    const { id } = req.params;

    const foundHotelbyId = hotels.find((hotel) => hotel.id === parseInt(id));

    res.send(foundHotelbyId);
}

//Endpoint Get Hotel by Star
export const getHotelbyStar = (req, res) => {
    const { star } = req.params;

    const foundHotelbyStar = hotels.filter((hotel) => hotel.star === parseInt(star));

    res.send(foundHotelbyStar);
}

//Endpoint Get Room from Hotel
export const getRoomfromHotel = (req, res) => {
    const { id } = req.params;

    const foundRoomfromHotel = hotels.find((hotel) => hotel.id === parseInt(id));

    res.send(foundRoomfromHotel.room_type);
}

//Endpoint Update Hotel
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