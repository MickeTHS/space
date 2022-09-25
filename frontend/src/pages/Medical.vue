<template>
  <div>
    <b-row>
      <b-col cols="7" class="game-view">
        <PeopleTable />
      </b-col>
      
      <b-col cols="2">
        <b-row>
          <SelectionFrame />
        </b-row>
        <b-row>
          <MainButtonList />
        </b-row>
      </b-col>

      <b-col cols="3">
        <PodContainer />
        <PodOptions />
        <CrewContainer />
      
      </b-col>
    </b-row>
  </div>  
</template>

<style lang="css" scoped>
  
</style>

<script>
//import CanvasComponent from '@/components/CanvasComponent.vue';
import SelectionFrame from '@/uicomponents/SelectionFrame.vue';
import MainButtonList from '@/uicomponents/MainButtonList.vue';
import PodContainer from '@/uicomponents/cryo/PodContainer.vue';
import PodOptions from '@/uicomponents/cryo/PodOptions.vue';
import CrewContainer from '@/uicomponents/crew/CrewContainer.vue';
import PeopleTable from '@/uicomponents/tables/PeopleTable.vue';

export default {
// eslint-disable-next-line
  name: "Medical",
  props: {
    msg: String
  },
  components: {
//    CanvasComponent,
    SelectionFrame,
    MainButtonList,
    PodContainer,
    PodOptions,
    CrewContainer,
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

</style>
