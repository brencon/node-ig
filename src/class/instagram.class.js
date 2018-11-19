const _config = {};
_config.clientId = '12b4f75ca1864d599d3271d55a7f8cf5';
_config.clientSecret = '8cd1b749eab749edae8ed953c8e3898d';
_config.accessToken = '';
let _apiVersion = 'v1';
let _baseURL = 'https://api.instagram.com';
let _apiURL = `${_baseURL}/${_apiVersion}/`;

module.exports = class Instagram {
  static getByHashtag() {
    const token = '9129631078.12b4f75.d398874c555445c9b49b8babdc354b76';
    const hashtag = 'sympsctest';
    const url = `${_apiURL}tags/${hashtag}/media/recent`;
    return true;
  }
};

// https://www.instagram.com/oauth/authorize/?client_id=12b4f75ca1864d599d3271d55a7f8cf5&redirect_uri=http://symitar.com&response_type=token&scope=public_content

// https://api.instagram.com/v1/tags/cat?access_token=ACCESS-TOKEN