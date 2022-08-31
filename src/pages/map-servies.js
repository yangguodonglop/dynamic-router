import * as mars2d from 'mars2d'
import {TreeNodeType} from './config'
import store from '../store/index'

export class MapViewer {
  mapInstance
  businessLayers = {}
  gifLayerKey

  constructor(containerId, mapOptions) {
    this.mapInstance = new mars2d.Map(containerId, mapOptions)
  }

  setLayerVisiable(layerKeys) {
    layerKeys.forEach((item) => {
      if (item.type == 'geography' && !this.businessLayers[item.type]) {
        this.businessLayers[item.type] = new mars2d.layer.GeoJsonLayer();
        this.mapInstance.addLayer(this.businessLayers[item.type])
        this.addGeoJson(item.type)
      } else if (item.type == 'video' && !this.businessLayers[item.type]) {
        this.businessLayers[item.type] = new mars2d.layer.GraphicLayer();
        this.mapInstance.addLayer(this.businessLayers[item.type])
        this.addMark(item.type)
      } else if (item.type == 'water' && !this.businessLayers[item.type]) {
        this.businessLayers[item.type] = new mars2d.layer.GeoJsonLayer();
        this.mapInstance.addLayer(this.businessLayers[item.type])
        this.addPointLine(item.type)
      } else if (item.type == 'irrigation' && !this.businessLayers[item.type]) {
        this.businessLayers[item.type] = new mars2d.layer.GeoJsonLayer();
        this.mapInstance.addLayer(this.businessLayers[item.type])
        this.addMark(item.type)
      }
    })
    const layerTypes = []
    layerKeys.forEach((item) => {
      layerTypes.push(item['type'])
    })
    for (const key in this.businessLayers) {
      if (Object.hasOwnProperty.call(this.businessLayers, key)) {
        const item = this.businessLayers[key]
        if (layerTypes.indexOf(key) > -1) {
          item.show = true
        } else {
          item.show = false
        }
      }
    }
  }
// 添加点mark
  addMark(type) {
    const graphicItem = TreeNodeType.filter((item) => item['type'] == type)
    for (let i = 1; i <= 10; i++) {
      const graphicOptions = {
        name: graphicItem[0]['name'],
        url: graphicItem[0]['url'],
        latlng: type == 'video' ? [39.130000, 75.7240000 + i * 0.09] : [39.130000 - i * 0.04, 75.740000 + i * 0.05],
        style: {
          image: type == 'video' ? require('@/assets/icon-video.png') : require('@/assets/icon-gate.png'),
          width: 28,
          height: 28,
          horizontalOrigin: mars2d.HorizontalOrigin.CENTER,
          verticalOrigin: mars2d.VerticalOrigin.BOTTOM
        },
        attr: {
          lng: 75.740000 + i * 0.05,
          lat: 39.130000 - i * 0.04,
          key: i + 1,
          name: '水管站' + i,
          area: 52 + 1,
          num: 1000 + i,
          type: "irrigation"
        }
      }
      const graphic = new mars2d.graphic.Marker(graphicOptions)
      if (type == 'irrigation') {
        graphic.on(mars2d.EventType.click, (event) => {
          const target = event.target
          store.dispatch('setLayersPoint', target.attr)
          const pointItem = {
            point: [target.attr.lat, target.attr.lng],
            type: target.attr.key
          }
          this.clearGifLayer()
          this.toFlyPonit(pointItem)
        })
      } else if (type == 'video') {
        let _this = this
        graphic.bindPopup(this.getInnerHtml()).openPopup()
        graphic.on(mars2d.EventType.popupopen, function (event) {
          _this.clearGifLayer()
        })
        graphic.on(mars2d.EventType.popupclose, function (event) {
          const container = event.popup._container // popup对应的DOM
          console.log("移除了popup", container)
        })
      }
      this.businessLayers[type].addGraphic(graphic)
    }
  }

  // 添加基础地理线
  addGeoJson(type) {
    const graphicItem = TreeNodeType.filter((item) => item['type'] == type)
    const graphicOptions = {
      name: graphicItem[0]['name'],
      url: graphicItem[0]['url'],
      flyTo: true,
    }
    const graphic = new mars2d.layer.GeoJsonLayer(graphicOptions)
    graphic.on(mars2d.EventType.click, (event) => {
      console.log(event)
    })
    this.businessLayers[type].addGraphic(graphic)
  }

  // 添加水系线
  addPointLine(type) {
    const graphicItem = TreeNodeType.filter((item) => item['type'] == type)
    const graphicOptions = {
      name: graphicItem[0]['name'],
      url: graphicItem[0]['url'],
      symbol: {
        type: "polyline",
        styleOptions: {
          color: "green",
          width: 5
        },
        attr:{
          name:"阿克陶县"
        }
      },
    }
    const graphic = new mars2d.layer.GeoJsonLayer(graphicOptions)
    graphic.on(mars2d.EventType.click, (event) => {
      let waterName=event['layer']['marsOptions']['attr']['Name']
      console.log(event['layer']['marsOptions']['attr']['Name'])
      graphic.bindPopup(function (event) {
        const attr =  {}
        attr["名称:"] = waterName
        // attr["来源"] = "我是layer上绑定的Popup"
        // attr["备注"] = "我支持鼠标交互"
        return mars2d.Util.getTemplateHtml({ title: "水系线", template: "all", attr: attr })
      })
    })
    this.businessLayers[type].addGraphic(graphic)
  }

  // 定位地图至指定位置
  toFlyPonit(pointItem) {
    const options = {
      animate: true,
      duration: 1.5,
      easeLinearity: 0.5
    }
    this.mapInstance.setView(pointItem.point, 11, options)
    this.addGifPoint(pointItem)
  }

  // 圆圈中心往外扩散动画点
  addGifPoint(pointItem) {
    this.gifLayerKey = pointItem.type
    this.businessLayers[pointItem.type] = new mars2d.layer.GraphicLayer();
    this.mapInstance.addLayer(this.businessLayers[pointItem.type])
    const graphicOptions = new mars2d.graphic.Marker({
      latlng: pointItem.point,
      style: {
        width: 15,
        pulse: true,
        pulseColor: "#ff0000"
      },
      attr: {}
    })
    const graphic = new mars2d.graphic.Marker(graphicOptions)
    this.businessLayers[pointItem.type].addGraphic(graphic)
  }

  // 视频弹窗内容
  getInnerHtml() {
    const inthtml = `<label>视频</label><video src='//data.mars2d.cn/file/video/lukou.mp4' controls autoplay style="width: 300px;" ></video>`
    return inthtml
  }
  // 清楚扩散圆圈图层
  clearGifLayer() {
    if (this.gifLayerKey) {
      this.mapInstance.removeLayer(this.businessLayers[this.gifLayerKey])
    }
  }
}
