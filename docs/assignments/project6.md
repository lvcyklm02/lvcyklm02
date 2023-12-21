---
title: Project Phase 6
layout: doc
---

# Project Phase 6: User Testing & Final Release

## User Testing Summaries

### Fred:

Overall, Fred was able to use Knowsy without much confusion or hesitation. He enjoyed the different functionality provided by updates, actionables, and polls; in addition, he liked that the user experience was “democratic” since users could “take initiative” and create their own updates, events, and polls. He also liked Knowsy’s overall purpose and stated that he thought the problem being solved was “impactful and useful.” He expressed that he thought Knowsy could help people be more aware and inspired to take action in their communities. Additionally, as Fred completed the tasks, 

There were a couple of main points of confusion as Fred used the app. First, upon opening the app, Fred declined location permissions reflexively, causing his home location to be set to the default location instead of his actual location. In the debrief, he later remarked that it would be nice to be able to set his location by typing in his actual address instead of having to allow access to his computer’s location. Additionally, he pointed out that the order of actionables and polls refreshed, suddenly moving the user from their place after they interact with items in the list (registering for an event or voting in a poll, for instance). He suggested addressing these aspects in order to create a more seamless user experience.

As Fred was using the app, I noticed that he seemed confused about the differences in purpose between the map and feed pages. It appeared that he didn’t really understand what kinds of content were on each page or what actions he could take until spending a significant amount of time clicking around. Additionally, I think some of the names of concepts like “actionables” and “project updates” were hard for him to grasp at first, and I had to clarify what these meant during the debrief.

In addition, Fred suggested adding more information or text throughout the app that could help users learn the concepts and unique functionality more quickly. As he was using the app, I noticed that he seemed unsure of what to do immediately after arriving on a new page, and I noted that it might be helpful to include brief instructions on the map page or provide quick links to actions that the user could take (like viewing projects in your area, viewing announcements related to new legislation, or seeing what your neighbors are talking about). In this vein, Fred also suggested adding more info project card pop-ups on the map by including information like the number of users who had saved it or posted updates or opinions. He explained that this way, he wouldn’t need to click into each card and visit a separate page in order to get an overview of how users were interacting with the project. 

### William:

App design
William tested Knowsy on the Safari browser. In the login phase, he encountered issues with his Safari settings lacking location permissions. He also pondered the potential challenges associated with using a VPN. During the profile update, William expressed enthusiasm about being able to adjust the radius for project visibility on the map. In exploring the project feature, William was confused about who was creating the projects, and expressed a desire to add new locations. He commented that it would be nice to have which sources were used to add the projects from the backend even if they were from the City of Boston/City of Cambridge. 

Bugs
In terms of bugs, deleting a post led to a navigational issue, redirecting William to an empty page. Moving on to the polls feature on projects and legislations, he highlighted several concerns: including repetitive options, a pre-vote display issue showing NaN%, being allowed to create polls with a single option, and most importantly, not being able to delete a poll once created. William also tested the favorites section, and commented that he wished to unfavorite directly from the profile but could not, and he noted a delay when double-clicking the favorite button. In the opinion section, he raised concerns about voting manipulation and spamming, emphasizing that users could add opinions multiple times, and easily spam click the opinions button. The event feature allowed for creating events far into the future but lacked the ability to delete or cancel an event once added.

Conclusion
In the debrief, William suggested the necessity of a tutorial or help page to address initial confusion. Furthermore, he voiced uncertainty about the app's primary focus and recommended clearer communication regarding the purpose of each component. Despite these concerns, he commended the website for its responsiveness and ease of navigation. Additionally, William proposed incorporating features like seeing post traction in the feed and map view (i.e. how many opinions there are on the project/post and how stratified they are), and adding photo upload functionality.

### Shantelle: 

As an architecture major, Shantelle expressed a fair amount of interest in our project and was eager to test it out, saying it was a valuable app to have for a community in improving engagement. Interestingly enough, Shantelle mentioned that she prefers having the create an account as the default option in the login page as it is more helpful for new users, but she recognizes that for more frequent users, the latter option is more convenient. Another thing she identified right away was the fact that the updating of a user’s desired radius did not have any units, which left her unclear as to what number she wanted to put in that input box. 

One of the bigger issues that Shantelle ran into was when she was trying to create a post. Her instinct told her that she was looking for something along the lines of a plus sign, which she could not find either on the map or the feed and spent a lot of time navigating between both to create a project update. Some things she mentioned was that while she understands that the feed carries both project updates and announcements, the project updates tab of the feed should have a create post function to create more ease and flow for the user. However, she knows that project updates must be linked to a project, which can be implemented through a dropdown menu of such. Another thing that could be done to lessen confusion is to standardize names throughout the app. 

