import kebabCase from "./node_modules/lodash-es/kebabCase.js";

const main = document.querySelector("main");
const statsWhen = document.querySelectorAll(".stats-when");

statsWhen.forEach((s) => {
  s.addEventListener("click", function (e) {
    const btn = e.target.closest(".stats-when__text");
    if (!btn) return;

    Array.from(s.children).forEach((el) => el.classList.remove("-active"));
    btn.classList.add("-active");

    getData("./data.json", btn.innerText);
  });
});

const getData = async function (url, t = "Daily") {
  try {
    main.classList.add("-grid");
    const data = await fetch(url);
    const json = await data.json();
    while (main.children.length > 2) {
      main.removeChild(main.lastChild);
    }
    json.forEach((el) => {
      let time, when;

      if (t === "Daily") {
        time = el.timeframes.daily;
        when = "yesterday";
      }
      if (t === "Weekly") {
        time = el.timeframes.weekly;
        when = "Last week";
      }
      if (t === "Monthly") {
        time = el.timeframes.monthly;
        when = "Last month";
      }

      const markup = `
      <div class="window -not-user window--${kebabCase(el.title)}">
        <div class="report report--activity">
            <div class="report--activity__top">
                <p class="report--activity__top--title">${el.title}</p>
                <span class="report--activity__top--menu-icon"></span>
            </div>
            <div class="report--activity__bottom">
                <p class="report--activity__bottom--hours">${
                  time.current
                }hrs</p>
                <p class="report--activity__bottom--past-time">${when} - ${
        time.previous
      }hrs</p>
            </div>
        </div>
      </div>
      `;

      main.insertAdjacentHTML("beforeend", markup);
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
