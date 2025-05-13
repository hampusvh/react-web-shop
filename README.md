## React Webshop

I det här projektet har jag byggt en enkel webbshop med React som frontend och Node.js + Express + MongoDB i backend.

Jag började med att skapa en navbar och använda React Router för navigering mellan sidor. Därefter skapade jag en databas i MongoDB och lade in testprodukter som hämtas och visas i webbshopen.

Jag har implementerat CRUD-funktionalitet för produkterna samt skapat ett API som hanterar autentisering, beställningar och användare.

## Funktioner

- Skapa konto & logga in
- Se produkter & produktdetaljer
- Sök efter produkter
- Lägg till i varukorg
- Skicka beställning (endast inloggad)
- Se orderhistorik
- Byt lösenord
- Logga ut

## Säkerhet

JWT används för att skydda API:et och autentisera användare. Alla skyddade rutter använder middleware som verifierar token.
Lösenord hashas med bcrypt innan de sparas i databasen. React skyddar mot XSS genom automatisk escaping i JSX.
Risken för CSRF är liten eftersom JWT skickas i headers istället för cookies.

## Logg över vad som har gjorts

- Skapat filstrukturen för backend och frontend
- Installerat alla nödvändiga npm-paket
- Skapat och konfigurerat en Express-server (server.js)
- Kopplat upp backend till MongoDB Atlas med .env
- Testat att servern körs korrekt på http://localhost:5001
- Skapat en produktmodell (Product.js)
- Lagt till testprodukter i databasen
- Skapat en API-route för att hämta alla produkter (/api/products)
- Fixat MongoDB-anslutningen så att servern kan hämta produkter
- Skapat CRUD-funktionalitet i productRoutes.js

- Påbörjat frontend, installerat React Router Dom. Skapade pages.
- Fixade CORS så att frontend kan hämta data från backend.

- Implementerat navbar med React Router Dom och Link
- ProductPage hämtar produkter från backend
- Skapade ProductCard.jsx för bättre visuell presentation av produkter

Implementering av varukorg med Context API

- Skapade en Context (CartContext.jsx) för att lagra i varukorgen
- Lagt till CartProvider i app.jsx. Nu hamnar produkter i varukorgen när man väljer att köpa.
- Tog bort checkout länken från Navbar och lagt til den i CartPage.

- Skapade en searchbar och sökfunktionalitet i Homepage som visar produkter om sökordet matchar.

- Skapade en User.js model, authRoutes.js,userRoutes.js, authMiddleware.js

- Byggde vidare på LoginPage.jsx med inputfält för användarnamn och lösenord, samt login-knapp. Kopplade detta till API:et.

- Byggde vidare på RegisterPage.jsx på samma sätt som LoginPage.jsx.

- Skapat Order.js & orderRoutes.js för att spara beställningar i backend.

- Kopplade CheckoutPage till backend så att ordrar för inloggade användare sparas.

- Skapade en PUT route i userRoutes.js, och en funktion så att en inloggad användare kan byta lösenord.
