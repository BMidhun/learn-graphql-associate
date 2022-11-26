const  {gql} = require("apollo-server");

const typeDefs = gql`

"A track is a collection of modules that teaches a specific topic or a subject"

type Track {
    "id is used to uniquely represent a track"
    id: ID!

    "Title represents the title of the track"
    title:String!
    
    "Thumbnail refers to the thumbnail image of the track. This field's value is nullable"
    thumbnail: String

    "Number of modules included in the track"
    modulesCount: Int

    "The total duration of the track"
    length: Int
    
    "The author of the track"
    author: Author!
}


"This type represents an author"
type Author {

    id: ID!
    
    name: String!
    
    photo:String
}


type Query {
    tracksForHome : [Track!]!
}

`;

module.exports = typeDefs