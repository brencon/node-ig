'use strict';
const _ = require('lodash');
const config = require('../config/default');
const rp = require('request-promise');

module.exports.searchByHashtag = function(token, hashtag) {
  const apiURL = `${config.instagram.baseURI}/${config.instagram.apiVersion}`;
  const options = {
    method: 'GET',
    uri: `${apiURL}/users/self/media/recent?access_token=${token}`,
    rejectUnauthorized: config.rejectUnauthorized
  };
  return rp(options).then(function(res) {
    let matchedMedia = [];
    const resJSON = JSON.parse(res);
    _.forEach(resJSON.data, function(d) {
      if (d.tags.indexOf(hashtag) > -1) {
         matchedMedia.push(d);
      }
    });
    return { data: matchedMedia };
  });
};