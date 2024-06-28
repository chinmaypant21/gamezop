# Project Documentation: Gamezop-Inspired Responsive Website

 ### Live demo: https://zgamezop.netlify.app
 
## Introduction
This is the documentation for my journey to create a Gamezop-inspired website! For this projext, I used **Next.js, TypeScript**, and Tailwind. Additionally, the site has been designed with the capability to function as a **Progressive Web App (PWA)**.
 I have used **App Router** to utilize **Server components** to effeciently render components on the server side and leveraged **Suspense** for handling async operations.  While drawing inspiration from Gamezop, I aimed to bring my own vision to implement it, focusing on **responsiveness**, user experience, and modern web development practices.

## Development
I tried to follow a folder structure where `src` folder is at the top. This ensured that my components and other helper modules are seperate from the `app` directory. Here is a high level overview of my project structure:
```
src
├───app
│   │   layout.tsx
│   │   page.tsx
│   └───[category]
|
├───assets
│   ├───images
│   │   └───icons
│   └───styles
|
├───components
│   ├───Buttons
│   ├───Container    
│   ├───GameCard
│   ├───LoadingScreen
│   ├───Navbar
│   ├───Search
│   └───Swiper
├───data
├───hooks
├───lib
└───types
```
To organize code, I splitted my project to *Pages* and *Non-pages* section. Everything inside the **app** folder will be related to my pages and all the other folders contain *helper functions* and *reusable components*.

## **Styling**
The styling journey for this project was aimed at achieving a visually appealing and highly responsive user interface. Here's a brief overview of the steps and decisions made:
- **Utilizing Tailwind CSS:** Tailwind CSS was myprimary tool for styling, chosen for its **utility-first approach** and flexibility. It allowed me to build complex designs with minimal custom CSS.
 - **Implementing Design Consistency with CSS Variables**: To maintain consistency, I defined CSS variables for common colors. These variables were then integrated into the Tailwind configuration, providing a **single source of truth**.
	 ```css
	 --app-main-color: #222341;
	--app-sec-color: #404380;
	--app-search-bg-color: #1e2333;
	--app-bg-color: #191a32;
	 ```
- **Ensuring Responsiveness:** Responsiveness was a core focus throughout the development. I used **media queries**  to adjust layouts and component sizes, ensuring a seamless experience on both desktop and mobile devices.

## Custom Info Button
As part of enhancing the user experience, I implemented a **custom info button** for the game card. This feature provides users with quick access to game details on *hover*, making the interface more interactive and informative.

![image](https://github.com/chinmaypant21/gamezop/assets/64401853/67c2e8c5-a9e6-46cd-9421-d003ccddba6f)

## Lighthouse Ratings
#### Mobile

![image](https://github.com/chinmaypant21/gamezop/assets/64401853/0b136919-6b4f-4cb1-b83e-6156314a33df)

#### Desktop

![image](https://github.com/chinmaypant21/gamezop/assets/64401853/8295b845-39a0-498d-8c2c-dae526a20eaa)


## PWA

![image](https://github.com/chinmaypant21/gamezop/assets/64401853/2bbe8c27-87cc-4da4-a4a4-3b2852635fbb)


## Steps to Run Locally

1.  **Clone the Repository:**
`git clone https://github.com/chinmaypant21/gamezop.git`
`cd gamezop` 

2.  **Install Dependencies:**
`npm install`

3.  **Run the Development Server:**
`npm run dev`

*Navigate to http://localhost:3000 to see the application in action.*

4.  **Build for Production:**
`npm run build`
`npm start` 

5.  **PWA Testing:**

    -   Open http://localhost:3000 in production mode and use the browser's developer tools to check PWA functionality.
