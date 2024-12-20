<template>
    <tr>
      <td>{{ participant.name }}</td>
      <td>{{ participant.age }}</td>
      <td>{{ participant.country }}</td>
      <td><button class="btn btn-danger" @click="$emit('deleteParticipant', participant.id)">Delete</button></td>
    </tr>
  </template>
  
  <script>
  export default {
    name: "ParticipantItem",
    props: {
      participant: Object
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>