<template>
  <div>
    <b-row>
      <b-col>
        <b-row>
          <div class="personell-card">
            <div class="pc-row">
              NAME: JOHN SMITH
            </div>
            <div class="pc-row">
              TITLE: LIUTENANT
            </div>
            <div class="pc-row">
              STATUS: HIBERNATING
            </div>
            <div class="pc-row">
              LOCATION: CRYOPOD #A-2331
            </div>

            <div class="pc-row">
              ASSIGNMENT: -
            </div>
            
            <div class="pc-row">
              AGE: 29
            </div>
            <div class="pc-row">
              GENDER: MALE
            </div>
            <div class="pc-row">
              RACE: CAUCASIAN AMERICAN
            </div>
            <div class="pc-row">
              BODY: MUSCULAR
            </div>
            <div class="pc-row">
              MEDICAL CONDITIONS: -
            </div>
            <div class="pc-row">
              EDUCATION: MILITARY OFFICER
            </div>
          </div>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col style="max-width: 280px">
        <b-progress :value="progress.value" :max="progress.max" show-progress animated></b-progress>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <a
          class="btn btn-primary font-weight-bolder font-size-sm"
          @click.prevent="click1"
        >
          AWAKE
        </a>
        
        <a
          class="btn btn-primary font-weight-bolder font-size-sm"
          @click.prevent="click1"
        >
          DIAGNOSE
        </a>
        
        <a
          class="btn btn-danger font-weight-bolder font-size-sm"
          @click.prevent="click1"
        >
          DISCONNECT
        </a>
        
      </b-col>
    </b-row>

  </div>
</template>

<style lang="css" scoped>
  .btn {
    float: left;
    margin-right: 4px;
    margin-top: 4px;
  }

  .pc-row {
    text-align: left;
    color: white;
    font-size: 11px;
  }

  .personell-card {
    border: 1px solid white;
    max-width: 256px;
    padding: 4px;
    margin: 12px;
  }
</style>

<script>

export default {
  name: "PodOptions",
  data() {
    return {
      progress: {
        value: 45,
        max: 100
      }
    };
  },
  mounted() {
  
  },
  methods: {

  }
};
</script>
