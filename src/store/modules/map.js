/* import Vue from 'vue'
import {
  CURRENT_LAYER
} from '@/store/mutation-types'
 */
const map = {
  state: {
    // 左侧tree select的某一个
    currentLayer: '',
    // 左侧tree check的一些
    showLayers: '',
    // 右侧业务面板的列表数据 以及对应的layerId
    businessList: {
      list: [],
      layerId: ''
    },
    setFlyPoint: [],
    setLayersPoint:{}
  },
  mutations: {
    SET_CURRENT_LAYER: (state, val) => {
      state.currentLayer = val
    },
    SET_SHOW_LAYERS: (state, val) => {
      state.showLayers = val
    },
    SET_BUSINESS_LIST: (state, val) => {
      state.businessList = {
        list: val.list,
        layerId: val.layerId
      }
    },
    SET_FLY_POINT: (state, val) => {
      state.setFlyPoint = val
    },
    SET_LAYERS_POINT:(state,val)=>{
      state.setLayersPoint=val
    }
  },
  actions: {
    setCurrentLayer: ({commit}, type) => {
      commit('SET_CURRENT_LAYER', type)
    },
    setShowLayers: ({commit}, type) => {
      commit('SET_SHOW_LAYERS', type)
    },
    setBusinessList: ({commit}, type) => {
      commit('SET_BUSINESS_LIST', type)
    },
    setFlyPoint: ({commit}, type) => {
      commit('SET_FLY_POINT', type)
    },
    setLayersPoint:({commit},type)=>{
      commit('SET_LAYERS_POINT',type)
    }
  }
}

export default map
