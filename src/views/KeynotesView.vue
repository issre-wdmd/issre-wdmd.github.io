<template>
  <div class="keynote-speakers">
    <div class="title1 font-merri title">WDMD 2024 Workshop Keynotes</div>
    <div class="title-tip">ISSREW 2024</div>

    <div class="keynotes">
      <div class="keynote">
        <div class="section-title">Opening Remarks: Risk Assessment and Regulation of AI Systems</div>
        <div class="title2 section-author">Joseph Sifakis, Verimag</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">This talk aims to clarify the debate on the risks associated with AI systems by highlighting the important technical issues raised by the assessment of their trustworthiness. After recalling the risk management principles adopted by traditional systems engineering, it explores the extent to which they can be applied to AI systems, considering two possible directions.One direction is to obtain guarantees on desirable properties throughout development, as is the case with traditional systems developed on the basis of technical requirements and their decomposition into properties satisfied by components integrated into an architecture. We argue that these methods are not applicable to AI systems, which are not explainable and do not lend themselves to model-based analysis. This implies a shift from rational to empirical methods based primarily on data analysis and controlled experiments. We examine the extent to which these problems can be resolved, while emphasizing that it is generally not possible to achieve the same level of guarantees as traditional development flows. Another direction is to validate desirable properties a posteriori, using test methods, but for which theories similar to those applied to traditional systems based on coverage criteria are currently lacking. A significant difference from traditional systems is that, in addition to technical risk-related properties, such as safety and security, we need to consider subjective human-centric properties as an AI system intended to mimic human behavior, relies on knowledge and internal adaptation mechanisms. We propose a method for specifying and testing under some conditions, these properties. In conclusion, we emphasize the need to remain within the framework of risk-based approaches for AI systems, which implies that their use in critical applications would require considerable effort to develop new bases for guaranteeing their trustworthiness.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Joseph Sifakis is emeritus CNRS Research Director at Verimag, Saint-Martin-d’Hères, France, a laboratory that he founded and directed for 13 years. His research interests cover fundamental and applied aspects of system design with a focus on autonomous systems. He received the 2007 Turing Award for his work on model checking.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">AI-powered software reliability engineering and it's application</div>
        <div class="title2 section-author">Jun Ai</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">Software reliability engineering has been widely used in engineering projects since it was put forward, and has played an important role in improving software reliability. However, as the scale of software becomes larger and the architecture becomes more and more complex, especially the network-linked software is more and more common, which makes the traditional software reliability engineering highlight many limitations in practical applications. The rise of artificial intelligence technology has brought new impetus to software reliability engineering. The report will focus on the problems faced by software reliability engineering technology in practical applications, and introduce how to use artificial intelligence technology in some important units of software reliability engineering, so as to further strengthen software reliability engineering technology and provide reliability guarantee for more complex software systems.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Jun Ai, Professor, Vice Dean of School of Reliability and Systems Engineering, Beihang University, China, Deputy Director of Reliability Engineering Technology Research Center, Chair of IEEE Reliability Society Beijing Chapter, Senior Member of IEEE and CCF. His main research field are in software and intelligent system reliability and safety, including: Software failure mechanism and defect prediction, software system intelligent testing, intelligent system/software reliability and safety evaluation, etc. He published more than 60 papers, 3 monograph books, authorized more than 30 patents, headed many research projects in the field of software reliability, and won Science and Technology Progress Award, one Innovation team award, one first prize, and two second prizes.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">Parallelism in LLMs: Beyond Data, Tensor, and Pipeline Parallelism</div>
        <div class="title2 section-author">Mohamed Wahib</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">Large Language Models (LLMs) require enormous computational resources to train and deploy effectively. While techniques like data, tensor, and pipeline parallelism have become standard approaches to distribute this workload, the next frontier in parallelism promises to push the boundaries of model scalability and efficiency even further. This talk explores emerging methods and strategies for parallelism beyond the current paradigms, focusing on optimizing memory utilization, improving inter-node communication, and leveraging hardware advancements. We will also discuss the challenges of scaling LLMs and how future innovations in parallelism can unlock unprecedented performance gains.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Mohamed Wahib is a team leader of the “High Performance Artificial Intelligence Systems Research Team” at RIKEN Center for Computational Science (R-CCS), Kobe, Japan. Prior to that he worked as is a senior scientist at AIST/TokyoTech Open Innovation Laboratory, Tokyo, Japan. He received his Ph.D. in Computer Science from Hokkaido University, Japan. His research interests revolve around the central topic of high-performance programming systems, in the context of HPC and AI. He is actively working on several projects including AI-based science, as well as high-level frameworks for programming traditional scientific applications.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">Reliability Analysis and Evaluation of Computing Network</div>
        <div class="title2 section-author">Xing Pan</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">The rapid advancements in cloud computing, high-performance computing, and artificial intelligence (AI) technologies, notably the emergence of large-scale language models (LLM), have not only increased the demand for powerful computing capacity within individual devices but also underscore the necessity for a computing network that can consistently, stably, and efficiently support data transmission and communication. Distinguished from conventional networks by their larger scale, extended operational lifecycles, and intricate service profiles, computing networks present unique challenges in terms of reliability assessment and enhancement. A pressing issue that requires immediate attention is the development of methodologies for the swift and precise evaluation of computing network reliability, along with targeted strategies for improvement. In response to this, this research introduces a reliability analysis and validation methodology for computing networks based on the System Engineering V-model. Oriented to three hierarchical levels—connectivity, performance, and service, it is intended to analyze both singular and coupled failure modes. Additionally, it proposes the methodologies for generating service profiles and flow of computing networks. subsequently, this research conducts reliability simulation assessments, thereby providing an evaluative foundation and guiding principles for optimizing the reliability design of computing networks.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Xing Pan is director of the Security Center for Systems and Intelligent Systems, head of the Department of Safety Science and Engineering, quality management expert of AVIC Group, and editorial board of Systems Engineering and Electronic Technology. His research interests include reliability and risk analysis, system/system engineering theory and method, human-machine system safety analysis and human-factor reliability analysis.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.keynote-speakers {
  .title {
    text-align: center;
  }

  .title-tip {
    text-align: center;
    font-size: 3rem;
  }

  .keynotes {
    .keynote {
      .section-title {
        margin: 3rem 0 0.2rem;
        text-align: center;
        font-size: 3.6rem;
        font-weight: bold;
      }

      .section-author {
        text-align: center;
        font-size: 2rem;
      }

      .section-content {
        font-size: 2rem;

        .pa {
          margin-bottom: 1rem;
        }

        .bold {
          font-weight: bold;
        }
        .italic {
          font-style: italic;
        }
      }
    }
  }
}
</style>