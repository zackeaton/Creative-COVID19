<template>
  <div id="new-idea">
    <h3>New Idea</h3>
    <div class="row">
      <form @submit.prevent="saveIdea" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="idea_name" required />
            <label>Idea Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="idea_desc" required />
            <label>Idea Description</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="idea_id" required />
            <label>Submitted By: </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="location" required />
            <label>Location: </label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "new-idea",
  data() {
    return {
      idea_id: null,
      idea_name: null,
      idea_desc: null,
      location: null
    };
  },
  methods: {
    saveIdea() {
      db.collection("ideas")
        .add({
          idea_id: this.idea_id,
          idea_name: this.idea_name,
          idea_desc: this.idea_desc,
          location: this.location
        })
        .then(docRef => {
          this.$router.push("/");
        });
    }
  }
};
</script>
