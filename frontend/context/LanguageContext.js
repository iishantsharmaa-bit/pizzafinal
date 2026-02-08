'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    common: {
      home: 'Home',
      menu: 'Menu',
      cart: 'Cart',
      orders: 'Orders',
      contact: 'Contact',
      loading: 'Loading...',
      total: 'Total',
      currency: 'kr',
      myOrders: 'My Orders',
      recentOrders: 'Recent Orders',
      viewAll: 'View All Orders',
      noOrders: 'No orders yet',
      placeOrder: 'Place an order to get started!',
    },
    order: {
      status: 'Order Status',
      receiptId: 'Receipt ID',
      scheduledPickup: 'Scheduled Pickup',
      orderPlaced: 'Order Placed',
      orderConfirmed: 'Order Confirmed',
      preparing: 'Preparing Your Order',
      preparingScheduled: 'Will be Prepared For Your Pickup Time',
      readyForPickup: 'Ready for Pickup',
      rejected: 'Order Rejected',
      rejectionReason: 'Rejection Reason',
      pickupTime: 'Pickup Time',
      asap: 'ASAP (15-30 min)',
      paymentMethod: 'Payment Method',
      estimatedReady: 'Estimated ready time',
      waitingConfirmation: 'Waiting for confirmation...',
      readyIn: 'Ready in approximately',
      minutes: 'minutes',
      confirmedFor: 'Confirmed for',
      scheduledFor: 'Scheduled for',
    },
    admin: {
      dashboard: 'Admin Dashboard',
      orders: 'Orders',
      statistics: 'Dashboard',
      offlineOrder: 'Offline Order',
      printer: 'Printer',
      logout: 'Logout',
      acceptOrder: 'Accept Order',
      rejectOrder: 'Reject Order',
      estimatedMinutes: 'Estimated Ready Time (minutes)',
    },
    menu: {
      loadingMenu: 'Loading menu...',
      noProducts: 'No products found in this category.',
      category: 'Category',
      all: 'All',
      basePrice: 'Base Price',
      selectSize: 'Select Size',
      addDrink: 'Add a Drink',
      optional: 'Optional',
      specialInstructions: 'Special Instructions',
      specialInstructionsPlaceholder: 'E.g., No pepper, extra cheese, well done...',
      charactersLimit: 'characters',
      allergens: 'Allergens',
      quantity: 'Quantity',
      totalPrice: 'Total Price',
      addToCart: 'Add to Cart',
    },
    home: {
      heroTitle: 'Welcome to Pizzamammamia',
      heroSubtitle: 'Authentic Italian Taste',
      orderNow: 'Order Now',
      viewMenu: 'View Menu',
      tagline: 'Baked with Love, Served with Passion',
      freshlyBakedTitle: 'Freshly Baked',
      freshlyBakedDesc: 'Every pizza is baked to perfection in our traditional wood-fired oven',
      authenticDoughTitle: 'Authentic Dough',
      authenticDoughDesc: 'Made with traditional Italian recipes and the finest ingredients',
      meltingCheeseTitle: 'Melting Cheese',
      meltingCheeseDesc: 'Premium mozzarella that melts perfectly on every slice',
      freshIngredientsTitle: 'Fresh Ingredients',
      freshIngredientsDesc: 'Only the freshest vegetables and premium toppings',
      readyToOrder: 'Ready to Order?',
      readyToOrderDesc: 'Experience authentic Italian pizza delivered fresh to your door',
      browseMenu: 'Browse Our Menu',
      brandDesc: 'Authentic Italian pizza, baked with love and served with passion since 2024.',
      quickLinks: 'Quick Links',
      about: 'About',
      contactUs: 'Contact Us',
      privacyPolicy: 'Privacy Policy',
      openingHours: 'Opening Hours',
      mondayFriday: 'Monday - Friday',
      saturdaySunday: 'Saturday - Sunday',
      phone: 'Phone',
      email: 'Email',
      allRightsReserved: 'All rights reserved.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Visit us or get in touch',
      address: 'Address',
      openingHours: 'Opening Hours',
      contact: 'Contact',
      mondayFriday: 'Monday - Friday',
      saturdaySunday: 'Saturday - Sunday',
      pickupHours: 'Pickup Hours',
      sameAsOpeningHours: 'Same as opening hours',
      paymentMethods: 'Payment Methods',
      cashAtPickup: 'Cash at Pickup',
      cardAtPickup: 'Card at Pickup Counter',
      findUs: 'Find Us',
      mapLocation: 'Map: Wilhelm Wilhelmsens vei 47, Hosle, 1362, Norway',
    },
    cart: {
      emptyCart: 'Your cart is empty',
      startShopping: 'Start shopping to fill your cart!',
      shoppingCart: 'Shopping Cart',
      items: 'items',
      size: 'Size',
      drink: 'Drink',
      noDrink: 'No drink',
      specialInstructions: 'Special Instructions',
      none: 'None',
      allergens: 'Allergens',
      remove: 'Remove',
      subtotal: 'Subtotal',
      contactInformation: 'Contact Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      pickupTime: 'Pickup Time',
      asap: 'ASAP (15-30 min)',
      scheduleLater: 'Schedule for Later',
      selectTime: 'Select Time',
      paymentMethod: 'Payment Method',
      cash: 'Cash',
      card: 'Card',
      orderSummary: 'Order Summary',
      total: 'Total',
      placeOrder: 'Place Order',
      placing: 'Placing order...',
      validation: {
        fillAllFields: 'Please fill in all contact information',
        emptyCart: 'Your cart is empty',
      },
    },
  },
  no: {
    common: {
      home: 'Hjem',
      menu: 'Meny',
      cart: 'Handlekurv',
      orders: 'Bestillinger',
      contact: 'Kontakt',
      loading: 'Laster...',
      total: 'Totalt',
      currency: 'kr',
      myOrders: 'Mine bestillinger',
      recentOrders: 'Nylige bestillinger',
      viewAll: 'Se alle bestillinger',
      noOrders: 'Ingen bestillinger ennå',
      placeOrder: 'Legg inn en bestilling for å komme i gang!',
    },
    order: {
      status: 'Ordrestatus',
      receiptId: 'Kvitterings-ID',
      scheduledPickup: 'Planlagt henting',
      orderPlaced: 'Ordre plassert',
      orderConfirmed: 'Ordre bekreftet',
      preparing: 'Forbereder din bestilling',
      preparingScheduled: 'Vil bli forberedt til din hentetid',
      readyForPickup: 'Klar til henting',
      rejected: 'Ordre avvist',
      rejectionReason: 'Årsak til avvisning',
      pickupTime: 'Hentetid',
      asap: 'Så snart som mulig (15-30 min)',
      paymentMethod: 'Betalingsmetode',
      estimatedReady: 'Estimert klar tid',
      waitingConfirmation: 'Venter på bekreftelse...',
      readyIn: 'Klar om ca.',
      minutes: 'minutter',
      confirmedFor: 'Bekreftet for',
      scheduledFor: 'Planlagt for',
    },
    admin: {
      dashboard: 'Admin Dashboard',
      orders: 'Bestillinger',
      statistics: 'Dashbord',
      offlineOrder: 'Offline bestilling',
      printer: 'Skriver',
      logout: 'Logg ut',
      acceptOrder: 'Godta bestilling',
      rejectOrder: 'Avvis bestilling',
      estimatedMinutes: 'Estimert klar tid (minutter)',
    },
    menu: {
      loadingMenu: 'Laster meny...',
      noProducts: 'Ingen produkter funnet i denne kategorien.',
      category: 'Kategori',
      all: 'Alle',
      basePrice: 'Grunnpris',
      selectSize: 'Velg størrelse',
      addDrink: 'Legg til drikke',
      optional: 'Valgfritt',
      specialInstructions: 'Spesielle instruksjoner',
      specialInstructionsPlaceholder: 'F.eks., ingen pepper, ekstra ost, godt stekt...',
      charactersLimit: 'tegn',
      allergens: 'Allergener',
      quantity: 'Antall',
      totalPrice: 'Total pris',
      addToCart: 'Legg i handlekurv',
    },
    home: {
      heroTitle: 'Velkommen til Pizzamammamia',
      heroSubtitle: 'Autentisk italiensk smak',
      orderNow: 'Bestill nå',
      viewMenu: 'Se meny',
      tagline: 'Bakt med kjærlighet, servert med lidenskap',
      freshlyBakedTitle: 'Nybakt',
      freshlyBakedDesc: 'Hver pizza er bakt til perfeksjon i vår tradisjonelle vedfyrte ovn',
      authenticDoughTitle: 'Autentisk deig',
      authenticDoughDesc: 'Laget med tradisjonelle italienske oppskrifter og de fineste ingrediensene',
      meltingCheeseTitle: 'Smeltende ost',
      meltingCheeseDesc: 'Premium mozzarella som smelter perfekt på hver skive',
      freshIngredientsTitle: 'Ferske ingredienser',
      freshIngredientsDesc: 'Kun de ferskeste grønnsakene og premium toppings',
      readyToOrder: 'Klar til å bestille?',
      readyToOrderDesc: 'Opplev autentisk italiensk pizza levert fersk til døren din',
      browseMenu: 'Bla gjennom menyen vår',
      brandDesc: 'Autentisk italiensk pizza, bakt med kjærlighet og servert med lidenskap siden 2024.',
      quickLinks: 'Hurtiglenker',
      about: 'Om oss',
      contactUs: 'Kontakt oss',
      privacyPolicy: 'Personvernserklæring',
      openingHours: 'Åpningstider',
      mondayFriday: 'Mandag - Fredag',
      saturdaySunday: 'Lørdag - Søndag',
      phone: 'Telefon',
      email: 'E-post',
      allRightsReserved: 'Alle rettigheter reservert.',
    },
    contact: {
      title: 'Kontakt oss',
      subtitle: 'Besøk oss eller ta kontakt',
      address: 'Adresse',
      openingHours: 'Åpningstider',
      contact: 'Kontakt',
      mondayFriday: 'Mandag - Fredag',
      saturdaySunday: 'Lørdag - Søndag',
      pickupHours: 'Hentetider',
      sameAsOpeningHours: 'Samme som åpningstider',
      paymentMethods: 'Betalingsmetoder',
      cashAtPickup: 'Kontant ved henting',
      cardAtPickup: 'Kort ved hentedisk',
      findUs: 'Finn oss',
      mapLocation: 'Kart: Wilhelm Wilhelmsens vei 47, Hosle, 1362, Norge',
    },
    cart: {
      emptyCart: 'Handlekurven din er tom',
      startShopping: 'Start å handle for å fylle handlekurven din!',
      shoppingCart: 'Handlekurv',
      items: 'varer',
      size: 'Størrelse',
      drink: 'Drikke',
      noDrink: 'Ingen drikke',
      specialInstructions: 'Spesielle instruksjoner',
      none: 'Ingen',
      allergens: 'Allergener',
      remove: 'Fjern',
      subtotal: 'Delsum',
      contactInformation: 'Kontaktinformasjon',
      firstName: 'Fornavn',
      lastName: 'Etternavn',
      email: 'E-post',
      phone: 'Telefonnummer',
      pickupTime: 'Hentetid',
      asap: 'Så snart som mulig (15-30 min)',
      scheduleLater: 'Planlegg til senere',
      selectTime: 'Velg tid',
      paymentMethod: 'Betalingsmetode',
      cash: 'Kontant',
      card: 'Kort',
      orderSummary: 'Bestillingsoversikt',
      total: 'Totalt',
      placeOrder: 'Legg inn bestilling',
      placing: 'Legger inn bestilling...',
      validation: {
        fillAllFields: 'Vennligst fyll ut all kontaktinformasjon',
        emptyCart: 'Handlekurven din er tom',
      },
    },
  },
};

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('no'); // Default to Norwegian
  const [locale, setLocale] = useState('nb-NO'); // Norwegian locale

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'no';
    setLanguage(savedLang);
    setLocale(savedLang === 'no' ? 'nb-NO' : 'en-US');
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLocale(lang === 'no' ? 'nb-NO' : 'en-US');
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const formatDate = (date, options = {}) => {
    return new Date(date).toLocaleString(locale, options);
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDateTime = (date) => {
    return new Date(date).toLocaleString(locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      t, 
      formatDate, 
      formatTime, 
      formatDateTime,
      locale 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};