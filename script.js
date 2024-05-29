function diff() {
  let curr = new Date();
  let future_date = new Date("5 Jun 2024");
  let countdown = future_date - curr;
  document.getElementById("day").innerText = Math.floor(
    countdown / 1000 / 60 / 60 / 24
  );
  document.getElementById("hrs").innerText =
    Math.floor(countdown / 1000 / 60 / 60) % 24;
  document.getElementById("min").innerText =
    Math.floor(countdown / 1000 / 60) % 60;
  document.getElementById("sec").innerText = Math.floor(countdown / 1000) % 60;
}
setInterval(diff, 1000);
document.getElementById("alert1").addEventListener("click", () => {
  alert("You will be notified!!");
});
document.getElementById("alert2").addEventListener("click", () => {
  alert("Event has'nt satrted yet!");
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});
