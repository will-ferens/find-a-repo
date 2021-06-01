# Hotel Engine Technical Assesment

## Instructions

1. Clone this repository:
`$ git clone https://github.com/Ywill-ferens/hotel-engine`
2. Install dependencies:
`$ npm install`
3. Run locally:
`$ npm start`

## Explanation

Here we have Find a Repo, which can search for a repositories, filter by language, sort by stars, and provide more detail on each with an individual page. Using modern best practices (functional components and hooks), I hope this serves as a brief introduction to what I know about React, JavaScript, and basic web development / design concepts. Using a features branch workflow, I did my best to keep the `main` branch clean as I added more requirements to the project. I tried to keep library usage to a minimum in order to show more faithfully a general understanding of React and its ecosystem, rather than library specific knowledge. That being said, I did use a few dependencies in places where there was no need to re-invent the wheel or for conveince:

## Dependencies

### Styled Components

This is my preferred method for styling React apps. The philosophy fits well with the component based architecture of React. It also icludes the power of SCSS with features like nested components and global variables, which I lean on often.

### React Router

Used for dynamic pages. The universal library for React routing and navigation - I can't compete with that!

## Challanges

You may see towards the beginning of my commits, I was using `useState()` to define things like search results and filters. Obviously, this has performance implications and makes things extremely brittle in the long run. Since I'm familiar with Redux event patterns, I was happy to switch over to `useReducer()`. This allowed me to centralize the app's overall state in the `Search` component, minus the currently selected result that was passed onto `ResultPage` through the router. Most other issues were relatively minor and were related to user experience and expectation.

## For the Future...

While the application fulfills the requirements of the assignment, there are a few features that could add a lot. First, adding pagination and search summary to the return search results would add more depth to the core functionality. Having filters and sorts initiate calls to the API would give a more accurate picture to search results - and would open the door for more features like per page (Github allows up to 100). Results returned also provide resources to give users more information on each repository. This could improve the basic details page.

## Conclusion

I had a lot of fun hacking this together! And I look forward to hearing any feedback about the app 🙂.