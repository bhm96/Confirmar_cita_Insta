const doctors = [
  { name: "Lcda. Evelyn Dayana Velasco Vizueta", specialty: "Nutrición" },
  { name: "Dr. Telmo Oswaldo Acuña Fernández", specialty: "Psicología" },
  { name: "Dr. Dylan Sebastián Aguirre Hidalgo", specialty: "Medicina general" },
  { name: "Dra. Tannia Estefanía Aguirre Soria", specialty: "Medicina Interna" },
  { name: "Dr. Carlos Eduardo Almeida Briones", specialty: "Medicina general" },
  { name: "Dra. Karen Alejandra Amagua Nevarez", specialty: "Medicina general" },
  { name: "Dra. María Elena Amangandi Guacho", specialty: "Medicina general" },
  { name: "Dr. Diego Favian Ancallay Rea", specialty: "Medicina general" },
  { name: "Dra. Vanessa Del Rocío Andrade Morocho", specialty: "Medicina general" },
  { name: "Dr. Nestor Eduardo Andrade Uzcategui", specialty: "Traumatología" },
  { name: "Dra. Yani Maribel Anrango Tituana", specialty: "Medicina general" },
  { name: "Dr. Alexis Danniel Armendariz Rengel", specialty: "Medicina general" },
  { name: "Dr. Darwin Adrian Arteaga Pilozo", specialty: "Medicina general" },
  { name: "Dra. Mildreth Corin Ayala Valencia", specialty: "Medicina general" },
  { name: "Dra. Ximena Elizabeth Becerra Avilés", specialty: "Medicina general" },
  { name: "Dra. Fatima Daniela Bernal Jaén", specialty: "Medicina general" },
  { name: "Dr. Jose David Brusil Arellano", specialty: "Medicina general" },
  { name: "Dra. Raquel Aracely Burbano Tipantuña", specialty: "Medicina general" },
  { name: "Dra. Paola Stephanie Cáceres Andrade", specialty: "Dermatología" },
  { name: "Dra. Gissela Nicool Calvache Cañar", specialty: "Medicina general" },
  { name: "Dr. Oscar Marcelo Carrillo Naranjo", specialty: "Medicina general" },
  { name: "Dra. Maria Paola Cedeño Cordova", specialty: "Medicina general" },
  { name: "Lcda. Pamela Lizbeth Cepeda Velez", specialty: "Psicología" },
  { name: "Dra. Noelia Deyanira Choez Abendaño", specialty: "Medicina general" },
  { name: "Dr. Luis Fernando Colina Velasco", specialty: "Medicina general" },
  { name: "Dr. Terry David Contreras Sánchez", specialty: "Medicina general" },
  { name: "Dra. Karen Stefania Cubillo Merino", specialty: "Medicina general" },
  { name: "Dra. María Belén Díaz Ortega", specialty: "Cardiología" },
  { name: "Dr. Luis Ricardo Enriquez Vinueza", specialty: "Medicina general" },
  { name: "Dra. Lucia Chiquinquira Espina Sanchez", specialty: "Medicina general" },
  { name: "Dra. Lady Dalila Estrada García", specialty: "Medicina general" },
  { name: "Dra. Gioconda Gabriela Franco Pérez", specialty: "Pediatría" },
  { name: "Dr. Danny Israel Gavilema Tipantuña", specialty: "Medicina general" },
  { name: "Dra. Melanie Sophia Grijalva Estrada", specialty: "Medicina general" },
  { name: "Dra. Wendy Yadira Guamán Flores", specialty: "Medicina general" },
  { name: "Dra. Karla Gabriela Guanoluisa Diaz", specialty: "Medicina general" },
  { name: "Dra. Ana Lucía Guerrero Guashpa", specialty: "Medicina general" },
  { name: "Dr. Juan Xavier Gutierrez Tulcanaza", specialty: "Medicina general" },
  { name: "Dra. Cristina Elizabeth Luna Carrión", specialty: "Medicina general" },
  { name: "Dra. Carolina Estefania Luzuriaga Campoverde", specialty: "Medicina general" },
  { name: "Dra. Leidy Vanessa Mafla Chauca", specialty: "Medicina general" },
  { name: "Dra. Navila Bianca Mafla Roca", specialty: "Medicina general" },
  { name: "Dra. Thalia Mercedes Martínez Luzuriaga", specialty: "Medicina general" },
  { name: "Dra. Evelyn Estefania Martínez Sierra", specialty: "Medicina general" },
  { name: "Dra. Jessica Belén Medina González", specialty: "Ginecología" },
  { name: "Dra. Karla Mishelle Mejia Tapia", specialty: "Medicina general" },
  { name: "Dra. Tania Estefania Mera Vallejos", specialty: "Medicina general" },
  { name: "Dra. Estefany Johanna Miño Velastegui", specialty: "Medicina general" },
  { name: "Dra. Sandra Elizabeth Montúfar Paguay", specialty: "Otorrinolaringología" },
  { name: "Dr. Duver Alexis Morejón Cadena", specialty: "Medicina general" },
  { name: "Dra. Estefanía Dayanna Moreno Alvarez", specialty: "Medicina general" },
  { name: "Dra. Adriana Michelle Moreno Andrade", specialty: "Medicina general" },
  { name: "Dra. Emily Alexandra Morillo Tibanquiza", specialty: "Medicina general" },
  { name: "Lic. José Alejandro Muñoz Álvarez", specialty: "Psicología" },
  { name: "Dra. Mariana De Jesús Noboa Salgado", specialty: "Pediatría" },
  { name: "Dr. Christian Andres Núñez Acosta", specialty: "Medicina general" },
  { name: "Dr. Santiago Fabricio Núñez Acosta", specialty: "Medicina general" },
  { name: "Dra. Jessica Liseth Ochoa Vasconez", specialty: "Medicina general" },
  { name: "Dra. Ivonne Carolina Orozco Freire", specialty: "Medicina general" },
  { name: "Dr. Gabriel Isaac Ortiz Rosero", specialty: "Medicina general" },
  { name: "Dra. María Fernanda Paca Sisa", specialty: "Medicina general" },
  { name: "Dra. Stephanie Patricia Palacios Villarreal", specialty: "Medicina general" },
  { name: "Dra. Pamela Matilde Pallo Guzman", specialty: "Medicina general" },
  { name: "Dra. Mayra Alexandra Paneluisa Jácome", specialty: "Medicina general" },
  { name: "Dra. Fernanda Marcela Pantoja Valle", specialty: "Medicina general" },
  { name: "Dr. Eduardo Jose Paredes Alvarez", specialty: "Medicina general" },
  { name: "Dra. Alejandra Paredes Gonzalez", specialty: "Medicina general" },
  { name: "Dra. Katherin Anabel Peñafiel Guerrero", specialty: "Medicina general" },
  { name: "Dra. Alexandra Emperatriz Pérez Merchán", specialty: "Medicina general" },
  { name: "Dr. Ivan Francisco Proaño Aguayo", specialty: "Medicina general" },
  { name: "Dra. Diana Carolina Quinde Manzano", specialty: "Medicina general" },
  { name: "Dra. Yadira Liliana Quizhpe Requelme", specialty: "Medicina Interna" },
  { name: "Dra. Carla Mishell Ramírez Barba", specialty: "Medicina general" },
  { name: "Dr. Roberto Andrés Rivera Guamán", specialty: "Medicina general" },
  { name: "Dra. Pamela Rocio Rodriguez Rodriguez", specialty: "Medicina general" },
  { name: "Dra. Paola Elizabeth Romero Nenger", specialty: "Medicina general" },
  { name: "Dr. Juan Andres Ruales Tapia", specialty: "Medicina general" },
  { name: "Dra. Maria Eliza Ruiz Aguirre", specialty: "Pediatría" },
  { name: "Dra. Paula Geraldine Salinas Rios", specialty: "Medicina general" },
  { name: "Dra. Ginger Anabela Santiago Villarreal", specialty: "Medicina general" },
  { name: "Dra. Gabriela Elizabeth Shuguli Rivera", specialty: "Medicina general" },
  { name: "Dr. Wagner Renato Silva Jara", specialty: "Traumatología" },
  { name: "Dra. Sandy Magaly Simbaña Piyahuaje", specialty: "Medicina general" },
  { name: "Dra. Aracely Jenny Sotalín Cóndor", specialty: "Medicina general" },
  { name: "Dr. Ronal Marcelo Soto Gomez", specialty: "Medicina general" },
  { name: "Dr. Victor Alfonso Velasco Paucar", specialty: "Medicina general" },
  { name: "Dra. Steffanny Alexandra Velasco Vizueta", specialty: "Medicina general" },
  { name: "Dr. Royer Emilio Vera Intriago", specialty: "Medicina general" },
  { name: "Dra. Jessenia Vanessa Zapata Naranjo", specialty: "Cardiología" },
];

