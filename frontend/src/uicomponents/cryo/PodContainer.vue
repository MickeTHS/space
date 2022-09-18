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
          [{ id: 1, status: 'HIB' }, { id: 2, status: 'HIB' }, { id: 3, status: 'HIB' }, { id: 4, status: 'HIB' }, { id: 5, status: 'HIB' }, { id: 6, status: 'HIB' }, { id: 7, status: 'HIB' }, { id: 8, status: 'DEAD' }, { id: 9, status: 'HIB' }, { id: 10, status: 'HIB' }, { id: 11, status: 'HIB' }, { id: 12, status: 'HIB' },],
          [{ id: 21, status: 'HIB' }, { id: 22, status: 'HIB' }, { id: 23, status: 'HIB' }, { id: 24, status: 'HIB' }, { id: 25, status: 'HIB' }, { id: 26, status: 'HIB' }, { id: 27, status: 'HIB' }, { id: 28, status: 'HIB' }, { id: 29, status: 'HIB' }, { id: 30, status: 'HIB' }, { id: 31, status: 'HIB' }, { id: 32, status: 'HIB' },]
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
