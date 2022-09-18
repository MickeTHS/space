<template>
  <div class="pod">
    <b-img v-if="item.status !== 'DEAD'" @click.prevent="podClicked" class="pod-img" src="ui/man_cyan.png"></b-img>
    <b-img v-else @click.prevent="podClicked" class="pod-img-d" src="ui/skull_red.png"></b-img>
  </div>
</template>

<style lang="css" scoped>
  .pod {
    border: 1px solid #aafffc;
    /*background-color: white;*/
    width: 30px;
    height: 40px;
  }

  .pod:hover {
    background-color: #2d7977;
    cursor: pointer;
  }

  .pod-img {
    width: 14px;
    padding-top: 4px;
  }

  .pod-img-d {
    width: 14px;
    padding-top: 4px;
  }
</style>

<script>


export default {
  name: "PodItem",
  props: ['item'],
  data() {
    return {
      
    };
  },
  mounted() {
  
  },
  methods: {
    podClicked() {
      console.log('pod clicked: ', this.item.id);
    },
  }
};
</script>
