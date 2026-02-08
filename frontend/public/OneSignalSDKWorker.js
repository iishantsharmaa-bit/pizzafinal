// OneSignal Service Worker - DISABLED to reduce edge requests
// This file is kept to prevent 404 errors but does NOT import external scripts

// Import OneSignal SDK - COMMENTED OUT TO PREVENT EXCESS EDGE REQUESTS
// importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Additional push handling for better iPad support
self.addEventListener('push', (event) => {
  console.log('📬 [OneSignal SW] Push received');
  
  // OneSignal handles its own notifications, but we log for debugging
  if (event.data) {
    try {
      const data = event.data.json();
      console.log('📬 Push data:', data);
    } catch (e) {
      console.log('📬 Push text:', event.data.text());
    }
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ [OneSignal SW] Notification clicked');
  event.notification.close();
  
  // Open admin page when notification is clicked
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('/admin') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/admin');
      }
    })
  );
});

console.log('✅ OneSignal Service Worker loaded');
