var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.track_url = "/album/" + Slugify(attrs.title);
    return attrs;
  }
});

function Slugify(title) {
  return title.replace(/\s/g, "-").replace(/[^A-Za-z0-9\-]/g, "");
}