<template>
  <div class="pod-container">
    <tr>
      <td v-for="(col, index) in row" v-bind:key="index">
        <PodItem
          :item="col"
        />
      </td>
    </tr>
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
import PodItem from './PodItem.vue';

export default {
    name: "PodContainerRow",
    props: ["row"],
    data() {
      return {
        
      };
    },
    mounted() {
    
    },
    methods: {
      podClicked() {
        console.log("pod clicked: ", this.item.id);
      },
    },
    components: { PodItem }
};
</script>
