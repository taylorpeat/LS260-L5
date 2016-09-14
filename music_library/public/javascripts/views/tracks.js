var TracksView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name='tracks']").html()),
  id: "modal",
  render: function() {
    this.$el.html(this.template({ 
      album: this.album.toJSON(),
      tracks: this.collection.toJSON()
    }));
    this.$el.fadeIn(this.duration);
    $("#overlay").fadeIn(this.duration);
  },
  events: {
    "click a": "close"
  },
  initialize: function(options) {
    this.$el.appendTo("body");
    this.album = options.album;
    this.duration = 300;
  },
  fadeOut: function(e) {
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this) );
    $("#overlay").fadeOut(this.duration);
  },
  close: function() {
    this.fadeOut();
    history.back();
  }
});