
const arr = [
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-1.jpg',
    name: "Startseite",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
    timer: .5,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-2.jpg',
    name: "Über Uns",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
    timer: .7,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-3.jpg',
    name: "Kosmetik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
    timer: 1,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-4.jpg',
    name: "BABOR",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 4,
    timer: 1.2,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-5.jpg',
    name: "Ästhetik",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 5,
    timer: 1.5,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-6.jpg',
    name: "Haarentfernung",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 6,
    timer: 1.7,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-7.jpg',
    name: "Kryolipolyse",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 7,
    timer: 1.8,
  },
  {
    src: '/static/images/corousel_Images/homepage-2-slider-img-8.jpg',
    name: "Zahnaufhellung",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 8,
    timer: 2,
  },
];

const list = (state = arr, action) => {
  switch (action.type) {
    case 'LIST':
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default list;