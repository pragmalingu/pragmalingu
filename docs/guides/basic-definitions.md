---
id: basic-definitions
title: Basic Terms
sidebar_label: Definitions
---

With this Guide we want to provide you some quick definitions on basic terms used in NLP. If there are terms you think should be explained as well please [let us know](../about/team.md).

# Token vs. Type

When looking at natural language you can't always describe a word as 'word' since the definition of a word isn't very clear throughout linguistics. So we need terms that are better defined.
In processing language we can distinct between **Types** and **Token**.
When we talk about **Types** we mean the words in a sentence that are distinct. **Token** on the other hand are words that are seperated through punctation and spaces.
It's way clearer when we look at an example:

`A rose is a rose`

This sentence has 3 Types but 5 Token. Since `a` and `rose` is doubled they only count as one Type each. 
If we change the last `rose` the Types count changes:

`A rose is a roses`

This would have 4 Types and still 5 Token.

# Tokenization



# Stemming

Stemming is one of the most commonly used methods when dealing with search engines. Different methods are applied to the words, depending on the algorithm, to break them down to their stem. The stem is the part of the word that doesn't chang when you apply grammatical rules. The goal is to remove all morphological features from a word so that there are more Types and less Token. Most english stemmers remove mostly the affixes of a word since that's where the biggest morphological differences manifest in English and create truncated, ambiguous stems.
With that a word like "learning" changes to "learn" after stemming. 
In most cases, the search query is only improved by a stemmer if the query is not too long. Otherwise there is a risk that too many irrelevant results will be returned.
But if there are short queries stemming can be very helpful, since small grammatical deviations can be included in the search. However, you have to be careful with too much stemming. 
If the stemmer cuts off too much information, the word could become too short and loose semantic meaning. This is called overstemming.
Always keep in mind the quality of a stemmer varies greatly from language to language because some languages have more morphological derivations than others.

# Lemmatization

Lemmatization is similar to stemming, as it also tries by preprocessing the words to reduce the Token in the text and to get more Types. However, in contrast to stemming, lemmatization tries to make a connection from each word to their basic form. 
For example "lovingly" would connect to "love".
With lemmatization you always need a dictionary implemented, so that the alogrithm can look up the basic form of a word. 
The biggest problem here is the dictionary.
It has to be extremely large and of course contain all of the words you're going to search. This slows down the search process and leads to enormous amounts of data.
However if a lemmatization is well adapted to the data, it can significantly improve the search results.

# Stop words

