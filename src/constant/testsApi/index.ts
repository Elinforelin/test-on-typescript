import img1 from "../../assets/img/math.jpg";
import img2 from "../../assets/img/nature.jpg";
import img3 from "../../assets/img/corner.jpg";
import { Test } from "./types";

export const tests: Test[] = [
  {
    name: "Тест з математики",
    pathname: "/mathtest",
    img: img1,
    desc: "Математичні тести для дітей від шести років",
    questions: [
      {
        number: 1,
        text: "Три дівчинки готувались до танцю для концерту. Втрьох вони танцювали 3 години. Скільки годин танцювала кожна з них?",
        answers: [
          { answer: "Серед відповідей немає правильної", isCorrect: false },
          { answer: "1 год", isCorrect: false },
          { answer: "9 год", isCorrect: false },
          { answer: "3 год", isCorrect: true },
        ],
      },
      {
        number: 2,
        text: "Сховалися кози за парканом і чекають, коли піде фермер, щоб дістатися до капусти. Із-за паркану знизу видно 28 ніг, а зверху - 14 рогів. Так скільки за парканом кіз?",
        answers: [
          { answer: "42 кози", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
          { answer: "14 кіз", isCorrect: false },
          { answer: "7 кіз", isCorrect: true },
        ],
      },
      {
        number: 3,
        text: "Світлана відпочивала у бабусі 3 тижні і 4 дні. Скільки днів гостювала Світлана у бабусі?",
        answers: [
          { answer: "11 днів", isCorrect: false },
          { answer: "30 днів", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: true },
          { answer: "7 днів", isCorrect: false },
        ],
      },
      {
        number: 4,
        text: "Оленка відрізала 5 стрічок для ляльки, причому кожна нова стрічка була на 3 см довша, ніж попередня. Яка довжина була у першої стрічки, якщо довжина останньої стрічки - 15 см?",
        answers: [
          { answer: "Серед відповідей немає правильної", isCorrect: false },
          { answer: "3 см", isCorrect: true },
          { answer: "5 см", isCorrect: false },
          { answer: "12 см", isCorrect: false },
        ],
      },
      {
        number: 5,
        text: "У Юри і Артема разом 26 фломастерів. Юра списав і викинув 3 фломастери, а 5 віддав Артему. Скільки фломастерів тепер у Артема і Юри разом?",
        answers: [
          { answer: "44 фломастери", isCorrect: false },
          { answer: "18 фломастери", isCorrect: false },
          { answer: "23 фломастери", isCorrect: true },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 6,
        text: "Коля, Вася і Боря грали в шашки. Кожен з них зіграв лише 2 партії. Скільки всього партій було зіграно?",
        answers: [
          { answer: "3 партії", isCorrect: true },
          { answer: "4 партії", isCorrect: false },
          { answer: "6 партій", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 7,
        text: "В небі летіли: горобець, ворона, оса, ластівка і джміль. Скільки птахів летіло?",
        answers: [
          { answer: "5 пташок", isCorrect: false },
          { answer: "2 пташки", isCorrect: false },
          { answer: "3 пташкии", isCorrect: true },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 8,
        text: "Горіло сім лампочок. Три з них згасли. Скільки лампочок залишилося?",
        answers: [
          { answer: "3 лампочки", isCorrect: false },
          { answer: "4 лампочки", isCorrect: false },
          { answer: "7 лампочок", isCorrect: true },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 9,
        text: " Світлана задумала число. Щоб його знайти, треба з найбільшого двоцифрового числа відняти найбільше одноцифрове число і результат збільшити на найменше одноцифрове число. Яке число задумала Світлана??",
        answers: [
          { answer: "90", isCorrect: false },
          { answer: "91", isCorrect: true },
          { answer: "100", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 10,
        text: "У Костіному відрі йоржі, піскарі і окуні - всього 14 рибок. Йоржів на 10 більше, ніж піскарів. Скільки піскарів?",
        answers: [
          { answer: "1", isCorrect: true },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
          { answer: "2", isCorrect: false },
          { answer: "3", isCorrect: false },
        ],
      },
      {
        number: 11,
        text: "Вантажних автомобілів на 20 менше, ніж легкових, а загальне число автомобілів дорівнює 5 десяткам. Скільки вантажних автомобілів?",
        answers: [
          { answer: "50", isCorrect: false },
          { answer: "30", isCorrect: false },
          { answer: "15", isCorrect: true },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 12,
        text: "Чому дорівнює сума двох чисел, якщо вона на 3 більше одного з цих чисел і на 4 більше від іншого?",
        answers: [
          { answer: "5", isCorrect: false },
          { answer: "7", isCorrect: true },
          { answer: "8", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
    ],
  },
  {
    name: "Тест з природознавства",
    pathname: "/naturalscience",
    img: img2,
    desc: "Питання на знання навколишньго середовища і України",
    questions: [
      {
        number: 1,
        text: "Якого кольору прапор України?",
        answers: [
          { answer: "жовто - фіолетовий", isCorrect: false },
          { answer: "жовто - голубий", isCorrect: true },
          { answer: "синьо - жовтий", isCorrect: false },
          { answer: "синьо - білий", isCorrect: false },
        ],
      },
      {
        number: 2,
        text: "Яке місто є столицею України?",
        answers: [
          { answer: "Запоріжжя", isCorrect: false },
          { answer: "Харків", isCorrect: false },
          { answer: "Київ", isCorrect: true },
          { answer: "Дніпро", isCorrect: false },
        ],
      },
      {
        number: 3,
        text: "Як називається найбільша річка України?",
        answers: [
          { answer: "Бритай", isCorrect: false },
          { answer: "Дунай", isCorrect: false },
          { answer: "Південний Буг", isCorrect: false },
          { answer: "Дніпро", isCorrect: true },
        ],
      },
      {
        number: 4,
        text: "Найбільше озеро Карпат- це...",
        answers: [
          { answer: "Сиваш", isCorrect: false },
          { answer: "Світязь", isCorrect: false },
          { answer: "Синевир", isCorrect: true },
          { answer: "Дніпро", isCorrect: false },
        ],
      },
      {
        number: 5,
        text: "Яке море дуже глибоке і від того здається, що у ньому чорна вода?",
        answers: [
          { answer: "Азовське", isCorrect: false },
          { answer: "Червоне", isCorrect: false },
          { answer: "Чорне", isCorrect: true },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 6,
        text: "Грошова одиниця в Україні?",
        answers: [
          { answer: "гривня", isCorrect: true },
          { answer: "доллар", isCorrect: false },
          { answer: "юань", isCorrect: false },
          { answer: "евро", isCorrect: false },
        ],
      },
      {
        number: 7,
        text: "Обери державні символи України.",
        answers: [
          { answer: "Прапор, гімн, смерека", isCorrect: false },
          { answer: "Гімн, герб, дуб", isCorrect: false },
          { answer: "Герб, гімн, прапор", isCorrect: true },
          { answer: "Каліна, гімн, прапор", isCorrect: false },
        ],
      },
      {
        number: 8,
        text: "Державна мова України",
        answers: [
          { answer: "Українська", isCorrect: true },
          { answer: "Польска", isCorrect: false },
          { answer: "Россійська", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 9,
        text: "Обери назву планети, на якій ти живеш",
        answers: [
          { answer: "Юпітер", isCorrect: false },
          { answer: "Марс", isCorrect: false },
          { answer: "Венера", isCorrect: false },
          { answer: "Земля", isCorrect: true },
        ],
      },
      {
        number: 10,
        text: "Яку назву носить найвища гора України?",
        answers: [
          { answer: "Петрос", isCorrect: false },
          { answer: "Смотрич", isCorrect: false },
          { answer: "Яровиця", isCorrect: false },
          { answer: "Говерла", isCorrect: true },
        ],
      },
      {
        number: 11,
        text: "Кущова рослина, символ України",
        answers: [
          { answer: "Калина", isCorrect: true },
          { answer: "Смородина", isCorrect: false },
          { answer: "Ялинка", isCorrect: false },
          { answer: "Роза", isCorrect: false },
        ],
      },
      {
        number: 12,
        text: "Різнокольорова прикраса українського віночка?",
        answers: [
          { answer: "Буси", isCorrect: false },
          { answer: "Резинки", isCorrect: false },
          { answer: "Гілки", isCorrect: false },
          { answer: "Стрічка", isCorrect: true },
        ],
      },
    ],
  },
  {
    name: "Тест з математики. Види кутів",
    pathname: "/mathcorner",
    img: img3,
    desc: "Тест з математики на знання кутів",
    questions: [
      {
        number: 1,
        text: "Кут величиною 90 градусів утворює?",
        answers: [
          { answer: "прямий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "гострий", isCorrect: false },
        ],
      },
      {
        number: 2,
        text: "Яка величина прямого кута?",
        answers: [
          { answer: "45 градусів", isCorrect: false },
          { answer: "90 градусів", isCorrect: true },
          { answer: "180 градусів", isCorrect: false },
          { answer: "120 градусів", isCorrect: false },
        ],
      },
      {
        number: 3,
        text: "Кут менший від 90 градусів називається",
        answers: [
          { answer: "тупий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "гострий", isCorrect: true },
        ],
      },
      {
        number: 4,
        text: "Якщо кут має 30 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "прямий кут", isCorrect: false },
        ],
      },
      {
        number: 5,
        text: " Два промені, що виходять з однієї точки та утворюють пряму лінію називаються",
        answers: [
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "прямий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 6,
        text: "Як називається кут більший від 90 градусів?",
        answers: [
          { answer: "гострий", isCorrect: false },
          { answer: "тупий", isCorrect: true },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
        ],
      },
      {
        number: 7,
        text: "Який кут має 179 градусів?",
        answers: [
          { answer: "тупий", isCorrect: true },
          { answer: "гострий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
        ],
      },
      {
        number: 8,
        text: "Сумістивши два прямі кути, можна утворити",
        answers: [
          { answer: "гострий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 9,
        text: "Який із кутів є тупим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 100 градусів", isCorrect: true },
          { answer: "кут 180 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: false },
        ],
      },
      {
        number: 10,
        text: "Який із кутів є прямим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 30 градусів", isCorrect: false },
          { answer: "кут 173 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: true },
        ],
      },
      {
        number: 11,
        text: "Якщо кут має 15 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 12,
        text: "Який із кутів є розгорнутим?",
        answers: [
          { answer: "150 градусів", isCorrect: false },
          { answer: "32 градуси", isCorrect: false },
          { answer: "90 градусів", isCorrect: false },
          { answer: "180 градусів", isCorrect: true },
        ],
      },
    ],
  },
  {
    name: "Тест з математики. Види кутів",
    pathname: "/mathcorner",
    img: img3,
    desc: "Тест з математики на знання кутів",
    questions: [
      {
        number: 1,
        text: "Кут величиною 90 градусів утворює?",
        answers: [
          { answer: "прямий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "гострий", isCorrect: false },
        ],
      },
      {
        number: 2,
        text: "Яка величина прямого кута?",
        answers: [
          { answer: "45 градусів", isCorrect: false },
          { answer: "90 градусів", isCorrect: true },
          { answer: "180 градусів", isCorrect: false },
          { answer: "120 градусів", isCorrect: false },
        ],
      },
      {
        number: 3,
        text: "Кут менший від 90 градусів називається",
        answers: [
          { answer: "тупий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "гострий", isCorrect: true },
        ],
      },
      {
        number: 4,
        text: "Якщо кут має 30 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "прямий кут", isCorrect: false },
        ],
      },
      {
        number: 5,
        text: " Два промені, що виходять з однієї точки та утворюють пряму лінію називаються",
        answers: [
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "прямий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 6,
        text: "Як називається кут більший від 90 градусів?",
        answers: [
          { answer: "гострий", isCorrect: false },
          { answer: "тупий", isCorrect: true },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
        ],
      },
      {
        number: 7,
        text: "Який кут має 179 градусів?",
        answers: [
          { answer: "тупий", isCorrect: true },
          { answer: "гострий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
        ],
      },
      {
        number: 8,
        text: "Сумістивши два прямі кути, можна утворити",
        answers: [
          { answer: "гострий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 9,
        text: "Який із кутів є тупим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 100 градусів", isCorrect: true },
          { answer: "кут 180 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: false },
        ],
      },
      {
        number: 10,
        text: "Який із кутів є прямим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 30 градусів", isCorrect: false },
          { answer: "кут 173 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: true },
        ],
      },
      {
        number: 11,
        text: "Якщо кут має 15 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 12,
        text: "Який із кутів є розгорнутим?",
        answers: [
          { answer: "150 градусів", isCorrect: false },
          { answer: "32 градуси", isCorrect: false },
          { answer: "90 градусів", isCorrect: false },
          { answer: "180 градусів", isCorrect: true },
        ],
      },
    ],
  },
  {
    name: "Тест з математики. Види кутів",
    pathname: "/mathcorner",
    img: img3,
    desc: "Тест з математики на знання кутів",
    questions: [
      {
        number: 1,
        text: "Кут величиною 90 градусів утворює?",
        answers: [
          { answer: "прямий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "гострий", isCorrect: false },
        ],
      },
      {
        number: 2,
        text: "Яка величина прямого кута?",
        answers: [
          { answer: "45 градусів", isCorrect: false },
          { answer: "90 градусів", isCorrect: true },
          { answer: "180 градусів", isCorrect: false },
          { answer: "120 градусів", isCorrect: false },
        ],
      },
      {
        number: 3,
        text: "Кут менший від 90 градусів називається",
        answers: [
          { answer: "тупий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "гострий", isCorrect: true },
        ],
      },
      {
        number: 4,
        text: "Якщо кут має 30 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "прямий кут", isCorrect: false },
        ],
      },
      {
        number: 5,
        text: " Два промені, що виходять з однієї точки та утворюють пряму лінію називаються",
        answers: [
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "прямий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 6,
        text: "Як називається кут більший від 90 градусів?",
        answers: [
          { answer: "гострий", isCorrect: false },
          { answer: "тупий", isCorrect: true },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
        ],
      },
      {
        number: 7,
        text: "Який кут має 179 градусів?",
        answers: [
          { answer: "тупий", isCorrect: true },
          { answer: "гострий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
        ],
      },
      {
        number: 8,
        text: "Сумістивши два прямі кути, можна утворити",
        answers: [
          { answer: "гострий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 9,
        text: "Який із кутів є тупим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 100 градусів", isCorrect: true },
          { answer: "кут 180 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: false },
        ],
      },
      {
        number: 10,
        text: "Який із кутів є прямим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 30 градусів", isCorrect: false },
          { answer: "кут 173 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: true },
        ],
      },
      {
        number: 11,
        text: "Якщо кут має 15 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 12,
        text: "Який із кутів є розгорнутим?",
        answers: [
          { answer: "150 градусів", isCorrect: false },
          { answer: "32 градуси", isCorrect: false },
          { answer: "90 градусів", isCorrect: false },
          { answer: "180 градусів", isCorrect: true },
        ],
      },
    ],
  },
  {
    name: "Тест з математики. Види кутів",
    pathname: "/mathcorner",
    img: img3,
    desc: "Тест з математики на знання кутів",
    questions: [
      {
        number: 1,
        text: "Кут величиною 90 градусів утворює?",
        answers: [
          { answer: "прямий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "гострий", isCorrect: false },
        ],
      },
      {
        number: 2,
        text: "Яка величина прямого кута?",
        answers: [
          { answer: "45 градусів", isCorrect: false },
          { answer: "90 градусів", isCorrect: true },
          { answer: "180 градусів", isCorrect: false },
          { answer: "120 градусів", isCorrect: false },
        ],
      },
      {
        number: 3,
        text: "Кут менший від 90 градусів називається",
        answers: [
          { answer: "тупий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "гострий", isCorrect: true },
        ],
      },
      {
        number: 4,
        text: "Якщо кут має 30 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "прямий кут", isCorrect: false },
        ],
      },
      {
        number: 5,
        text: " Два промені, що виходять з однієї точки та утворюють пряму лінію називаються",
        answers: [
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "прямий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "Серед відповідей немає правильної", isCorrect: false },
        ],
      },
      {
        number: 6,
        text: "Як називається кут більший від 90 градусів?",
        answers: [
          { answer: "гострий", isCorrect: false },
          { answer: "тупий", isCorrect: true },
          { answer: "розгорнутий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
        ],
      },
      {
        number: 7,
        text: "Який кут має 179 градусів?",
        answers: [
          { answer: "тупий", isCorrect: true },
          { answer: "гострий", isCorrect: false },
          { answer: "прямий", isCorrect: false },
          { answer: "розгорнутий", isCorrect: false },
        ],
      },
      {
        number: 8,
        text: "Сумістивши два прямі кути, можна утворити",
        answers: [
          { answer: "гострий кут", isCorrect: false },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: true },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 9,
        text: "Який із кутів є тупим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 100 градусів", isCorrect: true },
          { answer: "кут 180 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: false },
        ],
      },
      {
        number: 10,
        text: "Який із кутів є прямим?",
        answers: [
          { answer: "кут 52 градуси", isCorrect: false },
          { answer: "кут 30 градусів", isCorrect: false },
          { answer: "кут 173 градусів", isCorrect: false },
          { answer: "кут 90 градусів", isCorrect: true },
        ],
      },
      {
        number: 11,
        text: "Якщо кут має 15 градусів, то це",
        answers: [
          { answer: "гострий кут", isCorrect: true },
          { answer: "тупий кут", isCorrect: false },
          { answer: "розгорнутий кут", isCorrect: false },
          { answer: "кривий кут", isCorrect: false },
        ],
      },
      {
        number: 12,
        text: "Який із кутів є розгорнутим?",
        answers: [
          { answer: "150 градусів", isCorrect: false },
          { answer: "32 градуси", isCorrect: false },
          { answer: "90 градусів", isCorrect: false },
          { answer: "180 градусів", isCorrect: true },
        ],
      },
    ],
  },
];
