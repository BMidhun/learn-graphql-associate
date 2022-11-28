const {ApolloServer} = require("apollo-server");
const { TrackAPI } = require("./api");
const { resolvers } = require("./resolvers");
const typeDefs = require("./schema/schema");


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI()
        }
    }
});

server.listen().then(({url}) => {
    console.log("Server running on::", url);
})