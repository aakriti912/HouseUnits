# House Units App

## Overview

The House Units App is a Vue.js application that displays information about different house units. It fetches data from an API using GraphQL and displays it to the user. The app allows users to view details of each house unit and see their floor plans.

## Features

- Fetches house unit data from an API using GraphQL.
- Displays a list of house units with their details.
- Allows users to click on a house unit to view its floor plan.
- Handles errors gracefully and displays error messages to the user.

## Technologies Used

- Vue.js
- GraphQL
- Tailwind CSS

## Project Structure

- `src/`
  - `assets/`: Contains static assets such as images.
  - `components/`: Contains Vue.js components used in the app.
  - `queries/`: Contains GraphQL queries used to fetch data.
  - `views/`: Contains Vue.js views or pages.
  - `App.vue`: Main Vue component.
  - `main.js`: Entry point of the application.
  - `router/`: Contains Vue Router configuration.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd house-units-app`
3. Install dependencies: `npm install`
4. Run the development server: `npm run serve`

## Usage

- Upon running the development server, open your browser and navigate to `http://localhost:8080` to view the application.
- The application will display a list of house units. Click on a house unit to view its floor plan.
- If there are any errors while fetching data, error messages will be displayed to the user.

## Contribution

Contributions are welcome! Feel free to submit issues or pull requests if you find any bugs or want to improve the application.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
