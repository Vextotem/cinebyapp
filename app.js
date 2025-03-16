if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => console.log('CinebyApp Service Worker registered:', reg))
        .catch((err) => console.log('CinebyApp Service Worker registration failed:', err));
}
