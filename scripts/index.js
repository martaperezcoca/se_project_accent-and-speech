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

function getServiceElement(data) {
  const serviceEl = serviceTemplate.content.cloneNode(true);
  const titleEl = serviceEl.querySelector(".service__box-title");
  const descriptionEl = serviceEl.querySelector(".service__box-description");

  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;

  return serviceEl;
}

services.forEach((service) => {
  const element = getServiceElement(service);
  serviceContainer.appendChild(element);
});
