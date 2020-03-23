function Channel(id = null, title = "", desc = "", isSubscribed = false) {
  this.id = id;
  this.title = title;
  this.desc = desc;
  this.isSubscribed = isSubscribed;
}

// Methods
Channel.prototype.subscribe = (state = null) => {
  // If state is null toggle subscription else setState
  this.isSubscribed = state && !this.isSubscribed;
};

export default Channel;
