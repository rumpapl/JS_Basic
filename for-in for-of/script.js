const person =

    [
        {
            id: 1,
            name: 'user1',
            email: "user1@gmail.com",
            phone: '01795061160'

        },
        {
            id: 2,
            name: 'user2',
            email: "user2@gmail.com",
            phone: '01795061160'

        },
        {
            id: 3,
            name: 'user3',
            email: "user3@gmail.com",
            phone: '01795061160'

        },
        {
            id: 4,
            name: 'user4',
            email: "user4@gmail.com",
            phone: '01795061160'

        },
    ];

// For Array & String item => for-of
for (const x of person) {
    console.log(x);
    // For object item => for-in
    for (let user in x){
        console.log(`user: ${x[user]}`);
    }
}

