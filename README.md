# 🎬 Netflix Clone (React + Firebase + TMDB + OpenAI)

A fully functional **Netflix frontend clone** built using **React (Vite)** with Firebase authentication, movie data from **TMDB API**, and a smart movie search powered by **OpenAI API**.  
This project mimics the Netflix UI and provides real-time movie search suggestions based on user-provided keywords.

---

## 🚀 Features

- **User Authentication**
  - Sign up & Login using **Firebase Authentication**
  - Secure auth state persistence

- **Movie Data**
  - Fetches trending, popular, and category-based movies from **TMDB API**
  - Displays banners, thumbnails, and detailed movie information

- **Smart Search**
  - Search movies by keyword using **OpenAI API**
  - AI-powered keyword-to-movie suggestion mapping
  - Real-time movie results with posters and descriptions

- **Responsive UI**
  - Netflix-style layout
  - Mobile-friendly design

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), React Router
- **Authentication:** Firebase Auth
- **Movie Data:** TMDB API
- **AI Search:** OpenAI API
- **Styling:** Tailwind CSS

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
    ``` 
    npm install
    ```

3. **Setup Environment Variables**

    ```
    VITE_REACT_APP_FIREBASE_KEY=your_firebase_api_key
    VITE_REACT_APP_TMDB_KEY=your_tmdb_api_key
    VITE_REACT_APP_OPENAI_API=your_openai_api_key

    ```
4. **Run the development server**
    ```
    npm run dev
    ```

5. **Build for production**
    ```
    npm run build
    ```

## 🌐 API Information

- TMDB API – Fetches movie data (trending, categories, search results).
- OpenAI API – Processes keywords and returns a list of suggested movies.
- Firebase Authentication – Handles signup, login, and authentication persistence.


