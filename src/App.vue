<template>
  <div id="app">
    <top-bar :school="school"></top-bar>
    <router-view @data="syncData"/>
    <copy-right :links="links"></copy-right>
  </div>
</template>

<script>
import TopBar from '@/components/common/TopBar'
import CopyRight from '@/components/common/CopyRight'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    TopBar,
    CopyRight
  },
  data () {
    return {
      school: '',
      links: []
    }
  },
  async created () {
    const r = await axios('/start')
    console.log(r)
  },
  methods: {
    syncData (data) {
      this.school = data.school
      this.links = data.links
    }
  }
}
</script>
