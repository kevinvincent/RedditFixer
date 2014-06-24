Reddit Votify
========

* [DOWNLOAD for chrome HERE](https://chrome.google.com/webstore/detail/reddit-votify/bbpkagenmpdclgfmaapobkjoglngfdca)
**MAKE SURE YOU UPDATE IF YOU ALREADY INSTALLED IT**
* Opera is awaiting approval
* Firefox will be done in the next couple of days

What is it?
----------
Reddit Votify is a chrome/opera/soon-to-be firefox extension that brings back highly accurate estimated upvotes and downvotes to the front page of every subreddit (same algorithm that RES will use in it's next release - though those will only display on a submission's page itself NOT on the main page)

This is how it works
----------

* Whenever a user visits a post's page we record the '% like this' and total score

 > No personally identifying information will be sent, you can look at the developer console of chrome yourself to confirm. All we will send is the thing id, percentage, and score
* We essentially crowdsource the '% like this' and total score for all submissions and store them elsewhere after computing the upvotes and downvotes using an algorithm (thanks to /u/bxtk for the code samples)
* We then display these on a subreddit's page when other's view that submission

Just to reiterate **the comments below refer to the original plugin**; the update (which will be released later today) will stop tracking votes and will just perform the features stated above. 

>*The new plugin will NOT need a critical mass of users to begin working. Upon updating, you will see upvote and downvote counts for all submissions on a subreddit's front page that are calculated with the formula.*

This is pretty much like the Greasemonkey script posted here yesterday except we send that data elsewhere so that a user doesn't need to load every single page in order to get upvote and downvote counts - we can send just one request to our server to get crowdsourced data. This mitigates ALL privacy concerns and reduces network load, browser performance hits, etc.

*For all those who voiced concerns, we understand them and have taken them into serious consideration in an attempt to help the community not hurt it :)*

---
We would still love to include this into RES if people agree. It's not completely necessary since it doesn't need a ton of users to work but it would be a nice optional feature in our opinion.
---

/u/honestbleeps in his edit to his sticky post on /r/Enhancement says:

>"With regards to "why not use the '% like it' info to calculate the real votes" question we keep getting -- that info is only available on the comments page. We can't pull that data to post listings pages without loads of API requests - it's not technically feasible/reasonable, sorry. We could show it on the comments page, but we can't show it on your front page or on any other post listing pages."

Votify basically moves that from the comment page to the front page - solving that "technical challenge" by tracking %'s and scores elsewhere and offloading the hard work to a server so that only one api request is needed.
