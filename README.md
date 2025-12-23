# 🔹Task: Build a Mini User Tracker App

## Problem:

Create a simple page where:  
- The user's name is saved using localStorage.  
- A visit counter is maintained using cookies.  
- Use prototypal inheritance to define a basic User and extend it into a Visitor.  
- Create a simple polyfill for Array.prototype.includes.

## 📋 Requirements:

1. **Polyfill**:  
   - Create your own function to polyfill `Array.prototype.includes` (if it doesn't exist).

2. **Prototypal Inheritance**:  
   - Create a `User` constructor with properties like `name`.  
   - Create a `Visitor` constructor that inherits from `User` and adds a property like `visitCount`.

3. **Cookies**:  
   - Track how many times the user has visited the page using cookies.  
   - Increment the count each time they reload/visit.

4. **WebStorage API**:  
   - Ask the user for their name (using a prompt if not found).  
   - Save the name in `localStorage` so it persists across sessions.  
   - Display a greeting like:  
     `Hello John, this is your 5th visit!`

## 🛠 Bonus (if you want):

- Make the cookie expire in 7 days.  
- Add a "Reset" button to clear `localStorage` and cookies.

## 🖥️ Sample Output:

**When you first open the page:**  
(Prompt appears: "Enter your name:")  


Suppose you enter:  
```
`👉John`  
```

Then on the page, you see:  
`Hello John, this is your 1st visit!`  
[Reset Button]

---

**When you refresh the page again:**  
- You will NOT get the prompt again, because the name is saved in `localStorage`.  
- You will see:  
`Hello John, this is your 2nd visit!`  
[Reset Button]

---

**Refresh again:**  
`Hello John, this is your 3rd visit!`  
[Reset Button]

---

**If you click the Reset button:**  
- Clears your name from `localStorage`  
- Deletes the cookie tracking the visit count  
- Reloads the page  
- Then the prompt comes up again asking for your name!

---

## 🔥 Bonus (Tiny Touches already added):

- Correct suffix for visit count: 1st, 2nd, 3rd, 4th, 5th, etc.  
- Visit count continues even after closing and reopening the browser (until cookie expiry).
