# Konombo Exam

This application is built in **React** and interacts with the **Konimbo API**. The key features include:

- **Product Grid**: Display products in a grid format, where each product shows an image, title, and a link to more details.
- **Search Bar**: A functional search bar to filter products based on the user’s input.
- **Product Details Page**: Clicking on a product directs the user to a detailed page showing the product’s title, picture, description, and price.
- **Responsive Design**: The app is responsive, ensuring a smooth user experience across different devices and screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material Tailwind**: A set of React components based on Tailwind CSS for easy styling.
- **Axios**: A promise-based HTTP client to make API calls to fetch data from the Konimbo API.
- **React Query**: A data-fetching library that simplifies state management for asynchronous data.
- **React Router DOM**: A collection of navigational components for React, enabling dynamic routing.

## Features

- **Product Grid**: Displays a grid of products fetched from the Konimbo API with their images, titles, and links to individual product detail pages.
- **Search Functionality**: Users can search products using a search bar.
- **Product Details Page**: Upon clicking a product, users are redirected to a page showing the product's title, image, description, and price.
- **Responsive Design**: The app adjusts seamlessly to different screen sizes, providing a user-friendly experience on both desktop and mobile devices.

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd konimbo-exam
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   Your app should now be live at `http://localhost:3000`.

## Usage Instructions

1. **Home Page**: The homepage will display a grid of products fetched from the Konimbo API.
2. **Search Bar**: Use the search bar to filter the products based on your input.
3. **Product Details**: Clicking on any product will navigate you to a detailed page with the product's information.

## Contributing

Contributions are welcome! To contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request for review.


## Acknowledgements

- [Material Tailwind](https://github.com/creativetimofficial/material-tailwind) for providing beautiful React components.
- [React Query](https://react-query.tanstack.com/) for simplifying data fetching.
- [Axios](https://axios-http.com/) for easy API calls.