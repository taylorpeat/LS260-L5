var App = {
  init: function() {
    this.albums = new Albums();
    this.fetchAlbums();
  },
  fetchAlbums: function() {
    this.albums.fetch({
        success: this.albumsLoaded.bind(this);
    });
  },
  albumsLoaded: function() {}
}

App.init();