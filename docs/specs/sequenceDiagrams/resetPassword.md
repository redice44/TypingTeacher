# Reset Password Sequence

1. Anon User --Clicks--> Reset Password Component
2. Reset Password Component --Creates--> Reset Password Controller
3. Reset Password Controller --Creates--> Reset Password Container
4. Reset Password Container --submits user's input--> Reset Password Controller
5. Reset Password Controller --Updates Password--> Account Entity
6. Account Entity Returns <--y/n--
  1. If error, Reset Password Controller --Creates--> Error Notification and Reset Password Container
7. Reset Password Container --Creates--> Success Notification and Sign In Container
