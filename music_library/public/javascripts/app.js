var App = {
  init: function() {
    this.albums = new Albums();
    this.tracks = [];
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
    var tracks = new (Tracks.extend({
      url: "/albums/" + name + ".json"
    }))();

    this.selected_album = this.albums.findWhere({ title: title });

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
  },
}

var Router = Backbone.router.extend({
  routes: {
    "albums/:title": "getAlbum"
  },
  getAlbum: function(title) {
    App.fetchTracks(name);
  },
  index: function() {
    if (App.tracks.$el.is(":animated")) {
      App.tracks.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
});

Backbone.history.start({
  pushState: true,
  silent: true
})