<!-- Full Stack iTunes & Apple Books Search App

Project Description

This is a full-stack web application developed using React for the frontend and Node.js with Express.js for the backend. The primary purpose of this application is to allow users to search for various types of content available on the iTunes Store and Apple Books Store, leveraging the official iTunes Search API. Users can enter a search term, select a media type, view results, and manage a client-side list of their favorite items. 

This project showcases skills in:
* Frontend development with React.
* Backend development with Node.js and Express.js.
* Integration with external APIs (iTunes Search API). 
* Client-side data management (for favorites).
* Modular and well-organized code structure.

Key Features

* Search Functionality:**
    * Users can input a search term to find content.
    * Ability to filter search results by media type, including: All, Movie, Podcast, Music, Audiobook, Short Film, TV Show, and eBook. 
* Results Display:**
    * Search results are attractively displayed, showing key information such as track/album name, artist name, album/movie cover image, release date, and content type.
    * Audio/video previews are available where provided by the iTunes API.
* Favorites List:
    * Users can add desirable search results to a "My Favorites" list.
    * Items can be removed from the favorites list. 
    * The favorites list is stored client-side (in your browser's local storage) and will persist across browser sessions on the same device, but is not stored on the backend or in a database. 

## Project Structure

The project is divided into two main folders:
* `backend/`: Contains the Node.js Express server.
* `frontend/`: Contains the React application built with Vite. -->
<!-- 

#How to Install and Run Locally

Follow these steps to get the application up and running on your local machine.

Prerequisites

* Node.js 
* npm (Node Package Manager)

Installation Steps

1.  Clone or Download the Project:
    Navigate to your desired directory and clone this repository (or extract the project files).
    git clone <your-repository-url> L3T08_TASK 
    Or manually extract the `L3T08_TASK` folder.

2.  **Install Backend Dependencies:**
    Navigate into the `backend` directory and install the required Node.js packages.
    cd L3T08_TASK/backend
    npm install
 

3.  Install Frontend Dependencies:
    Navigate into the `frontend` directory (from the project root) and install the required Node.js packages.
    cd ../frontend # If you are in the backend folder
    npm install

Running the Application

You will need two separate terminal windows for the backend and frontend.

1.  Start the Backend Server:
    In your first terminal, navigate to the `backend` directory and start the Express server.
    cd L3T08_TASK/backend
    npm start
    You should see a message indicating that the backend server is listening on port `8080`.

2.  Start the Frontend Development Server:
    In your second terminal, navigate to the `frontend` directory and start the React development server.
    cd L3T08_TASK/frontend
    npm run dev
    This will usually start the frontend on `http://localhost:5173` and provide a link in your terminal.

3.  Access the Application:
    Open your web browser and go to the URL provided by the `npm run dev` command (typically `http://localhost:5173/`).

API Reference

This application utilizes the official iTunes Search API.
Overview and Documentation:[https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html) 

# Author Erik Smith 

