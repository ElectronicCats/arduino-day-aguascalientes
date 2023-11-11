const DATA_PROGRAM_NOVEMBER_15 = [
  {
    name: "Apertura",
    hour: "9:00 A 11:00",
    expositor: "Escenario Principal",
  },
  {
    name: "3,2, listos, fuera!",
    hour: "10:00 a 14:00",
    expositor: "Ricardo Villegas",
  },
  {
    name: "Exp. Ciencia Loca",
    hour: "10:00 a 14:00",
    expositor: "IncyTea",
  },
  {
    name: "Electronica",
    hour: "10:00 a 14:00",
    expositor: "Makers GDL.",
  },
  {
    name: "Impresión 3D",
    hour: "10:00 a 14:00",
    expositor: "Daniel Solis",
  },
  {
    name: "Meow Meow",
    hour: "10:00 a 14:00",
    expositor: "Eric Chávez",
  },
  {
    name: "Ponencia Principal",
    hour: "14:00 a 15:00",
    expositor: "David Cuartielles",
  },
];
const DATA_PROGRAM_NOVEMBER_16 = [
  {
    name: "Impresión 3D",
    hour: "10:00 a 14:00",
    expositor: "Daniel Solis",
  },
  {
    name: "Exp. Ciencia Loca",
    hour: "10:00 a 14:00",
    expositor: "IncyTea",
  },
  {
    name: "3,2, listos, fuera!",
    hour: "10:00 a 14:00",
    expositor: "Ricardo Villegas",
  },
  {
    name: "Electronica",
    hour: "10:00 a 14:00",
    expositor: "Makers GDL.",
  },
  {
    name: "Meow Meow",
    hour: "10:00 a 14:00",
    expositor: "Eric Chávez",
  },
  {
    name: "Tu Voz en Steam",
    hour: "14:00 a 15:00",
    expositor: "Aziel Medina",
  },
  {
    name: "Clausura",
    hour: "15:00 a 16:00",
    expositor: "Escenario Principal",
  },
];

const DATA_EXPOSITORS = [
  {
    name: "Educación 4.0",
    expositor: "Ricardo Villegas",
    img: "ricardo.png",
  },
  {
    name: "¿Existe el Buen Usuario?",
    expositor: "Carlos Alatorre",
    img: "carlos.png",
  },
  {
    name: "Hackeando Tu Mente",
    expositor: "Hacker Girl",
    img: "hackergirl.png",
  },
  {
    name: "Por Definir",
    expositor: " Laura Balboa",
    img: "laura.png",
  },
  {
    name: "Provectus",
    expositor: "Oscar Ponce",
    img: "oscar.png",
  },
  {
    name: "Arduino en la Escuela",
    expositor: "Amelin Medina",
    img: "emelin.png",
  },
];

const programTemplate = (obj) => `
    <div class="program_hour">
        <span class="">${obj.hour}</p>
    </div>
    <div class="program_expositor">
        <h3>${obj.name}</h3>
        <p>${obj.expositor}</p>
    </div>
`;

const expositorTemplate = (obj, i) => `
    <img src="assets/images/${obj.img}" class="ponente_img" alt="Componente avatar ${obj.expositor}"/>
    <br><b><span>${obj.expositor}</span></b><br>
    <span>${obj.name}</span>
`;
function templateGenerator(
  containerID,
  data,
  templateFunction,
  containerClass,
  containerElement = "div"
) {
  const fragment = document.createDocumentFragment();
  data.forEach((obj, i) => {
    const program_tag = document.createElement(containerElement);
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
  "programa_tag",
  "li"
);
templateGenerator(
  "program_november16",
  DATA_PROGRAM_NOVEMBER_16,
  programTemplate,
  "programa_tag",
  "li"
);
templateGenerator(
  "ponentes",
  DATA_EXPOSITORS,
  expositorTemplate,
  "ponentes_text"
);
