<template>
  <div class="col-md-12 col-12 text-left">
    <p class="alert alert-primary">Count app</p>
    <ul class="px-0 mx-0">
      <li>
        <p>
          $store.state.count:
          <span class="text-primary font-weight-bold">state</span>
          <span class="text-danger">{{$store.state.count}}</span>
        </p>
      </li>
      <li>
        <p>
          $store.getters.tenCount:
          <span class="text-primary font-weight-bold">getters</span>
          <span class="text-danger">{{tenResult}}</span>
        </p>
      </li>
      <li>
        <p>
          nameCount:
          <span class="text-primary font-weight-bold">mapGetters</span>
          <span class="text-danger">{{nameCount}}</span>
        </p>
      </li>
    </ul>
    <hr>
    <p>
      <button class="btn btn-primary" @click="$store.state.count++">Increment</button>
      $store.state.count++
    </p>
    <p>
      <button class="btn btn-primary" @click="$store.state.count--">Decrement</button>
      $store.state.count--
    </p>
    <hr>
    <p>
      <button class="btn btn-primary" @click="$store.commit('increment', 30)">
        Increment
        <span class="font-weight-bold">mutations</span>
      </button>
      <span class="d-block">
        <span class="text-primary">$store.commit('increment', 30)</span> === $emit socket === state.count + 30
      </span>
    </p>
    <p>
      <button class="btn btn-primary" @click="decrement(30)">
        Decrement
        <span class="font-weight-bold">mutations</span>
      </button>
      <span class="d-block">
        <span class="text-primary">decrement(30)</span> === $emit socket === state.count + 30
      </span>
    </p>
    <hr>
    <p>
      <button class="btn btn-primary" @click="ACTION_INCREMENT()">
        Increment
        <span class="font-weight-bold">actions</span>
      </button>
      <span class="d-block">
        <span class="text-primary">ACTION_INCREMENT()</span> === depatch reactjs
      </span>
    </p>
    <p>
      <button class="btn btn-primary" @click="ACTION_DECREMENT()">
        Decrement
        <span class="font-weight-bold">actions</span>
      </button>
      <span class="d-block">
        <span class="text-primary">ACTION_DECREMENT()</span> === depatch reactjs
      </span>
    </p>
    <hr>
    <div class="alert alert-primary">Overview</div>
    <code>
      <p>
        getters
        <span class="text-primary">like</span>
        computed
        <span class="text-primary">link</span>
        ...mapGetters(['nameGetter',...]) : để biến đổi dữ liệu mà không làm thay đổi state
      </p>
      <p>
        mutations
        <span class="text-primary">like</span>
        methods
        <span class="text-primary">link</span>
        ...mapMutations(['nameMutations',...]) : để call api hoặc làm một cái gì đó
      </p>
      <p>
        actions
        <span class="text-primary">like</span>
        methods
        <span class="text-primary">link</span>
        ...mapActions(['nameActions',...]) : để sử lý bất đồng bộ, dùng commit để call mutations.
      </p>
    </code>
    <hr>
    <div class="alert alert-primary">Store.js</div>
    <pre><code>
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1, // global gọi thay đồi toàn cục
    task: [{ todo: 'Learn Vuex', status: 'process' }, { todo: 'Learn nuxt', status: 'done' }]
  },
  getters: {
    tenCount: (state) => {
      // tạo computed đã qua xử lý không làm thay đổi giá trị state
      return state.count * 10
    },
    nameCount: (state) => {
      return state.count + ' product'
    }
  },
  mutations: {
    // để call api rồi return promise cho action gọi
    increment(state, n) {
      state.count += n
    },
    decrement(state, n) {
      state.count -= n
    }
  },
  actions: {
    // để gọi qua mutations để sử lý hàm bất đồng bộ
    ACTION_INCREMENT: ({ commit }) => {
      commit('increment', 90)
    },
    ACTION_DECREMENT: ({ commit }) => {
      setTimeout(() => {
        commit('decrement', 90)
      }, 3000)
    }
  }
})
    </code></pre>
    <div class="alert alert-primary">CountComponent.js</div>
    <pre>
        <code>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['tenResult', 'nameCount']),
    tenResult() {
      return this.$store.getters.tenCount
    }
  },
  methods: {
    ...mapMutations(['decrement']),
    ...mapActions(['ACTION_INCREMENT', 'ACTION_DECREMENT'])
  }
}
        </code>
    </pre>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['tenResult', 'nameCount']),
    tenResult() {
      return this.$store.getters.tenCount
    }
  },
  methods: {
    ...mapMutations(['decrement']),
    ...mapActions(['ACTION_INCREMENT', 'ACTION_DECREMENT'])
  }
}
</script>
