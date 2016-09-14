var Tracks = Backbone.Collection.extend({
  model: Track,
  initialize: function(options) {
    this.url = options.tracks_url
  }
});