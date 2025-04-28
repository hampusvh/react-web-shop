React Webshop
Det här projektet är en enkel webbshop byggd med React som frontend och Node.js, Express samt MongoDB i backend.

Jag började med att skapa en navbar och använda React Router för navigering mellan sidor. Därefter skapades en databas i MongoDB, och testprodukter lades in för att visas i webbshopen.

CRUD-funktionalitet har implementerats för produkterna, tillsammans med ett API för hantering av autentisering, beställningar och användare.

Funktioner
Skapa konto och logga in

Se produkter och produktdetaljer

Sök efter produkter

Lägg till produkter i varukorg

Skicka beställning (kräver inloggning)

Se orderhistorik

Byta lösenord

Logga ut

Säkerhet
JWT används för att skydda API:et och autentisera användare.

Alla skyddade rutter verifierar JWT-token via middleware.

Lösenord hashas med bcrypt innan de sparas i databasen.

React skyddar mot XSS via automatisk escaping i JSX.

Risken för CSRF minimeras eftersom JWT skickas i headers istället för cookies.

Projektlogg
Skapade filstrukturen för backend och frontend

Installerade nödvändiga npm-paket

Skapade och konfigurerade en Express-server (server.js)

Anslöt backend till MongoDB Atlas med miljövariabler (.env)

Testade att servern kördes korrekt på http://localhost:5001

Skapade en produktmodell (Product.js)

Lade till testprodukter i databasen

Skapade en API-route för att hämta alla produkter (/api/products)

Fixade MongoDB-anslutningen så att servern kan hämta produkter

Implementerade CRUD-funktionalitet i productRoutes.js

Påbörjade frontend, installerade React Router Dom och skapade pages

Konfigurerade CORS så att frontend kan hämta data från backend

Implementerade navbar med React Router Dom och Link

Byggde ProductPage som hämtar produkter från backend

Skapade ProductCard.jsx för bättre visuell presentation av produkter

Implementerade varukorg med Context API

Skapade CartContext.jsx för att lagra produkter i varukorgen

Lade till CartProvider i App.jsx för global hantering

Flyttade checkout-länk från navbar till CartPage

Skapade en sökfunktion i HomePage som visar produkter baserat på sökord

Skapade User.js, authRoutes.js, userRoutes.js och authMiddleware.js för användarhantering

Utvecklade LoginPage.jsx med inputfält för användarnamn och lösenord, kopplat till API:et

Utvecklade RegisterPage.jsx med liknande struktur som LoginPage.jsx

Skapade Order.js och orderRoutes.js för att spara beställningar i backend

Kopplade CheckoutPage till backend för att spara ordrar för inloggade användare

Skapade en PUT-route i userRoutes.js för lösenordsbyte av inloggade användare
