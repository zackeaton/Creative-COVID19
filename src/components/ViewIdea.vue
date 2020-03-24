<template>
  <div id="view-idea">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ idea_name }}</h4>
      </li>
      <!--<li class="collection-item">Idea ID#: {{ idea_id }}</li>-->
      <!--<li class="collection-item">Idea Name: {{ idea_name }}</li>-->
      <li class="collection-item">Idea Description: {{ idea_desc }}</li>
      <li class="collection-item">From: {{ idea_id }}</li>
      <li class="collection-item">Located In: {{ location }}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "view-idea",
  data() {
    return {
      idea_id: null,
      idea_name: null,
      idea_desc: null,
      location: null
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.params.customer_id);

    db.collection("ideas")
      .doc(to.params.idea_id)
      .get()
      .then(doc => {
        next(vm => {
          vm.idea_id = doc.data().idea_id;
          vm.idea_name = doc.data().idea_name;
          vm.idea_desc = doc.data().idea_desc;
          vm.location = doc.data().location;
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  mounted() {
    this.tempId = this.$route.params.idea_id;
    console.log(this.$route);
  },
  methods: {
    fetchData() {
      db.collection("ideas")
        .where("idea_id, " == ", this.$route.params.idea_id, ")
        .get()
        .then(doc => {
          this.idea_id = doc.data().idea_id;
          this.idea_name = doc.data().idea_name;
          this.idea_desc = doc.data().idea_desc;
          this.location = doc.data().location;
        });
    }
  }
};
</script>
