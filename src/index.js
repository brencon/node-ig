'use strict';
const config = require('config');
const rp = require('request-promise');

module.exports.searchByHashtag = function(hashtag) {
  const apiURL = `${config.instagram.baseURI}/${config.instagram.apiVersion}`;
  const options = {
    method: 'GET',
    uri: `${apiURL}/tags/${hashtag}/media/recent?access_token=${config.instagram.accessToken}`
  };
  return rp(options).then(function(res) {
    return JSON.parse(res);
  });
};