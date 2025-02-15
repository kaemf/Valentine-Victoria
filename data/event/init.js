const denyButton = document.querySelector(".btn-deny"),
  denyEmpty = document.querySelector(".deny-empty"),
  acceptButton = document.querySelector(".btn-accept"),
  textElement = document.querySelector(".text-appear"),
  img = document.querySelector(".image-container > img"),
  bsod = document.querySelector(".bsod"),
  SSY = document.querySelector(".she-say-yes"),
  ES = document.querySelector(".entire-screen"),
  imContainer = document.querySelector(".image-container"),
  variants = {
    textVariants: [
      "Даю можливість передумати, кохана :)",
      "Ну серйозно?...",
      "Знущаєшся?",
      "Ти дійсно мене не кохаєш?...",
      "Ти це не жартуєш?",
      "Тобто...",
      "Все ясно."
    ],

    buttonsVarinats: {
      deny: [
        "Ні",
        "Навіть не знаю",
        "Нєа, я на серйозі",
        "Давно про це хотіла тобі сказати",
        "А схоже на жарт?",
        ":)",
        "0_-"
      ],

      accept: [
        "Так, моя киця! Просто не те тицьнула",
        "Ой ні, що на мене найшло",
        "Ну так, а що тут такого?",
        "Ти що, ні, я ж просто жартую",
        "А як по іншому, киць?",
        "Ні-ні! Кицюнь! Я жартую",
        "-_0"
      ]
    }
  },
  config = {
    moveSpeed: 4,
    maxDistance: 140
  };

let noStep = 0;