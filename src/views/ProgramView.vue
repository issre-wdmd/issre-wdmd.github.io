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
  { startTime: '10:00', endTime: '10:20', topic: 'Tea Break', speaker: '', duration: '20 mins' },
  { startTime: '10:20', endTime: '10:50', topic: 'Keynote', speaker: 'Prof. Zheng Zheng', duration: '30 mins' },
  { startTime: '10:50', endTime: '11:20', topic: 'Keynote', speaker: 'Prof. Domenico Cotroneo', duration: '30 mins' },
  { startTime: '11:20', endTime: '11:50', topic: 'Keynote', speaker: 'Prof. Ryan Cotterell', duration: '30 mins' },
  { startTime: '11:50', endTime: '12:30', topic: 'Panel', speaker: 'TBD', duration: '40 mins' },
  { startTime: '12:30', endTime: '14:00', topic: 'Lunch Break', speaker: '', duration: '1.5 hours' },

  { startTime: '14:00', endTime: '17:30', topic: 'Doctoral Symposium', speaker: '', duration: '' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Jiawei Meng', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Jiyue Huang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Yuning Jiang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Baiwei Guo', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Tea Break', speaker: '', duration: '15 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Changgang Zheng', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Fenghua Wang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Xinpeng Hong', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Chi Hong', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Doctor Presentation', speaker: 'Xiao Wang', duration: '20 mins' },
  { startTime: '14:00', endTime: '17:30', topic: 'Tea Break', speaker: '', duration: '15 mins' },

  { startTime: '17:30', endTime: '18:00', topic: 'Poster Presentation', speaker: '', duration: '' },
  { startTime: '17:30', endTime: '18:00', topic: 'Poster Presentation', speaker: 'TBD', duration: '10 mins' },
  { startTime: '17:30', endTime: '18:00', topic: 'Poster Presentation', speaker: 'TBD', duration: '10 mins' },
  { startTime: '17:30', endTime: '18:00', topic: 'Poster Presentation', speaker: 'TBD', duration: '10 mins' },
  { startTime: '18:00', endTime: '', topic: 'Closing', speaker: '', duration: '- mins' },
]

const cellClassName = ({ rowIndex, columnIndex }: MethodProps) => {
  if (rowIndex === 2 || rowIndex === 7 || rowIndex === 13 || rowIndex === 19 || rowIndex === 24) {
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
      return [4, 1]
    } else if (rowIndex > 20 && rowIndex < 24) {
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