var request = require("request"),
    root = "http://localhost:3000/";

describe("JSON routes", function() {
  var albums;

  describe("/albums.json", function() {
    it("check if json is returned", function(done) {
      request(root + "albums.json", function(e, resp, body) {
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        done();
      });
    });
  });

  describe("/albums/<album>.json", function() {
    it("returns an array of tracks", function(done) {
      request(root + "albums/" + albums[0].title + ".json", function(e, resp, body) {
        var tracks = JSON.parse(body);
        expect(tracks[0].title).toBeDefined();
        done();
      });
    });
  });
});