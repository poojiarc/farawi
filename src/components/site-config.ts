export const site = {
  name: "Farawi Events",
  phone: "+971 4 395 1423",
  phoneRaw: "043951423",
  whatsapp: "+971 56 123 9797",
  whatsappRaw: "971561239797",
  email: "farawievents@gmail.com",
  address: "Dubai, UAE",
  hours: {
    weekdays: "Monday – Friday: 8:00 – 17:00",
    weekend: "Saturday & Sunday: Closed",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export const whatsappLink = (msg = "Hello Farawi Events, I would like to inquire about your services.") =>
  `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(msg)}`;
