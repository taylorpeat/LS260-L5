var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.tracks_url = "/albums/" + encodeURIComponent(attrs.title) + ".json";
    return attrs;
  }
});

function Slugify(title) {
  return title.replace(/\s/g, "-").replace(/[^A-Za-z0-9\-]/g, "");
}