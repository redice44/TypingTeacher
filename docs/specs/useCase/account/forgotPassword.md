# Forgot Password

Actors: Anon User

Entry Condition: User clicks forgot password

Exit Condition: User's password is flagged for reset

Flow of Events:

1. User clicks forgot password
2. System prompts user for username and email.
3. User inputs username and email
4. System validates that the user name corresponds to the email. ^1
5. The system emails the user with a link to reset the user's password
6. The system returns the user to the sign in page.


Exceptions:
1. If the user name does not correspond with the email, the system notifies the user of the error, and asks the user to try again.
