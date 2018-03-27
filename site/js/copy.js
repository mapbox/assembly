import ClipboardJS from "clipboard";

const clipboard = new ClipboardJS("button[data-clipboard-text]");

clipboard.on("success", ev => {
  ev.trigger.textContent = "Copied!";
  window.setTimeout(() => {
    ev.trigger.textContent = "Copy";
  }, 800);
});
