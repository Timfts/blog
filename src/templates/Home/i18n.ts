import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("home");

const i18n = {
  en: {
    mainTitle: "Hi There!",
    mainImgAlt: "Animated image of a man with a shaking a old computer monitor",
    introParagraphs: [
      `I am a programmer and musician, passionate about combining technology and art. <br /> 
      Currently working as a <del>mad scientist</del> software engineer, 
      focused on solution architecture and exploring subjects such as design systems, 
      web performance optimization, cloud computing and more.`,

      `This blog was created to be my little personal space on the web, 
      a place where I can document my crazy ideas, experiments, studies, and projects. 
      Bringing a touch of creativity to the craft.`,

      "𝖜𝖊𝖑𝖈𝖔𝖒𝖊",
    ],
    latestPostsTitle: "Latest updates",
    morePosts: "see all",
    categoriesTitle: "Categories",
    topicLabelProperty: "label",
  },
  "pt-br": {
    mainTitle: "Olá!",
    mainImgAlt: "Imagem animada de um homem chacoalhando o monitor de um computador antigo",
    introParagraphs: [
      `Sou programador e músico, apaixonado por misturar tecnologia e arte. <br />
        Atualmente trabalhando como <del>cientista maluco</del> engenheiro de software, 
        focado em arquitetura de soluções e explorando assuntos como design systems, 
        web performance, cloud computing e mais.`,

      `Este blog foi criado para ser meu pequeno espaço pessoal na web, 
      um lugar onde posso documentar minhas ideias malucas, experimentos, 
      estudos e projetos. Trazendo um toque de criatividade à técnica.`,

      "𝖜𝖊𝖑𝖈𝖔𝖒𝖊",
    ],
    latestPostsTitle: "Últimas atualizações",
    morePosts: "ver todos",
    categoriesTitle: "Categorias",
    topicLabelProperty: "label-ptbr",
  },
};

export default i18n;
