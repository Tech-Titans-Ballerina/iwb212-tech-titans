import React from 'react'
import '../css/Style.css';
import '../css/Dashboard.css';
import hackathon2 from '../images/hackathon2.jpg';
import halloween from '../images/halloween.jpg';
import concert from '../images/concert.jpg';
import camera from '../images/camera.jpg';
import art from '../images/art.jpg';
import cricket from '../images/cricket.jpg';
import gaming from '../images/gaming.jpg';
import music1 from '../images/music1.jpg';


function UserDashboard() {
  return (
    <div>
      {/* <header class="dashboard-header">
        <div class="nav-section">
            <div class="brand-and-navBtn">
                <a href="/Home">
                    <span class="brand-name">
                        Gatherly.
                    </span>
                </a>
                <span class="navBtn flex">
                    <i class="fas fa-bars"></i>
                </span>
            </div>

            <nav class="dashboard-nav">
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Event">Event</a></li>
                    <li><a href="/Service">Services</a></li>
                    <li><a href="/Help">Help</a></li>
                    <li><a href="">Join</a></li>
                    <li><a href="/UserDashboard" class="active">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    </header> */}

<header class = "dashboard-header">
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

              
                <nav class="top-nav">
    <ul>
        <li><a href="/Home" class="active">Home</a></li>
        <li><a href="/Event">Event</a></li>
        <li><a href="/Service">Services</a></li>
        <li><a href="/Help">Help</a></li>
        <li><a href="join.html">Join</a></li>
        <li><a href="/UserDashboard">Dashboard</a></li>
    </ul>
</nav>
</div>

            {/* <div class = "container about">
                <div class = "about-content">

                        <h2> G  a  t  h  e  r  l  y . </h2>
                        <h3>Event Reminder</h3>
                        <blockquote>
                            "Welcome to Gatherly, your ultimate event companion! Discover upcoming events, set personalized reminders, book tickets, and never miss a moment. Whether you're attending or organizing, Gatherly makes it easy to stay connected and in the loop. Join us and make every event unforgettable!"
                        </blockquote>
                    
                </div>
            </div> */}
        </header>

    <section id="content">
       
        <main>
			<div class="head-title">
				<div class="left">
					<h1>Hi, Lisa Monarch! Welcome to Gatherly!</h1>
					<ul class="breadcrumb">
						<li>
						User Dashboard
						</li>
					</ul>
					<h2 class="latest-heading">Latest Events</h2>
				</div>
				<a href="#" class="btn-download">
					<span class="text">View your profile</span>
				</a>
			</div>

            <ul class="box-info">
				<li>
					<img src={hackathon2} width="100" height="180" class="event1"/>
					<span class="text">
						<h3>BugBash - The Hackathon</h3>
						<p>October 16 (8.30am - 4.00pm)</p>
					</span>
				</li>
				<li>
					<img src={concert} width="100" height="180" class="event1"/>
					<span class="text">
						<h3>Melody Pulse - Music Concert</h3>
						<p>October 17 (7.00pm - 11.00pm)</p>
					</span>
				</li>
				<li>
					<img src={halloween} width="80" height="180" class="event1"/>
					<span class="text">
						<h3>Halloween Night</h3>
						<p>October 20 (7.00pm - 11.30pm)</p>
					</span>
				</li>
			</ul>

            <h2 class="dashboard-topic2">Favorites and Reminders</h2>
            <div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Your Favorites</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Event</th>
								<th>Date</th>
								<th>Category</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src={camera}/>
									<p>LensCraft</p>
								</td>
								<td>2024-10-20</td>
								<td><span class="status completed">Workshop</span></td>
							</tr>
							<tr>
								<td>
									<img src={cricket}/>
									<p>Wicket Warriors</p>
								</td>
								<td>2024-10-23</td>
								<td><span class="status completed">Sports</span></td>
							</tr>
							<tr>
								<td>
									<img src={gaming}/>
									<p>Virtual Victory</p>
								</td>
								<td>2024-10-26</td>
								<td><span class="status completed">Sports</span></td>
							</tr>
							<tr>
								<td>
									<img src={art}/>
									<p>Canvas Chronicles</p>
								</td>
								<td>2024-10-30</td>
								<td><span class="status completed">Exhibition</span></td>
							</tr>
							<tr>
								<td>
									<img src={music1}/>
									<p>Harmony Unplugged</p>
								</td>
								<td>2024-11-01</td>
								<td><span class="status completed">Entertainment</span></td>
							</tr>
						</tbody>
					</table>
				</div>
                <div class="todo">
					<div class="head">
						<h3>Reminders</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Taste the Town - Food Festival</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Future Innovate - Tech Conference</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Stride for Change - Charity Event</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Sonic Serenade - Music Concert</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Boundary Bash - Cricket Match</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div>
		</main>
    </section>
    </div>
  )
}

export default UserDashboard
