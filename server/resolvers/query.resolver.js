exports.queryResolver = {
    Query: {
        tracksForHome: (parent, args, context, info) => {
            const { dataSources } = context;
            return dataSources.trackAPI.getTracksForHome();
        },

        track: (_, args, context) => {
            const { dataSources } = context;
            const { id } = args;
            return dataSources.trackAPI.getTrack(id);
        }
    },

    Track: {
        author: (parent, args, context, info) => {
            const { authorId } = parent;
            const { dataSources } = context;

            return dataSources.trackAPI.getAuthor(authorId);
        },

        modules: (parent, _, context) => {
            const { dataSources } = context;
            const { id } = parent;

            return dataSources.trackAPI.getModules(id);
        },

        durationInSeconds: (parent) => {
            const { length } = parent;
            return length;
        }

    },

    Module: {
        durationInSeconds: (parent) => {
            const { length } = parent;
            return length;
        }

    }
}