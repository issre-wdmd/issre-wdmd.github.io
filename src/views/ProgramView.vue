<template>
  <div class="program">
    <el-table
      :data="tableData"
      border
      style="width: 100%;"
      header-cell-class-name="header"
      :cell-class-name="cellClassName"
      :span-method="spanMethod"
    >
      <el-table-column prop="time" label="Time" header-align="center">
        <template #default="scope">
          <span>
            <span>{{ scope.row.startTime }}</span>
            <span>-</span>
            <span>{{ scope.row.endTime }}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="topic" label="Topic" header-align="center" />
      <el-table-column prop="speaker" label="Speaker" header-align="center" />
      <el-table-column prop="duration" label="Duration" header-align="center" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus'

interface Data {
  startTime: string
  endTime: string
  topic: string
  speaker: string
  duration: string
}

interface MethodProps {
  row: Data
  column: TableColumnCtx<Data>
  rowIndex: number
  columnIndex: number
}

const tableData: Data[] = [
  { startTime: '9:00', endTime: '9:30', topic: 'Keynote', speaker: 'HUAWEI', duration: '30 mins' },
  { startTime: '9:30', endTime: '10:00', topic: 'Keynote', speaker: 'Prof. Joseph Sifakis', duration: '30 mins' },
  { startTime: '10:00', endTime: '10:30', topic: 'Tea Break', speaker: '', duration: '30 mins' },
  { startTime: '10:30', endTime: '11:00', topic: 'Keynote', speaker: 'Prof. Zheng Zheng', duration: '30 mins' },
  { startTime: '11:00', endTime: '11:30', topic: 'Keynote', speaker: 'Prof. Domenico Cotroneo', duration: '30 mins' },
  { startTime: '11:30', endTime: '12:30', topic: 'Panel', speaker: 'TBD', duration: '60 mins' },
  { startTime: '12:30', endTime: '14:00', topic: 'Lunch Break', speaker: '', duration: '1.5 hours' },

  { startTime: '14:00', endTime: '17:35', topic: 'Doctoral Symposium', speaker: '', duration: '' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Jiawei Meng', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Jiyue Huang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Yuning Jiang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Baiwei Guo', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Tea Break', speaker: '', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Changgang Zheng', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Fenghua Wang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Xinpeng Hong', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Chi Hong', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Doctor Presentation', speaker: 'Xiao Wang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:35', topic: 'Tea Break', speaker: '', duration: '15 mins' },

  { startTime: '17:35', endTime: '18:05', topic: 'Poster Presentation', speaker: '', duration: '' },
  { startTime: '17:35', endTime: '18:05', topic: 'Poster Presentation', speaker: 'TBD', duration: '10 mins' },
  { startTime: '17:35', endTime: '18:05', topic: 'Poster Presentation', speaker: 'TBD', duration: '10 mins' },
  { startTime: '17:35', endTime: '18:05', topic: 'Poster Presentation', speaker: 'TBD', duration: '10 mins' },
  { startTime: '18:05', endTime: '', topic: 'Closing', speaker: '', duration: '- mins' },
]

const cellClassName = ({ rowIndex, columnIndex }: MethodProps) => {
  if (rowIndex === 2 || rowIndex === 6 || rowIndex === 12 || rowIndex === 18 || rowIndex === 23) {
    if (columnIndex > 0) {
      return 'rest'
    }
  } else if (rowIndex === 7 || rowIndex === 19) {
    if (columnIndex > 0) {
      return 'title'
    }
  }
}

const spanMethod = ({ rowIndex, columnIndex } : MethodProps) => {
  if (columnIndex === 0) {
    if (rowIndex === 7) {
      return [12, 1]
    } else if (rowIndex > 7 && rowIndex < 19) {
      return [0, 0]
    } else if (rowIndex === 19) {
      return [4, 1]
    } else if (rowIndex > 19 && rowIndex < 23) {
      return [0, 0]
    }
  }
}
</script>

<style lang="less" scoped>
.program {
  :deep(.header) {
    background-color: #7F0000;
    color: white;
    font-size: 20px;
  }

  :deep(.rest) {
    background-color: #FFF4CB;
  }
  :deep(.title) {
    background-color: #C2C2C2;
  }
}
</style>