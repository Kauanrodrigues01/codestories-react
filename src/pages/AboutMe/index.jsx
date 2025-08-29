import ModelPost from "@/components/ModelPost";
import aboutMeCover from "@/assets/aboutMeCover.png";
import aboutMePhoto from "@/assets/aboutMePhoto.jpg";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <ModelPost coverPhoto={aboutMeCover} title="Sobre Mim">
      <h3 className={styles.caption}>Olá, eu sou Kauan Rodrigues!</h3>

      <img src={aboutMePhoto} alt="Foto de Kauan Rodrigues" className={styles.aboutMePhoto}/>

      <p className={styles.paragraph}>
        Sou Kauan Rodrigues Lima, um Desenvolvedor Backend impulsionado pela paixão em criar soluções robustas e eficientes. Embora minha trajetória na programação tenha se iniciado com uma sólida base em HTML, CSS e JavaScript por mais de dois anos, minha especialização se concentra no desenvolvimento de aplicações Full-stack e Backend utilizando Python. Atualmente, estou cursando Técnico em Desenvolvimento de Sistemas na Escola Estadual de Educação Profissional Adolfo Ferreira de Sousa, consolidando meu conhecimento teórico e prático.
      </p>
      <p className={styles.paragraph}>
        Minha paixão pelo desenvolvimento ganhou um direcionamento claro ao descobrir o poder do Python no backend. Essa virada foi significativa quando tive a oportunidade de programar com Python em um evento como o Siara Tech Summit, o que me fez realmente gostar de trabalhar com a linguagem e o desenvolvimento backend. Desde então, tenho me aprofundado em frameworks como Django e FastAPI, além de explorar integrações de sistemas e APIs. Estou sempre em busca de aprimorar minhas habilidades, dedicando-me a cursos e desafios práticos que me permitem explorar novas tecnologias, incluindo IA com Python (LangChain, RAG), Docker e AWS.
      </p>
      <p className={styles.paragraph}>
        Apliquei meu conhecimento de forma prática como Desenvolvedor de Sistemas voluntário na EEEP Adolfo Ferreira de Sousa. Durante essa experiência, desenvolvi soluções internas importantes, como um sistema para a escolha de orientadores do ENEM, um sistema de gestão de biblioteca com controle de empréstimos e indicadores visuais, e uma plataforma para as eleições do grêmio estudantil com um painel interativo. Atualmente, estou focado no desenvolvimento de uma API com FastAPI para a reserva de projetores. Nesses projetos, utilizei tecnologias como Django, DRF, FastAPI, PostgreSQL, Docker, Chart.js e Bootstrap, e fui responsável pelo deploy e gerenciamento via AWS e Render.
      </p>
      <p className={styles.paragraph}>
        Comprometido com uma trajetória na engenharia de software, com foco em Análise e Desenvolvimento de Sistemas, continuo minha especialização em integrações de IA com Python, explorando o uso de LangChain e RAG para criar soluções inteligentes, bem como integrações com WhatsApp, e-mail e APIs de pagamento. Sinto-me preparado para os próximos desafios, como um estágio. 
      </p>

    </ModelPost>
  );
};

export default AboutMe;
