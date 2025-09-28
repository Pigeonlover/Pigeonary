# Pigeonary

---

## What is it?

A fun and educational site to learn about some of the existing pigeon breeds in the world. Every time you open the Discover page, a random breed from the database is shown to you, which includes a picture and short description. You can also add comments for each breed to interact with the wider pigeon enthusiast community!

---

---

## Project Daily Planner

---

DAY ONE

**Morning** <br>
✦ Finalise the plan for the site. ✔️ (26/09/2025) <br>
✦ Set up the monorepo and GitHub repo. ✔️ (26/09/2025) <br>
✦ Create the database tables. ✔️ (26/09/2025)

**Afternoon** <br>
✦ Create the site structure: Home, Discover, About Us. ✔️ (26/09/2025) <br>
✦ Set up server route for random fetching. ✔️ (26/09/2025) <br>
✦ Fetch data from the database and display on the Discover page. ✔️ (26/09/2025) <br>
✦ Create form. ✔️ (27/09/2025)

---

DAY TWO

**Morning** <br>
✦ Form submission sends data to database - each comment to its specific breed. ✔️ (27/09/2025) <br>
✦ Connect comments to each pigeon breed. ✔️ (26/09/2025) <br>
✦ Add a 'New Breed' button and add its functionality. ✔️ (26/09/2025) <br>

**Afternoon** <br>
✦ Comments show for each specific breed. ✔️ (27/09/2025) <br>
✦ Start styling. ✔️ (27/09/2025) <br>
✦ Check accessibility features. ❌

---

DAY THREE

**Morning** <br>
✦ I'll probably still be asleep. ✔️ (28/09/2025)

**Afternoon** <br>
✦ Finalise styling. ✔️ (28/09/2025) <br>
✦ Finish writing the project's README.md file. ✔️ (28/09/2025) <br>
✦ Begin the epic battle with Render (test everything works). ✔️ (28/09/2025)

---

---

## What Did I Achieve?

- Created a full-stack app using Vite (with React), Node and Express.
- Made a form for users to add new comments. Comments also are assigned to the specific breed the user was looking at in that moment.
- Created multiple pages using React router: Home, Discover and About Us.
- Designed the database and inserted data needed in it.
- Created multiple routes in the server using GET and POST and SQL queries to serve the functionality needed/planned for the frontend.
- Used `map.()` to display comments for each pigeon breed.
- I didn't use an interval because it would have messed up my useEffect. Every time the user goes to the Discover page (or clicks the button for a new pigeon breed to be shown), a random pigeon breed is chosen from the database and rendered. With an interval, different pigeon breeds would show each refresh, which wasn't what I needed. Instead, I found a solution to the double firing of `useEffect` from the React docs, by using `ignore` (reference below).
- A pop-up form! Very proud of this one. I know it's nothing mindblowing, but I especially love the backdrop blur effect with Tailwind, it really makes it nice to look at <3
- At first I had lots of trouble with the CSS. I wasted/spent many hours trying to use grid but the layout wasn't working. Eventually I tried to use Tailwind, and I found it much easier to see exactly what I was styling at a time (plus, things were finally being styled as I wanted them to be!). As my first foray in the technology, I think I did pretty good! And I also enjoyed using it (the Tailwind docs are also really nice to read through). So in the end I kind of... Uh, went all out with using Tailwind. But there's still a CSS file in there... Somewhere...!

---

## What Wasn't I Happy With?

- Again, time constraints. When I first read the assignment brief, I knew it was a very big task with many components to plan and make. I had an inkling that I might not be able to create everything needed. In the end, because I spent longer than first expected on things like the CSS styling, React logic, debugging, research, etc... I didn't have enough time to do everything I had wanted to do. For example, I haven't been able to make the site mobile-friendly. Also, I wasn't able to go through the site's accessibility features.
- Not necessarily unhappy, but the React logic was a big beast in this assignment. There was a lot of tries, deleting things, moving them around... Props for the form and comments became my nemesis. In the end I managed to make everything work, but it was very hard work. At least now I know what to do if I need to make something similar in the future, right...?
- I've usually never had massive issues with Render, but this time a couple of hours were spent on trying to sort out failed deployment and error codes. In the end it was `.env` issues (I think...), but managed to resolve it in the end. I also think the closer to the deadline I am, the stupider mistakes I make. I need to make sure I stay calm and collected :)
- Render again: my custom-made 404 Page does not show!!! So frustrating. I tried finding and implementing solutions from the internet, but nothing has worked yet (you will see some random code in vite.config.js and a stray file that I don't think does anything, really...). I'd love a solution to that because currently it is the main thing that's left me disappointed.

---

## References

- Random selector for SQL --> https://www.geeksforgeeks.org/sql/sql-select-random/
- `Ignore` for `useEffect` --> https://react.dev/reference/react/useEffect#:~:text=Note%20the%20ignore%20variable%20which%20is%20initialized%20to%20false
- A deep-dive into props --> https://react.dev/learn/passing-props-to-a-component and https://www.freecodecamp.org/news/pass-data-between-components-in-react/ and https://dev.to/paripsky/using-effects-effectively-in-react-stop-misusing-useeffect-once-and-for-all-5fpm
- React forms --> https://www.w3schools.com/react/react_forms.asp
- `try ... catch ... finally` --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
