//Switch to previously created database
db = db.getSiblingDB('notar-e-anotar');

db.routine_plans.insertOne(
    {
        user_id: ObjectId(),
        number_of_weeks: NumberInt(5),
        subjects: [
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() }
        ],
        week_routines: [
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() }
        ]
    }
);

db.weekly_routines.insertOne(
    {
        year: ISODate(),
        routine_plan_id: ObjectId(),
        week_number: NumberInt(15),
        subject: ObjectId(),
        routine_days: [
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() }
        ]
    }
);

db.routine_days.insertOne(
    {
        date: ISODate(),
        chores: [
            { id: ObjectId() },
            { id: ObjectId() },
            { id: ObjectId() }
        ],
        routines_data: [
            { id: ObjectId() },
            { id: ObjectId() }
        ]
    }
);

db.subjects.insertMany(
    [
        { name: "Introdução" },
        { name: "Motivação" },
        { name: "Organização" },
        { name: "Habilidade Social" },
        { name: "Relacionamento com os pais" },
        { name: "Emoções, pensamentos e comportamento" },
        { name: "Soluções de Problemas" },
        { name: "Autonomia" },
        { name: "Conclusão" }
    ]
);

db.tasks.insertOne(
    {
        name: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit. Erat pellentesque adipiscing commodo elit at imperdiet dui. Pulvinar neque laoreet suspendisse interdum consectetur libero. Quis enim lobortis scelerisque fermentum dui faucibus in. Leo vel orci porta non pulvinar. Aliquam eleifend mi in nulla. Nunc sed blandit libero volutpat sed cras ornare arcu. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Nec ullamcorper sit amet risus nullam. Elit ut aliquam purus sit. Ac turpis egestas sed tempus urna et pharetra. Eu facilisis sed odio morbi quis commodo odio aenean sed. Urna duis convallis convallis tellus id interdum velit laoreet id. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Quis hendrerit dolor magna eget est. Ut placerat orci nulla pellentesque dignissim enim sit.",
        parent_rating: NumberInt(0),
        children_rating: NumberInt(4),
        challenge: true
    }
);
