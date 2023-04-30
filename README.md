### What is this?

- This is just some combinations of differnt libraries and theire functionality.

### How to use is?

- First you can just choose what you want to use contact, charts or maps.
- Then you can go to the contact section and add some contacts or delete them after creating them.
- On the charts section it shows the chart of the covid details.
- And on the map section it will show the covid details of country we click.

### What have been used?

- Things used here are:
  - React (The frontend of the website)
  - TypeScript (The frontend is written in)
  - Tailwind css (For styling purpose)
  - React icons (For using some of the icons)
  - Redux (The Thing responsible for the contact management)
  - React-router-dom-v6 (for routing purpose)
  - Chart.js, React-chartjs-2 (Responsible for the line graph)
  - chartjs-plugin-zoom (Tried to use the zoom and pan but wasn't able to do it)
  - @tanstack/react-query (For handling the data in charts and maps, and also for fetching the data from the api)
  - fetch api (for fetching the data from the web)
  - leaflet (For using the map)

### Build summary for the contact section?

- Start with creating a slice and then store and reducers.
- Added a button to create new contact with a specific user id.
- And if we want to edit the contact then it will go the specific url with the contactId as it slug/param.
- And the same case for the delete to delete a perticular contact which have the id.

### Build process for the charts section?

- Start with the `react-query` for fetching the data and storing it.
- After that some modifiction according the chartjs's dataset.
- Try to use the `chartjs-plugin-zoom` (But failed miserably).

### Build process of the maps section?

- Same here use the `react-query` to fetch the data and then modifing it according to my need.
- Using a marker to show the data(covid stats of that country).