Beyond that, aspects of the app that Shantelle enjoyed were the events, polls, and opinions featured within a project, announcement, or project update page. While she was slightly confused between the flow of the latter three, she thoroughly enjoyed the former three as she believed it kept the app engaging and impactful, though the poll title might want to be rephrased as poll question for ease in understanding when creating a poll, and a dropdown menu might want to be implemented for event types.

She also liked the concept of saved projects, but she thinks that it would be more intuitive if there was a function to unsave posts on that tab, as well as a way to differentiate between saved and unsaved projects on the map. Lastly, she really liked the idea of a profile, where she could see all the things in the app that she had interacted with. 


## Opportunities for improvement

**Moderate physical/linguistic flaw:** the items (updates, opinions) that are created by users vs. available via backend input (projects, announcements) have no visual distinction or clear input source (e.g. “source: City of Cambridge” or “source: Boston Globe”)
- The flaw is the lack of distinction between these items (for instance, different layout or styling of information, or different types of information included). This is currently happening because all three of projects, legislation, and post are using the same CSS object, and only posts have an author byline visible only when one clicks on post details. To resolve this, we can add the source of projects and legislation as a byline in the Overview page.

**Moderate linguistic flaw:** not enough information scent (hints for navigation)
- This flaw is the lack of information helping the user navigate through the app and decide what content to view or interact with. Currently happening because: there are no back buttons, so all information must be traced from either the map view or feed again. There is a bit of circular exploring that can happen between a project and its posts. In addition, the project pop-ups in the map page as well as the project description in posts pages could contain more information about user posts and activity. Future solutions could include the following: in the project pop-ups, the number of users who have saved the project or posted updates about it could be shown to indicate levels of user engagement. Additionally, in the post page, instead of having a Project card on the right that displays project details, it should show a list of the project’s posts and the post the user is on should be highlighted.

**Minor conceptual:** the app doesn’t allow users to input location manually and thus asks browsers to permit location tracking which some users do not allow via settings or just have a habit of clicking no.
- This flaw is confusion about whether a user’s location is meant to be their exact location at the moment they are using the app, or whether it should be their home address or another address they specify. This is currently happening because we attempted to experiment with different ways for users to add their location and chose the one that we thought would streamline the user experience. In the future, we can solve this by enabling users to choose either option by including an option in the settings page to type in their address and set their location by search. This could be done using the Geocoding Service (which is a paid service) through the same Google Maps Javascript API.

**Minor linguistic flaw:** not enough feedback to tell users what happens after they register for an actionable
- This flaw is the lack of feedback or instructions presented to users after they click “register” for an actionable; currently, only the color and message of the button change to reflect that the user can now unregister for the actionable. There is no success message that indicates that the actionable has now been added to the user’s list of actionables. Possible solutions could include presenting a more informative success message with suggestions for actions that the user can take next or providing a link to the list of events they have registered for in their profile page.

## Design revisions

- Added more user directions and information to map page
    - We aimed to improve Knowsy’s UX by helping users more easily learn how to navigate the map page and complete basic tasks. We especially saw the importance of this after completing our user tests.
- Fixed inconsistencies in naming for favorites vs. saved, updates vs. posts, and actionables vs. events	
    - To resolve linguistic confusion, we fixed the inconsistency between “posts” in urls versus “project updates” in page content, as well as “actionables” in the headers in pages versus “events” in the text for buttons and on the user profile page.
- Changed projects (location resources) and announcements (radius-based resources) from having users create them to be automatically populated from data sources
    - We decided to make this decision after receiving feedback from the professors and the teaching team. This decreases the grassroots intentions that we discussed in P1 but reduces duplicate/incorrect data (misinformation) and streamlines the user experience.
- Decided not to implement Role concept
    - Since projects and announcements are no longer created by users, the role concept was not needed to prevent misinformation.
- Divided the main feed into two sections: posts and announcements
    - To reduce confusion and make the user experience less visually overwhelming, we decided to split the feed into post and announcement sections where the user can click on different tabs to view the content.

## Link to the website and code

https://knowsy-frontend-brian-zhus-projects.vercel.app/

https://github.com/oasisks/Knowsy-Frontend 

## Demo video

https://youtu.be/cyWyL4BzYt0 