<template>
  <div class="crew-row">
    <div class="assignment">
      {{ assignmentName }}
    </div>
    <div class="name">{{ item.name }}</div>
    <div class="action"> 
      <a
          v-if="item && item.assignment"
          class="btn btn-primary font-weight-bolder font-size-sm"
          @click.prevent="assignClicked"
        >
          ASSIGN
      </a>
    
      <a
        v-if="!item || !item.assignment"
        class="btn btn-danger font-weight-bolder font-size-sm"
        @click.prevent="removeCLicked"
        >
          REPLACE
        </a>
    </div>
    
  </div>
</template>

<style lang="css" scoped>
  .crew-row {
    /*background-color: white;*/
    width: 400px;
    clear: both;
  }

  .assignment {
    margin: 4px;
    padding: 4px;
    border: 1px solid #aafffc;
    float: left;
    color: white;
    width: 96px;
    font-size: 11px;
  }

  .name {
    text-align: left;
    margin: 4px;
    padding: 4px;
    border: 1px solid #aafffc;
    float: left;
    color: white;
    width: 196px;
    font-size: 11px;
  }

  .action {
    float: left;
    font-size: 11px;
  }

  .btn {
    margin-top: 4px;
    font-size: 12px;
    padding: 4px;
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
  name: "CrewPersonRow",
  props: ['item'],
  computed: {
    assignmentName() {
      switch (this.item.assignment) {
        case 'CAP': return 'CAPTAIN';
        default: return 'NONE';
      }
    },
  },
  data() {
    return {
      
    };
  },
  mounted() {
    console.log('person', this.item);
  },
  methods: {
    assignClicked() {},
    removeClicked() {}
  }
};
</script>
