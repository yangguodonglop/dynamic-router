<template>
  <div class="left-control">
    <a-card title="图层" class="card-container">
      <a-tree
        show-icon
        checkable
        defaultExpandAll
        :defaultCheckedKeys="selectedKeys"
        :tree-data="treeData"
        @select="onSelect"
        @check="onCheck"
      >
        <template>
          <a-icon slot="folder" type="folder" />
          <img src="@/assets/icon-video.png" slot="smile" alt="" style="width:18px;height:18px;">>
          <img src="@/assets/icon-gate.png" slot="dashboard" alt="" style="width:18px;height:18px;">>
        </template>

      </a-tree>
    </a-card>
  </div>
</template>

<script>
import {TreeNode} from "../config";

export default {
  name: "LeftControl",
  data() {
    return {
      treeData: TreeNode,
      selectedKeys:[]
    }
  },
  mounted() {
  },
  methods: {
    // 点击树节点
    onSelect(selectedKeys, info) {
      this.$store.dispatch('setCurrentLayer', selectedKeys[0])
    },
    // 点击复选框
    onCheck(checkedKeys, info) {
      this.$store.dispatch('setShowLayers', checkedKeys.join(','))
    }
  }
}
</script>

<style lang="less" scoped >
.left-control {
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 100;

  .card-container {
    width: 200px;
    padding: 0;

    /deep/ .ant-card-head {
      padding: 0 10px;
    }

    /deep/ .ant-card-head-title {
      padding: 10px 0;
    }

    /deep/ .ant-card-body {
      padding: 10px;
      zoom: 1;
      max-height: 500px;
      overflow-y: auto;
    }
  }
}
</style>
