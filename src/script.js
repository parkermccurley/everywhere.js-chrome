function renderContent(content) {
  document.getElementById('content').textContent = content;
}

document.addEventListener('DOMContentLoaded', function() {
  renderContent("Here is where your content goes!");
});