const form = document.querySelector("#appointment-form");
const patientNameInput = document.querySelector("#patient-name");
const phoneInput = document.querySelector("#phone");
const doctorSelect = document.querySelector("#doctor");
const dateInput = document.querySelector("#appointment-date");
const timeSelect = document.querySelector("#appointment-time");
const preview = document.querySelector("#message-preview");
const formError = document.querySelector("#form-error");
const whatsappPhonePrefix = "5930";

let validationShown = false;

function getLocalDateValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function populateDoctors() {
  const doctorsBySpecialty = new Map();

  for (const doctor of doctors) {
    if (!doctorsBySpecialty.has(doctor.specialty)) {
      doctorsBySpecialty.set(doctor.specialty, []);
    }
    doctorsBySpecialty.get(doctor.specialty).push(doctor);
  }

  for (const [specialty, specialtyDoctors] of doctorsBySpecialty) {
    const group = document.createElement("optgroup");
    group.label = specialty;

    for (const doctor of specialtyDoctors) {
      const option = document.createElement("option");
      option.value = doctor.name;
      option.textContent = doctor.name;
      group.append(option);
    }

    doctorSelect.append(group);
  }
}

function formatTime(value) {
  const [hours, minutes] = value.split(":").map(Number);
  const period = hours < 12 ? "a. m." : "p. m.";
  const displayHour = hours % 12 || 12;
  return `${displayHour}:${String(minutes).padStart(2, "0")} ${period}`;
}

