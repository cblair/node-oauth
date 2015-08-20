(function () {
    "use strict";

    // EXPORTS

    // AMD
    if ( typeof define == 'function' && define.amd ) {
        define(["oauthlib/oauth", "oauthlib/oauth", "oauthlib/oauth2"],
            function (OAuth, OAuthEcho, OAuth2) {

                return {
                    OAuth: OAuth,
                    OAuthEcho: OAuthEcho,
                    OAuth2: OAuth2
                };
        });

    // Node and other environments that support module.exports.
    } else if ( typeof module != 'undefined' && module.exports ) {
        exports.OAuth = require("./lib/oauth").OAuth;
        exports.OAuthEcho = require("./lib/oauth").OAuthEcho;
        exports.OAuth2 = require("./lib/oauth2").OAuth2;
    }
}(this));
