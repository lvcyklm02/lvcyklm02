---
title: Project Phase 5
layout: doc
---

# Project Phase 5 - Beta Release

## Design Revisions
- Changed projects (location resources) and announcements (radius-based resources) from having users create them to be automatically populated from data sources
    - We decided to make this decision after receiving feedback from the professors and the teaching team. This decreases the grassroots intentions that we discussed in P1 but reduces duplicate/incorrect data (misinformation) and streamlines the user experience.
- Decided not to implement Role concept
    - Since projects and announcements are no longer created by users, the role concept was not needed to prevent misinformation.
- Divided the main feed into two sections: posts and announcements
    - To reduce confusion and make the user experience less visually overwhelming, we decided to split the feed into post and announcement sections where the user can click on different tabs to view the content.

## Plan for user Tests

### Participants
-   Varun Singh
-   Bo Purtell
-   Josh Flores

We have scheduled some interviews with each of them on Saturday (Varun), Sunday (Bo), and Monday (Josh)

### Prepopulated data
We have went ahead and added in some some prepopulated data. You should be able to see them once you log in.

### Task Lists
| Title      | Concise Instruction | Why this task? | 
| ----------- | ----------- | ----------- | 
| Account Creation      | Create a new user account (including setting your home address and desired radius) | To utilize this app, the user must log in to access the capabilities within the app. We want to see if the log-in/sign-up functionalities are user-friendly and easy to use, and let them roll into the app to proceed with the next steps. |
| Project Viewing   | View the projects near your home address on the map| Once the user logs in, the first thing they will see is this map that is centered at a location. They can see the projects closest to them. It is worth testing the map functionality as it determines the feasibility and accessibility of the action. The user gets to understand that projects appear as pins that can open up to location panels and that they can only see projects near them. Furthermore, these panels are linked to another project page, which they can then explore.|
| Announcement Viewing | First add a friend. Once the friend has accepted the friend request, please delete the friend. | This is another important functionality within the app that we want to test. The announcements are placed as a tab inside the feed. This instruction guides the user into moving into the feed bar, and the announcements tab within that The feed tab contains announcements and also posts, thus naming it feed. However, we want to test if this naming convention is confusing or hard for the user to recognize that the announcements are in the feed. 
| Post Creation | Create a post.  | The user here needs to learn that posts must be associated with a certain project. In this case, they learn to navigate to a project, and learn that a project consists of multiple posts.|
| Post an opinion | Post two opinions: one responding to a project update, and one responding to an announcement | We want the user to recognize that they can post opinions regarding both projects and announcements. They could access the announcements/posts within the feed and click on them to add opinions. However, they could also go to the map to click on a project to a post to add an opinion to a post under a project. The intention behind this task is again to test accessibility. We want to answer questions such as whether or not it is easy to use, whether we should change the positioning and flow, and other questions regarding usability. It is also important to let them know that an opinion is both a comment, and an optional reaction. |
| Polls and Events | Create a poll for a project or announcement, then vote in a different poll. Then, create an event for a project or announcement, and register for a different event. | One of the best ways to increase engagement within a community is to allow for the creation and participation of polls and events between users. This ensures that the main project page is fluid and all the parts of it are functional, and that users understand that polls and events belong to all posts and announcements. This also lets them know what features are available to them, such as registering for a certain event, or creating a poll regarding a specific post. |
| Delete an opinion | View all the opinions that you have posted, then delete one of them | Deleting an opinion lets the user know that they can only delete opinions that they wrote, and as well familiarizes them with the bar graph on the summary of the opinion due to its interactive feature. |
| Favorites | Save/favorite two projects, then view all the projects that you have favorited, and then unfavorite one of them.  | We aim to evaluate whether the location of the favorite button in project popups on the map is intuitive to users, or whether they will try to look for it within the project page as well. Additionally, we hope to find out whether users navigate to their profile page in order to view their favorited projects.
| Updating user profile | Update your radius and location | This action allows them to understand that users have the ability to change the range of which projects they can see, and also helps them navigate to the settings of the user.

## Link to the website
https://knowsy-frontend-brian-zhus-projects.vercel.app/