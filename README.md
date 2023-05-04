# Final Project Front end  - Hair & Beauty Salon ✂️

## Getting Started with Create React App 	:dart:
Node provides the RESTful API, React provides the frontend and accesses the API, Redux for state management and Sequelize as a realtime database.


## Technologies and tools used :paperclips:


![image](https://user-images.githubusercontent.com/121962750/227805657-5aa8e20e-f57e-4165-9c7c-08d118e2e913.png)
![image](https://user-images.githubusercontent.com/121962750/227805682-fd4bfbf7-335f-43b3-9c1d-e6f315d3a412.png)
![image](https://user-images.githubusercontent.com/121962750/227805709-c8e594cc-4061-46d2-8052-f1b952d38bd3.png)
![image](https://user-images.githubusercontent.com/121962750/227805729-6d3b3ad9-a7e2-4632-a904-7e2156085290.png)
![image](https://user-images.githubusercontent.com/121962750/227805744-3888f4f2-dce6-4d6f-855d-99c5702ade59.png)
![image](https://user-images.githubusercontent.com/121962750/227806065-1d6c4b9f-7dc5-4795-bb4a-7f764959d32c.png)
![image](https://user-images.githubusercontent.com/121962750/227805755-44a51622-17ab-499d-aec4-bc36e5a58729.png)
![image](https://user-images.githubusercontent.com/121962750/227805775-d9f2a658-5021-4629-9abe-ab36935b490e.png)


- Use of Docker to create the development environment;
- Creation of endpoints using the Express.JS framework and the application of the REST pattern;
- Application of layered architecture - model, service and controller;
- Using JSON Web Token to generate a token when logging in;
- Middleware for user token authentication to allow access to routes;
- Database connection and management with Sequelize ORM and MySQL. 



## ℹ️ How It Works

- Login.
- Logout.


1. Logged Users:
     - book appointments using interactive datepicker.
     - can cancel appointments.
     - can see their own appointments.
     - can update their profile.
     - view their own profile.

2. Stylists (user role):
     - view all appointments.
     - view all costumers.
     - view their own profile.

3. Admin:
     - deletes appointments.
     - view all users of the salon (not just costumers. Including Stylist and Admins).
     - view their own profile.

4. Layouts:
     - Home
     - Services
     - Treatments
     - Reviews

> **Note**
> I would like to keep working on progress to update and create new functionalities for this app.


## About developing the project 📝

![work1](https://user-images.githubusercontent.com/121962750/236254527-859ec8da-5747-466a-a82b-030147706399.jpeg)



## ⚒️ Stack Tech

- NPM 
- Docker 
- NodeJS 
- Express.js 
- MySQL 
- Sequelize 
- JWT 
- JavaScript
- Axios
- React Bootstrap




## Issues, solutions and future functionalities 📆 :pushpin:

   1. Issue: I can not bring Stylist name to the front end.
        - Solution: I would need to bring data through different tables doing "joins" between the tables.

   2. Issue: Slot time date picker not functional choosing the time, I do not have the available time implemented.
        - Solution: I would need to install React Day Time Picker.

   3. Issue: As an Admin I can´t delete/update users, roles.
         - Solution: I have those endpoints in the backend now we will work on them as future functionalities to be emplemented in this project.



## 	:round_pushpin: Dependencies

- @reduxjs/toolkit: 1.9.5
   - axios: 1.3.5
   - bootstrap: 5.2.3
   - bootstrap-icons: 1.10.4
   - dayjs: 1.11.7
   - react: 18.2.0
   - react-bootstrap: 2.7.4
   - react-dom: 18.2.0
   - react-jwt: 1.1.8
   - react-redux: 8.0.5
   - react-router-dom: 6.10.0
   - redux-persist: 6.0.0
   - redux-thunk: 2.4.2


## Screenshots 💻

# HOME page

![Home1](https://user-images.githubusercontent.com/121962750/236256172-b1b23f01-ae62-41fd-8e05-53d2d22d82ab.png)

# LOGIN page
![login](https://user-images.githubusercontent.com/121962750/236256642-a6a01bca-ca35-4e2f-b3ef-6f5b99e9d183.png)


# TEAM page

![eam1](https://user-images.githubusercontent.com/121962750/236256450-0e6b737a-1520-410c-bbcc-eb92c91437ef.png)
![loreal1](https://user-images.githubusercontent.com/121962750/236256476-29f58238-6496-484e-b215-225053223122.png)

# TREATMENTS page

![treatments1](https://user-images.githubusercontent.com/121962750/236256794-57c7a1fb-5a48-4a6f-81c2-f94423d5b393.png)

# SERVICES page

![services1](https://user-images.githubusercontent.com/121962750/236256877-7e2b3d85-5898-4b13-b24f-6aad9ebc5022.png)

# REVIEWS page 

![reviews](https://user-images.githubusercontent.com/121962750/236256949-4cff8d93-4453-4d66-8885-e7c78055f049.png)

# Responsive :iphone:

![nexus 5 1](https://user-images.githubusercontent.com/121962750/236257223-b32fb849-345c-45b2-a91a-bb5ccdb78eb0.png)
![nexus 5 2](https://user-images.githubusercontent.com/121962750/236257242-453b28e6-1b00-4261-a007-e45369268a54.png)
![nexus 5 3](https://user-images.githubusercontent.com/121962750/236257281-050c83e3-b22d-4b23-a5e5-36d7d3f471b2.png)
![nexus 5 4](https://user-images.githubusercontent.com/121962750/236257318-4c2e1653-7509-4f33-9364-6efd9324347c.png)


# Logged USER

![user functions](https://user-images.githubusercontent.com/121962750/236257519-96c78649-1c3e-4fcf-8e08-d44b90044747.png)
![user profile](https://user-images.githubusercontent.com/121962750/236257473-ece9e06f-cd28-4717-bdf6-d153b3c1b4bf.png)
![user get app](https://user-images.githubusercontent.com/121962750/236257584-1a55988f-5d21-4ace-9e1e-20714708c119.png)




## License

This project is licensed under the [MIT License](https://github.com/marinakolova/BeautyBooking/blob/master/LICENSE)


## Contact

:envelope_with_arrow: Alyna Nastas Romaniuc

![image](https://user-images.githubusercontent.com/121962750/227806286-eaf20a49-cee0-4cff-8f6d-f04b4dfcb873.png)
![image](https://user-images.githubusercontent.com/121962750/227806305-5d5348e2-756b-432d-8f61-870eb09941e3.png)

