exports.queryResolver = {
    Query: {
        tracksForHome: (parent, args, context, info) => {
            const {dataSources} = context;
            return dataSources.trackAPI.getTracksForHome();
        }
    },

    Track: {
        author: (parent, args,context,info) => {
            const {authorId} = parent;
            const {dataSources} = context;

            return dataSources.trackAPI.getAuthor(authorId);
        }
    }   
}