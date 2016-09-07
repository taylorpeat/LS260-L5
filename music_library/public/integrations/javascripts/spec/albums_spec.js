describe("albums", function() {
  it("Collection is created on init", function(done) {
    var albumsLoaded = App.albumsLoaded;
    App.albumsLoaded = function(){
      expect(App.albums.models.length).toBe(3);
      expect(typeof App.albums.models[0].attributes.title).toBe("string");
      done();
    }

    App.init();
  });

  it("")
});