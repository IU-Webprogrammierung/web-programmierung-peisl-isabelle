function loadComponent(url, containerId) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      })
      .catch(err => console.error('Error loading component:', err));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    Promise.all([
      loadComponent('/components/navigation.html', 'navigation-container'),
      loadComponent('/components/footer.html', 'footer-container')
    ])
    .then(() => {
      console.log('Components loaded successfully');
      document.dispatchEvent(new Event('componentsLoaded'));
    });
  });
  