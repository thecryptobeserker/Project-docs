import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="menu-button">Menu</div>
        <div className="home-button">Home</div>
      </div>
      <div className="grey-block">
        <p className="block-text">Goodfellas</p>
      </div>
      <div className="image-container">
        {/* Add your images here */}
        {/* <img src="image1.jpg" alt="Image 1" />
     /> */}
      </div>
      <div className="text-block">
        <p>
          Founded in 2021, "GoodFellas" has become a cherished institution known
          for its authentic Italian cuisine and warm, welcoming atmosphere. In
          just a short time, it has evolved into a comfortable gathering place
          for locals and people from afar, evolving with the times while
          preserving the timeless flavors of Italy. "GoodFellas" is not just a
          restaurant; it's a symbol of feeling at home and a commitment to
          culinary excellence.
        </p>
      </div>
      <div className="grey-block-small">
        <p className="hours-text">
          <strong>Hours of Operation</strong>
          <br />
          Monday: 10:00 AM - 9:00 PM
          <br />
          Tuesday: 10:00 AM - 9:00 PM
          <br />
          Wednesday: 10:00 AM - 9:00 PM
          <br />
          Thursday: 10:00 AM - 9:00 PM
          <br />
          Friday: 10:00 AM - 9:00 PM
          <br />
          Saturday: Closed
          <br />
          Sunday: Closed
        </p>
      </div>
      <div className="menu-section">
        <p className="standout-text">
          <strong>Standout Dishes From Our Menu</strong>
        </p>
        <div className="dish-container">
          <div className="dish">
            <p className="dish-name">Paul’s Pasta & Meatballs</p>
            {/* Add image for Paul’s Pasta & Meatballs here */}
            {/* <img src="pauls_pasta.jpg" alt="Paul’s Pasta & Meatballs" /> */}
            <p className="dish-description">
              Meatballs and spaghetti with your sauce of choice.
            </p>
            <p className="dish-price">Price: $16.99</p>
            <p className="dish-rating">Rating: 4.9 stars</p>
          </div>
          <div className="dish">
            <p className="dish-name">Pasta al Forno</p>
            {/* Add image for Pasta al Forno here */}
            {/* <img src="pasta_al_forno.jpg" alt="Pasta al Forno" /> */}
            <p className="dish-description">
              Rigatoni pasta topped with melted mozzarella cheese and ground
              pork.
            </p>
            <p className="dish-price">Price: $18.99</p>
            <p className="dish-rating">Rating: 4.9 stars</p>
          </div>
          <div className="dish">
            <p className="dish-name">Florentine Steak</p>
            {/* Add image for Florentine Steak here */}
            {/* <img src="florentine_steak.jpg" alt="Florentine Steak" /> */}
            <p className="dish-description">
              1 1/2 pound porterhouse steak, choice of rare, medium rare, etc.
            </p>
            <p className="dish-price">Price: $39.99</p>
            <p className="dish-rating">Rating: 4.9 stars</p>
          </div>
        </div>
      </div>
      <div className="order-section">
        <div className="order-box">
          <p className="order-online">ORDER ONLINE</p>
        </div>
        <p className="order-ahead">Order ahead to pick up food.</p>
      </div>
      <div className="track-order-section">
        <div className="track-order-box">
          <p className="track-order">TRACK ORDER</p>
        </div>
        <p className="track-order-info">
          Click here to check the status of your order.
        </p>
      </div>
      <div className="menu-box">
        <div className="menu-box-check">
          <p className="menu-box-button">MENU</p>
        </div>
        <p className="menu-info">Click here to see the full menu.</p>
      </div>
      <div className="reservations-box">
        <div className="reservation-box-check">
          <p className="reservation-box-button">RESERVATIONS</p>
        </div>
        <p className="reservation-info">
          Click here to reserve a table at a specific time.
        </p>
      </div>
      <div className="bottom-section">
        <div className="bottom-image">
          {/* Add your image here */}
          {/* <img src="bottom_image.jpg" alt="Bottom Image" /> */}
        </div>
        <div className="useful-links">
          <p className="useful-links-text">Useful links</p>
          <ul className="useful-links-list">
            <li>About us</li>
            <li>Events</li>
            <li>Hours of Operation</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="main-menu">
          <p className="main-menu-text">Main Menu</p>
          <ul className="main-menu-list">
            <li>Home</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>
        <div className="contact-us">
          <p className="contact-us-text">Contact Us</p>
          <ul className="contact-us-list">
            <li>Social Media</li>
            <li>+64 958 248 966</li>
            <li>Goodfellas@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
