var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.track_url = "/album/" + attrs.title;
    return attrs;
  }
});
