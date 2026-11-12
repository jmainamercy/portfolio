let timer: ReturnType<typeof setTimeout> | undefined;
export function toast(message: string): void {
  const el = document.getElementById("tt");
  if (!el) return;
  el.textContent = message;
  el.classList.add("on");
  clearTimeout(timer);
  timer = setTimeout(() => el.classList.remove("on"), 4200);
}
