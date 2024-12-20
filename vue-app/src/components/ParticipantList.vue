<template>
    <div>
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
            <ParticipantItem
              v-for="participant in filteredAndSortedParticipants"
              :key="participant.id"
              :participant="participant"
              @deleteParticipant="$emit('deleteParticipant', participant.id)"
            />
          </tbody>
        </table>
      </ul>
    </div>
  </template>
  
  <script>
  import ParticipantItem from './ParticipantItem.vue';
  
  export default {
    name: "ParticipantList",
    components: {
      ParticipantItem
    },
    props: {
      participants: Array
    },
    data() {
      return {
        searchQuery: '',
        sortKey: '',
        sortAsc: true
      };
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