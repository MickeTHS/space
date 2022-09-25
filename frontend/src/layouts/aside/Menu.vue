<template>
  <ul class="menu-nav">
    <router-link to="/dashboard" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
      <a :href="href" @click="navigate">
        <img src="@/assets/ui/menu_dashboard.png" />
      </a>
      
     </li>
    </router-link>

    <router-link to="/navigation" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
      <a :href="href" @click="navigate">
        <img src="@/assets/ui/menu_navigation.png" />
      </a>
      
     </li>
    </router-link>

    <router-link to="/farming" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
      <a :href="href" @click="navigate">
        <img src="@/assets/ui/menu_farming.png" />
      </a>
      
     </li>
    </router-link>

    
    <router-link to="/population" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
      <a :href="href" @click="navigate">
        <img src="@/assets/ui/menu_population.png" />
      </a>
      
     </li>
    </router-link>

    
    <router-link to="/medical" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
      <a :href="href" @click="navigate">
        <img src="@/assets/ui/menu_medical.png" />
      </a>
      
     </li>
    </router-link>

    
    <router-link to="/cryopods" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
      >
      <a :href="href" @click="navigate">
        <img src="@/assets/ui/menu_crypods.png" />
      </a>
      
     </li>
    </router-link>

  </ul>
</template>
<style lang="css" scoped>
  ul, li {
    list-style: none;
  }

  ul {
    padding-left: 8px;
  }

  li {
    margin-top: 10px;
    border: 1px solid #1b433f;
  }

  img {
    max-width: 64px;
    padding: 12px;
  }

  li:hover {
    background-color: #1b433f;
  }


li:hover > a > span > svg,
.menu-item-active > a > span > svg {
  fill: #3699FF;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'KTMenu',
  computed: {
    ...mapGetters([])
  },
  data() {
    return {
      access: {}
    }
  },
  mounted() {

  },
  watch: {
    
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route['path'].indexOf(match) !== -1;
    },
    
  }
};
</script>
