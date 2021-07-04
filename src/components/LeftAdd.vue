<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input v-model="username" type="text" class="form-control" placeholder="用户名" />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea v-model="content" class="form-control" rows="6" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: ['addComments'],
  data() {
    return {
      username: '',
      content: ''
    }
  },
  activated() {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    addC() {
      const { username, content } = this
      if (username.trim() && content.trim()) {
        const id = Date.now()
        const obj = {
          id,
          username,
          content
        }
        this.addComments(obj)
      } else {
        alert('输入内容不能为空')
      }
      this.username = ''
      this.content = ''
    }
  }
}
</script>
<style scoped></style>
