# Forgot Password Sequence

1. Anon User --Clicks--> Forgot Password Component
2. Forgot Password Component --Creates--> Forgot Password Controller
3. Forgot Password Controller --Creates--> Forgot Password Container
4. Forgot Password Container --submits user's input--> Forgot Password Controller
5. Forgot Password Controller --validates user and email--> Account Entity
6. Account Entity Returns <--y/n-- Forgot Password Controller
  1. If not valid, Forgot Password Controller --Creates--> Error Notification and Forgot Password Container
7. Forgot Password Controller --Emails User--> Forgot Password Controller
8. Forgot Password Controller --Creates--> Sign In Container
