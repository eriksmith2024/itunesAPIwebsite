<!-- 
PROBABLY WOULD HAVE BEEN EASIER STARTING FROM SCRATCH IN THE END BUT WORKED AMMENDING PRIOR TASK L3T07 

Key Changes for the Capstone Project:

API Integration: Instead of a local, in-memory to-do list need to interact with the iTunes Search API.
Search Functionality: The core feature is searching for media (movies, music, podcasts, etc.) and displaying results.
Favorites List: Users can save a list of their favorite search results.
No User Authentication: The project explicitly states: "You do not have to authenticate users."  This means I removed all login/registration logic and JWT.
No Database: The project explicitly states: "You do not have to create a database for this application."  "No information about the users of your application, their favourites list, nor their history activity needs to be stored by your application after the user leaves the app."  This means the favorites list is stored client-side (e.g., in React state or browser's localStorage) and does not need to persist across sessions.
Backend Role: The backend will primarily act as a proxy to the iTunes Search API, fetching data and passing it to the frontend.

Given these changes, the following amendments were made to the existing backend and frontend folders:

Backend (backend/):

Remove Authentication & User Logic:
Delete routes/login.js, routes/register.js, routes/secure/userDataRoute.js. routes/protected.js routes/todoRoutes.js
Delete middleware/authMiddleware.js, middleware/jwtMiddleware.js, middleware/taskValidationMiddleware.js. & middleware folder
Modify controllers/userController.js to remove all user-related functions (userController, registerController, addTodo, editTodo, removeTodo, getTodos).
Delete controllers/userDB.js.
Add iTunes Search API Route & Controller:
Create a new route (e.g., routes/itunesSearchRoute.js).
Create a new controller (e.g., controllers/itunesSearchController.js) to handle API calls to iTunes.
Update app.js:
Remove imports and usage of old routes/middleware.
Add import and usage of the new iTunes search route.

Frontend (frontend/):
Remove Authentication UI:
Delete pages/LoginPage.jsx, pages/RegisterPage.jsx.
Delete components/PrivateRoute.jsx.
Delete context/AuthContext.jsx.
Delete hooks/useAuth.jsx.
Amend App.jsx:
Remove authentication context provider, PrivateRoute, and related imports/logic.
Simplify routing to focus on the main search page.
Develop Search Interface:
Modify pages/TodoPage.jsx (or rename it to pages/SearchPage.jsx and completely rewrite) to include:
A search input field.
A dropdown/selection for media types (movie, podcast, music, etc.).
A button to trigger the search.
Display of search results with album name, artist, cover image, and release date.
Implement logic to fetch data from backend's iTunes proxy route.
Implement a "Favorites" section to add/remove items (using React state or localStorage, not backend persistence).
Update App.css: Adjust styling to match the new interface.




TESTING
Searched Oasis and added Wonderwall as favourite
Removed Oasis from favorites
Selected Movies and searched Kill Bill - returned Kill Bill 1 and Kill Bill 2 -
Added Kill Bill 2 to favorites
Playerd Kill Bill audio clip & worked
Searched Alchemist under audio book selection and added to favorites
Checked and played Alchemist
searched The Alchemist under e book and added to favorites
Searched Friends under tv show returned friends and correctly played
Deeleted all favorites

REFERENCES - 
https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017651-CH5-SW1 Accessed 28th May 2025 iTunes API documentation


AFTER RETURNING FROM HOLIDAY WHERE I GOT ENGAGED TO MY GIRLFRIEND I GENUINELY HAD TO REPEAT WHOLE COURSE OVER AGAIN ACCESSING ALL COURSE DOCS & PRIOR TASKS I HAD COMLPLETED 
Hyperiondev Express Middleware L3T07 Accessed 12th to 26th May 2025
Hyperiondev Authentification with JWT L3T06 Accessed 12th to 26th May 2025
Hyperiondev React Backend integration  L3T05 Accessed 12th to 26th May 2025
Hyperiondev React Backend integration  L3T05 Accessed 12th to 26th May 2025
Hyperiondev Database interaction with MongoDB and Mongosh L3T04 Accessed 12th May to 26th May 2025
Hyperiondev Databases and MongoDB database L3T03 Accessed 12th to 26th May 2025
Hyperiondev Express Web Applications  L3T02 Accessed 12th to 26th May 2025
Hyperiondev Backend Web Develoment  L3T01 Accessed 12th to 26th May 2025

Hyperiondev React Deployment L2T12 Accessed 12th to 26th May 2025
Hyperiondev Capstone Project React App L2T11 Accessed 12th to 26th May 2025
Hyperiondev  Testing a React App L2T10 Accessed 12th to 26th May 2025
Hyperiondev React Reduct & Global State Management L2T09 Accessed 12th to 26th May 2025
Hyperiondev React Form Validation Management L2T08 Accessed 12th to 26th May 2025
Hyperiondev React Routing L2T07 Accessed 12th to 26th May 2025
Hyperiondev React Hooks L2T06 Accessed 12th to 26th May 2025
Hyperiondev React Local State Mangement & Events L2T05 Accessed 12th to 26th May 2025
Hyperiondev React Components L2T04 Accessed 12th to 26th May 2025
Hyperiondev React Elements L2T03 Accessed 12th to 26th May 2025
Hyperiondev React Overview L2T02 Accessed 12th to 26th May 2025

Hyperiondev Build your Capstone Project L1T14 Accessed 12th to 26th May 2025
Hyperiondev JSON & Client Server Communication L1T13 Accessed 12th to 26th May 2025
Hyperiondev HTTP Requets and Responses L1T12 Accessed 12th to 26th May 2025
Hyperiondev Promises Async and Await L1T11 Accessed 12th to 26th May 2025
Hyperiondev Object Oriented Programming L1T10 Accessed 12th to 26th May 2025
Hyperiondev Higher Order Functions & Callbacks L1T09 Accessed 12th to 26th May 2025
Hyperiondev Functions Scope & Closures L1T08 Accessed 12th to 26th May 2025
Hyperiondev Data Structures Arrays Strings Maps L1T07 Accessed 12th to 26th May 2025
Hyperiondev Control Structures For and While Loops L1T06 Accessed 12th to 26th May 2025
Hyperiondev Control Structures - If, Else-if, and Else Statements L1T05 Accessed 12th to 26th May 2025
Hyperiondev Control Structures - JavaScript Programming, Variables, and Data Types L1T04 Accessed 12th to 26th May 2025

Continued with past Chat GPT prompts for converting past task for Capstone Project
https://chatgpt.com/c/682f1eab-a7a8-8007-abd7-74748429866d Chat GPT queries 25th to 29th May 2025 around task issues
https://chatgpt.com/c/68331a19-d578-8007-a3fb-8f8d48cbc06a Chat GPT queries 25th May 2025 around Mongosh
https://chatgpt.com/c/6833142c-7ec0-8007-89a0-63f660ea4b72 Chat GPT queries on Mongodb connection 25th May 2025
https://chatgpt.com/c/6832d89d-1e6c-8007-a300-611078ed884d Chat GPT queries on reminder on hooks routing and state
https://chatgpt.com/c/6832d85e-32fc-8007-9ed2-bc8a91ff0b57 Chat GPT queries on React router overview 25th May 2025
https://chatgpt.com/c/6832d436-b22c-8007-a4d4-86ddea7a6f9b Chat GPT queries on Functions and props in React 25th May 2025
https://chatgpt.com/c/6832d405-b3d8-8007-bb2b-386ff27c7e51 Chat GPT queries on Conditional rendering in React 25th May 2025
https://chatgpt.com/c/68304771-5984-8007-98bc-0030e0763baf Chat gpt queries on Nested functional scope 20th - 25th May 2025
https://chatgpt.com/c/682f1ac8-bdcc-8007-b5db-71da45f40580 Chat GPT queries on loginRoute to app.js 20th - 25th May 2025
https://chatgpt.com/c/682f18ec-bbc0-8007-a464-0b31b6369bc3 Chat GPT queries on ZSH warning and reference error 20th - 25th May 2025


https://react.dev/ Accessed 23rd -26th May 2025 for refresher on React app which is now no longer maintained so used Vite
https://react.dev/reference/react/useState Accessed 23rd -29th May 2025
https://react.dev/reference/react/useContext Accessed 23rd - 29th May 2025
https://react.dev/learn/reusing-logic-with-custom-hooks Accessed 23rd - 29th May 2025
https://react.dev/learn/passing-props-to-a-component Accessed 23rd -29th May 2025
https://developer.mozilla.org/en-US/docs/Web/JavaScript Accessed 23rd - 29th May 2025
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals Accessed 23rd - 26th May 2025
https://github.com/axios/axios Accessed 23rd - 29th May 2025
https://formik.org/docs/api/useFormik Accessed 23rd - 29th May 2025
https://formik.org/docs/api/useFormik Accessed 23rd - 29th May 2025
https://formik.org/docs/guides/validation Accessed 23rd - 29th May 2025
https://formik.org/docs/api/formik Accessed 23rd - 29th May 2025
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox 23rd - 29th May 2025
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage Accessed 23rd - 29th May 2025
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map Accessed 23rd - 29th May 2025
https://www.bezkoder.com/react-node-express-postgresql/#google_vignette Accessed 23rd - 29th May 2025

-->
