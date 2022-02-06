
# Next Challenge - Frontend
Technical Challenge using Next.js

- Try it here: [Deployed App](https://next-js-challenge-front.vercel.app/) 


## Main Functionalities

- CRUD of Restaurants
- Linked to a deployed API REST (https://next-api-rest.herokuapp.com/api)
- Authentication with [JSON Web Token](https://jwt.io/)
- User can add and remove restaurants from favorites when logged
- Protected Routes
- Context API
- UI Library: [Chakra UI](https://chakra-ui.com/)

## How to run

This is an [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

|**Page**|**Description**|
|:-----|:-----|
|/ | Landing Page | 
|/login| Logs user with username and password |
|/signup | Signs user with username and password | 
|/my-profile | Displays user's details (username & favorite restaurants)
|/restaurants | Displays a list of all the restaurants in the database (and favorites if the user is logged) |
|/restaurants/add-new | Shows form to create a new restaurant |
|/restaurants/:id | Displays details of restaurants and buttons to edit and delete |
|/restaurants/edit/:id | Shows form to edit a restaurant |

## Next steps

- Error handling & Error Mesages and toasts
- Restaurant form with more data
- Increase component reusability



