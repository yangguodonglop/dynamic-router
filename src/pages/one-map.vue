<template>
  <div class="map-con">
    <div id="mars2dContainer" class="mars2d-container"></div>
    <left-control></left-control>
    <right-control></right-control>
  </div>

</template>

<script>
import 'mars2d/dist/mars2d.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet'
import {MapViewer} from './map-servies.js'
import {mapOptions, TreeNodeType} from './config'
import LeftControl from "./left-control/LeftControl";
import RightControl from "./right-control/RightControl";
import {mapState} from 'vuex'

export default {
  name: "one-map",
  components: {LeftControl,RightControl},

  data() {
    return {
      MapViewer: null
    }
  },
  computed: {
    ...mapState({
      showLayers: (state) => {
        return state.map.showLayers
      },
      setFlyPoint:state => {
        return state.map.setFlyPoint
      }
    })
  },
  watch: {
    showLayers: {
      handler(newValue) {
        const showLayerIds = newValue.split(",")
        const layerKeys = TreeNodeType.filter((item) => showLayerIds.indexOf(item['key']) > -1)
        this.MapViewer.setLayerVisiable(layerKeys)
      },
      immediate: true
    },
    setFlyPoint(newValue){
      const pointItem={
        point:[newValue[0].lat, newValue[0].lng],
        type:newValue[0].key
      }
      this.MapViewer.clearGifLayer()
      this.MapViewer.toFlyPonit(pointItem)
    }
  },
  mounted() {
    console.log(MapViewer)
    this.initMap()
  },
  methods: {
    initMap() {
      this.MapViewer = new MapViewer('mars2dContainer', mapOptions)
    }
  }
}
</script>

<style scoped>
.map-con {
  width: 100%;
  height: 100%;
}

.mars2d-container {
  z-index: 1;

}
</style>
