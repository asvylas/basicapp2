<template>
  <v-toolbar dark dense color="primary">
    <router-link to="/">
      <v-toolbar-title dark class="white--text">YourLogoCouldBeHere</v-toolbar-title>
    </router-link>
    <router-link dark to="/listings">
      <v-btn 
      flat 
      dark>Listings</v-btn>
    </router-link>
    <v-spacer></v-spacer>
     <router-link to="/login">
      <v-btn 
      v-if="!$store.state.userLoggedIn"
      dark
      flat>Login</v-btn>
    </router-link>
    <router-link dark to="/register">
      <v-btn 
      v-if="!$store.state.userLoggedIn"
      flat 
      dark>Register</v-btn>
    </router-link>
    <router-link dark :to="{ path: `/profile/${this.$store.state.id}` }">
      <v-btn 
      v-if="$store.state.userLoggedIn"
      flat
      dark>Profile</v-btn>
    </router-link>
    <router-link dark to="/logout">
      <v-btn 
      v-if="$store.state.userLoggedIn"
      flat
      @click="logoutUser" 
      dark>Logout</v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
import PropertyServices from '@/services/PropertyServices'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Header',
  data () {
    return {
      drawer: null,
    }
  },
  props: {
      source: String
    },
      created () {
    if(AuthenticationService.sessionStoreLogin()) {
      this.$store.dispatch('loading', false)
      this.$router.push('/')
    }
  },
  methods: {
    async logoutUser(){
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>

<style scoped>

</style>
