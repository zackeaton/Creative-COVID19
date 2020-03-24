<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Social Distancing Can Be Fun 🧠</h4>
        <h6>
          A creativly curated list of things to do while in
          <s>self-isolation</s> quarantine.
        </h6>
      </li>
      <li v-for="idea in ideas" v-bind:key="idea.id" class="collection-item">
        <div class="chip">{{ idea.idea_id }} from {{ idea.location }}</div>

        {{ idea.idea_name }}:
        {{ idea.idea_desc }}
        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-idea',
            params: { idea_id: idea.id }
          }"
        >
          <i class="small fa fa-folder-open"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/new-idea" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      ideas: []
    };
  },
  created() {
    db.collection("ideas")
      .orderBy("idea_id")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            idea_id: doc.data().idea_id,
            idea_name: doc.data().idea_name,
            idea_desc: doc.data().idea_desc,
            location: doc.data().location
          };
          this.ideas.push(data);
        });
      });
  }
};
</script>
