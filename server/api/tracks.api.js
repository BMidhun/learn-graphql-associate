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
       return this.get(`author/${id}`)
    }
}

module.exports = TracksAPI;