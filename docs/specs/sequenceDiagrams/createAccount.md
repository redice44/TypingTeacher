# Create Account Sequence

1. Anon User --Clicks--> Register Button Component
2. Register Button --Creates--> Create Account Controller
3. Create Account Controller --Creates--> Create Account Container
4. Create Account Container --Submits user information--> Create Account Controller
5. Create Account Controller --does account exist--> Account Entity
6. Account Entity Returns <--yes/no-- Create Account Controller
  1. If yes, invoke sign in sequence.
7. Create Account Controller --Create Account--> Account Entity
8. Account Entity Returns <--account-- Create Account Controller
9. Create Account Controller --Creates--> Sign In Controller
10. Create Account Controller --Sign In--> Sign In Controller
