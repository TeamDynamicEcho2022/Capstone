# simPill


[Link to Demo](https://simpill-app.herokuapp.com/)


# App Overview:

According to the Centers for Disease Control and Prevention (CDC),
Statistically speaking: The problem of not taking medicine as prescribed
  * 20 to 30 percent of new prescriptions are never filled at the pharmacy.
  * Medication is not taken as prescribed 50 percent of the time.
  * For patients prescribed medications for chronic diseases, after six months, the majority take less medication than prescribed or stop the     medication altogether.
  * Only 51 percent of patients taking medications for high blood pressure continue taking their medication during their long-term treatment.
    
SimPill is a reminder web application geared toward forgetful, busy, and most importantly senior people. With a click of a button users of all types can monitor their daily medication scheduling. Create an account, log into the app, add medications, then it’s as simple as logging in back and seeing what you need to take for the day and going forward. SimPill lets you see if you’re running out of medication. SimPill will also direct you to the closest nearby pharmacy where medications can filled. 

With a quick click, our users will be able to have a sound mind and continue their day with leisure. SimPill app is designed to be as easy to use, read, and interact with to get rid of the fuss of aggravating and confusing patient portals.

# App Features:

- User Login and Authentication
- Shows all the medications that are currently being taken upon signing in and 
  taken to specific pages upon clicking on a particular medication
- Lets users add, remove and update medications
- Lets users set the frequency of medications being taken and reset to default
  value automatically upon finishing-up taking the medications per schedule
- Full CRUD functionality


# Running the App

- $ git clone the repository
- $ cd into the repository
- $ bundle
- $ yarn
- $ rails db:create
- $ rails db:migrate
- $ rails s
- Open up your browser and type in url localhost:3000 to be directed to the home page of the app

# Dependencies

- "@babel/preset-react": "^7.18.6",
- "@rails/activestorage": "^7.0.4",
- "@rails/ujs": "^7.0.4",
- "@rails/webpacker": "5.4.3",
- "@testing-library/jest-dom": "^5.14.1",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.2.1",
- "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
- "global-jsdom": "^8.5.0",
- "prop-types": "^15.8.1",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.4.1",
- "react_ujs": "^2.6.2",
- "reactstrap": "^9.1.4",
- "webpack": "^4.46.0",
- "webpack-cli": "^3.3.12"


# Testing

- yarn jest
- rspec spec/models/filename
- rspec spec/requests/filename

# Tools used to build the app and render properly to users

- React Strap
- React on Rails
- JavaScript
- CSS
- PostgreSQL
- yarn
- Heroku

# Wireframe architecture of the app

1. Home page localhost:3000
  <img src="https://i.imgur.com/RXSGjk3.png" alt="Photo of the Home Page" width="400"/>

2. Registered user home page
  <img src="https://i.imgur.com/6XMJGkP.png" alt="Photo of the Registered User Home Page" width="400" />

3. Sign-in page
  <img src="https://i.imgur.com/L0mliME.png" alt="Photo of the Sign In Page" width="400"/>

4. Sign-up page
  <img src="https://i.imgur.com/R2Qj4Hk.png" alt="Photo of the Sign Up Page" width="400"/>

5. Not found 404 page
  <img src="https://i.imgur.com/iTO45YT.png" alt="Photo of the 404 Page" width="400"/>

6. User's Dashboard
  <img src="https://i.imgur.com/Aa5TDP9.png" alt="Photo of the User Dashboard Page" width="400"/>

7. Show page for Medication
  <img src="https://i.imgur.com/wza3X6D.png" alt="Photo of the Medication Show Page" width="400"/>

8. Add medication Page
  <img src="https://i.imgur.com/3q9gKtg.png" alt="Photo of the Add Medication Page" width="400"/>

9. Edit Medication Page
  <img src="https://i.imgur.com/tMlVaZE.png" alt="Photo of the Edit Medication Page" width="400"/>

# App Developers

- Dawit K
    - [Github](https://github.com/addisdave)
    - [LinkedIn](https://www.linkedin.com/in/dawit-kel-738ba3151/)
- Daniel Clement
    - [Github](https://github.com/dnlclmnt)
    - [LinkedIn](https://www.linkedin.com/in/danielclement-/)
- Jermey Doan
    - [Github](https://github.com/JPD99)
    - [LinkedIn](https://www.linkedin.com/in/jeremedoan/)

# Credit and Collaborations with

- [Figma](https://figma.com/) for initial wireframing.
- [Trello](https://trello.com/) for project management.
- [Stack Overflow](https://stackoverflow.com/) and google search engine for 
  the blockers.
- [LEARN Academy](https://github.com/learn-academy-2022-echo/Syllabus) for general guidance.
- LEARN Academy instructors and staff members
    - Austin Walker
    - Charlene Baxter
    - Sarah Proctor
- Mentors: Eddie Gomez, Luke Olson

# Upcoming future projects to the app

- Adding FDA api to the app
- Making the app mobile deployable
- Adding google map api for nearby pharmacies to be redirected
- Adding notification email to be reminded in real time 