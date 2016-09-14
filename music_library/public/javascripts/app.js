var App = {
  init: function() {
    this.albums = new Albums();
    this.fetchAlbums();
  },
  fetchAlbums: function() {
    this.albumsView = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
        success: this.albumsLoaded.bind(this)
    });
  },
  albumsLoaded: function() {
    this.albumsView.render();
  },
  fetchTracks: function(title) {
    var tracks = new Tracks({
      tracks_url: "/albums/" + title + ".json"
    });

    this.selected_album = this.albums.findWhere({ title: decodeURI(title) });

    tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });
  },
  tracksLoaded: function(tracks) {
    var tracks_modal = new TracksView({
      collection: tracks,
      album: this.selected_album
    });

    tracks_modal.render();
    this.tracks = tracks_modal;
  },
}

var Router = Backbone.Router.extend({
  routes: {
    "albums/:title": "getAlbum"
  },
  getAlbum: function(title) {
    App.fetchTracks(title);
  },
  index: function() {
    if (!App.tracks.$el.is(":animated")) {
      App.tracks.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
});

var router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();

  router.navigate($(e.currentTarget).attr("href").replace(/^\/|\.json/g, ""), { trigger: true });

});