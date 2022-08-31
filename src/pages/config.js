export const mapOptions ={
  zoom: 11,
  center: {
    lng: 75.724456,
    lat: 39.132008
     //lng: 117.238609, lat: 31.824373

   },
  minZoom: 3,
  maxZoom: 18,
  control: {
    scale: true,
    locationBar: {
      crs: 'CGCS2000_GK_Zone_3',
      template: '<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>横{crsx}  纵{crsy}</div> <div>层级:{level}</div>'
    },
    zoom: {
      position: 'bottomleft'
    },
    toolBar: {
      position: 'bottomleft'
    },
    layers: {
      position: 'topleft'
    }
  },
  basemaps: [
    {
      name: '高德地图',
      type: 'gaode',
      layer: 'vec',
      show: true
    },
    {
      name: '高德卫星',
      type: 'group',
      layers: [
        {
          name: '底图',
          type: 'gaode',
          layer: 'img_d'
        },
        {
          name: '注记',
          type: 'gaode',
          layer: 'img_z'
        }
      ]
    }
  ],
  operationallayers: [
    {
      name: '经纬网',
      type: 'graticule'
    }
  ]
}
export const TreeNode = [
  {
    title: '基础地理',
    key: '01',
    icon: 'smile',
    slots: {
      icon: 'folder',
    },
    children: [
      {
        type: 'polygon',
        title: '行政区划',
        key: '0101',
        isLeaf: true,
        checked: true,
        layerName: 'AdministrativeDivision',
        fillColor: '#000000',
        fillOpacity: 0.1,
        zIndex: 2,
        initView: true,
        slots: {
          icon: 'smile',
        },

      }
    ]
  },
  {
    title: '水系',
    key: '02',
    slots: {
      icon: 'folder',
    },
    children: [
      {
        title: '水系线',
        key: '0102',
        isLeaf: true,
        checked: false,
        layerName: 'shuixi-line',
        type: 'polyline',
        fillColor: '#354754',
        strokeColor: '#354754',
        width: 2,
        icon: 'icon-trunk',
        zIndex: 4,
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '水系面',
        key: '0103',
        isLeaf: true,
        layerName: 'shuixi-polygon',
        type: 'polygon',
        checked: false,
        zIndex: 2,
        fillOpacity: 0.2,
        icon: 'icon-guanyu',
        slots: {
          icon: 'dashboard',
        },
      }
    ]
  },
  {
    title: '视频监控',
    key: '07',
    slots: {
      icon: 'folder',
    },
    children: [
      {
        title: '视频监控',
        key: '0701',
        isLeaf: true,
        checked: false,
        layerName: 'view_video',
        type: 'point',
        icon: 'icon-video',
        textColor: '#d49201',
        url: 'wrs/map/list?type=8',
        slots: {
          icon: 'smile',
        },
      }
    ]
  },
  /* {
    title: '取水口',
    key: '08',
    children: [
      {
        title: '地表水取水口',
        key: '0808',
        isLeaf: true,
        layerName: 'view_wiu_db',
        type: 'point',
        icon: 'icon-dbqsk',
        textColor: '#eb6623',
        typeNum: 27,
        url: 'wrs/map/list?type=1&subType=2'
      }
    ]
  }, */
  {
    title: '农业灌溉',
    key: '03',
    slots: {
      icon: 'folder',
    },
    children: [
      // {
      //   title: '灌区',
      //   key: '0300',
      //   isLeaf: true,
      //   layerName: 'xingzhengquhua',
      //   type: 'polygon',
      //   checked: true,
      //   zIndex: 2,
      //   fillOpacity: 0.2,
      //   // strokeColor: "#ffffff",
      //   icon: 'icon-guanyu'
      // },
      {
        title: '县水管站',
        key: '0301',
        isLeaf: true,
        checked: true,
        layerName: 'CountyWaterPipeStation',
        type: 'point',
        icon: 'icon-office',
        textColor: '#da1c17',
        typeNum: 16,
        url: 'wrs/map/list?type=1&subType=2',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '乡镇水管站',
        key: '0302',
        isLeaf: true,
        checked: true,
        layerName: 'view_zuzhi@3',
        type: 'point',
        icon: 'icon-station',
        textColor: '#da1c17',
        typeNum: 17,
        url: 'wrs/map/list?type=1&subType=3',
        slots: {
          icon: 'dashboard',
        },
      },
      {
        title: '分水站',
        key: '0303',
        isLeaf: true,
        checked: false,
        layerName: 'view_zuzhi@5',
        type: 'point',
        icon: 'icon-station2',
        textColor: '#da1c17',
        typeNum: 16,
        url: 'wrs/map/list?type=1&subType=5',
        slots: {
          icon: 'dashboard',
        },
      },
      {
        title: '水库管理站',
        key: '0304',
        isLeaf: true,
        checked: false,
        layerName: 'view_zuzhi@4',
        type: 'point',
        icon: 'icon-station3',
        textColor: '#da1c17',
        typeNum: 16,
        url: 'wrs/map/list?type=1&subType=4',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '总干渠',
        key: '0305',
        isLeaf: true,
        checked: true,
        layerName: 'zongganqu',
        type: 'polyline',
        fillColor: '#0078ff',
        strokeColor: '#0078ff',
        width: 5,
        icon: 'icon-trunk',
        zIndex: 4,
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '干渠',
        key: '0307',
        isLeaf: true,
        checked: true,
        layerName: 'ganqu',
        type: 'polyline',
        icon: 'icon-qddm',
        textColor: '#e3696b',
        filterName: 'Canal_Code',
        width: 3,
        typeNum: 19,
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '支渠',
        key: '0306',
        isLeaf: true,
        checked: false,
        layerName: 'zhiqu',
        type: 'polyline',
        fillColor: '#0078ff',
        strokeColor: '#0078ff',
        width: 1,
        icon: 'icon-branch',
        zIndex: 4,
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '水量计量点',
        key: '0308',
        isLeaf: true,
        checked: false,
        layerName: 'view_shuiliangjiliangdian',
        type: 'point',
        icon: 'icon-psgdm',
        textColor: '#e3696b',
        typeNum: 21,
        url: 'wrs/map/list?type=6',
        slots: {
          icon: 'smile',
        },
      },
      {
        // 水闸类别 引水闸1  分水闸2 泄水闸3 节制闸4  冲沙闸5  退水闸6  直开口7其他9
        title: '进水闸',
        key: '0309',
        isLeaf: true,
        checked: true,
        layerName: 'v_jinshuizha',
        type: 'point',
        icon: 'icon-gate',
        textColor: '#00a2ff',
        typeNum: 13,
        url: 'wrs/map/list?type=5&subType=1',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '节制闸',
        key: '0310',
        isLeaf: true,
        layerName: 'v_jiezhizha',
        type: 'point',
        icon: 'icon-jzz',
        textColor: '#00a2ff',
        typeNum: 14,
        url: 'wrs/map/list?type=5&subType=3',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '分水闸',
        key: '0311',
        isLeaf: true,
        layerName: 'v_fenshuizha',
        type: 'point',
        icon: 'icon-zqsk',
        textColor: '#00a2ff',
        typeNum: 14,
        url: 'wrs/map/list?type=5&subType=2',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '退水闸',
        key: '0312',
        isLeaf: true,
        layerName: 'v_tuishuizha',
        type: 'point',
        icon: 'icon-tsz',
        textColor: '#00a2ff',
        typeNum: 15,
        url: 'wrs/map/list?type=5&subType=4',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '直开口',
        key: '0313',
        isLeaf: true,
        checked: false,
        layerName: 'v_zhikaikou',
        type: 'point',
        icon: 'icon-zkk',
        textColor: '#ffffff',
        typeNum: 12,
        url: 'wrs/map/list?type=5&subType=5',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '水库',
        key: '0314',
        isLeaf: true,
        checked: false,
        layerName: 'v_shuiku',
        type: 'point',
        icon: 'icon-sjqsk',
        textColor: '#ffffff',
        typeNum: 12,
        url: 'wrs/map/list?type=4',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '渡槽',
        key: '0316',
        isLeaf: true,
        layerName: 'v_ducao',
        type: 'point',
        icon: 'icon-aqueduct',
        textColor: '#df4949',
        typeNum: 8,
        url: 'wrs/map/list?type=7&subType=2',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '涵洞',
        key: '0317',
        isLeaf: true,
        layerName: 'v_handong',
        type: 'point',
        icon: 'icon-culvert',
        textColor: '#08b276',
        typeNum: 7,
        url: 'wrs/map/list?type=7&subType=1',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '桥梁',
        key: '0318',
        isLeaf: true,
        layerName: 'v_qiaoliang',
        type: 'point',
        icon: 'icon-bridge',
        textColor: '#eb6623',
        typeNum: 4,
        url: 'wrs/map/list?type=7&subType=4',
        slots: {
          icon: 'smile',
        },
      },
      {
        title: '跌水',
        key: '0319',
        isLeaf: true,
        layerName: 'v_dieshui',
        type: 'point',
        icon: 'icon-dieshui',
        textColor: '#eb6623',
        typeNum: 10,
        url: 'wrs/map/list?type=7&subType=3',
        slots: {
          icon: 'smile',
        },

      }
    ]
  }
]
export const TreeNodeType=[
  {
    key:'01',
    type:'geography',
    name:'基础地理',
    url:'http://117.145.217.182:9001/geoserver/akt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=akt%3Aakt-xingzhengquhua&maxFeatures=50&outputFormat=application%2Fjson'
  },
  {
    key:'07',
    type:'video',
    name:"视频监控",
    url:''
  },
  {
    key:'02',
    type:'water',
    name:"水系",
    url:'http://117.145.217.182:9001/geoserver/akt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=akt%3Aakt-shuixi-line&maxFeatures=50&outputFormat=application%2Fjson'
  },
  {
    key: '03',
    type: 'irrigation',
    name: "灌溉",
    url: ''
  }
]
