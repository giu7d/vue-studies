import Channel from "models/channel.model";
import Article from "models/article.model";

const ARTICLES = [
  new Article(
    0,
    "Vue studies",
    [CHANNELS[0]],
    ["Giuseppe Setem"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.",
    true
  ),
  new Article(
    1,
    "The Bitcoin Crash",
    [CHANNELS[1]],
    ["Giuseppe Setem"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.",
    false
  )
];

const CHANNELS = [
  new Channel(0, "tech", "Your favorite tech tips!", [ARTICLES[0]], true),
  new Channel(1, "cripto", "Your favorite cripto tips!", [ARTICLES[1]], true),
  new Channel(2, "science", "Your favorite science tips!", [], true),
  new Channel(2, "cooking", "Your favorite cooking tips!", [], false)
];

// Feed
//
function listFeed() {
  return new Promise(resolve => resolve(ARTICLES));
}

// Channels
//
function listChannels() {
  return new Promise(resolve => {
    const subscribedChannels = CHANNELS.filter(
      channel => channel.isSubscribed === true
    );
    resolve(subscribedChannels);
  });
}

function openChannel(id) {
  return new Promise((resolve, reject) => {
    const channel = CHANNELS.filter(channel => channel.id === id);
    if (!channel) {
      reject(channel);
    }
    resolve(channel);
  });
}

// Articles
//
function openArticle(id) {
  return new Promise((resolve, reject) => {
    const article = ARTICLES.filter(article => article.id === id);
    if (!article) {
      reject(article);
    }
    resolve(article);
  });
}

export { listFeed, listChannels, openChannel, openArticle };
