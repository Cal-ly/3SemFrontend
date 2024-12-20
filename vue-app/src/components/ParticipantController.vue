<template>
  <div>
    <h1>Participants</h1>
    <button @click="fetchParticipants" class="btn btn-secondary mb-3">Refresh List</button>
    <ParticipantForm @participantAdded="fetchParticipants" />
    <ParticipantList :participants="participants" @deleteParticipant="deleteParticipant" />
  </div>
</template>

<script>
import axios from 'axios';
import ParticipantForm from './ParticipantForm.vue';
import ParticipantList from './ParticipantList.vue';

export default {
  name: "ParticipantController",
  components: {
    ParticipantForm,
    ParticipantList
  },
  data() {
    return {
      participants: []
    };
  },
  created() {
    this.fetchParticipants();
  },
  methods: {
    async fetchParticipants() {
      try {
        const response = await axios.get(`${this.$baseURL}/Participant`);
        this.participants = response.data;
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    },
    async deleteParticipant(id) {
      try {
        await axios.delete(`${this.$baseURL}/Participant/${id}`);
        this.fetchParticipants();
      } catch (error) {
        console.error('Error deleting participant:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>