<template>
  <div class="papers">
    <p class="pa-header p">We invite authors to submit original research contributions around Dependability Modeling and Design, with a focus on conceptual model for dependability, digitalization design for dependability, and software dependability. </p>

    <div class="title2 section-title">Topics of Interest</div>
    <p class="pa-header p">Topics of the workshop include but are not limited to:</p>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list1"
        :key="index"
      >{{ item }}</li>
    </ul>

    <div class="title2 section-title">Paper Submission</div>
    <p class="pa-header p">Papers must be submitted following:</p>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list2"
        :key="index"
      >{{ item }}</li>
    </ul>
    <p class="pa-content p">Please read also the ISSRE conditions for submitting papers at the bottom of this page. If you have any further questions, contact us via <mark>issre_wdmd@163.com</mark>.</p>
    
    <div class="title2 section-title">Important Dates</div>
    <ul class="list">
      <li class="item">
        <span class="label">Submission deadline:</span>
        <span class="value">July 31th, 2023</span>
      </li>
      <li class="item">
        <span class="label">Notification deadline:</span>
        <span class="value">August 19, 2023</span>
      </li>
      <li class="item">
        <span class="label">Camera-ready deadline:</span>
        <span class="value">August 26, 2023</span>
      </li>
    </ul>

    <div class="title2 section-title">Submissions can be made in one of the following</div>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list3"
        :key="index"
      >{{ item }}</li>
    </ul>
    <p class="pa-content p">Papers that exceed the number of pages for that submission category will be rejected without review.</p>

    <div class="title2 section-title">Anonymizing Rules</div>
    <p class="pa-header p">The anonymizing rules are consistent with the official website.</p>

    <div class="title2 section-title">Paper Template</div>
    <p class="pa-header p">Submissions must adhere to the IEEE Computer Society Format Guidelines as implemented by the following LaTeX/Word templates:</p>
    <ul class="list">
      <li class="item">
        <span>LaTex Package (use bare_conf.tex) (ZIP) (<a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/conference-latex-template_10-17-19.zip">https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/conference-latex-template_10-17-19.zip</a>)</span>
      </li>
      <li class="item">
        <span>Word Template (DOCX) (<a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx">https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx</a>)</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const list1 = [
  'Dependability concept model',
  'The ontology of dependability and its applications',
  'Dependability meta-model',
  'Dependability digital engineering system theory and methods',
  'Model based dependability engineering',
  'Application of System Modelling Language in dependability modelling',
  'Software dependability model',
  'Software dependability design',
  'Software dependability evaluation',
  'Software fault tolerance',
  'Artificial intelligence dependability analysis',
  'Dependability design of safety-critical systems',
  'Software dependability testing',
  'Dependability tools'
]

const list2 = [
  'Submission Guidelines',
  'Workshop Template'
]

const list3 = [
  'Full papers: 6 pages (including references)',
  'Short Paper: 2 pages (including references)'
]
</script>

<style lang="less" scoped>
.papers {
  .pa-header {
    line-height: 1.8;
  }

  .pa-content {
    line-height: 1.6;
    margin-top: 14px;
  }

  .section-title {
    margin: 16px 0;
  }

  .list {
    margin-top: 6px;
    .item {
      color: #000;
      font-size: 18px;
      line-height: 1.8;
      margin-top: 6px;

      &:first-child {
        margin-top: 0;
      }

      .label {
        font-weight: bold;
      }

      .value {
        margin-left: 8px;
      }
    }
  }
}
</style>