
# Next Challenge - Frontend
Technical Challenge using Next.js

- Try it here: [Deployed App](https://next-js-challenge-front.vercel.app/) 


## Main Functionalities

- CRUD of Restaurants
- Linked to a deployed API REST (https://next-api-rest.herokuapp.com/api) - (https://github.com/SaraMansori/next-js-challenge-server)
- Authentication with [JSON Web Token](https://jwt.io/)
- User can add and remove restaurants from favorites when logged
- Protected Routes
- Context API
- Responsive Design
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

## Screenshots

![image](https://user-images.githubusercontent.com/70658678/152694748-1ddcb3de-81a3-4eff-b21f-429ce5c10db5.png)
![image](https://user-images.githubusercontent.com/70658678/152694764-d393d59c-ab0d-40e9-b7eb-e9b56da179d4.png)
![image](https://user-images.githubusercontent.com/70658678/152694775-f1a7906d-483c-4913-972a-d44e15f18fe9.png)
![image](https://user-images.githubusercontent.com/70658678/152694799-a66797ff-fb6a-4339-af1b-d7cf59cc9cfb.png)
![image](https://user-images.githubusercontent.com/70658678/152694788-4a508432-b1b4-4cd6-ba67-c52f11744e77.png)




