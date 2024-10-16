import React from 'react'
import '../css/Style.css';
import hackathon from '../images/hackathon.jpg';
import music_concert from '../images/music-concert.jpg';
import workshop_1 from '../images/workshop-1.jpg';
import charity from '../images/charity.jpg';
import art_exhibition from '../images/artexhibition.jpg';
import food_fest from '../images/food-fest.jpg';
import hackathon_2 from '../images/hackathon-2.jpg';
import conference from '../images/conference.jpg';

function Event() {
  return (
    <div>
      <header class = "header">
            <div class = "nav-section">
                <div class = "brand-and-navBtn">
                    <a href="/Home">
                        <span class = "brand-name">
                            Gatherly.
                        </span>
                    </a>
                    <span class = "navBtn flex">
                        <i class = "fas fa-bars"></i>
                    </span>
                </div>

                
                <nav class = "top-nav">
                    <ul>
                        <li><a href = "/Home">Home</a></li>
                        <li><a href="/Event" class = "active">Event</a></li>
                        <li><a href = "/Service">Services</a></li>
                        <li><a href="/Help">Help</a></li>
                        <li><a href="join.html">Join</a></li>
                    </ul>
                </nav>
              
            </div>

            <div class = "container about">
                <div class = "about-content">
                    
                <h2> G  a  t  h  e  r  l  y . </h2>
                <h3>Event Reminder</h3>
                    <blockquote>
                        "Welcome to Gatherly, your ultimate event companion! Discover upcoming events, set personalized reminders, book tickets, and never miss a moment. Whether you're attending or organizing, Gatherly makes it easy to stay connected and in the loop. Join us and make every event unforgettable!"
                    </blockquote>
                </div>
            </div>
        </header>

        
        <section class = "section-four">
            <div class = "container">
                <div class = "blogs">
                    <h2>Latest Events:</h2>
                    <div class = "blog-wrapper-sm">
                        
                        <div class = "blog">
                            <img src={hackathon} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Hackthon</span>
                                
                                <h3 class = "blog-title">
                                    "Push Boundaries, Build Tomorrow."
                                </h3>
                                <p class = "blog-text">
                                About the Hackathon:<br/>
                                A 7-hour hackathon to code, create, win and Unleash Your Inner Coder!
                                </p>
                                    <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>

                        {/* <div id="popup" class="popup">
                            <div class="popup-content">
                                <span class="close-btn">&times;</span>
                                <h2>Hackathon Details</h2>
                                <p>
                                    A 7-hour hackathon to code, create, and win!<br/><br/>
                                    Event Details:<br/>
                                    Date: 17.10.2024<br/>
                                    Time: 08:00 to 15:00<br/>
                                    Venue: Avendra Gardens | Negombo
                                </p>
                            </div>
                        </div> */}
                       
                        <div class = "blog">
                            <img src={music_concert} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Music Concert</span>
                                
                                <h3 class = "blog-title">
                                    "Vibes, Beats, and Unforgettable Nights!"
                                </h3>
                                <p class = "blog-text">
                                About the Concert:<br/>
                                Experience an unforgettable night of live music and electrifying performances!
                                </p>
                                <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>
                       
                        <div class = "blog">
                            <img src={workshop_1} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Workshop</span>
                                
                                <h3 class = "blog-title">
                                    "Learn, Create, Innovate, Skills for the Future!"
                                </h3>
                                <p class = "blog-text">
                                    About the Workshop: <br/>
                                    Enhance your skills in this hands-on workshop with industry experts!
                                </p>
                                <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>

                        <div class = "blog">
                            <img src={charity} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Charity Event</span>
                                
                                <h3 class = "blog-title">
                                    "Share Love, Spread Hope, Make a Change!"
                                </h3>
                                <p class = "blog-text">
                                About the Carity:<br/>
                                Get ready for an exciting Come together for a cause and make a difference!
                                </p>
                                <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class = "blogs">
                    <h2>This Month:</h2>
                    <div class = "blog-wrapper-sm">
                        
                    <div class = "blog">
                            <img src={art_exhibition} alt="" />
                        <div class = "blog-content">
                            <span class = "badge">Exhibition (Art)</span>
                                
                            <h3 class = "blog-title">
                                "Where Creativity Meets Passion!"
                            </h3>
                            <p class = "blog-text">
                                About the Exhibition:<br/>
                                Discover amazing art from talented artists across various styles!
                            </p>
                            <a href = "#" class = "btn">More Info</a>
                        </div>
                    </div>

                        {/* <div id="popup" class="popup">
                            <div class="popup-content">
                                <span class="close-btn">&times;</span>
                                <h2>Hackathon Details</h2>
                                <p>
                                    A 7-hour hackathon to code, create, and win!<br/><br/>
                                    Event Details:<br/>
                                    Date: 17.10.2024<br/>
                                    Time: 08:00 to 15:00<br/>
                                    Venue: Avendra Gardens | Negombo
                                </p>
                            </div>
                        </div> */}
                       
                        <div class = "blog">
                            <img src={food_fest} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Food Festive</span>
                                
                                <h3 class = "blog-title">
                                    "Culinary Adventures Begin Here!"
                                </h3>
                                <p class = "blog-text">
                                About the Food Festival:<br/>
                                Get ready to indulge in a world of flavors! Delicious dishes, and celebrate the joy of food.
                                </p>
                                <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>
                       
                        <div class = "blog">
                            <img src={hackathon_2} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Hackthon</span>
                                
                                <h3 class = "blog-title">
                                    "Unleash Your Inner Coder and Dream it. Code it. Win it."
                                </h3>
                                <p class = "blog-text">
                                About the Hackathon:<br/>
                                    A 3-hour hackathon to code, create, and win!
                                </p>
                                <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>

                        <div class = "blog">
                            <img src={conference} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Conference</span>
                                
                                <h3 class = "blog-title">
                                    "Transform Ideas into Action!"
                                </h3>
                                <p class = "blog-text">
                                About the Conference:<br/>
                                Join industry leaders for insightful discussions and networking opportunities!
                                </p>
                                <a href = "#" class = "btn">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>


    <footer class = "footer">
        <div class = "footer-container container">
            <div>
                <h2>Gatherly: Event Reminder</h2>
                <p>Gatherly: Your go-to event platform. Discover, book, and stay updated with events that matter. With personalized reminders and easy event management for organizers, Gatherly brings people together and ensures you never miss a moment.</p>
            </div>
            <div>
                <h3>S u b s c r i p t i o n !</h3>
                <p>"Stay updated on the events you love! Enter your email to receive personalized reminders and exclusive updates."</p>

                <div class = "subs">
                    <i class = "fas fa-envelope"></i>
                    <input type = "email" id = "email" placeholder="Email Address"/>
                    <button type = "submit">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <p>&copy; 2024 G a t h e r l y. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Event