function populateAppointmentTimes() {
  const startMinutes = 9 * 60;
  const endMinutes = 20 * 60 + 40;

  for (let minutes = startMinutes; minutes <= endMinutes; minutes += 20) {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    const value = `${String(hours).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
    const option = document.createElement("option");
    option.value = value;
    option.textContent = formatTime(value);
    timeSelect.append(option);
  }
}

function normalizePhone(value) {
  return `${whatsappPhonePrefix}${value}`;
}

function getPhoneError(value) {
  if (!value) {
    return "Ingresa los 9 dígitos del número de WhatsApp.";
  }

  if (!/^\d{9}$/.test(value)) {
    return "Ingresa exactamente 9 dígitos, sin código de país, espacios ni guiones.";
  }

  return "";
}

function formatAppointmentDate(value) {
  if (!value) {
    return "[fecha]";
  }

  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(new Date(year, month - 1, day));
}

function getSelectedDoctor() {
  return doctors.find((doctor) => doctor.name === doctorSelect.value);
}

function buildMessage() {
  const patientName = patientNameInput.value.trim() || "[nombre del paciente]";
  const date = formatAppointmentDate(dateInput.value);
  const time = timeSelect.value ? formatTime(timeSelect.value).replace(/\.$/, "") : "[hora]";
  const doctor = getSelectedDoctor();
  const doctorName = doctor
    ? `${doctor.name} 🩺 (${doctor.specialty})`
    : "[Nombre del Medico 🩺 (Especialidad)]";

  return `¡Buen día! 👋

Estimado(a) ${patientName}, le recordamos su cita médica mediante telemedicina con la/el ${doctorName}, programada para el ${date} a las ${time}.

Le solicitamos, por favor, confirmar su asistencia con al menos una hora de anticipación. Hemos intentado comunicarnos también por llamada telefónica, pero hasta el momento no hemos recibido respuesta.

En caso de no contar con su confirmación por este medio o vía telefónica, la cita será cancelada.

Agradecemos su comprensión 🙏
Quedamos atentos.
Instasalud`;
}

function updatePreview() {
  preview.textContent = buildMessage();
}

function setFieldError(input, errorElement, message) {
  const hasError = Boolean(message);
  errorElement.textContent = message;
  errorElement.hidden = !hasError;
  input.setAttribute("aria-invalid", String(hasError));
}

function updateValidationMessages() {
  const phoneError = getPhoneError(phoneInput.value);
  phoneInput.setCustomValidity(phoneError);

  setFieldError(
    patientNameInput,
    document.querySelector("#patient-name-error"),
    patientNameInput.value.trim() ? "" : "Escribe el nombre del paciente.",
  );
  setFieldError(phoneInput, document.querySelector("#phone-error"), phoneError);
  setFieldError(
    doctorSelect,
    document.querySelector("#doctor-error"),
    doctorSelect.value ? "" : "Selecciona un médico.",
  );
  setFieldError(
    dateInput,
    document.querySelector("#appointment-date-error"),
    dateInput.value ? "" : "Selecciona la fecha de la cita.",
  );
  setFieldError(
    timeSelect,
    document.querySelector("#appointment-time-error"),
    timeSelect.value ? "" : "Selecciona la hora de la cita.",
  );
}

function validateForm() {
  updateValidationMessages();
  const isValid = form.checkValidity();
  formError.hidden = isValid;

  if (!isValid) {
    form.reportValidity();
  }
  return isValid;
}

function clearForm() {
  form.reset();
  dateInput.value = getLocalDateValue();
  validationShown = false;
  formError.hidden = true;

  for (const input of form.querySelectorAll("[aria-invalid]")) {
    input.setAttribute("aria-invalid", "false");
  }
  for (const error of form.querySelectorAll(".field-error")) {
    error.hidden = true;
    error.textContent = "";
  }
  phoneInput.setCustomValidity("");
  updatePreview();
}

populateDoctors();
populateAppointmentTimes();
dateInput.value = getLocalDateValue();
updatePreview();

form.addEventListener("input", () => {
  updatePreview();
  if (validationShown) {
    updateValidationMessages();
  }
});

form.addEventListener("change", () => {
  updatePreview();
  if (validationShown) {
    updateValidationMessages();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validationShown = true;

  if (!validateForm()) {
    const firstInvalidField = form.querySelector('[aria-invalid="true"]');
    firstInvalidField?.focus();
    return;
  }

  const phone = normalizePhone(phoneInput.value);
  const message = buildMessage();
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.querySelector("#clear-form").addEventListener("click", clearForm);
