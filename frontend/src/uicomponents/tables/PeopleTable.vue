<template>
  <div class="table-container">
    <b-table
        id="people-table"
        :items="ajaxPagination"
        :fields="headers"
        :filter="filters"
        :per-page="perPage"
        :current-page="currentPage"
        :tbody-tr-class="rowClass"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
        ref="peopleTable"
        small
        dark
        table-variant="dark"
        @row-selected="onRowSelected"
        @filtered="onFiltered"
        @sort-changed="onSortChanged"
      >
      <template #cell(profile)="data">
        <img v-if="data" class="img-profile" src="@/assets/ui/male_profile.png" />
      </template>
    </b-table>
  </div>
</template>

<style lang="css" scoped>

  table {
    font-size: 12px !important;
  }
  
  .img-profile {
    max-width: 18px;
  }

  .table-container {
    background-color: white;
    clear: both;
  }

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

export default {
    name: "PeopleTable",
    props: ["item"],
    components: {  },
    data() {
      return {
        orderBy: {},

        filters: {
          text: '',
          status: 'all',
        },
        perPage: 100,
        currentPage: 1,
        
        headers: [
          {
            key: 'profile',
            label: '',
            sortable: false
          },
          {
            key: 'fname',
            label: 'Name',
            sortable: true,
            formatter: (_, __, item) => {
              return `${item.fname} ${item.lname}`;
            },
            sortByFormatted: true,
            filterByFormatted: true,
            thClass: 'w-165px',
            tdClass: 'w-165px'
          },
          {
            key: 'status',
            label: 'Status',
            formatter: (_, __, item) => {
              return this.getStatus(item.status);
            },
            sortByFormatted: true,
            filterByFormatted: true,
            // thClass: 'w-165px',
            // tdClass: 'w-165px',
            sortable: true
          },
          {
            key: 'age',
            label: 'Age',
            sortable: true
          },
          {
            key: 'eth',
            label: 'Ethnicity',
            sortable: true
          },
          {
            key: 'ass',
            label: 'Assignment',
            sortable: true
          },
          
          {
            key: 'gender',
            label: 'G',
            sortable: true
          },
          
          {
            key: 'sa',
            label: 'A',
            sortable: true
          },
          {
            key: 'sb',
            label: 'B',
            sortable: true
          },
          {
            key: 'sc',
            label: 'C',
            sortable: true
          },
          {
            key: 'sd',
            label: 'D',
            sortable: true
          },
          {
            key: 'se',
            label: 'E',
            sortable: true
          },
          {
            
            key: 'show_details',
            label: ''
          }
          
        ],
        testData: [
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  },
          { fname: 'Michael', lname: 'Nilsson', dob: '20090101', title: 'CAP', status: 'HIB', gender: 'M', age: 18, eth: 'Caucasian', ass: 'Pilot', sa: 10, sb: 33, sc: 23, sd: 8, se: 11 },
          { fname: 'Bob', lname: 'Jacobs', dob: '20100101', title: 'LTN', status: 'HIB', gender: 'M', age: 22, eth: 'African', ass: 'Agriculture', sa: 11, sb: 29, sc: 19, sd: 7, se: 9  }

        ]
      };
    },
    mounted() {
    
    },
    methods: {
      rowClass(item, type) {
        if (item && type === 'row') {
          if (item.head) {
            return 'font-weight-bolder';
          }

          if (item.is_created) {
            return 'text-success';
          }
        }

        return null;
      },

      onSortChanged(sortChanged) {
        console.log('onSortChanged', sortChanged);

        if (sortChanged.sortBy === '') {
          this.orderBy = undefined;
        }
        else {
          this.orderBy = {
            
          };

          this.orderBy[sortChanged.sortBy] = sortChanged.sortDesc ? 'desc' : 'asc';
        }
      },

      onFiltered(filteredItems) {
        console.log('onFiltered', filteredItems);
      },

      onRowSelected(items) {
        console.log('onRowSelected', items);
      },
      getStatus(status) {
        switch(status) {
          case 'HIB': return 'Hibernating';
          default: return 'Undefined';
        }
      },
      reloadTable() {
        this.$refs['peopleTable'].refresh();
      },

      getPageCount() {
        
        const options = {

        };


        if (this.filters.status) {
          options.status = this.filters.status;

          if (this.filters.status === 'all') {
            options.status = undefined;
          }
        }

        // Future: fetch data
        /*axios 
          .post(`/member_renew/count/${this.currentPeriodId}?page=${this.currentPage}&limit=${this.perPage}`, {
            options
          })
          .then(res => {

            var arr = res.data;
            
            callback(arr || []);
          })
          .catch(err => {
            this.toastr('danger', 'Fel', 'Kunde inte hämta sida');
            console.error('pagination get error', err);
          });
        
        */

      },

      ajaxPagination: function(ctx, callback) {
        //const vm = this;
        /*let params = {
          pageNo: ctx.currentPage,
          pageSize: ctx.perPage,
          flag: 0,
          po: vm.searchOrderNumber,
          styNum: vm.searchStyleNumber
        };*/

        console.log('pagination update');

        
        const options = {

        };

        
        if (this.filters.status) {
          options.status = this.filters.status;

          if (this.filters.status === 'all') {
            options.status = undefined;
          }
        }
        

        if (this.filters.text !== '') {
          options.text = this.filters.text;
        }

        this.getPageCount();

        callback(this.testData);

        // Future: fetch data
        /*axios 
          .post(`/member_renew/list/${this.currentPeriodId}?page=${this.currentPage}&limit=${this.perPage}`, {
            options
          })
          .then(res => {

            var arr = res.data;
            
            callback(arr || []);
          })
          .catch(err => {
            this.toastr('danger', 'Fel', 'Kunde inte hämta sida');
            console.error('pagination get error', err);
          });
        
        */
        
        return null;
      },
    },
    
};
</script>
