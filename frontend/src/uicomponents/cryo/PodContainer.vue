<template>
  <div class="pod-container">
    <table>
      <PodContainerRow
        v-for="(row, index) in rows" 
        :key="index"
        :row="row"
      />
    </table>
  </div>
</template>

<style lang="css" scoped>
  .pod {
    border: 1px solid #aafffc;
    /*background-color: white;*/
    width: 28px;
  }

  .pod:hover {
    background-color: #2d7977;
    cursor: pointer;
  }

  .pod-img {
    height: 38px;
    padding: 4px;
  }
</style>

<script>
import PodContainerRow from './PodContainerRow.vue';

export default {
    name: "PodContainer",
    props: ["item"],
    data() {
      return {
        rows: [
          [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 },],
          [{ id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }, { id: 30 }, { id: 31 }, { id: 32 },]
        ]
      };
    },
    mounted() {
    
    },
    methods: {
      podClicked() {
        console.log("pod clicked: ", this.item.id);
      },
    },
    components: { PodContainerRow }
};
</script>
