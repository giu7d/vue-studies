function Article(
  id = null,
  title = "",
  channels = [],
  authors = [],
  abstract = "",
  isLiked = false
) {
  this.id = id;
  this.title = title;
  this.channels = channels;
  this.authors = authors;
  this.abstract = abstract;
  this.content = "";
  this.isLiked = isLiked;
}

// Methods
Article.prototype.like = (state = null) => {
  // If state is null toggle subscription else setState
  this.isLiked = state && !this.isLiked;
};

Article.prototype.loadContent = (content = "") => {
  this.content = content;
};

export default Article;
