<template>
  <div class="mb-3" style="max-width: 75vw; max-width: 600px; margin: auto;">
    <h2>Add Participant</h2>
    <form @submit.prevent="addParticipant">
      <input v-model="newParticipant.name" placeholder="Name" required class="form-control mb-2" />
      <input v-model="newParticipant.age" placeholder="Age" required class="form-control mb-2" />
      <input v-model="newParticipant.country" placeholder="Country" required class="form-control mb-2" />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ParticipantForm",
  data() {
    return {
      newParticipant: {
        name: '',
        age: '',
        country: ''
      }
    };
  },
  methods: {
    async addParticipant() {
      try {
        await axios.post(`${this.$baseURL}/Participant`, this.newParticipant);
        this.$emit('participantAdded');
        this.newParticipant.name = '';
        this.newParticipant.age = '';
        this.newParticipant.country = '';
      } catch (error) {
        console.error('Error adding participant:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>