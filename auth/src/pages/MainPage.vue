<template>
  <div>
    <my-header />

    <div class="container">
      <card
        v-for="card in paginatedCards"
        :key="card.id"
        :title="card.title"
        :text="card.description"
        :created="card.createdAt"
        :claps="card.claps"
        :user="user"
        :id="card.id"
        :userID="card.userId"
      />
    </div>

    <b-pagination class="pagination"
      :total="total"
      v-model="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
    <my-footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
      total: 0,
      current: 1,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
    };
  },
  methods: {
    nextPage() {
      this.current++;
    },
    prevPage() {
      this.current--;
    },
    setTotalCards() {
      this.total = this.cards.length;
    },
  },

  beforeMount() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  },
  beforeUpdate() {
    this.setTotalCards()
  },
  components: {
    "my-header": Header,
    "card": Card,
    "my-footer": Footer,
  },
  computed: {
    cards() {
      return this.$store.getters.getPosts;
    },
    user() {
      return this.$store.getters.getLoggedUser;
    },

    paginatedCards() {
      const start = (this.current - 1) * this.perPage,
        end = start + this.perPage;
      return this.cards.slice(start, end);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  padding: 50px;
  gap: 10px;
}
.pagination {
  width: 60%;
  margin: 30px auto;
}
</style>
