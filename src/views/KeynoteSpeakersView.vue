<template>
  <div class="keynote-speakers">
    <div class="title1 font-merri">Keynote Speakers</div>
    <div class="title2 section-title">Joseph Sifakis, Verimag</div>
    <div class="title3">Keynote: Trustworthy Intelligent Systems – A Daunting Challenge</div>
    <div class="title3">Abstract</div>
    <p class="pa-content p">Systems engineering today is torn between two contradictory trends. On the one hand, the construction of intelligent systems, capable of situation awareness and adaptive decision-making through the use of AI-based components; on the other, the need for trustworthiness guarantees despite the non-explicability of AI components. The situation is exacerbated by the need for increasingly complex and integrated heterogeneous systems, and by the fact that in the current debate on "safe AI", key players in the field are promoting approaches that break with the technical safety concept of systems engineering.</p>
    <p class="pa-content p">We consider that a system is explainable if it is possible to characterize its relevant behavior by faithful models that lend themselves to analysis and provide a basis for understanding. We argue that AI will remain largely inexplicable. Ignoring this limitation by ascribing anthropomorphic properties to AI systems is technically untenable. </p>
    <p class="pa-content p">We need rigorous system design methodologies that integrate model-based and data-driven AI techniques, enabling in particular the construction of reliable systems integrating unreliable AI components. These methodologies will be characterized by the following important changes: </p>
    <ul class="list">
      <li class="item">Breaking with the idea that system can be guaranteed trustworthy at design time. Instead, systems must be designed to evolve, with no endpoint in their evolution, using computational intelligence, monitoring techniques and over-the-air upgrades.</li>
      <li class="item">A shift from verification to empirical validation using test and simulation, which in principle does not allow confidence levels achieved using model-based methods. </li>
      <li class="item">A better integration of design for dependability into the system development cycle, by jointly addressing safety and security issues, and relying heavily on automated tools.</li>
    </ul>
    <p class="pa-header p">We advocate the need for a new foundation for system design that responds to these needs, leveraging knowledge management to compensate for weaknesses arising from the obsolescence of model-based techniques.</p>
    <div class="title3">Bio</div>
    <p class="pa-content p">Professor Joseph Sifakis is Emeritus Research Director at Verimag. He has been a full professor at Ecole Polytechnique Fédérale de Lausanne (EPFL) for the period 2011-2016. He is the founder of the Verimag laboratory in Grenoble, a leading laboratory in the area of safety critical systems that he directed for 13 years.</p>
    <p class="pa-content p">Joseph Sifakis has made significant and internationally recognized contributions to the design of trustworthy systems in many application areas, including avionics and space systems, telecommunications, and production systems. His current research focuses on autonomous systems, in particular self-driving cars and autonomous telecommunication systems. In 2007, he received the Turing Award, recognized as the "highest distinction in computer science", for his contribution to the theory and application of model checking, the most widely used system verification technique. </p>
    <p class="pa-content p">Joseph Sifakis is a member of six academies and a frequent speaker at international scientific, technical and public forums.</p>

    <div class="title2 section-title">Zheng Zheng, Beihang University</div>
    <div class="title3">Keynote: Bugs with "intelligence" and intelligence with bugs</div>
    <div class="title3">Abstract</div>
    <p class="pa-content p">Fault triggering conditions are usually complex, involving not only the workload but also the interaction with execution environment. According to the complexity of fault activation and/or error propagation conditions, bugs were classified into Bohrbugs and Mandelbugs, in which the activation and/or error propagation of Mandelbugs are complex. They make the system show a phenomenon of “intelligence”, exhibiting chaotic and even non-deterministic behavior during operation. In the first part of this presentation, the characteristics of this type of bugs are illustrated by the empirical studies on several traditional software systems.</p>
    <p class="pa-content p">In the second part of this presentation, we will investigate the bug characteristics and root causes of different bug types in three widely used deep learning frameworks and five popular deep learning compilers, and will compare it with those in traditional software systems. Nowadays, various DL models with different architectures, such as CNN, RNN and GNN have been designed to deal with different artificial intelligence tasks. As the foundation to support the training process and runtime inference, multiple popular DL frameworks have been developed so far. However, it is still a challenge for DL frameworks to handle diverse hardware-specific transformations and DL model deployment across various target devices. To address this problem, several popular DL compilers have been proposed. The presentation in this part can help researchers understand bugs in the process of constructing and deploying DL models.</p>
    <div class="title3">Bio</div>
    <div class="pa-content p">Zheng Zheng is a professor at Beihang University and the deputy dean of School of Automation Science and Electrical Engineering. His research work is primarily concerned with software reliability and testing. Recently, He paid more attention on the intelligent software reliability engineering. He is co-author of over 100 journal and conference publications, including IEEE TDSC, IEEE TIFS, IEEE TSE, IEEE TR, IEEE TSC, JSS and so on. He serves for IEEE PRDC2019, IEEE DASC 2019, IEEE ISSRE 2020, IEEE QRS 2021 as PC Co-Chairs, as well as WoSAR 2019, DeIS 2020 and DeIS 2021 as General Co-Chairs. He is Editor-in-chief of Atlantis Highlights in Engineering (Springer Nature), Associate Editor of IEEE TR (2021- ), Elsevier KBS (2018- ) and Springer IJCIS (2012- ) and Guest Editor of IEEE TDSC (2021). He is IEEE Senior Member and IEEE CIS Emerging Technologies TC member.</div>

    <div class="title2 section-title">Domenico Cotrone, University of Naples Federico II</div>
    <div class="title3">Keynote: Unveiling the Veil: Towards the Trustworthiness of AI Code Generators</div>
    <div class="title3">Abstract</div>
    <p class="pa-content p">Nowadays, AI code generators have emerged as powerful tools transforming the software development landscape. These tools promise accelerated productivity and efficiency, but they also raise crucial questions regarding the trustworthiness of the code they produce. This keynote talk delves into the heart of this critical issue, aiming to provide a comprehensive understanding of the topics related to the trustworthiness of AI code generators, focusing on the security and robustness aspects of these AI-powered solutions.</p>
    <p class="pa-content p">Beginning with an in-depth examination of the security and robustness landscape surrounding AI code generators, the talk will dissect the common threats and risks associated with new technology impacting our everyday lives. From adversarial inputs to poisoning attacks, understanding these potential pitfalls is crucial for developers and organizations alike.</p>
    <div class="title3">Bio</div>
    <p class="pa-content p">Domenico Cotroneo is a Full Professor at the Department of Electrical Engineering and Information Technology, University of Naples Federico II. He is also an IEEE Senior Member. He has served on the Technical Program Committee of important conferences on Dependability and Software Reliability, eg., IEEE/IFIP DSN, IEEE SRDS, Safecomp, IEEE ISSRE, and IEEE ICDS. Domenico’s research activities cover the following areas: dependability assessment of complex software systems, software fault injection, and software performance degradation analysis.</p>

    <div class="title2 section-title">Ryan Cotterell, ETH Zürich</div>
    <p class="pa-content p">TBD</p>
  </div>
</template>

<style lang="less" scoped>
.keynote-speakers {
  .section-title {
    margin: 1.6rem 0 0.5rem;
  }

  .title3 {
    color: #040a3f;
    font-size: 3.2rem;
    font-weight: bold;
  }

  .pa-header {
    line-height: 1.8;
  }

  .pa-content {
    text-indent: 2rem;
    line-height: 1.6;
  }

  .list {
    margin-top: 0.6rem;
    .item {
      color: #000;
      font-size: 1.8rem;
      line-height: 1.8;
      margin-top: 0.6rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>