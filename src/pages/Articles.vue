<template>
  <div class="container">
    <Card
      title="Vue studies"
      :channels="['#tech', '#ui']"
      author="Giuseppe Setem"
      abstract="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex possimus perferendis aut. Quod, tempora, at accusamus ipsa eos soluta repellendus quae, debitis hic recusandae facere dignissimos fuga enim nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus consectetur quaerat, sit laborum nesciunt laudantium aperiam. Aliquid ut blanditiis ullam in, nihil fugit velit aspernatur adipisci quia repudiandae totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel ipsa, quae ad facere suscipit eos at reiciendis, eveniet fugiat fugit velit sapiente animi, rerum a? Autem inventore voluptatem delectus."
    />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Articles",
  components: { Card }
};
</script>

<style>
.container {
  margin-left: 5rem;
  padding: 2rem;
}
</style>