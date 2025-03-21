const services = [
  {
    title: "Accent & Pronunciation",
    description:
      "Improve pronunciation, modify your accent, and gain confidence.",
  },
  {
    title: "Professional & Corporate Speech",
    description:
      "Speak clearly and confidently in business settings and interviews.",
  },
  {
    title: "Speech Therapy for Disabilities & Medical Conditions",
    description: "Therapy for stuttering, articulation, and voice disorders.",
  },
  {
    title: "Social & Everyday Communication",
    description: "Develop natural, confident social speaking skills.",
  },
  {
    title: "Rehabilitation & Medical Speech",
    description:
      "Speech recovery for stroke survivors and neurological conditions.",
  },
  {
    title: "Online Speech Therapy & Consultation",
    description:
      "Work with Dianne from anywhere through personalized Zoom sessions.",
  },
];
// Service Elements
const serviceContainer = document.querySelector("#services-container");
const serviceTemplate = document.querySelector("#service-template");
// Modal Elements
const modal = document.querySelector("#service-modal");
const modalTitle = modal.querySelector(".modal__title");
const modalDescription = modal.querySelector(".modal__description");
const modalCloseButton = modal.querySelector(".modal__close");

function getServiceElement(data) {
  const serviceEl = serviceTemplate.content.cloneNode(true);
  const titleEl = serviceEl.querySelector(".service__box-title");
  const buttonEl = serviceEl.querySelector(".service__box-button");

  titleEl.textContent = data.title;

  return serviceEl;
}

services.forEach((service) => {
  const element = getServiceElement(service);
  serviceContainer.appendChild(element);
});

// TODO - MODAL
