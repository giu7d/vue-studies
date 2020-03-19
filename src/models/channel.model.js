function Channel(
  id = null,
  title = "",
  desc = "",
  articles = [],
  isSubscribed = false
) {
  this.id = id;
  this.title = title;
  this.desc = desc;
  this.articles = articles;
  this.isSubscribed = isSubscribed;
}

// Methods
Channel.prototype.subscribe = (state = null) => {
  // If state is null toggle subscription else setState
  this.isSubscribed = state && !this.isSubscribed;
};

export default Channel;
