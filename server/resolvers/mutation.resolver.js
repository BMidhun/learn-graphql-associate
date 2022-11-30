exports.mutationResolver = {
    Mutation : {
        incrementTrackViews : async (_, args, context) => {
            const {id} = args;
            const {dataSources} = context;

            console.log("Reached")
            const response = {};

            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                response.code = 200;
                response.success = true;
                response.message = `Successfully updated the numberOfViews for track ${id}`;
                response.track = track;
            } catch (error) {
                console.log("ERROR::", error);
                response.code = error.extensions.response.status;
                response.success = false;
                response.message = error.extensions.response.body;
                response.track = null;
            } finally {
                return response;
            }
        }
    }

}