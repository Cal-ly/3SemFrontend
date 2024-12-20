<template>
  <div>
    <h1 style="text-decoration: underline;">Participants</h1>
    <div style="max-width: 75vw; max-width: 600px; margin: auto; text-align: left;">
        <p>Al søgning og filtrering foregår Frontend i JavaScript af følgende grunde:</p>
        <ul>
            <li>Responsivitet: Øjeblikkelig søgning og filtrering uden serverrespons.</li>
            <li>Reduceret serverbelastning: Færre forespørgsler til serveren.</li>
            <li>Båndbreddebesparelse: Undgår gentagne dataoverførsler.</li>
            <li>Offline funktionalitet: Søgning og filtrering kan ske offline.</li>
            <li>Forbedret brugeroplevelse: Flydende og interaktiv grænseflade.</li>
            <li>Mindre serverkompleksitet: Forenklet serverkode.</li>
            <li>Skalérbarhed: Udnytter klientens ressourcer.</li>
            <li>Brugertilpasning: Personlig oplevelse uden at påvirke andre brugere.</li>
        </ul>
    </div>
    <div class="mb-3" style="max-width: 75vw; max-width: 600px; margin: auto;">
      <input v-model="searchQuery" placeholder="Search participants" class="form-control" />
    </div>
    <ul class="list-unstyled" style="max-width: 75vw; max-width: 600px; margin: auto;">
      <table class="table table-striped table-bordered text-center table-hover">
        <thead class="thead-dark">
          <tr>
            <th @click="sortBy('name')">
              Name
              <span v-if="sortKey === 'name'">
                <i :class="sortAsc ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
              </span>
            </th>
            <th @click="sortBy('age')">
              Age
              <span v-if="sortKey === 'age'">
                <i :class="sortAsc ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
              </span>
            </th>
            <th @click="sortBy('country')">
              Country
              <span v-if="sortKey === 'country'">
                <i :class="sortAsc ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="participant in filteredAndSortedParticipants" :key="participant.id">
            <td>{{ participant.name }}</td>
            <td>{{ participant.age }}</td>
            <td>{{ participant.country }}</td>
            <td><button class="btn btn-danger" @click="deleteParticipant(participant.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </ul>

    <h2>Add Participant</h2>
    <div class="mb-3" style="max-width: 75vw; max-width: 600px; margin: auto;">
        <form @submit.prevent="addParticipant">
        <input v-model="newParticipant.name" placeholder="Name" required class="form-control mb-2" />
        <input v-model="newParticipant.age" placeholder="Age" required class="form-control mb-2" />
        <input v-model="newParticipant.country" placeholder="Country" required class="form-control mb-2" />
        <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ParticipantMaster",
  data() {
    return {
      participants: [],
      newParticipant: {
        name: '',
        age: '',
        country: ''
      },
      searchQuery: '',
      sortKey: '',
      sortAsc: true
    };
  },
  created() {
    this.fetchParticipants();
  },
  computed: {
    filteredAndSortedParticipants() {
      let filtered = this.participants.filter(participant => {
        return participant.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               participant.age.toString().includes(this.searchQuery) ||
               participant.country.toLowerCase().includes(this.searchQuery.toLowerCase());
      });

      if (this.sortKey) {
        filtered.sort((a, b) => {
          let result = 0;
          if (a[this.sortKey] < b[this.sortKey]) result = -1;
          if (a[this.sortKey] > b[this.sortKey]) result = 1;
          return this.sortAsc ? result : -result;
        });
      }

      return filtered;
    }
  },
  methods: {
    async fetchParticipants() {
      try {
        const response = await axios.get('https://3semapi-dadpgma4d7bqaecc.westeurope-01.azurewebsites.net/Participant');
        this.participants = response.data;
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    },
    async addParticipant() {
      try {
        const response = await axios.post('https://3semapi-dadpgma4d7bqaecc.westeurope-01.azurewebsites.net//Participant', this.newParticipant);
        this.participants.push(response.data);
        this.newParticipant.name = '';
        this.newParticipant.age = '';
        this.newParticipant.country = '';
      } catch (error) {
        console.error('Error adding participant:', error);
      }
    },
    async deleteParticipant(id) {
      try {
        await axios.delete(`https://3semapi-dadpgma4d7bqaecc.westeurope-01.azurewebsites.net//Participant/${id}`);
        this.participants = this.participants.filter(p => p.id !== id);
      } catch (error) {
        console.error('Error deleting participant:', error);
      }
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortKey = key;
        this.sortAsc = true;
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>