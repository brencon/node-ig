'use strict';

var expect = require('chai').expect;
var nodeIG = require('../../index');

describe('node-ig', function() {
  it('return media by the hashtag "symitar"', function() {
    nodeIG.searchByHashtag('symitar').then(function(res) {
      const igData = res.data;
      expect(igData).to.be.an('array').that.is.not.empty;
      const media = igData[0];
      expect(media.user.username).to.be.a('string').that.is.not.empty;
    });
  });
});