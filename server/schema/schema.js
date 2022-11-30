const { gql } = require("apollo-server");

const typeDefs = gql`

"A track is a collection of modules that teaches a specific topic or a subject"

type Track {
    "id is used to uniquely represent a track"
    id: ID!

    "Title represents the title of the track"
    title:String!

    "Track Description"
    description: String
    
    "Thumbnail refers to the thumbnail image of the track. This field's value is nullable"
    thumbnail: String

    "Number of modules included in the track"
    modulesCount: Int

    "Number of views for the track"
    numberOfViews: Int

    "The total duration of the track"
    length: Int
    
    "The author of the track"
    author: Author!

    "Track Modules"
    modules: [Module!]!
}

"This type represents a module. A module is a lesson of a track. Multiple modules comprises a track"

type Module {
    id: ID!

    title: String!

    length : Int
}


"This type represents an author"
type Author {

    id: ID!
    
    name: String!
    
    photo:String
}


type Query {
    "Tracks to populate the homepage of the application"
    tracksForHome : [Track!]!

    "track resolver accepts id as an argument and returns the corresponding Track. If the track doesn't exist for the provided id, then null can be returned"
    track(id: ID!) : Track
}

type IncrementTrackViewsResponse {

    "code represents the HTTP code for the action"
    code : Int!

    "Success indicates whether the mutation action was successful or not"
    success: Boolean!

    "Message gives a concise information on the action status"
    message: String!

    "The updated track. The Track can be possibly null since chances are that mutation action can go south."
    track: Track

}

type Mutation {
    "To increment the views of a track."
    incrementTrackViews(id:ID!): IncrementTrackViewsResponse!
}

`;

module.exports = typeDefs