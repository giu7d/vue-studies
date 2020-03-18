<template>
  <main>
    <h1>Vue studies</h1>
    <small>This is the study of Vue</small>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus.</p>
  </main>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style>
main {
  margin-left: 5rem;
  padding: 2rem;
}

h1 {
  display: block;
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 3rem;
  color: var(--bg-primary);
}

small {
  display: block;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--secondary);
}

p {
  text-align: justify;
  opacity: 0.8;
}

@media only screen and (max-width: 600px) {
  main {
    margin: 0;
  }
}
</style>