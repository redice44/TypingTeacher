# Create or Edit Level

Actors: Registered users

Entry Condition: Must be Signed In, Must be creating or editing a campaign

Exit Condition: Level created or saved

Flow of Events

1. System displays the level options and level completion requirements
2. User Updates: ^1
  - options:
    - Game Mode
    - Timer length or Passage length
  - completion requirements:
    - required accuracy percentage
    - required words per minute
3. System saves level and returns.

Exceptions:

1. User inputs invalid input.
2. System prompts user to correct input with helpful tips.
