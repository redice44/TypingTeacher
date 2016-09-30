# Show Dashboard Sequence

1. Registered User --Clicks--> Dashboard Component
2. Dashboard Component --Creates--> Dashboard Controller*
3. Dashboard Controller --Gets User Information--> Account Entity
4. Account Entity Returns <--user information-- Dashboard Controller
5. Dashboard Controller --Calculate Statistics--> Dashboard Controller
6. Dashboard Controller --Creates--> General User Statistics Container
7. Dashboard Controller --Generate Campaign List--> Dashboard Controller
8. Dashboard Controller --Get short campaign info--> Campaign Entity
9. Dashboard Controller --Creates--> Campaign List Container and Campaign Preview Containers
10. Dashboard Controller --Creates--> Quick Play Container
11. Dashboard Controller --Creates--> Create Campaign Component
12. Dashboard Controller --Creates--> Import Campaign Component
13. Dashboard Controller --Creates--> Dashboard Container

Note: This controller may be created through other methods, eg: signing in.
