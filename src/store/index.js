import Vuex from 'vuex'
import Vue from 'vue'

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

export default store
