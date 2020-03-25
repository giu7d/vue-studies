import Channel from "models/channel.model";
import Article from "models/article.model";
import { isEmpty } from "~/utils";
import { v4 as uuid } from "uuid";

const CHANNELS = [
  new Channel(
    uuid(),
    "tech",
    "Your favorite tech tips!",
    "software/terminal",
    true
  ),
  new Channel(
    uuid(),
    "cripto",
    "Your favorite cripto tips!",
    "finance/ethereum",
    true
  ),
  new Channel(
    uuid(),
    "science",
    "Your favorite science tips!",
    "various/planet",
    true
  ),
  new Channel(
    uuid(),
    "cooking",
    "Your favorite cooking tips!",
    "food/chicken",
    false
  )
];

const ARTICLES = [
  new Article(
    uuid(),
    "Vue studies",
    [CHANNELS[0]],
    ["Giuseppe Setem"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.",
    true
  ),
  new Article(
    uuid(),
    "Create a todo app like an asshole",
    [CHANNELS[0], CHANNELS[2]],
    ["Giuseppe Setem", "Rafa Oliveira"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.",
    false
  ),
  new Article(
    uuid(),
    "The Bitcoin Crash",
    [CHANNELS[1]],
    ["Giuseppe Setem"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.",
    false
  ),

  new Article(
    uuid(),
    "A delicious strogonoff recipe",
    [CHANNELS[3]],
    ["Giuseppe Setem"],
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.",
    false
  )
];

// Feed
//
function listFeed() {
  return new Promise(resolve => {
    const subscribedArticles = ARTICLES.filter(
      ({ channels }) =>
        !isEmpty(channels.filter(({ isSubscribed }) => isSubscribed === true))
    );

    resolve(subscribedArticles);
  });
}

// Channels
//
function listChannels() {
  return new Promise(resolve => {
    const subscribedChannels = CHANNELS.filter(
      ({ isSubscribed }) => isSubscribed === true
    );
    resolve(subscribedChannels);
  });
}

function listAllChannels() {
  return new Promise(resolve => resolve(CHANNELS));
}

// function openChannel(id) {
//   return new Promise((resolve, reject) => {
//     const channel = CHANNELS.filter(channel => channel.id === id);
//     if (!channel) {
//       reject(channel);
//     }
//     resolve(channel);
//   });
// }

// // Articles
// //
// function openArticle(id) {
//   return new Promise((resolve, reject) => {
//     const article = ARTICLES.filter(article => article.id === id);
//     if (!article) {
//       reject(article);
//     }
//     resolve(article);
//   });
// }

export { listFeed, listChannels, listAllChannels };
