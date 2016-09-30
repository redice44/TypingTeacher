# Import Campaign Sequence

1. Registered User --Clicks--> Import Campaign Component
2. Import Campaign Component --Creates--> Import Campaign Controller
3. Import Campaign Controller --Creates--> Import Campaign Container
4. Import Campaign Container --submits user's input--> Import Campaign Controller
5. Import Campaign Controller --validates it exists--> Campaign Entity
6. Campaign Entity Returns <--y/n-- Import Campaign Controller
  1. If not valid, Import Campaign Controller --Creates--> Error notification and dashboard controller
7. Import Campaign Controller --Adds Campaign--> Account Entity
8. Import Campaign Controller --Creates--> Dashboard Controller
