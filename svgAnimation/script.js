const inp = document.querySelector("#input");
inp.addEventListener("load", function () {
  const input = document.createElement("input");
  input.type('text')
  inp.append(input);
});
