# ReelPlaces

Have you ever been curious to see where your favourite movies or TV series have been filmed?

ReelPlaces allows you to search for the location you are currently at using a dropdown menu, and shows you the top 20 movies that were filmed there. Those movies then give you further information such as, the release year, plot, stars and IMDb rating. With ReelPlaces, you can get access to a map which pinpoints the nearby filming locations and then you are ready to go and explore them!

## How to use ReelPlaces
### Install 
1. Clone this repository by running the below in your terminal:
```bash
git clone https://github.com/cbai123/ReelPlaces
```

2. Once cloned, visit this website and sign up to get your own api key in order to run the programme:
```bash
https://imdb-api.com/
```

3. Go into the relevant directory by doing the below which will install dependencies needed to run it accurately. You will need two terminals open. One of them needs to do the below:
```bash
cd database
npm install
npm start
```
```bash
cd ReelPlaces 
npm install 
npm run start
```
Once all dependencies have been installed:
- :mag_right:  Enter the location of your choice 
- :movie_camera:  Click on your preferred movie 
- :world_map:  Check out the map 
- :round_pushpin:  Explore!

## MVP
We began by mind-mapping multiple ideas and potential features, narrowing down our Minimum Viable Product which was being able to search for a location and view the list of movies correlating to that location.

For our MVP, we would like our app to acheive the following user stories:

```
As a user,
So I can search for the location, 
It should have a home page with a search bar.  
```
```
As a user,
So I can see the movies,
It should be able to show up on the home page.
```
```
As a user,
So I can see the movies information,
It should be able to show up on the movie info page.
```
```
As a user,
So I can see where it is filmed,
It should include a map.
```

As we completed the above, we started to build our product up feature by feature until we ended up with an app we were all proud of.

## Tech Stack

For this project we are using:

- [MongoDB](https://www.mongodb.com/) for the database.
- [Express](https://expressjs.com/) web framework for Node.js.
- [React Native](https://reactnative.dev/) for the frontend.
- [Node](https://nodejs.org/en/) for the back-end.
- [Jest](https://jestjs.io/) for testing.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [Prettier](https://prettier.io/) for formatting.

## Contributors
[Anisha Hirani](https://github.com/anisha-11) 

[Chris Bailey](https://github.com/cbai123) 

[Magdaline Amoakohene](https://github.com/Magdaline1) 

[Mathieu Amouny](https://github.com/m-codes)

[Shah Hussain](https://github.com/shussain894) 
