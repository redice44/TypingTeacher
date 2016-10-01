# Export Campaign Sequence

1.  Registered User --Clicks--> Export Campaign Component
2.  Export Campaign Component --Creates--> Export Campaign Controller
3.  Export Campaign Controller --Creates--> Campaign List Container
4.  Campaign List Container --Sends user's selection--> Export Campaign Controller
5.  Export Campaign Controller --Gets CampaignId --> Campaign Entity
6.  Export Campaign Controller --Exports Campaign--> Campaign Entity
7.  Export Campaign Controller --Display CampaignID-->  Campaign List Container
8.  Export Campaign Controller --Creates --> Dashboard Controller
9.  Dashboard Controller  --Creates DashboardContainer--> Dashboard Container
