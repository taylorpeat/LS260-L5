var TracksView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name='tracks']").html()),
  id: "modal",
  render: function() {
    this.$el.html(this.template({ 
      album: this.album.toJSON(),
      tracks: this.tracks.toJSON()
    }));
  },
  initialize: function(options) {
    this.album = options.album;
    this.duration = 300;
    this.tracks = new Tracks({ tracks_url: this.album.toJSON().tracks_url });
    this.$el.appendTo("body");
    this.fetchTracks();
  },
  fetchTracks: function() {
    this.tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });
  },
  tracksLoaded: function() {
    this.render();
    $("#overlay").fadeIn(this.duration);
    this.$el.fadeIn(this.duration);
    this.bind();
  },
  close: function() {
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this) );
    $("#overlay").fadeOut(this.duration);
  },
  bind: function() {
    this.$el.on("click", "a", function(e) {
      e.preventDefault();

      this.close();
    }.bind(this) );
  }
});