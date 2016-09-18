# Import Campaign

Actors: Registered users

Entry Condition: Authenticated Registered User

Exit Condition:

Flow of Events:

1. User clicks to import campaign.
2. System prompts user for campaign code.
3. User inputs campaign code. ^1 ^2
4. System displays campaign.
5. User can accept or deny the campaign.
  - Accept: System adds the campaign to the user's campaign list
  - Deny: The system returns

Exceptions:

1. If the campaign code is invalid, the system will display an error telling the user that the campaign code is invalid, and allow additional attempts.
2. If the campaign code is valid, but the user is not on the whitelist, then the system will display an error to the user stating that they do not have access to the campaign.
