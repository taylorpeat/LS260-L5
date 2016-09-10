var Tracks = Backbone.Collection.extend({
  model: track,
  initialize: function(options) {
    this.url = options.tracks_url
  }
});