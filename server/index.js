const {ApolloServer} = require("apollo-server");
const typeDefs = require("./schema/schema");

const mocks = {
    Track: () => ({

        id: () => "track_01",
        title: () => "Space Kitties",
        thumbnail: () => "https://cataas.com/cat?width=300&&height=300",
        modulesCount:() => 3,
        length: () => 112,
        author: () => ({

            name:  "Stephen",
            photo: "https://joeschmoe.io/api/v1/random"
        })

    })
}

const server = new ApolloServer({typeDefs, mocks});

server.listen().then(({url}) => {
    console.log("Server running on::", url);
})