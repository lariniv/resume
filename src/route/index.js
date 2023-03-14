// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  address: 'Kyiv',

  name: {
    firstname: 'Ivan',
    surname: 'Ivanov',
  },

  salary: '600$ в місяць',

  profession: 'Junnior fullstack JS developer',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      value: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      value: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      value: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. 
        Whenever I start towork on a new project I learn the domain and try to understand 
        the idea of the project. Good teamplayer, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport 
        statistics (tournament position, goals etc), analyzing by simple mathematics models \
        and preparing probabilityfor such events like: money line - first win / draw / second win, 
        totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 7,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 9,
        },
        {
          name: 'REact.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Football',
          isMain: true,
        },
        {
          name: 'Basketball',
          isMain: false,
        },
        {
          name: 'Volleyball',
          isMain: false,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'Education1',
          isEnd: true,
        },
        {
          name: 'Education2',
          isEnd: false,
        },
        {
          name: 'Education3',
          isEnd: true,
        },
        {
          name: 'Education4',
          isEnd: false,
        },
        {
          name: 'Education5',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'PET',
          id: 100,
        },
        {
          name: 'IELTS',
          id: 223,
        },
        {
          name: 'CAE',
          id: 31213,
        },
      ],
    },
    footer,
  })
})
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Dev',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              stackAmount: 3,
              awardAmount: 2,
              name: 'resume',
              url: 'https://resume.com.ua/',
              about: 'description info',
              stacks: [
                {
                  name: 'react.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Test award1',
                },
                {
                  name: 'Test award2',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
