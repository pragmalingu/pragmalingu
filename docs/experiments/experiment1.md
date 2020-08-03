---

id: experiment1
title: Influence of Stemming to the Search Results
sidebar_label: Stemming

---

For our first experiments on how to influence the search metrics we compared the standard search without any big preprocessing to the internal stemmers of elasticsearch. ([Read about stemming](https://pragmalingu.de/docs/guides/basic-definitions#stemming)) 
Therefore we parsed [this](http://ir.dcs.gla.ac.uk/resources/test_collections/) 8 free available corpora hosted by the University of Glasgow and feed them to the elasticsearch Ranking API.

This are the results without any further processing than the parsing, which can be retraced in [our parsing guide]:

