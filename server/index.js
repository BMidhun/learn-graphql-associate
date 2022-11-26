const {ApolloServer} = require("apollo-server");
const typeDefs = require("./schema/schema");

const mocks = {
    Track: () => ({

        id: () => "track_01",
        title: () => "Space Kitties",
        thumbnail: () => "https://img.url.com/1",
        modulesCount:() => 3,
        length: () => 112,
        author: () => ({

            name:  "Stephen",
            photo: "https://img.url.com/12"
        })

    })
}

const server = new ApolloServer({typeDefs, mocks});

server.listen().then(({url}) => {
    console.log("Server running on::", url);
})