# GameMate
  
## Project dependencies  
  
```
 "dependencies": {
    "@react-native-firebase/app": "^17.5.0",
    "@react-native-firebase/auth": "^17.5.0",
    "@react-native-picker/picker": "^2.4.10",
    "@react-navigation/bottom-tabs": "^6.5.7",
    "@react-navigation/native": "^6.1.6",
    "axios": "^1.4.0",
    "expo": "~48.0.15",
    "expo-status-bar": "~1.4.4",
    "firebase": "^9.20.0",
    "react": "18.2.0",
    "react-native": "0.71.7",
    "react-native-dropdown-select": "^1.0.7",
    "react-native-dropdown-select-list": "^2.0.4",
    "react-native-gesture-handler": "^2.9.0",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0",
    "expo-splash-screen": "~0.18.2"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
```  
  

## :date: 27.3.2023 | Project kick-off

I started the GameMate project with a small prototyping session using Figma. I created prototypes for the application's login view, game sessions view, and user profile view.
  
### Login   
![image](https://user-images.githubusercontent.com/90974678/228212631-75fd22a6-8e3c-49da-b4bb-e3b9e8e57af0.png)  
  
### Game sessions    
![image](https://user-images.githubusercontent.com/90974678/228212706-429abb0d-ce2f-4564-9f4a-42013833efd2.png)  
  
### Profile    
![image](https://user-images.githubusercontent.com/90974678/228212749-f3e86b07-f770-46e4-a330-45dd86e502ba.png)  
  
## :date: 28.3.2023 | First steps

### :timer_clock: 13:40  

Today I'm going to set up the development environment for the project and then start to work on the game sessions view. Possibly more prototyping with Figma too.
  
### Setting up the development environment  
  
* Created a new local Expo-project 'GameMate' and set https://github.com/lauritorma/GameMate.git as the remote origin. First commit done.  
* Installed Firebase to project 
* Installed React navigation to project  
* Created new app 'GameMate' in Firebase  
* Set up new Firebase Realtime Database
* Set up initial project structure and folders
* Added Firebase configuration object to ```config/firebaseConfig.js```  
* Added ```config/firebaseConfig.js``` to ```.gitignore```  


### Implementing three views and navigation between them  
  
Implemented navigation between "Games", "Create" and "Profile" screens with BottomTabNavigator  
  
![Untitled design](https://user-images.githubusercontent.com/90974678/228248770-d159f8f9-b173-4e5c-b585-4acd29558763.png)


### :timer_clock: 16:55  
  
Stopped working for now.

### :timer_clock: 22:32  

### Implementing the skeleton of creating a gaming session-functionality
  
* Created dropdown-lists for platforms and games, textinput for session description, button to publish session and put them together in Create-screen  
  
![WhatsApp Image 2023-03-29 at 00 32 42](https://user-images.githubusercontent.com/90974678/228371717-49544cae-a7e3-41cc-ac20-3d508cd6639d.jpeg)
  
### :timer_clock: 00:37  
  
Stopped working for now.  


## :date: 29.3.2023 | Continue session creation  
  
### :timer_clock: 18:05  

* Continued to work on the game session creation view  
* Selected platform, game and description values are now set to variable states in CreateSession.js  
  
### :timer_clock: 20:33  
  
Commiting changes and stopping for now  
  
##  :date: 11.5.2023 | Implementing firebase and GameSession list  
   
### :timer_clock: 14:05  
After a long break I started to work on this project again.  
  
* Created connection to firebase realtime database
* Implemented game session list that fetches gamesessions from database and shows them on GameSession page  
* Implemented blacklist filtering that prevents users from adding bad words to game description
* Added alert when button is clicked in CreateSession page
  
![image](https://github.com/lauritorma/GameMate/assets/90974678/43d0a39d-468c-4c65-b34d-4ee26b4724b6)
  
![image](https://github.com/lauritorma/GameMate/assets/90974678/2a0bb2b6-d9ba-41cf-91e0-4da7590efd9a)

![image](https://github.com/lauritorma/GameMate/assets/90974678/9addfa08-4491-4190-b27a-c1bd214920b8)
  
![image](https://github.com/lauritorma/GameMate/assets/90974678/ba655da0-fd7f-4637-ab1c-89b22569b3d6)

  

