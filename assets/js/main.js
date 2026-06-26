const whatsappNumber = "971585645920";

const photos = [
  {
    title: "Ela no topo do mundo",
    image: "assets/media/images/gallery/pic1.PNG",
    description:
      "Malu tem esse jeito bonito de olhar para o horizonte como quem sabe que ainda existe muito sonho esperando por ela."
  },
  {
    title: "Meu conto de fadas",
    image: "assets/media/images/gallery/pic2.PNG",
    description:
      "Entre castelos, viagens e dias inesqueciveis, ela continua sendo a parte mais magica de qualquer cenario."
  },
  {
    title: "Olhar que desmonta",
    image: "assets/media/images/gallery/pic3.PNG",
    description:
      "Tem uma delicadeza nesse olhar que explica muita coisa: beleza, calma, carinho e aquele brilho que so ela tem."
  },
  {
    title: "Coração gigante",
    image: "assets/media/images/gallery/pic4.PNG",
    description:
      "A Malu cuida, acolhe e transforma qualquer momento simples em uma lembranca cheia de afeto."
  },
  {
    title: "Coragem que inspira",
    image: "assets/media/images/gallery/pic5.PNG",
    description:
      "Ela vai, encara, sobe, atravessa e conquista. Uma mulher forte, livre e muito maior do que qualquer medo."
  },
  {
    title: "Seu lado cinema",
    image: "assets/media/images/gallery/pic6.PNG",
    description:
      "A vida com ela tambem tem cena, personagem, brincadeira e surpresa. Malu sabe deixar tudo mais divertido."
  },
  {
    title: "Força em movimento",
    image: "assets/media/images/gallery/pic7.PNG",
    description:
      "Disciplina, foco e intensidade. Uma lembranca da mulher determinada que eu admiro todos os dias."
  },
  {
    title: "Alegria que contagia",
    image: "assets/media/images/gallery/pic8.PNG",
    description:
      "Quando ela sorri assim, o mundo parece mais leve. E qualquer viagem vira historia para guardar."
  },
  {
    title: "Doçura dos detalhes",
    image: "assets/media/images/gallery/pic9.PNG",
    description:
      "Uma memoria espontanea, simples e cheia de ternura, do tipo que faz a gente sorrir sem perceber."
  },
  {
    title: "Pequenas companhias",
    image: "assets/media/images/gallery/pic10.PNG",
    description:
      "Porque o amor dela aparece tambem nos pequenos cuidados, nos detalhes fofos e na forma como ela se importa."
  },
  {
    title: "A melhor amiga de quatro patas",
    image: "assets/media/images/gallery/pic11.PNG",
    description:
      "A Boo teve a sorte de encontrar alguém que a ama de verdade"
  },
  {
    title: "Como um dente-de-leão",
    image: "assets/media/images/gallery/pic12.PNG",
    description:
      "Assim como um dente-de-leão espalha suas sementes ao vento, você espalha amor por onde passa."
  }
];

const videos = [
  {
    title: "Oi amor da minha vida...",
    thumb: "https://img.youtube.com/vi/7ZVYAWQ32_Y/hqdefault.jpg",
    youtubeId: "7ZVYAWQ32_Y",
    fallbackUrl: "https://www.youtube.com/watch?v=7ZVYAWQ32_Y",
    description: "Aquele recado da sua mana !!",
    type: "youtube"
  },
  {
    title: "Eai irma !!",
    thumb: "https://img.youtube.com/vi/2Bgj2nmJd_Y/hqdefault.jpg",
    youtubeId: "2Bgj2nmJd_Y",
    fallbackUrl: "https://www.youtube.com/watch?v=2Bgj2nmJd_Y",
    description: "Nao tem como o dia continuar ruim depois disso.",
    type: "youtube"
  },
  {
    title: "Ola paixao",
    thumb: "https://img.youtube.com/vi/50l4eDYUNp4/hqdefault.jpg",
    youtubeId: "50l4eDYUNp4",
    fallbackUrl: "https://www.youtube.com/watch?v=50l4eDYUNp4",
    description: "Do seu bem, para a paixao dele.",
    type: "youtube"
  }
];

const gifts = [
  {
    title: "Vale Jantar Especial",
    description:
      "Um jantar escolhido por voce, sem pressa, com conversa boa, vinho e sobremesa obrigatoria.",
    message: "Quero resgatar meu Vale Jantar infinito."
  },
  {
    title: "Vale Massagem",
    description:
      "Um momento de cuidado para voce relaxar e receber carinho do jeito que merece.",
    message: "Quero resgatar meu Vale Massagem infinito."
  },
  {
    title: "Vale Abraco Carinhoso",
    description:
      "Um abraco apertado, demorado e cheio de carinho. Pode ser resgatado a qualquer momento, sem limite de uso e com direito a cafune."
  },
  {
    title: "Vale Cafe da Manha",
    description:
      "Um cafe da manha preparado com muito amor. Voce escolhe o cardapio e eu cuido do resto, para comecar o dia do jeitinho que voce merece."
  },
  {
    title: "Vale Motivacao",
    description:
      "Para aqueles dias em que tudo parece pesado. Inclui palavras de incentivo, abracos, apoio incondicional e um lembrete de que voce nunca estara sozinha."
  },
  {
    title: "Vale To com Fome",
    description:
      "Quando bater aquela fome inesperada, este vale garante um lanche, uma refeicao ou aquele pedido especial sem julgamentos. Afinal, sua felicidade tambem passa pela comida."
  },
  {
    title: "Vale Fazer um Drink",
    description:
      "Seu drink favorito preparado por mim, com capricho, boa conversa e um brinde a nos dois. Porque qualquer momento fica melhor quando comemorado ao seu lado."
  }
];

