const questions = [
  ["Fuehlen Sie sich haeufig muede und erschoepft", "Fühlen Sie sich häufig müde und erschöpft?"],
  ["Faellt es Ihnen schwer sich ueber laengere Zeit zu konzentrieren", "Fällt es Ihnen schwer, sich über längere Zeit zu konzentrieren?"],
  ["Fuehlen Sie sich haeufig gestresst", "Fühlen Sie sich häufig gestresst?"],
  ["Sind Sie anfaellig fuer Erkaeltungen oder Infektionen", "Sind Sie anfällig für Erkältungen oder Infektionen?"],
  ["Haben Sie Probleme mit Ihrer Verdauung oder Darmfunktion", "Haben Sie Probleme mit Ihrer Verdauung oder Darmfunktion?"],
  ["Haben Sie Probleme durchzuschlafen", "Haben Sie Probleme durchzuschlafen?"],
  ["Wachen Sie morgens haeufig auf ohne richtig erholt zu sein", "Wachen Sie morgens häufig auf, ohne richtig erholt zu sein?"],
  ["Haben Sie haeufig Wadenkraempfe oder steife Gelenke", "Haben Sie häufig Wadenkrämpfe oder steife Gelenke?"],
  ["Sind Sie mit Ihrer Haut Ihren Haaren oder Ihren Naegeln unzufrieden", "Sind Sie mit Ihrer Haut, Ihren Haaren oder Ihren Nägeln unzufrieden?"],
  ["Haben Sie regelmaessig Beschwerden an Ihren Gelenken", "Haben Sie regelmäßig Beschwerden an Ihren Gelenken?"],
  ["Treiben Sie regelmaessig Sport", "Treiben Sie regelmäßig Sport?"],
  ["Essen Sie zwei bis dreimal pro Woche frischen Lachs Makrele oder Thunfisch", "Essen Sie zwei- bis dreimal pro Woche frischen Lachs, Makrele oder Thunfisch?"],
  ["Sind Sie ueber 40 Jahre alt", "Sind Sie über 40 Jahre alt?"],
  ["Leiden Sie als Frau unter typischen peri oder menopausalen Beschwerden", "Leiden Sie als Frau unter typischen peri- oder menopausalen Beschwerden?"],
  ["Moechten Sie als Mann Ihren Testosteronspiegel verbessern", "Möchten Sie als Mann Ihren Testosteronspiegel verbessern?"],
  ["Sind Sie mit Ihrem Koerpergewicht zufrieden", "Sind Sie mit Ihrem Körpergewicht zufrieden?"],
  ["Moechten Sie Ihr Gewicht verbessern", "Möchten Sie Ihr Gewicht verbessern?"],
  ["Gibt es Lebensmittel die Sie nicht vertragen", "Gibt es Lebensmittel, die Sie nicht vertragen?"],
  ["Haben Sie ein Kind mit Konzentrations oder Aufmerksamkeitsstoerungen", "Haben Sie ein Kind mit Konzentrations- oder Aufmerksamkeitsstörungen?"],
  ["Essen Sie taeglich weniger als fuenf Portionen Obst und Gemuese", "Essen Sie täglich weniger als fünf Portionen Obst und Gemüse?"],
  ["Essen Sie haeufig Fertiggerichte oder Fast Food", "Essen Sie häufig Fertiggerichte oder Fast Food?"]
];

