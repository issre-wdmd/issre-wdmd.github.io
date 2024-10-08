<template>
  <div class="program">
    <el-table
      :data="tableData"
      border
      style="width: 100%;"
      header-cell-class-name="header"
      :cell-class-name="cellClassName"
    >
      <el-table-column prop="time" label="Time" header-align="center" width="140px" />
      <el-table-column prop="topic" label="Topic" header-align="center" />
      <el-table-column prop="speaker" label="Speaker" header-align="center" width="280px" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface Data {
  time: string
  topic: string
  speaker: string
}

interface MethodProps {
  row: Data
  column: TableColumnCtx<Data>
  rowIndex: number
  columnIndex: number
}

const tableData: Data[] = [
  { time: '9:20-9:30', speaker: 'Joseph Sifakis', topic: 'Opening: Risk Assessment and Regulation of AI Systems' },
  { time: '', speaker: '', topic: 'Session One--Invited Talks: Reliability and Functional Safty for Autonomous Driving Systems' },
  { time: '9:30-10:10', speaker: 'Yuxiang Sun', topic: 'Keynote 1: TBD' },
  { time: '10:10-10:50', speaker: 'Yanlei Gu', topic: 'Keynote 2: Autonomous Driving in the Urban City Environment' },
  { time: '10:50-11:05', speaker: '', topic: 'Coffe Break' },
  { time: '11:05-11:45', speaker: 'Kimihiko Nakano', topic: 'Keynote 3: TBD' },
  { time: '11:45-12:30', speaker: '', topic: 'Panel 1：Reliability and Functional Safty for Autonomous Driving Systems' },
  { time: '12:30-13:40', speaker: '', topic: 'Lunch Break' },
  { time: '', speaker: '', topic: 'Session Two --- Invited Talks: Reliablity and Modelling Technogies for AI Systems' },
  { time: '13:40-14:20', speaker: 'Jun Ai', topic: `Keynote 4: AI-powered software reliability engineering and it's application` },
  { time: '14:20-15:00', speaker: 'Mohamed Wahib', topic: 'Keynote 5: Parallelism in LLMs: Beyond Data, Tensor, and Pipeline Parallelism' },
  { time: '15:00- 15:15', speaker: '', topic: 'Coffe Break' },
  { time: '15:15-15:55', speaker: 'Xing Pan', topic: 'Keynote 6: Reliability Analysis and Evaluation of Computing Network' },
  { time: '15:55-16:35', speaker: 'Guanpeng Li', topic: 'Keynote 7: TBD' },
  { time: '16:35-17:20', speaker: '', topic: 'Panel 2: Reliability Technologies for AI training/Inference Systems' },
  { time: '', speaker: '', topic: `Session Three --- Paper session: Reliability Modelling and It's Application` },
  { time: '17:20-17:30', speaker: 'Feng Liu, Zifan Zeng, Chongzhe Zhang, Joseph Sifakis, Qunli Zhang, Shiming Liu and Peng Wang.', topic: 'World Models: The Safety Perspective' },
  { time: '17:30-17:40', speaker: 'Irfan Sljivo, Pavlo Vlastos, Corey Carter and Aaron Woodard.', topic: 'Developing a Dependable Multi-Agent Rover Swarm Using cFS' },
  { time: '17:40-17:50', speaker: 'Chuqi Guo, Yu Lin, Ling Dong, Zhijie Feng, Luyao Ye, Wenhua Hu, Siwei Zhou and Jianwen Xiang', topic: 'Reliability Analysis of Man-Machine Systems Considering Imperfect Error Coverage Model' },
  { time: '17:50 -18:00', speaker: 'Lizhi Zhang, Jingwei Fu, Yan He and Xiaobin Jiang.', topic: 'Toward Deterministic Wireless Communication: Latency Prediction Using Network Measurement Data' },
  { time: '18:00-18:10', speaker: 'Ning Lu, Qian Xie, Hao Zhang, Wenyi Fang, Yang Zheng, Zheng Hu and Jiantao Ma', topic: 'A Practical Reliability Metric for Large Language Model Training Systems' },
]

const cellClassName = ({ rowIndex }: MethodProps) => {
  if (rowIndex === 1 || rowIndex === 8 || rowIndex === 15) {
    return 'title'
  } else if (rowIndex === 4 || rowIndex === 7 || rowIndex === 11) {
    return 'rest'
  }
}
</script>

<style lang="less" scoped>
.program {
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
}
</style>