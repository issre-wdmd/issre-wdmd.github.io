<template>
  <div class="program">
    <div class="date">Tuesday, October 10th</div>
    <el-table
      :data="tableData"
      border
      style="width: 100%;"
      header-cell-class-name="header"
      :cell-class-name="cellClassName"
      :span-method="spanMethod"
    >
      <el-table-column prop="time" label="Begin-End" header-align="center" width="140px">
        <template #default="scope">
          <span>
            <span>{{ scope.row.startTime }}</span>
            <span>-</span>
            <span>{{ scope.row.endTime }}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="subject" label="Subject" header-align="center">
        <template #default="scope">
          <div v-if="scope.row.tip" class="tip">{{ scope.row.tip }}</div>
          <template v-else>
            <div class="keynote">{{ scope.row.title }}</div>
            <i v-if="scope.row.speaker" class="speaker">{{ scope.row.speaker }}</i>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface Data {
  startTime: string
  endTime: string
  topic?: string
  speaker?: string
  title?: string
  tip?: string
}

interface MethodProps {
  row: Data
  column: TableColumnCtx<Data>
  rowIndex: number
  columnIndex: number
}

const tableData: Data[] = [
  { startTime: '9:20', endTime: '9:30', speaker: 'Dr. Chengqiang Huang (Huawei Technologies Co., Ltd.)', title: 'Opening: Explorations and Practices Towards a Reliable Intelligent System'
  },
  { startTime: '9:30', endTime: '10:00', speaker: 'Prof. Joseph Sifakis (Verimag, Université Grenoble Alpes)', title: 'Keynote 1: Trustworthy Intelligent Systems – A Daunting Challenge' },
  { startTime: '10:00', endTime: '10:30', tip: 'Tea Break' },
  { startTime: '10:30', endTime: '11:00', speaker: 'Prof. Zheng Zheng (Beihang University)', title: 'Keynote 2: Bugs with "intelligence" and intelligence with bugs' },
  { startTime: '11:00', endTime: '11:30', speaker: 'Prof. Domenico Cotroneo (University of Naples Federico II)', title: 'Keynote 3: Unveiling the Veil: Towards the Trustworthiness of AI Code Generators' },
  { startTime: '11:30', endTime: '12:00', speaker: 'Ryan Cotterell (ETH Zürich)', title: 'Keynote 4: TBD' },
  { startTime: '12:00', endTime: '12:30', title: 'Panel: How Big Language Models help in Software Dependability Engineering' },
  { startTime: '12:30', endTime: '14:00', tip: 'Lunch Break' },

  { startTime: '14:00', endTime: '17:00', tip: 'Doctoral Symposium' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Jiawei Meng', title: 'TBD' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Jiyue Huang', title: 'TBD' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Yuning Jiang', title: 'TBD' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Baiwei Guo', title: 'Safe Zeroth-Order Optimization Using Local Proxies' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Ni Dang', title: 'TBD' },
  { startTime: '14:00', endTime: '17:00', tip: 'Tea Break' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Changgang Zheng', title: 'TBD' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Fenghua Wang', title: 'Robustness and Recoverability of Network Controllability with respect to Node Removals' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Xinpeng Hong', title: 'TBD' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Chi Hong', title: 'Training-time Attacks and Defenses of Distributed Learning' },
  { startTime: '14:00', endTime: '17:00', speaker: 'Xiao Wang', title: 'Safe Reinforcement Learning for Autonomous Vehicles' },

  { startTime: '17:00', endTime: '18:00', tip: 'Accepted Paper Presentation' },
  { startTime: '17:00', endTime: '18:00', speaker: 'Shiming Liu, Qunli Zhang, Wei Li, Siyun Yao, Yucheng Mu and Zheng Hu', title: 'Runtime operational design domain monitoring of static road geometry for automated vehicles' },
  { startTime: '17:00', endTime: '18:00', speaker: 'Xiaolei Yu, Kai Jia, Wenhua Hu, Jing Tian and Jianwen Xiang', title: 'Black-Box Test Case Prioritization Using Log Analysis and Test Case Diversity' },
  { startTime: '17:00', endTime: '18:00', speaker: 'Peng Wang, Qingyang Xu, Siyun Yao, Xiangfei Wu, Qunli Zhang, et al.', title: 'A robust online extrinsic calibration method for GNSS-RTK and IMU system and vehicle setups' },
  { startTime: '17:00', endTime: '18:00', speaker: 'Wenyi Fang, Hao Zhang, Ziyu Gong, Longbin Zeng, Xuhui Lu, Biao Liu, et al.', title: 'A Survey of Approaches to Enhance Training Dependability in Large Language Models' },
  { startTime: '18:00', endTime: '', tip: 'Closing and Invited Dinner' },
]

const cellClassName = ({ rowIndex, columnIndex }: MethodProps) => {
  if (rowIndex === 2 || rowIndex === 7 || rowIndex === 14 || rowIndex === 25) {
    if (columnIndex > 0) {
      return 'rest'
    }
  } else if (rowIndex === 8 || rowIndex === 20) {
    if (columnIndex > 0) {
      return 'title'
    }
  }
}

const spanMethod = ({ rowIndex, columnIndex } : MethodProps) => {
  if (columnIndex === 0) {
    if (rowIndex === 8) {
      return [12, 1]
    } else if (rowIndex > 8 && rowIndex < 20) {
      return [0, 0]
    } else if (rowIndex === 20) {
      return [5, 1]
    } else if (rowIndex > 20 && rowIndex < 25) {
      return [0, 0]
    }
  }
}
</script>

<style lang="less" scoped>
.program {
  .date {
    font-weight: bold;
    line-height: 4.5rem;
    background-color: #b86a6a;
    padding: 0 1rem;
  }

  :deep(.header) {
    color: #333;
    > div {
      font-weight: bold;
      font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  :deep(.rest) {
    background-color: #c0e1ec;
  }
  :deep(.title) {
    background-color: #C2C2C2;
  }

  .keynote {
    color: #000;
    font-size: 1.6rem;
  }

  .speaker {
    color: #333;
  }

  .tip {
    text-align: center;
    font-size: 1.6rem;
    color: #333;
    line-height: 1.8;
  }
}
</style>