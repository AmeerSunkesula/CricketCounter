# Cricket Counter 🏏

A simple, lightweight web application to track cricket scores, wickets, and overs in real-time.

## 📋 Features

* **Score Tracking:** Record runs (1, 2, 3, 4, 5, 6) and Dot balls.
* **Wicket Counter:** Tracks wickets and alerts when the team is "All out" (10 wickets).
* **Extras:** Supports Wides and No Balls (adds runs without counting as a legal delivery).
* **Over Management:** Automatically tracks legal deliveries and updates the scoreline after every over (6 balls).
* **History:** Displays a ball-by-ball summary for the current over.
* **Responsive Design:** Looks good on mobile and desktop using a clean Flexbox layout.

## 🛠️ Technologies Used

* **HTML5** - Structure
* **CSS3** - Styling (Flexbox for layout)
* **JavaScript (ES6)** - Game logic and DOM manipulation

## 🚀 How to Run

1.  Download or clone this repository.
2.  Ensure you have the following three files in the same folder:
    * `index.html`
    * `style.css`
    * `script.js`
3.  Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc.).

## 📂 Project Structure

```text
/
├── index.html   # Main structure of the application
├── style.css    # Styles for the layout and buttons
└── script.js    # Logic for scoring, wickets, and overs