const photoGallery = document.querySelector("#photoGallery");
const videoGallery = document.querySelector("#videoGallery");
const giftCards = document.querySelector("#giftCards");
const photoModal = document.querySelector("#photoModal");
const videoModal = document.querySelector("#videoModal");
const modalPhotoImage = document.querySelector("#modalPhotoImage");
const modalPhotoTitle = document.querySelector("#modalPhotoTitle");
const modalPhotoDescription = document.querySelector("#modalPhotoDescription");
const modalVideoFrame = document.querySelector("#modalVideoFrame");
const modalVideoNative = document.querySelector("#modalVideoNative");
const modalVideoFallback = document.querySelector("#modalVideoFallback");

function imageFallback(event) {
  const image = event.currentTarget;
  image.classList.add("image-missing");
  image.src = image.classList.contains("video-thumb")
    ? "assets/media/images/placeholder-video.svg"
    : "assets/media/images/placeholder-photo.svg";
}

function renderPhotos() {
  photoGallery.innerHTML = photos
    .map(
      (photo, index) => `
        <div class="col-md-6 col-lg-4">
          <article class="memory-card parallax-card" data-parallax-speed="${index % 2 === 0 ? "0.025" : "-0.02"}" role="button" tabindex="0" data-photo-index="${index}" aria-label="${photo.title}">
            <img class="memory-image" src="${photo.image}" alt="${photo.title}">
            <div class="card-copy">
              <h3 class="brush-title">${photo.title}</h3>
              <p>${photo.description}</p>
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function renderVideos() {
  videoGallery.innerHTML = videos
    .map(
      (video, index) => `
        <div class="col-md-6 col-lg-4">
          <article class="video-card parallax-card" data-parallax-speed="${index % 2 === 0 ? "0.03" : "-0.025"}" role="button" tabindex="0" data-video-index="${index}" aria-label="${video.title}">
            <span class="play-pill" aria-hidden="true"></span>
            <img class="video-thumb" src="${video.thumb}" alt="${video.title}">
            <div class="card-copy">
              <h3 class="brush-title">${video.title}</h3>
              <p>${video.description}</p>
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function renderGifts() {
  giftCards.innerHTML = gifts
    .map((gift) => {
      const text = encodeURIComponent(`Oi, meu amor. ${gift.message}`);
      return `
        <div class="col-md-6 col-xl-3">
          <article class="gift-card">
            <h3 class="brush-title">${gift.title}</h3>
            <p>${gift.description}</p>
            <a class="gift-link" href="https://wa.me/${whatsappNumber}?text=${text}" target="_blank" rel="noopener">Resgatar presente</a>
          </article>
        </div>
      `;
    })
    .join("");
}

function openPhoto(index) {
  const photo = photos[index];
  modalPhotoImage.src = photo.image;
  modalPhotoImage.alt = photo.title;
  modalPhotoTitle.textContent = photo.title;
  modalPhotoDescription.textContent = photo.description;
  bootstrap.Modal.getOrCreateInstance(photoModal).show();
}

function openVideo(index) {
  const video = videos[index];
  modalVideoFrame.hidden = true;
  modalVideoNative.hidden = true;
  modalVideoFallback.hidden = true;
  modalVideoFrame.src = "";
  modalVideoNative.pause();
  modalVideoNative.removeAttribute("src");
  modalVideoNative.load();

  if (video.type === "youtube") {
    if (window.location.protocol === "file:") {
      window.open(video.fallbackUrl, "_blank", "noopener");
      return;
    }

    const origin = encodeURIComponent(window.location.origin);
    modalVideoFrame.src = `https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1&origin=${origin}`;
    modalVideoFrame.hidden = false;
    modalVideoFallback.href = video.fallbackUrl;
    modalVideoFallback.hidden = false;
  } else {
    modalVideoNative.src = video.url;
    modalVideoNative.hidden = false;
  }

  bootstrap.Modal.getOrCreateInstance(videoModal).show();
}

function bindCardEvents() {
  document.querySelectorAll("[data-photo-index]").forEach((card) => {
    const handler = () => openPhoto(card.dataset.photoIndex);
    card.addEventListener("click", handler);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handler();
      }
    });
  });

  document.querySelectorAll("[data-video-index]").forEach((card) => {
    const handler = () => openVideo(card.dataset.videoIndex);
    card.addEventListener("click", handler);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handler();
      }
    });
  });

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", imageFallback, { once: true });
  });

  document.querySelectorAll(".site-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector("#mainMenu");
      const collapse = bootstrap.Collapse.getInstance(menu);
      if (collapse) {
        collapse.hide();
      }
    });
  });
}

function updateParallaxCards() {
  const cards = document.querySelectorAll(".parallax-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const speed = Number(card.dataset.parallaxSpeed || 0.035);
    const offset = (window.innerHeight / 2 - rect.top) * speed;
    card.style.setProperty("--parallax-offset", `${Math.max(-42, Math.min(42, offset))}px`);
  });
}

renderPhotos();
renderVideos();
renderGifts();
bindCardEvents();
updateParallaxCards();

window.addEventListener("scroll", updateParallaxCards, { passive: true });
window.addEventListener("resize", updateParallaxCards);

videoModal.addEventListener("hidden.bs.modal", () => {
  modalVideoFrame.src = "";
  modalVideoFrame.hidden = true;
  modalVideoNative.pause();
  modalVideoNative.removeAttribute("src");
  modalVideoNative.load();
  modalVideoNative.hidden = true;
  modalVideoFallback.hidden = true;
});
