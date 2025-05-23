import pagePaths from "@constants/pagePaths";
import { getPageI18NPathMap } from "@helpers/server/i18n";

export const pathMap = getPageI18NPathMap("contact");

const i18n = {
  en: {
    title: "Contact",
    contactText: "You can contact me through any social media platform above, or reach out via email at",
    orBy: "or filling the form:",
    subject: "Let's talk!",
    sendForm: "Send !!!",
    nameField: "Name:",
    messageField: "Message:",
    imageAlt: "Animated Image of a flip phone",
    defaultGoBackPage: pagePaths.en.home,
  },
  "pt-br": {
    title: "Contato",
    contactText: "Você pode me contatar por qualquer rede social acima, ou entrar em contato pelo email",
    orBy: "ou pelo formulário:",
    subject: "Vamos conversar!",
    sendForm: "Enviar !!!",
    nameField: "Nome:",
    messageField: "Menssagem:",
    imageAlt: "Imagem animada de um celular antigo",
    defaultGoBackPage: pagePaths["pt-br"].home,
  },
};

export default i18n;
