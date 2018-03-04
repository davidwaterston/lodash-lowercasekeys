var _ = require('lodash');

function lowerCaseKeys(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }
    if (_.isArray(value)) {
        return _.map(value, function(o) {
            return _.lowerCaseKeys(o);
        });
    }
    return _.reduce(
        Object.keys(value),
        function(prev, curr) {
            prev[curr.toLowerCase()] = _.lowerCaseKeys(value[curr]);
            return prev;
        },
        {}
    );
}

_.mixin({lowerCaseKeys: lowerCaseKeys});
