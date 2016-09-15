# Access Teacher dashboard

Actors: Teacher User

Entry Condition: Authenticated Teacher

Exit Condition:

Flow of Events:
1. Extends use case accessDashboard.
2. The system also displays:
  - Specialized Campaign List ^1
    - Abbreviated aggregated data: progress, completion percentage, etc.

Exceptions:
1. If the user does not have any specialized campaigns, then the system does not display any.
