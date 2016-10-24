exports.sanitize = function(params) {
    return params.toLowerCase().replace(/-/,' ');
}

exports.tokenize = function(params) {
    return params.split();
}