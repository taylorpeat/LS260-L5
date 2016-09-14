describe("Albums Spec", function() {
  beforeEach(function(done) {
    App.albumsLoaded = function(){
      done();
    }

    App.init();
  });

  it("Collection is created on init", function() {
    expect(typeof App.albums.models[0].attributes.title).toBe("string");
    expect(App.albums.models.length).toBe(3);
  });

  it("Has compiled handlebars template", function() {
    expect(typeof App.albumsView.template).toBe("function");
  });

  it("Renders to an #albums container", function() {
    App.albumsView.render();
    expect($("#albums").children("li").length).toEqual(3);
  });

  it("Rerender view when albums change", function() {
    var old_albums,
        new_albums;
    
    old_albums = $("#albums").children("li");
    App.albums.models[0].set("artist", "DaVinci");
    new_albums = $("#albums").children("li");
    expect(new_albums).not.toEqual(old_albums);
  });

  it("Verify tracks_url is set on model", function() {
    var tracks_url = App.albums.models[0].get("tracks_url");
    expect(tracks_url).toMatch(/albums/);
  });
});