# 1. INTRODUCTION
This web application will allow any user to practice and assess his/her typing proficiency by typing in the displayed text as quickly and accurately as possible. The user will be able to see results in common metrics such as Words Per Minute (WPM) and accuracy. Registered users will see additional information in the form of historical information and progress. The web application will also allow teachers to set up classrooms, and be able to view aggregated information about the class.

### 1.1 Current System
The current system in place is a static, rigidly structured course that does not allow the teacher to create their own courses. Teachers a restricted to a predefined system. In addition, the current system maintains a system destined to make students see learning as a chore, more than as a fun experience. Words like course, assignments and other drab terminology keep students feeling like learning is a nothing more than a process they are put through rather than an engaging activity.
# 2. PROPOSED SYSTEM

### 2.1 Overview
Typing Teacher is dedicated to providing a flexible system for teachers of the touch typing skill to provide students with a fun and engaging way to learn this invaluable skill. The rest of this section of the document will be designated to describing the feature set that this project will bring to insure this goal is met. It will begin with the Functional Requirements which will detail the specific features that users can expect from the end result, then it will transition to a description of features that specify how the system should perform (Non Functional Requirements), followed by a listing of constraints that this project must adhere to, and finished by a collection of models designed to help visualization of the entire project easy.
### 2.2 Functional Requirements

##### 2.2.1 Game Play
- The system will display a typing game to the user that assesses the user's typing accuracy and speed.
- The user will be able to interact with the game by typing
- The system will display results in common metrics such as Words Per Minute (WPM) and accuracy percentage.
- The system will support two types of game modes:
  - Phrase Mode: The system will display a phrase to complete.
  - Time Trial Mode: The system will display a count down timer and unlimited phrases to complete.
- Registered users may use items if available.

##### 2.2.2 User Functionality
- Users will be able to see historical and aggregated information about all games and specific campaigns.
- The system allows registered users to create of custom campaigns and levels.
  - Campaigns are a collection of levels.
    - Campaigns must have at least one level.
  - Levels a set of game parameters and passing requirements.
    - Levels must be part of a campaign.
- The system allows teachers to create specialized custom campaigns.
  - These specialized campaigns can have
    - Deadlines
- The system allows registered users to export and import campaigns.
- Users will be able to see the user's inventory of items.

##### 2.2.3 User Roles
- The system supports 4 types of users:
  - Anonymous User: A basic user that is not logged in.
    - This user can play the game and receive immediate results.
    - This user's data will not persist in a form that can be identified to the user.
  - Registered User: A user that is registered and logged in to the system.
    - This user can play the game and receive immediate, personalized results.
    - This user's data will persist. Historical and aggregated data about the user is available.
    - This user is able to create custom campaigns.
    - This user has an inventory
  - Student User: A registered user that is participating in a Teacher's campaign.
  - Teacher User: A privileged registered users.
    - Teachers can create specialized Teacher campaigns.
    - Teachers can assign registered users (students) to specialized campaigns
    - Teachers can see overviews of the students in each specialized campaign.

### 2.3 Nonfunctional Requirements

##### 2.3.1 Usability
- Any user who has basic computer literacy will be able to use the system without instructions or the user manual.
- The system will provide visual cues to guide the users without any previous knowledge.
- Any user with English proficiency will be able to understand the system

##### 2.3.2 Security
- The system will support a user name and password for each registered user.

##### 2.3.3 Performance
- The system will process typed keys and input by the user in less than a second.
- The system will display correct results after each play.
- The system will save results correctly for each registered user.
- The system will save data for all registered users after each play.
- The system will save data after each level is created when creating a campaign.

##### 2.3.4 Supportability
- The system will accept upgrades/patches.

### 2.4 Constraints
- Must use a database
- Must be web based
- Must have at least three user roles
- Must be completed before 12/1/2016

# 3 SYSTEM MODELS

### 3.1 Use Case Models

##### 3.1.1 Account Use Cases

**Register Account**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Sign In Account**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Sigh Out Account**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

##### 3.1.2 Campaign Use Cases

**Create/Edit Campaign**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Create/Edit Class Campaign**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Create/Edit Level**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Export Campaign**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Import Campaign**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

##### 3.1.3 Gameplay Use Cases

**Play Game**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Play Phrase Mode**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Play Time Trial Mode**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

##### 3.1.4 Information Display Use Cases

**Access Campaign**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Access Class Campaign**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Access Dashboard**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

**Access Teacher Dashboard**
- Actors:
- Entry Condition:
- Flow of Events
- Exit Condition:

# 4 GLOSSARY
