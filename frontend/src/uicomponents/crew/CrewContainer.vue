<template>
  <div class="crew-container">
    <CrewPersonRow
      v-for="(row, index) in rows" 
      :key="index"
      :item="row"
    />
  
  </div>
</template>

<style lang="css" scoped>
  .crew-container {
     
  }

</style>

<script>
import CrewPersonRow from './CrewPersonRow.vue';

export default {
    name: "CrewContainer",
    props: [],
    data() {
      return {
        rows: [
          { id: 1, name: 'LUKE BRAWL', assignment: 'CAP', status: 'AWA' }, { id: 2, name: 'SVEN HIGGS', assignment: null, status: 'AWA' },
        ]
      };
    },
    mounted() {
    
    },
    methods: {
      
    },
    components: { CrewPersonRow }
};
</script>
