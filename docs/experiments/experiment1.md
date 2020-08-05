---

id: experiment1
title: Standard Search vs. Stemming
sidebar_label: Stemming

---

For our first experiment we connected a Google Colab Notebook to our Elasticsearch instance and started comparing different build-in search metrics of Elasticsearch.

Therefore, we parsed [these 5 free available corpora](http://ir.dcs.gla.ac.uk/resources/test_collections/) hosted by the University of Glasgow and feed them to the Elasticsearch [Ranking API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html). With [our parsing guide](https://pragmalingu.de/docs/guides/how-to-parse) you can try this yourself or you can look at our [Data Set Notebooks.]().

We tried comparing the following operators:
* [Match query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html) 
* [Simple query string](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html)
* [Standard english stemmer provided by Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-stemmer-tokenfilter.html)


## Match operator

The [match query operator](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html) is the standard search operator in Elasticsearch. A full-text search in the given fields of the documents comes with standard tokenization and an analyzer.

The following is an example of a request that searches with match query. It operates on the query string in the 'text' field of the medline corpus:

```
"request": {
                "query": {
                    "match": {
                        "text": "palliation (temporary improvement) of cancer patients by using drugs, x-ray, surgery."
                    }
                }
            }
        },
```

## Simple query string operator

The [simple query string](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html) operator uses a parser with a limited fault-tolerant syntax to search for the given query string. It splits and analyzes the query terms separately for the search before returning the relevant documents. It ignores invalid parts of the query string. 

Here is an example request with the simple query string operator searching for the query in the 'text' and 'title' fields of the medline corpus documents:

```
"request": {
                "query": {
                    "simple_query_string": {
                        "fields": [
                            "title",
                            "text"
                        ],
                        "query": "palliation (temporary improvement) of cancer patients by using drugs, x-ray, surgery."
                    }
                }
            }
        },
```

## Stemming

Elasticsearch provides two build-in stemming methods. First of, the dictionary stemming replaces unstemmed words with stemmed variants from a provided dictionary. The Elasticsearch build-in conterpart is called [hunspell token filter](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-hunspell-tokenfilter.html). Second of, is the algorithmic stemming. It applies a series of rules to each word to reduce them, called [stemmer token filter](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-stemmer-tokenfilter.html) in Elasticsearch. 
([Click here to read more about stemming in general](https://pragmalingu.de/docs/guides/basic-definitions#stemming)) 

The *stemmer token filter* supports different languages and, since our corpora were all in english, we utilized the english stemmer for our experiment.
We implemented the stemming analyzer:

```
stemming_analyser = {
    "filter" : {
        "eng_stemmer" : {
        "type" : "stemmer",
        "name" : "english"
        }
    },
    "analyzer" : {
        "default" : {
            "tokenizer" : "standard",
            "filter" : ["lowercase", "eng_stemmer"]
        }
    }
}
```

And incorporated it into the settings for the body of the documents of each corpus:

```
settings = {
    "settings": {
        "number_of_shards": 1,
        "number_of_replicas": 0,
        "analysis": stemming_analyser
    }
}
```

## Results

After running these three methods on our corpora we got the following results:

| corpus                    |   cranfield |   CISI |   adi |   medline |   CACM |
|---------------------------|-------------|--------|-------|-----------|--------|
| match query               |       0.053 |  0.154 | 0.072 |     0.031 |  0.023 |
| simple query string query |       0.053 |  0.154 | 0.068 |     0.031 |  0.026 |
| stemming                  |       0.056 |  0.174 | 0.074 |     0.041 |  0.028 |

Surprisingly, the contrast in using a stemmer isn't that significant but it surely does make more difference than switching from match query to simple query.
