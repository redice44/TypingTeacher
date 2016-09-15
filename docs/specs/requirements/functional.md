# Functional Requirements

### Game Play
- The system will display a typing game to the user that assesses the user's typing accuracy and speed.
- The user will be able to interact with the game by typing
- The system will display results in common metrics such as Words Per Minute (WPM) and accuracy percentage.
- The system will support two types of game modes:
  - Phrase Mode: The system will display a phrase to complete.
  - Time Trial Mode: The system will display a count down timer and unlimited phrases to complete.
- Registered users may use items if available.

### User Functionality
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

### User Roles
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
