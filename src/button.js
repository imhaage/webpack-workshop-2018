const makeButton = (label) => {
  const button = document.createElement("button");
  button.innerText = label;
  return button;
};

module.exports = makeButton;
