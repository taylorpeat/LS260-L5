var App = {
  init: function() {
    this.albums = new Albums();
    this.fetchAlbums();
  },
  fetchAlbums: function() {
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
        success: this.albumsLoaded.bind(this);
    });
  },
  albumsLoaded: function() {
    this.view.render();
  }
}
