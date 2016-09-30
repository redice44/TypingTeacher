# Sign In Account Sequence

1. Anon User --Clicks--> Sign In Button Component
2. Sign In Button Component --Creates--> Sign In Controller
3. Sign In Controller --Creates--> Sign In Container
4. Sign In Container --Submits user information-->Sign In Controller
5. Sign In Controller --validate credentials--> Account Entity
6. Account Entity Returns <--y/n--
  1. If not valid, Sign In Controller --Creates--> Error notification and Sign In Container
7. Sign In Controller --Signs In User--> Sign In Controller
8. Sign In Controller --Creates--> Dashboard Controller
