<template>
  <div class="col-md-6 col-12">
    <p class="alert alert-primary">Todo app</p>
    <ul>
      <li v-for="(val, index) in $store.state.task" :key="index">
        <input type="checkbox">
        <label>{{val.todo}}</label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
