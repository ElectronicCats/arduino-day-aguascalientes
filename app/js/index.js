const DATA_PROGRAM_NOVEMBER_15 = [
  {
    name: "Arduino in life",
    hour: "9:00",
    expositor: "Alejandro Medina",
    place: "A-112",
  },
  {
    name: "Arduino in life",
    hour: "10:00",
    expositor: "Alejandro Medina",
    place: "A-112",
  },
  {
    name: "Arduino in life",
    hour: "11:00",
    expositor: "Alejandro Medina",
    place: "A-112",
  },
];
const DATA_PROGRAM_NOVEMBER_16 = [
  {
    name: "Arduino in life",
    hour: "9:00",
    expositor: "David Cuartielles",
    place: "B-222",
  },
  {
    name: "Arduino in life",
    hour: "10:00",
    expositor: "David Cuartielles",
    place: "B-222",
  },
  {
    name: "Arduino in life",
    hour: "11:00",
    expositor: "David Cuartielles",
    place: "B-222",
  },
];
const DATA_WORKSHOPS = [
  {
    name: "Arduino in life",
    hour: "9:00",
    expositor: "David Cuartielles",
    place: "B-222",
  },
  {
    name: "Arduino in life",
    hour: "9:00",
    expositor: "David Cuartielles",
    place: "B-222",
  },
  {
    name: "Arduino in life",
    hour: "9:00",
    expositor: "David Cuartielles",
    place: "B-222",
  },
];

const DATA_EXPOSITORS = [
  {
    name: "Caos en productor con hardware",
    expositor: " DCircuits",
  },
  {
    name: "Soluciones basicas en fabricas con Arduino",
    expositor: "Pepe Ruiz",
  },
  {
    name: "Alfabetismo Maker",
    expositor: "Antonio Quirarte",
  },
  {
    name: "Caos en productor con hardware",
    expositor: " DCircuits",
  },
  {
    name: "Soluciones basicas en fabricas con Arduino",
    expositor: "Pepe Ruiz",
  },
  {
    name: "Alfabetismo Maker",
    expositor: "Antonio Quirarte",
  },
  {
    name: "Caos en productor con hardware",
    expositor: " DCircuits",
  },
  {
    name: "Soluciones basicas en fabricas con Arduino",
    expositor: "Pepe Ruiz",
  },
  {
    name: "Alfabetismo Maker",
    expositor: "Antonio Quirarte",
  },
];

const programTemplate = (obj) => `
    <div class="program_hour">
        <span class="">${obj.hour}</p>
    </div>
    <div class="program_expositor">
        <h3>${obj.name}</h3>
        <p>${obj.expositor} | <span class="c_orange">${obj.place}</span></p>
    </div>
`;
const workshopTemplate = (obj) => `
    <div class="taller_description">
        <div class="talleres_hour">
            <span class="c_yellow">${obj.hour}</p>
        </div>
        <div class="talleres_expositor">
            <h3>${obj.name}</h3>
            <p class="c_orange">${obj.expositor}</p>
        </div>
    </div>
    <p class="taller_place">${obj.place}</p>
`;
const expositorTemplate = (obj, i) => `
    <img src="assets/images/ponente${
      (i % 4) + 1
    }.svg" class="ponente_img" alt="Componente avatar ${obj.expositor}"/>
    <br><b><span>${obj.expositor}</span></b><br>
    <span>${obj.name}</span>
`;
function templateGenerator(
  containerID,
  data,
  templateFunction,
  containerClass
) {
  const fragment = document.createDocumentFragment();
  data.forEach((obj, i) => {
    const program_tag = document.createElement("div");
    program_tag.classList.add(containerClass);
    program_tag.innerHTML = templateFunction(obj, i);
    fragment.appendChild(program_tag); // Append a child
  });

  const container = document.getElementById(containerID);
  container.appendChild(fragment);
}
templateGenerator(
  "program_november15",
  DATA_PROGRAM_NOVEMBER_15,
  programTemplate,
  "programa_tag"
);
templateGenerator(
  "program_november16",
  DATA_PROGRAM_NOVEMBER_16,
  programTemplate,
  "programa_tag"
);
templateGenerator("talleres", DATA_WORKSHOPS, workshopTemplate, "taller_tag");
templateGenerator(
  "ponentes",
  DATA_EXPOSITORS,
  expositorTemplate,
  "ponentes_text"
);
