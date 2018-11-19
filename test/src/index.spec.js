'use strict';

var expect = require('chai').expect;
var nodeIG = require('../../index');

describe('node-ig', function() {
  it('return media by the hashtag "money"', function() {
    nodeIG.searchByHashtag('money').then(function(res) {
      const igData = res.data;
      expect(igData).to.be.an('array').that.is.not.empty;
      const media = igData[0];
      expect(media.user.username).to.be.a('string').that.is.not.empty;
    });
  });
  it('return an empty result when searching by the hashtag "emptyresult"', function() {
    nodeIG.searchByHashtag('emptyresult').then(function(res) {
      const igData = res.data;
      expect(igData).to.be.an('array').that.is.empty;
    });
  });
});