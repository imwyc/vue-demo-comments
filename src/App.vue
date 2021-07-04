<template>
  <div>
    <Header />
    <div class="container">
      <LeftAdd :addComments="addComment"></LeftAdd>
      <RightList :coms="comments" :deleteComment="deleteComment"> </RightList>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import LeftAdd from '@/components/LeftAdd'
import RightList from '@/components/RightList'

export default {
  name: '',
  components: { Header, LeftAdd, RightList },
  prop: {},
  data() {
    return {
      comments: [
        { id: 1, content: 'vue np', username: '1' },
        { id: 2, content: 'vue np11', username: '2' },
        { id: 3, content: 'vue np11', username: '3' }
      ]
    }
  },
  activated() {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
    deleteComment(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>
<style scoped></style>
