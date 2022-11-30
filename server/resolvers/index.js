const { mutationResolver } = require("./mutation.resolver");
const {queryResolver} = require("./query.resolver");

exports.resolvers = {
    ...queryResolver,
    ...mutationResolver
}