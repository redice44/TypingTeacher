# Create or Edit Teacher Campaign

Actors: Teacher User

Entry Condition: Authenticated Teacher

Exit Condition: Finish making campaign or cancels.

Flow of Events:
1. Extends use case createEditCampaign.
2. User may add a deadline to the campaign. ^1
3. User may add a user white list to the campaign.
  1. The system will verify the user to be added exists. ^2
  2. The system adds the user to the white list.
  3. Upon creation of the campaign, the system will notify all users on the white list that they have been added to this campaign by the teacher.
  4. The system adds this campaign to all whitelisted users' campaign lists.

Exceptions:
1. If the date selected is in the past, the system prompts the teacher with an error stating that the deadline has already passed.
2. If the user does not exist, the system prompts the teacher with an error stating that the user does not exist.
