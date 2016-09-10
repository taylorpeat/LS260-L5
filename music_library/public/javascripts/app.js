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
  }
}
