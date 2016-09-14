var dummy_tracks = [{
  "title": "Welcome To New York",
  "length": "3:32"
}, {
  "title": "Blank Space",
  "length": "3:51"
}, {
  "title": "Style",
  "length": "3:51"
}, {
  "title": "Out of the Woods",
  "length": "3:55"
}, {
  "title": "All You Had To Do Was Stay",
  "length": "3:13"
}, {
  "title": "Shake It Off",
  "length": "3:39"
}, {
  "title": "I Wish You Would",
  "length": "3:27"
}, {
  "title": "Bad Blood",
  "length": "3:31"
}, {
  "title": "Wildest Dreams",
  "length": "3:40"
}, {
  "title": "How You Get the Girl",
  "length": "4:07"
}, {
  "title": "This Love",
  "length": "4:10"
}, {
  "title": "I Know Places",
  "length": "3:15"
}, {
  "title": "Clean",
  "length": "4:31"
}];

var tracks = new Tracks({
  model: Track
});

tracks.collection = dummy_tracks;


describe("Tracks Spec", function() {
  var test_view;
  
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
    console.log($("#modal").find("li"));
    expect($("#modal").find("li").length).toEqual(dummy_tracks.length);
  });

  it("Removes view when fadeOut is called", function() {
    test_view.fadeOut();
    expect($("#modal").html()).toEqual(undefined);
  });

});