const form = document.getElementById("contactForm");
const stepsContainer = document.getElementById("steps");
const formError = document.getElementById("formError");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const stepText = document.getElementById("stepText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const successMessage = document.getElementById("successMessage");
const startButton = document.getElementById("startButton");

questions.forEach((question, index) => {

  const step = document.createElement("section");
  step.className = "step";
  step.dataset.step = String(index + 1);

  if(index === 13){

    step.innerHTML = `
      <p class="step-kicker">Gesundheitsfrage ${index + 1} von ${questions.length}</p>
      <h2>${question[1]}</h2>

      <div class="choice-grid">
        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Ja" required>
          <span>Ja</span>
        </label>

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Nein">
          <span>Nein</span>
        </label>

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Ich bin männlich">
          <span>Ich bin männlich</span>
        </label>
      </div>
    `;

  } else if(index === 14){

    step.innerHTML = `
      <p class="step-kicker">Gesundheitsfrage ${index + 1} von ${questions.length}</p>
      <h2>${question[1]}</h2>

      <div class="choice-grid">
        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Ja" required>
          <span>Ja</span>
        </label>

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Nein">
          <span>Nein</span>
        </label>

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Ich bin weiblich">
          <span>Ich bin weiblich</span>
        </label>
      </div>
    `;

  } else if(index === 17){

    step.innerHTML = `
      <p class="step-kicker">Gesundheitsfrage ${index + 1} von ${questions.length}</p>
      <h2>${question[1]}</h2>

      <div class="choice-grid two">

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Ja" required>
          <span>Ja</span>
        </label>

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Nein">
          <span>Nein</span>
        </label>

      </div>

      <div id="foodIntoleranceBox" style="display:none;margin-top:18px;">
        <label>
          Welche Unverträglichkeiten liegen vor?

          <input
            type="text"
            name="Lebensmittel Unvertraeglichkeiten"
            placeholder="z. B. Gluten, Laktose, Fruktose">
        </label>
      </div>
    `;

  } else {

    step.innerHTML = `
      <p class="step-kicker">Gesundheitsfrage ${index + 1} von ${questions.length}</p>
      <h2>${question[1]}</h2>

      <div class="choice-grid two">
        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Ja" required>
          <span>Ja</span>
        </label>

        <label class="option-card">
          <input type="radio" name="${question[0]}" value="Nein">
          <span>Nein</span>
        </label>
      </div>
    `;
  }

  const priorityStep = document.querySelector(".priority-step");
  stepsContainer.insertBefore(step, priorityStep);
});

const steps = [...document.querySelectorAll(".step")].sort((a,b) => Number(a.dataset.step) - Number(b.dataset.step));
let currentStep = 0;

function showError(message) {
  formError.textContent = message;
}

function clearError() {
  formError.textContent = "";
}

function getFields(step) {
  return [...step.querySelectorAll("input, select, textarea")].filter(field => field.name !== "botcheck");
}

function validateCurrentStep() {
  const step = steps[currentStep];
  const fields = getFields(step);

  if (step.classList.contains("priority-step")) {
    const selected = [...step.querySelectorAll('input[type="checkbox"]:checked')].length;
    if (selected === 0) {
      showError("Bitte wählen Sie mindestens eine Antwort aus.");
      return false;
    }
    if (selected > 3) {
      showError("Bitte wählen Sie maximal drei Antworten aus.");
      return false;
    }
    return true;
  }

  for (const field of fields) {
    if (!field.checkValidity()) {
      showError("Bitte beantworten Sie diese Frage bzw. füllen Sie alle Pflichtfelder korrekt aus.");
      field.reportValidity();
      return false;
    }
  }

  return true;
}

function updateWizard() {
  steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));

  const total = steps.length;
  const percent = Math.round((currentStep / (total - 1)) * 100);

  stepText.textContent = `Schritt ${currentStep + 1} von ${total}`;
  progressText.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  prevBtn.style.visibility = currentStep === 0 ? "hidden" : "visible";
  nextBtn.style.display = currentStep === total - 1 ? "none" : "inline-flex";
  submitBtn.style.display = currentStep === total - 1 ? "inline-flex" : "none";

  clearError();
  const cardTop = form.getBoundingClientRect().top + window.scrollY - 12;
  window.scrollTo({ top: cardTop, behavior: "smooth" });
}

function nextStep() {
  if (!validateCurrentStep()) return;
  if (currentStep < steps.length - 1) {
    currentStep += 1;
    updateWizard();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep -= 1;
    updateWizard();
  }
}

nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);

form.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
    event.preventDefault();
    if (currentStep < steps.length - 1) nextStep();
  }
});

form.addEventListener("change", (event) => {
  const field = event.target;
  if (
  field.name === "Gibt es Lebensmittel die Sie nicht vertragen"
) {
    const field = event.target;
  const box = document.getElementById("foodIntoleranceBox");

  if (box) {
    box.style.display =
      field.value === "Ja"
        ? "block"
        : "none";
  }
}

  if (field.closest(".priority-step")) {
    const selected = [...document.querySelectorAll(".priority-step input[type='checkbox']:checked")];
    if (selected.length > 3) {
      field.checked = false;
      showError("Bitte wählen Sie maximal drei Antworten aus.");
    }
    return;
  }

  if (field.type === "radio" && field.closest(".step") && currentStep > 0 && currentStep < 26) {
    setTimeout(nextStep, 180);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearError();

  if (!validateCurrentStep()) return;

  if (!form.checkValidity()) {
    showError("Bitte prüfen Sie Ihre Angaben.");
    form.reportValidity();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Wird gesendet...";

  try {
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    const result = await response.json();

    if (response.ok && result.success) {
      form.hidden = true;
      successMessage.hidden = false;
      successMessage.focus();
      window.scrollTo({ top: successMessage.offsetTop - 40, behavior: "smooth" });
    } else {
      throw new Error(result.message || "Fehler");
    }
  } catch (error) {
    showError("Die Übermittlung ist fehlgeschlagen. Bitte versuchen Sie es erneut.");
    submitBtn.disabled = false;
    submitBtn.textContent = "Fitness-Check absenden";
  }
});

startButton.addEventListener("click", () => {
  setTimeout(() => updateWizard(), 250);
});

updateWizard();
window.history.scrollRestoration = "manual";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, 10);
});
