<template>
  <v-layout column class="mb-5">
    <v-flex xs10 offset-xs1>
        <search-listings/>
        <listings-panel/>
    </v-flex>
  </v-layout>
</template>

<script>
import SearchListings from '@/components/listings/SearchListings'
import ListingsPanel from '@/components/listings/ListingsPanel'
import PropertyServices from '@/services/PropertyServices'
export default {
  name: 'Listings',
  components: {
    SearchListings,
    ListingsPanel
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
