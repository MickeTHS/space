<template>
  <div class="page">
    <PeopleTable />
  </div>  
</template>

<style lang="css" scoped>
  
</style>

<script>
//import CanvasComponent from '@/components/CanvasComponent.vue';
import PeopleTable from '@/uicomponents/tables/PeopleTable.vue';

export default {
// eslint-disable-next-line
  name: "Population",
  props: {
    msg: String
  },
  components: {
    PeopleTable,
  },
  mounted() {
    console.log('dashboard loaded');
  },
  data() {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    width: 100%;
    padding: 16px;
  }

</style>
