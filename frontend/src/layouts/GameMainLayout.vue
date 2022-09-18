<template>
  <div>
    <b-row>
      <b-col cols="5" class="game-view">
        <CanvasComponent />
      </b-col>
      
      <b-col cols="2">
        <b-row>
          <SelectionFrame />
        </b-row>
        <b-row>
          <MainButtonList />
        </b-row>
      </b-col>

      <b-col cols="5">
        <PodContainer />
      </b-col>
    </b-row>
  </div>  
</template>

<style lang="css" scoped>
  .game-view {
    max-width: 512px;
  }
</style>

<script>
import CanvasComponent from '@/components/CanvasComponent.vue';
import SelectionFrame from '@/uicomponents/SelectionFrame.vue';
import MainButtonList from '@/uicomponents/MainButtonList.vue';
import PodContainer from '@/uicomponents/cryo/PodContainer.vue';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    CanvasComponent,
    SelectionFrame,
    MainButtonList,
    PodContainer
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
