<template>
  <div class="right-control" v-if="showLayers.length!=0">
    <div class="right-control-title">
      农业灌溉
    </div>
    <a-table :columns="columns" :bordered="true" :data-source="data" :customRow="rowClick" v-if="showType">
    </a-table>
    <div class="detailObj.name" v-if="!showType">
      <a-card :title="detailObj.name" style="width: 320px">
        <a slot="extra" @click="linkBack()">返回</a>
        <p>id:{{ detailObj.key }}</p>
        <p>名称:{{ detailObj.name }}</p>
        <p>灌溉面积:{{ detailObj.area }}</p>
        <p>引水能力：{{ detailObj.num }}</p>
      </a-card>
    </div>
  </div>
</template>

<script>
import {mapState} from "_vuex@3.1.0@vuex";

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    slots: {title: 'customTitle'},
    scopedSlots: {customRender: 'name'},
  },
  {
    title: '灌溉面积',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: '引水能力',
    dataIndex: 'num',
    key: 'num',
  },
];

const data = [
  {
    key: '1',
    name: '水管站1',
    area: 32,
    num: 1001,
  },
  {
    key: '2',
    name: '水管站2',
    area: 42,
    num: 1002,
  },
  {
    key: '3',
    name: '水管站3',
    area: 52,
    num: 1003,
  },
];
export default {
  name: "RightControl",
  data() {
    return {
      data: [],
      columns,
      showType: true,
      detailObj: {},
      rowClick: record => ({
        // 事件
        on: {
          click: () => {
            this.showType = false
            // 点击改行时要做的事情
            // ......
            console.log(record, 'record')
            this.detailObj = {...record}
            console.log(this.detailObj)
            this.$store.dispatch('setFlyPoint', [record])
          }
        }
      })
    };
  },
  computed: {
    ...mapState({
      showLayers: (state) => {
        return state.map.showLayers
      },
      setFlyPoint: state => {
        return state.map.setFlyPoint
      },
      setLayersPoint: state => {
        return state.map.setLayersPoint
      }
    })
  },
  watch: {
    showLayers: {
      handler(newValue) {
        const showLayerIds = newValue.split(",")
        console.log(showLayerIds)
        if (showLayerIds.indexOf('07') > -1 && showLayerIds.indexOf('03') == -1) {
          this.getVideoList()
        }
        else if (showLayerIds.indexOf('03')>-1 && showLayerIds.indexOf('07')  ==-1) {
          this.getIrrigationList()
        }
        else {
          this.getAllList()
        }
      },
      immediate: true
    },
    setLayersPoint:{
      handler(newValue){
        const objItem=this.data.filter((item)=>item['key']==newValue.key)
        this.detailObj = {...objItem[0]}
        this.showType = false
      }
    }
  },

  mounted() {


  },
  methods: {
    getIrrigationList() {
      this.data=[]=[]
      console.log(this.showLayers)
      for (let i = 1; i <= 10; i++) {
        let lng = 75.740000
        let lat = 39.130000
        let obj = {
          lng: lng + i * 0.05,
          lat: lat - i * 0.04,
          key: i + 1,
          name: '水管站' + i,
          area: 52 + 1,
          num: 1000 + i,
          type: "irrigation"
        }
        this.data.push((obj))
      }
    },
    getVideoList() {
      console.log(this.showLayers)
      this.data=[]
      for (let i = 1; i <= 10; i++) {
        let lng = 75.740000
        let lat = 39.130000
        let obj = {
          lng: lng + i * 0.09,
          lat: lat ,
          key: i + 1,
          name: '视频点' + i,
          area: 52 + 1,
          num: 1000 + i,
          type: "irrigation"
        }
        this.data.push((obj))
      }
    },
    getAllList() {
      this.data=[]
      console.log(this.showLayers)
      for (let i = 1; i <= 20; i++) {
        if(i<=10){
          let lng = 75.740000
          let lat = 39.130000
          let obj = {
            lng: lng + i * 0.05,
            lat: lat - i * 0.04,
            key: i + 1,
            name: '水管站' + i,
            area: 52 + 1,
            num: 1000 + i,
            type: "irrigation"
          }
          this.data.push((obj))
        }else{
          let lng = 75.7240000
          let lat =39.130000
          let obj = {
            lng: lng + (i-10) * 0.09,
            lat: lat,
            key: i + 1,
            name: '视频点' + i,
            area: 52 + 1,
            num: 1000 + i,
            type: "irrigation"
          }
          this.data.push((obj))
        }


      }
    },
    linkBack() {
      this.showType = true
    }
  }

}
</script>
<style lang="less" scoped>
.right-control {
  position: absolute;
  top: 50px;
  right: 20px;
  z-index: 101;
  width: 350px;
  background: #fff;
  padding: 15px;

  /deep/ .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    padding: 8px 16px;
  }

  /deep/ .ant-table-tbody > tr > td {
    padding: 8px 16px;
  }

  .right-control-title {
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
  }

}
</style>
