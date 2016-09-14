describe("Tracks Spec", function() {
  var test_view;

  beforeAll(function(done) {
    tracks = new Tracks({
      model: Track,
      tracks_url: "/albums/1989.json"
    });

    tracks.fetch({
      success: function() {
        done();
      }
    })
  
  });

  beforeEach(function() {
    test_view = new TracksView({
      collection: tracks,
      album: App.albums.models[1]
    });

    $("#modal").remove();
    test_view.$el.appendTo("body");
  });

  it("Has collection property assigned", function() {
    expect(test_view.collection).toBeDefined();
  });

  it("Has handlebars template compiled", function() {
    expect(typeof test_view.template).toEqual("function");
  });

  it("Renders a modal to the body when render called", function() {
    expect($("#modal").html()).toEqual("");
    test_view.render();
    expect($("#modal").find("li").length).toEqual(tracks.models.length);
  });

  it("Removes view when fadeOut is called", function() {
    test_view.fadeOut();
    expect($("#modal").html()).toEqual(undefined);
  });

});