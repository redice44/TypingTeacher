# Play Game Sequence

1. User --Loads Website Creates--> Play Game Controller
2. Play Game Controller --Create--> Play Game Container
3. Play Game Controller --Create--> Appropriate Game Mode Container
3. Play Game Container --Sends User Input (game results)--> Play Game Controller
4. Play Game Controller --update--> Campaign Entity
5. Play Game Controller --calculate results--> Play Game Controller
6. Play Game Controller --update results--> Play Game Container
  1. If quick play Play Game Controller --prompt to play again--> Play Game Container
    1. [Requires registered user] Play Game Controller --Update--> Campaign Entity (Misc)
  2. If Campaign Play
    1. If success Play Game Controller --prompt to continue to next level--> Play Game Container
      1. Play Game Controller --Update--> Campaign Entity
    2. If fail Play Game Controller --prompt to try again--> Play Game Container
      1. Play Game Controller --Update--> Campaign Entity
    3. If complete campaign
      1. Play Game Controller --Create--> Campaign Finished Container
      2. Play Game Controller --Update--> Campaign Entity
