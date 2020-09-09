---
id: basic-definitions
title: Basic Terms
sidebar_label: Basic Definitions
---

With this Guide we want to provide you some quick definitions on basic terms used in NLP. If there are terms you think should be explained as well please [let us know](../about/team.md).

# Token vs. Type

When looking at natural language you can't always describe a word as 'word' since the definition of a word isn't very clear throughout linguistics. We need terms that are better defined.
In processing language, we can distinct between **Types** and **Token**.
When we talk about **Types** we mean the words in a sentence that are distinct. **Token** on the other hand are words that are separated through punctation and spaces.
It's way clearer when we look at an example:

`A rose is a rose`

This sentence has 3 Types but 5 Token. Since `a` and `rose` is doubled they only count as one Type each. 
If we change the last `rose` the Types count changes:

`A rose is a roses`

This would have 4 **Types** and still 5 **Token**.

# Tokenization

Generally, by **Token** we mean a sequence of characters or bits that belong together. Within the natural language processing we want them to represent words, as we already defined earlier. Tokenization is the process of splitting a long sequence of symbols like a sentence into **Token**. In many languages, words are separated by a whitespace and punctation. Therefore, many tokenizer split sentences there. <br></br>
For example, the sentence `A rose is a rose.` can be split into `A` `rose` `is` `a` `rose` `.`.
Depending on the tokenizer `.` could be stripped away as well.

But there are some cases that make it difficult to tokenize like this. Some symbol sequences wouldn't make sense when they get split up.<br></br>
For example, proper names like `U.K.` or `San Francisco`. <br></br>
That's why a tokenizer often needs information regarding the language to split the sentence in a way that makes sense. For other languages such as Japanese or Chinese, you can't split at a whitespace at all.

# Lemmatization

**Lemma** is referring to the root of a word. With lemmatization we try to connect words to their basic form, their **Lemma**, by removing all morphological rules. With this we reduce the **Token** count of a text in order to get more **Types**. A lemmatizer would map all the words to their common lemma.<br></br>
For example, `mice` would connect to `mouse` and `froze` & `frozen` to `freeze`. 
There are some languages like Arabic which can't be processed properly without lemmatization.

But since a lemmatizer needs a lot of information on the morphology of a language, this could slow down the search process a lot and lead to an enormous amount of data.
However, if a lemmatization is well adapted to the data, it can significantly improve the search results.

# Stemming

Stemming is a simpler version of lemmatization. Depending on the method used it mainly strips off suffixes at the end of a word to reduce it to its **Stem**.
In English most of the time the **Stem** is the part of the word that doesn't change when you apply grammatical rules. Stemming is one of the most commonly used methods when dealing with search engines, since it's easier than lemmatization.

The goal of a stemmer is to remove all morphological features from a word and create truncated, ambiguous **Stems**.<br></br>
For example, `learning` changes to `learn` after stemming. <br></br>
In most cases, the search query is only improved by a stemmer if the query is not too long. Otherwise there is a risk that too many irrelevant results will be returned.
But if there are short queries stemming can be very helpful, since small grammatical deviations can be included in the search. However, you have to be careful with too much stemming. 
If the stemmer cuts off too much information, the word could become too short and loose semantic meaning. This is called overstemming.
Always keep in mind the quality of a stemmer varies greatly from language to language because some languages have more morphological derivations than others.

# Stop words

In most languages the most common words are also non-semantic ones. Like `is`, `a` or `the`. In order to only get relevant search queries, we try to remove those words. Those words are called **stop words** since they don't retrieve any useful information but are being processed. Ignoring stop words is a way to make the search more efficient and to get more relevant data. 
To ignore or remove them we could simply set the most 10-100 top frequent words as **stop words** or use some of the already existing **stop word** lists depending on the language we want to search on.

