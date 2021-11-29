function getAttributes() {
  const element = document.querySelector('a')
  const result = document.getElementById('resultado');

  result.textContent = `Attributes: ${element.href} - ${element.hreflang} - ${element.rel} - ${element.target} - ${element.type}`;
}