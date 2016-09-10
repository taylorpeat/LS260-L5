var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name=albums]").html()),
  render: function() {
    this.$el.html(this.template({ albums: this.collection.toJSON() }));
  },
  initialize: function() {
    this.$el = $("#albums");
    this.listenTo(this.collection, "change", this.render);
    this.bind();
  },
  bind: function() {
    this.$el.on("click", "a", function(e) {
      e.preventDefault();
      var idx = $(this).parent("li").index();

      new TracksView({ album: App.albums.models[idx] });
    });
  }
});