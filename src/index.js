'use strict';
const rp = require('request-promise');

module.exports.searchByHashtag = function(hashtag) {
  const options = {
    method: 'GET',
    uri: `https://api.instagram.com/v1/tags/${hashtag}/media/recent?access_token=9129631078.12b4f75.d398874c555445c9b49b8babdc354b76`
  };
  return rp(options).then(function(res) {
    return JSON.parse(res);
  });
};