
For this project, my goal was to get comfortable with basic react functionality as a front-end framework. I used [Create React App](https://github.com/facebook/create-react-app) to quickly bootstrap a react app template, which allowed me to go straight to hacking!

One potential challenge for this project was integrating Bootstrap into a react app, since react doesn't use jQuery. I implemented bootstrap using a CDN link tag provided by bootstrap. I was able to drop it into `index.html` without issue.
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
crossorigin="anonymous">
```
I also dropped a few script tags into the `index.html` body to give bootstrap popper.js and the jquery library. This didn't seem to have any negative effect on deploying the app.
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
crossorigin="anonymous"></script>
```

Importing a google font was just as easy:
```html
  <link href="https://fonts.googleapis.com/css?family=Fondamento" rel="stylesheet">
```

On a larger project, I'd like for these assets to be local to the app instead of accessed through CDN, but for the purposes of this project I was happy to see that it works this way!
