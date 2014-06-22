**What is it?**
______
Reddit Votify is a free extension that works to bring back upvote and downvote counts. The more people that use Votify, the more upvote and downvote counts we can track as a community - All it takes is 3 clicks to install!

* [Chrome DOWNLOAD HERE](https://chrome.google.com/webstore/detail/reddit-votify/bbpkagenmpdclgfmaapobkjoglngfdca?hl=en&gl=US)
* Firefox (working on it now)
* Opera (submitted to store, waiting approval)


Once you install Votify your votes will be recorded and visible to other Votify users. So make your votes count and install it! - You'll probably only see (0|0) for now until more people start using it! Let others know!

**How does it work?**
____
Votify hooks into the upvote and downvote buttons on every page and records your votes in addition to sending them to Reddit. When others view that submission or comment, we fetch upvotes and downvotes from other users and display them.

**Woah! What else does it do?**
____
Since we effectively bypass reddit's vote counting system, Votify offers the following additional optional features:

* NO vote fuzzing
* NO "score hidden"
 
**What will it do?**
____
Here are some features that are in the pipeline:

* Combining '% like it' info and tracked upvotes/downvotes to get very accurate estimates
* Live updating of upvotes and downvotes (no page reloads - watch live as comments and submissions are voted on)
* Hopefully integrating with RES - if you're a RES developer who's reading this please pm me :) I'd love to talk about integrating Votify's codebase

**Other Stuff**
____
* Privacy - with something like this privacy is a huge concern. Therefore the server's source code will soon be released as soon as I clean up some of the private keys.
* Network Traffic - Votify batches requests and does NOT make a request for every single item. It sends batches of things to the server in an attempt to reduce network traffic. It also lazy loads upvotes and downvotes counts and caches them locally whenever possible.
* Imperfect Data - as it is right now, Votify obviously will not represent Reddit's overall opinion. This is why a feature to combine '% like it' info and tracked upvotes/downvotes is in the pipeline to get very accurate estimates.
* Reliability - if the Votify server goes down then Votify wont do anything or break anything - it will silently fail. Votify's server runs on Heroku and is written in Node.js so it's completely scalable and should be able to handle tons of traffic.
* Going against the admins - ok, I agree that the Reddit admin's probably wont like this but Reddit is at it highest level an online community whose thoughts and suggestions should be taken into consideration

Hope you guys like it :)
