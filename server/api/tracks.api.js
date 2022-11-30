const { RESTDataSource } = require("apollo-datasource-rest");

class TracksAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"
    }

    getTracksForHome() {
       return this.get("tracks");
    }

    getAuthor(id) {
       return this.get(`author/${id}`);
    }

    getTrack(id) {
        return this.get(`track/${id}`);
    }

    getModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    getModule(moduleId) {
        return this.get(`module/${moduleId}`);
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
}

module.exports = TracksAPI;