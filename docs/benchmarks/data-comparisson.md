---
id: data-comparisson
title: Coparisson of Free-To-Use Data Sets
sidebar_label: Data Sets
---

## LISA

**Use Cases:**<br />Semantic Mapping, Document Clustering, Cross-Language Retrieval, Statistical Methods

**Description:**<br /> The LISA collection provided by Peter Willett of Sheffield University in 1982 is being provided to support research investigations. 
There are clear stop marks and the data structure is easy to understand. The queries seem to be very specific and quite long.

**Documents:**<br />6004 labeled abstracts are stored in files `LISA0.001` - `LISA5.850`. At the beginning of every entry there is an uniquie ID followed by the title. Some entries also contain information about author, time and place, also stored in the title line. A row of 44 x `*` seperates the entries.

*Example:*
```
Document 5640
NORDINFO COURSE IN BIBLIOMETRICS, 1981-10-26-29, HANASSARI, HELSINKI,
SWEDISH-FINNISH CULTURAL CENTRE (IN SWEDISH).

DESCRIBES THE DISCIPLINE OF BIBLIOMETRICS WITH REFERENCE TO A NORDINFO COURSE
ATTENDED IN HELSINKI. DEFINES BIBLIOMETRICS AS QUANTITATIVE MEASUREMENT OF
LIBRARY TECHNIQUES. BIBLIOMETRIC METHODS CAN BE USED ON A GLOBAL SCALE, BUT
THEY CAN ALSO BE A TOOL TO CALCULATE THE BEST USE OF AN INDIVIDUAL LIBRARY'S
RESOURCES. AMONG THE EMPIRICAL LAWS DEVELOPED, BRADFORD'S LAW IS THE MOST
APPLICABLE. DESCRIBES THE USE OF THIS LAW TO OBTAIN A GRAPH WITH AN
EXPONENTIALLY INCREASING PART, A SO-CALLED BRADFORD GRAPH. THIS CAN SHOW THE
RELATIONSHIP BETWEEN AUTHORS AND NUMBER OF ARTICLES, ARTICLES AND QUOTATIONS
AND CAN HELP TO DETERMINE THE PROCESS OF OBSOLESCENCE OF LITERATURE IN A
LIBRARY. OTHER BIBLIOMETRIC LAWS ARE THOSE OF LOTKA AND ZIPF. THE METHODS ARE
USEFUL IN ACQUISITION, PLANNING OF SPACE ALLOCATION, WITHDRAWALS, LIBRARY USE,
AND OTHER AREAS OF LIBRARY ADMINISTRATION.
********************************************
```

**Queries:**<br />35 queries are stored in file `lisa.que`. The query-ID is followed by quite long sentences which are all written from a first person perspective which express an interest in certain topics. The entries are seperated by `#`.

*Example:*
```
24
I AM INTERESTED IN ALMOST ANYTHING TO DO WITH AUTOMATIC DOCUMENT
CLASSIFICATION: SEARCH STRATEGIES FOR HIERARCHICAL AND NON-HIERARCHICAL
CLUSTERS, CLUSTERING ALGORITHMS, THE CREATION OF CLUSTER REPRESENTATIVES,
RETRIEVAL EXPERIMENTS USING CLUSTERED FILES AND MEASURES OF
INTER-DOCUMENT SIMILARITY. RELATED TO THIS IS AN INTEREST IN TERM
CLASSIFICATIONS, THEIR APPLICATION IN RETRIEVAL, INTER-TERM SIMILARITIES
ETC. AUTOMATIC DOCUMENT CLASSIFICATION, CLUSTERS, CLUSTERING, TERM
CLASSIFICATIONS. #
```

**Relevance assesments:**<br />In `lisarj.num` are the relevance assesments represented with IDs. Every query-ID (first column) is followed by document-IDs that are considered as relevant. Depending on the program used to open or parse the file the relevant document-IDs could continue in the next line. Since there is no end marker it would be best to parse the lines depending on the query-ID.

*Example:*
```
           1           2        3392        3396                                
           2           2        2623        4291                                
           3           5        1407        1431        3794        3795        
        3796                                                                    
           4           7         604        3527        4644        5087        
        5112        5113        5295                                            
           5           1        3401  
```

**Other files:**<br />The `lisa.rel`file is an old version of the relevance assesments which helps to understand new version, but is not considered important to use. 

**Source:** http://ir.dcs.gla.ac.uk/resources/test_collections/lisa/ 

## NPL

**Use Cases:**<br />Term Mapping, Co-occurrences, Thesaurus, Statistical Methods, Clustering

**Description:**<br />This collection was contributed by Vaswani and Cameron at the  National  Physical  Laboratory  in  the  UK, 1970. 
The end marker structure is very consistent and for every file the same. Though there is not much contect to work with in a pragmatic search.

**Documents:**The files `doc-text` & `doc-vecs` contain 11,429 titles and/or abstracts with an unique ID in text form and as a vector representation of the terms. Every entry ends with `/`.

*Example:*
```
141
some aspects of the logical and circuit design of a digital field
computer  a new type of digital computer for the solution of field
problems is described  by making calculations at all the lattice
points of the field simultaneously computation time is greatly reduced
an experimental design of a basic unit for potential and other problems
is presented
   /
```
*Same text represented as vector but in a diffrent order and without irrelevant terms:*
```
141     3     5     7    23    27    33    34    42    54    71
  101   109   155   161   162   224   272   304   315   345
  534   582   597   626  1215 /
```

**Queries:**<br /> 93 queries are stored in `query-text` & `query-vecs` as text and as vector representation. The ID is followed by the query and the entry is marked with `/` at the end.

*Example:*
```
3
USE OF DIGITAL COMPUTERS IN THE DESIGN OF BAND PASS FILTERS HAVING GIVEN PHASE AND ATTENUATION CHARACTERISTICS
/
```

*Same query represented as vector but in a diffrent order and without irrelevant terms:*
```
  3  1  10  23  35  71  76  77  97  191  224
  309  360 /
```

**Relevance assesments:**<br />In `rlv-ass` are query IDs followed by relevant documents with `/` as an end marker.

*Example:*
```
3
  141   148   813  1610  2429  3059  3272  3398  3614  3688
 3708  4437  4710  4725  4833  5476  5662  5856  5976  6351
 6885  6974  7086  7177  7304  7571  8007  8232  8957  9289
10174 10484 10486
   /
```

**Other files:**
* `term-vocab` contains vocabular stems with representative IDs, the end marker is `/`
* `term-vecs` contains occurrences of the terms in docs. First ID is always vocab ID followed by all the doc IDs terms occurred in, the end marker is `/`
* `term-mst` contains word ID followed by context-word ID followed by co.occurrences and mutal similarity values. This is only available for words that occurre in at least 2 documents

**Source:** http://ir.dcs.gla.ac.uk/resources/test_collections/npl/

## CACM

**Use Cases:**<br />Semantic Connections, Cross-connections, Word-Embeddings

**Description:**<br />CACM is a collection of article abstracts published in ACM journal between 1958 and 1979. 
Most papers claim that it's too small to observe real impact.

**Documents:**<br />In `cacm.all` are 3,204 labled entries. Each lable is marked specifically with a `.` followed by a letter. They appear in an entry in following order:<br />
(.I) ID <br />
(.T) Title <br />
(.W) Abstract <br /> 
(.B) Publication date of the article <br />
(.A) Author list <br />
(.N) Information when entry was added <br />
(.X) List of cross-references to other documents <br />


*Example:*
```
.I 46
.T
Multiprogramming STRETCH: Feasibility Considerations
.W
The tendency towards increased parallelism in
computers is noted.  Exploitation of this parallelism 
presents a number of new problems in machine design
and in programming systems.  Minimum requirements 
for successful concurrent execution of several independent
problem programs are discussed.  These requirements 
are met in the STRETCH system by a carefully balanced
combination of built-in and programmed logic.  
Techniques are described which place the burden of the
programmed logic on system programs (supervisory 
program and compiler) rather than on problem programs.
.B
CACM November, 1959
.A
Codd, E. F.
Lowry, E. S.
McDonough, E.
Scalzi, C. A.
.N
CA591102 JB March 22, 1978  3:57 PM
.X
168	5	46
491	5	46
46	5	46
168	6	46
```

The list of cross-references show the refrences ID followed by `4, 5 or 6`and marked with the doc-ID at the end. The three numbers can define the refrences more precisely:

```
4 : "bibliographic coupling" - if document id Y appears in the bibliographic
    coupling subvector for document X with a weight of w, it means X
    and Y have w common references in their bibliographies; the weight
    of did X in the vector for X is the number of items in X's bibliography.
5 : "links" - documents X and Y are linked if X cites Y, Y cites X, or
    X == Y.
6 : "co-citations" - if document id Y appears in the co-citation subvector
    for document X with weight w, it means X and Y are cited together in
    w documents; the weight of did X in the vector for X is the number
    of documents that cite X.
```

**Queries:**<br />`query.text` contains 64 query sentences which also contain the same markers as the text.

*Example:*
```
.I 10
.W
 Parallel languages; languages for parallel computation
.N
 10. Alec Grimison, Comp Serv, Uris Hall (parallel lang)
```

**Relevance assesments:**<br />In `qrels.text` query ID is followed by doc-ID followed by 0 int and 0.0 float, every doc has it's own row. Could be used as trainable vectors.

*Example:*
```
10 0046  0 0
10 0141  0 0
10 0392  0 0
10 0950  0 0
10 1158  0 0
10 1198  0 0
10 1262  0 0
10 1380  0 0
10 1471  0 0
10 1601  0 0
```

**Other files:**
* `cite.info` - Key to citation info
* `common_words` - Stop words used by smart
* `qrels.text` - List of relevance judgements

**Source:**http://ir.dcs.gla.ac.uk/resources/test_collections/cacm/

## CISI

**Use Cases:**<br />Semantic Mapping, Document Clustering, Cross-connections, Word-Embeddings

**Description:**<br />The CISI collection is very similar to CACM collection, it uses the same notations.

**Documents:**<br />`CISI.ALL` contains 1,460 texts. For detailed explaination on the notation see the `CACM` section.

*Example:*
```
.I 6
.T
Abstracting Concepts and Methods
.A
Borko, H.
.W
     Graduate library school study of abstracting should be more than a 
how-to-do-it course.
It should include general material on the characteristcs and types of abstracts,
the historical development of abstracting publications, the abstract-publishing
industry (especially in the United States), and the need for standards in the
preparation and evaluation of the product.
These topics we call concepts.
     The text includes a methods section containing instructions for writing
various types of abstracts, and for editing and preparing abstracting publications.
These detailed instructions are supplemented by examples and exercises in the
appendix.
There is a brief discussion of indexing of abstract publications.
     Research on automation has been treated extensively in this work, for we
believe that the topic deserves greater emphasis than it has received in the
past.
Computer use is becoming increasingly important in all aspects of librarianship.
Much research effort has been expended on the preparation and evaluation of
computer-prepared abstracts and extracts.
Students, librarians, and abstractors will benefit from knowing about this
research and understanding how computer programs were researched to analyze text,
select key sentences, and prepare extracts and abstracts.
The benefits of this research are discussed.
    Abstracting is a key segment of the information industry.
Opportunities are available for both full-time professionals and part-time or
volunteer workers.
Many librarians find such activities pleasant and rewarding, for they know
they are contributing to the more effective use of stored information.
One chapter is devoted to career opportunities for abstractors.
.X
6 6 6
363 1 6
403 1 6
461 1 6
551 1 6
551 1 6
```

**Queries:**<br />112 queries are stored in `CISI.QRY`. The notation is the same as in CAMC.

*Example:*
```
.I 21
.W
The need to provide personnel for the information field.
```

**Relevance assesments:**<br />In `CISI.REL` query ID is followed by doc-ID followed by 0 int and 0.0 float, every doc has it's own row. Could be used as trainable vectors.

*Example:*
```
    21      6 0 0.000000
    21     14 0 0.000000
    21     22 0 0.000000
    21     85 0 0.000000
    21    171 0 0.000000
    21    185 0 0.000000
    21    186 0 0.000000
    21    303 0 0.000000
    21    339 0 0.000000
    21    392 0 0.000000
    21    400 0 0.000000
```

**Other files:**<br />`CISI.BLN` - List of boolean queries 

**Source:**http://ir.dcs.gla.ac.uk/resources/test_collections/cisi/

## Cranfield

**Use Cases:**<br />Cross-Connections, Semantic Mapping, Document Clustering

**Description:**<br />Uses same notation as `CACM` and `CISI`. But the relevance evaulation are more detailed and more specific to the query tasks. To Use this collection it is important to note, that the ID of the queries `.I 002` isn't the same the query-ID used in the Relevance Assesments, it seems that the query-IDs come from the order in the file. It could be helpful to update the IDs before working with it to avoid confusion.

**Documents:**<br />`cran.all` holds 1,400 documents, for detailed notation see `CACM`section. In contrast to `CACM` and `CISI` there are no cross-references to other documents listed.

*Example:*
```
.I 5
.T
one-dimensional transient heat conduction into a double-layer
slab subjected to a linear heat input for a small time
internal .
.A
wasserman,b.
.B
j. ae. scs. 24, 1957, 924.
.W
one-dimensional transient heat conduction into a double-layer
slab subjected to a linear heat input for a small time
internal .
  analytic solutions are presented for the transient heat
conduction in composite slabs exposed at one surface to a
triangular heat rate .  this type of heating rate may occur, for
example, during aerodynamic heating .
```

**Queries:**<br />225 qeries are stored in `cran.qury`. Mostly questions, some of the queries are term searches. The ID at the beginning of every query isn't the refrence ID which is used in `cranqrel`.

*Example:*
```
.I 004
.W
what problems of heat conduction in composite slabs have been solved so
far .
```

**Relevance assesments:**<br />Every row in `cranqrel` holds query ID, relevant document ID and the relevancy code (1,2,3,4 or 5). Every document has it's own row. The relevancy code is defined as follows:

1 =  References which are a complete answer to the question.<br />
2 =  References of a high degree of relevance, the lack of which
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;either would have made the research impracticable or would
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have resulted in a considerable amount of extra work.<br />
3 =  References which were useful, either as general background
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to the work or as suggesting methods of tackling certain 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aspects of the work.<br />
4 =  References of minimum interest, for example, those that have 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;been included from an historical viewpoint.<br />
5 =  References of no interest.<br />

*Example:*
```
3 5 3 
3 6 3 
3 90 3 
3 91 3 
3 119 3 
3 144 3 
3 181 3 
3 399 3 
3 485 -1
```

**Other files:** -

**Source:**http://ir.dcs.gla.ac.uk/resources/test_collections/cran/

## Time

**Use Cases:**<br />Statistical Methods, Topic Clustering

**Description:**<br /> This collection contains 423 articles from the TIME Magazine of the 1960's. With only 423 documents  it's a rather small data set. Problem with the labeling is once again, that the ID used in the relevance assesments aren't identical with the unique text numbers, that mark the start of a document. 

**Documents:**<br />`TIME.ALL` stores 423 documents, where the first one is labled as `*TEXT 017` and the last one `*TEXT 563`. Every document starts with a line that specifies text number, date and page number. After that line follow sentences of unlabled text. The example is shortend because the articles are quite long.

*Example:*
```
*TEXT 017 01/04/63 PAGE 020

THE ALLIES AFTER NASSAU IN DECEMBER 1960, THE U.S . FIRST

PROPOSED TO HELP NATO DEVELOP ITS OWN NUCLEAR STRIKE FORCE . BUT EUROPE

MADE NO ATTEMPT TO DEVISE A PLAN . LAST WEEK, AS THEY STUDIED THE

NASSAU ACCORD BETWEEN PRESIDENT KENNEDY AND PRIME MINISTER MACMILLAN,

EUROPEANS SAW EMERGING THE FIRST OUTLINES OF THE NUCLEAR NATO THAT THE

U.S . WANTS AND WILL SUPPORT . IT ALL SPRANG FROM THE ANGLO-U.S .

CRISIS OVER CANCELLATION OF THE BUG-RIDDEN SKYBOLT MISSILE, AND THE

U.S . OFFER TO SUPPLY BRITAIN AND FRANCE WITH THE PROVED POLARIS (TIME,

DEC . 28) . THE ONE ALLIED LEADER WHO UNRESERVEDLY WELCOMED THE POLARIS
...
```

**Queries:**<br />The 83 queries stored in `TIME.QUE` are marked with `*FIND`followed by thr query ID.

*Example:*
```
*FIND     46

 PRESIDENT DE GAULLE'S POLICY ON BRITISH ENTRY INTO THE

COMMON MARKET .
```

**Relevance assesments:**<br />Every row of `TIME.REL` shows query ID followed by relevant docs IDs. The doc IDs are not the same as the text numbers. The IDs are representative for the order in the `TIME.ALL` file.

*Example:*
```
46   1  20  23  32  39  47  53  54  80  93 151 157 174 202 272 291 294 348

47  23  47  48  53  54  56

48 306

49  47  56  81 103 150 183 205 291

50 157
```

**Other files:**<br />`TIME.STP` - List of stop words

**Source:**http://ir.dcs.gla.ac.uk/resources/test_collections/time/

## Medline

**Use Cases:**<br />Semantic Mapping, Topic Search, Semantic Similarity

**Description:**<br />A document collection of short medical articals with very specific queries. 

**Documents:**<br />`MED.ALL` holds 1,033 articles with a notation similar to `Cranfield` but with less information. Only the document ID (.I) and the text (.W) are marked. 

*Example:*
```
.I 1
.W
correlation between maternal and fetal plasma levels of glucose and free
fatty acids .                                                           
  correlation coefficients have been determined between the levels of   
glucose and ffa in maternal and fetal plasma collected at delivery .    
significant correlations were obtained between the maternal and fetal   
glucose levels and the maternal and fetal ffa levels . from the size of 
the correlation coefficients and the slopes of regression lines it      
appears that the fetal plasma glucose level at delivery is very strongly
dependent upon the maternal level whereas the fetal ffa level at        
delivery is only slightly dependent upon the maternal level . 
```

**Queries:**<br /> 30 pretty specific queries are stored in `MED.QRY`. The notation is (.I) for the query ID and (.W) for the query text. More than one sentence is possible and can be seperated with `.`.

*Example:*
```
.I 5
.W
 the crossing of fatty acids through the placental barrier.  normal
fatty acid levels in placenta and fetus.
```

**Relevance assesments:**<br /> In every row of `MED.REL` the query ID is followed by a `0` which seperates it from the relevant doc ID. At the end of every row is a `1`. There is a row for every query ID in combination with the relevant doc ID.

*Example:*
```
5 0 1 1
5 0 2 1
5 0 4 1
5 0 5 1
5 0 6 1
5 0 7 1
5 0 8 1
5 0 9 1
5 0 10 1
5 0 11 1
5 0 12 1
```

**Other files:**<br />(MED.REL.OLD) - older version of Relevance assesments, here the IDs are followed by `0`and `0.000000` which could be used as trainable embeddings.

**Source:**http://ir.dcs.gla.ac.uk/resources/test_collections/medl/

## ADI

**Use Cases:**<br />

**Description:**<br />An extremly small data set with not even 100 examples, doesn't seem to be good for any use except for experimenting with machine learining on small data sets.

**Documents:**<br />`ADI.ALL` contains 83 documents with the same notation as `Cranfield`.

*Example:*
```
.I 3
.T
an important need and opportunity for a. d. i. leadership
in information science education .
.A
R. L. TAYLOR
.W
current trends in information science education
appear inadequate for the important need of the nation's
practicing professional personnel for training in becoming
information specialists or more proficient users of
 information systems .  a particular educational program
 by a. d. i. is suggested to supplement others in meeting
 this presumptive need .
```

**Queries:**<br />`ID (.I)`holds 35 short queries that seem to be test questions.

*Example:*
```
.I 3
.W
What is information science?  Give definitions where possible.
```

**Relevance assesments:**<br />The relevance assesments given in `ADI.REL` are in the same format as `CISI` & `CACM`. Query ID followed by relevant doc ID followed by 0 and 0.0. Could be used to create trainable vectors.

*Example:*
```
3   3   0   0.000000   
3   43   0   0.000000   
3   45   0   0.000000   
3   60   0   0.000000   
4   29   0   0.000000   
4   63   0   0.000000   
5   3   0   0.000000   
```

**Other files:**<br />`ADI.BLN` - List of boolean queries

**Source:**http://ir.dcs.gla.ac.uk/resources/test_collections/adi/

## Reuters 21578

**Use Cases:**<br />Document Similarity, Document Clustering, Word Sense Disambiguation

**Description:**<br /> This collection was originally collected and labeled by Carnegie Group, Inc. and Reuters, Ltd. In the `README.txt` file are further informations documented. <br />
The files are in SGML format, so it's useful to get familiar with that language first. 
It's already split in Training and Test sets by the tag `LEWISSPLIT`, also topics and relations between the topics are documented which makes this collectiojn a very usefull one for pragmatic search development. But it has to be noted that only half of the documents were manually assigned to topics, so there are unlabled documents which are marked by `LEWISSPLIT="NOT-USED"`.<br />
The collection is a multi-labled one, so one document can be assigned to more than one topic.

**Documents:**<br />
The files `reut2-000.sgm` to `reut2-021.sgm` contain 21.578 documents that are in SGML format. The start of every document is marked with 
```<!DOCTYPE lewis SYSTEM "lewis.dtd">```
The entries are clearly distinctable by their notation.

*Example:*
```
<REUTERS TOPICS="BYPASS" LEWISSPLIT="TRAIN" CGISPLIT="TRAINING-SET" OLDID="2984" NEWID="14001">
<DATE> 7-APR-1987 11:02:35.07</DATE>
<TOPICS></TOPICS>
<PLACES></PLACES>
<PEOPLE></PEOPLE>
<ORGS></ORGS>
<EXCHANGES></EXCHANGES>
<COMPANIES></COMPANIES>
<UNKNOWN> 
&#5;&#5;&#5;E
&#22;&#22;&#1;f1137&#31;reute
b f BC-JOHANNESBURG-GOLD-SHA   04-07 0120</UNKNOWN>
<TEXT>&#2;
<TITLE>JOHANNESBURG GOLD SHARES CLOSE MIXED TO FIRMER</TITLE>
<DATELINE>    JOHANNESBURG, April 7 - </DATELINE><BODY>Gold share prices closed mixed to
slightly firmer in quiet and cautious trading, showing little
reaction to a retreat in the bullion price back to below 420
dlrs and a firmer financial rand, dealers said.
    Heavyweight Vaal Reefs ended eight rand higher at 398 rand
but Grootvlei eased 40 cents at 16.60 rand, while mining
financials had Gold Fields up a rand at 63 rand despite weaker
quarterly results. Other minings were firm but platinums eased.
    Industrials also closed mixed to firmer, the index once
again hitting a new high of 1757 from Friday's 1753 finish. The
overall index also hit a new high of 2188 versus 2179 on
Friday.
 REUTER
&#3;</BODY></TEXT>
</REUTERS>
```

The attributes specified after `<REUTERS` are meant to identify documents and groups of 
documents, and have the following meanings: 

```     
    1. TOPICS : The possible values are YES, NO, and BYPASS:
        a. YES indicates that (in the original data) there was at
		least one entry in the TOPICS fields.
        b. NO indicates that (in the original data) the story had no
		entries in the TOPICS field.
        c. BYPASS indicates that (in the original data) the story was
		marked with the string "bypass" (or a typographical variant on that
		string).
		Altough this shouldn't be used for Topic search because there could be topics if there is a no even so no if theres a yes

    2. LEWISSPLIT : The possible values are TRAINING, TEST, and
		NOT-USED.  TRAINING indicates it was used in the training set in the
		experiments reported in LEWIS91d (Chapters 9 and 10), LEWIS92b,
		LEWIS92e, and LEWIS94b.  TEST indicates it was used in the test set
		for those experiments, and NOT-USED means it was not used in those
		experiments.

     3. CGISPLIT : The possible values are TRAINING-SET and
		PUBLISHED-TESTSET indicating whether the document was in the training
		set or the test set for the experiments reported in HAYES89 and
		HAYES90b.

     4. OLDID : The identification number (ID) the story had in the
		Reuters-22173 collection.

     5. NEWID : The identification number (ID) the story has in the
		Reuters-21578, Distribution 1.0 collection.  These IDs are assigned to
		the stories in chronological order.
```
For more detailed describtions see the `VI. Formatting ` section of the `README.txt`.

**Queries:**<br />There are no queries, but there are several files which contain the topics, places, people, etc. as strings. See `Other files`.

**Relevance assesments:** -


**Other files:**<br />
`all-exchanges-strings.lc.txt` - Alphabetical list of exchange categories<br />
`all-orgs-strings.lc.txt` - Alphabetical list of organization categories<br />
`all-people-strings.lc.txt` - Alphabetical list of names<br />
`all-places-strings.lc.txt` - Alphabetical list of places<br />
`all-topics-strings.lc.txt` - Alphabetical list of topics<br />

*Example:*
```
acq
alum
austdlr
austral
barley
bfr
bop
can
carcass
castor-meal
castor-oil
castorseed
citruspulp
cocoa
coconut
coconut-oil
coffee
copper
copra-cake
corn
corn-oil
```
`cat-descriptions_120396.txt` - List of categories with number of items labeled with them
*Example:*
```
**Currency Codes (27)

U.S. Dollar (DLR)
Australian Dollar (AUSTDLR)
Hong Kong Dollar (HK)
Singapore Dollar (SINGDLR)
New Zealand Dollar (NZDLR)
Canadian Dollar (CAN)
Sterling (STG)
D-Mark (DMK)
Japanese Yen (YEN)
Swiss Franc (SFR)
French Franc (FFR)
Belgian Franc (BFR)
Netherlands Guilder/Florin (DFL)
Italian Lira (LIT)
Danish Krone/Crown (DKR)
Norwegian Krone/Crown (NKR)
Swedish Krona/Crown (SKR)
Mexican Peso (MEXPESO)
Brazilian Cruzado (CRUZADO)
Argentine Austral (AUSTRAL)
Saudi Arabian Riyal (SAUDRIYAL)
South African Rand (RAND)
Indonesian Rupiah (RUPIAH)
Malaysian Ringitt (RINGGIT)
Portuguese Escudo (ESCUDO)
Spanish Peseta (PESETA)
Greek Drachma (DRACHMA)

```

**Source:**http://www.daviddlewis.com/resources/testcollections/reuters21578/<br />
(if the original source isn't available on the website of Alessandro Moschitti at University of Trento are download links for OHSUMED and Reuters http://disi.unitn.eu/moschitti/corpora.htm)

## OHSUMED

**Use Cases:**<br /> SVM, Clustering, Semantic Search

**Description:**<br /> This collection originally created by William Hersh as a new large medical test collection for experiments on the SMART retrieval system, was splited into a Training and a Test set later. <br />
The splited documents contain 20.000 abtracts, the unsplited 50.216. Both collections are sorted into 23 medical categories. Since the offical source doesn't seem to be online right now, we will refer to the download files by Alessandro Moschitti.

**Documents:**<br />`Cardiocascular diseases abstract` contains 20.000 documents splitted into Training and Test set directories. Inside those directories there are 23 folders which represent the 23 categories the abstracts are assigned to. Every document is written in a file without special notation.

*Example:*
```
Haemophilus influenzae meningitis with prolonged hospital course.
 A retrospective evaluation of Haemophilus influenzae type b meningitis observed over a 2-year period documented 86 cases.
 Eight of these patients demonstrated an unusual clinical course characterized by persistent fever (duration: greater than 10 days), cerebrospinal fluid pleocytosis, profound meningeal enhancement on computed tomography, significant morbidity, and a prolonged hospital course.
 The mean age of these 8 patients was 6 months, in contrast to a mean age of 14 months for the entire group.
 Two patients had clinical evidence of relapse.
 Four of the 8 patients tested for latex particle agglutination in the cerebrospinal fluid remained positive after 10 days.
 All patients received antimicrobial therapy until they were afebrile for a minimum of 5 days.
 Subsequent neurologic examination revealed a persistent seizure disorder in 5 patients (62.5%), moderate-to-profound hearing loss in 2 (25%), mild ataxia in 1 (12.5%), and developmental delay with hydrocephalus which required shunting in 1 (12.5%).
 One patient had no sequelae.
```

The download link `All Cardiovascular diseases abstracts` contain 50.216 abstracts which are just sorted by the 23 category folders.

**Queries:** -


**Relevance assesments:** -

**Other files:**`Category Description` - Defines the 23 categries

**Source:**ftp://medir.ohsu.edu/pub/ohsumed <br />
(if the original source isn't available on the website of Alessandro Moschitti at University of Trento are download links for OHSUMED and Reuters http://disi.unitn.eu/moschitti/corpora.htm)

## TREC

**Use Cases:**<br />

**Description:**<br />TREC (the TExt REtrieval Conference) isn't just one collection, it's a conference which is held regullary since 1992. The TREC workshop series - among other goals - tries to encourage research in IR based on large test collections and increase the communication aroung the IR research and development topic.
<br /><br />
It has produced many test collections, which all contain a set of documents, a set of topics (questions) and a set of relevance judgments (answers). The collections can be downloaded from the TREC website but are usually copyrighted and must be licensed. The process to licence a collection can be found on the data page entry for the collection of interest (https://trec.nist.gov/data.html).<br />
The collections cover various interests like 'Chemical IR','Converstional Assistance','Legal','Medical','News','Spoken Document Retrieval', etc.
<br /><br />
What's  very interesting about this collection is, that it is constantly growing and has high standards to have a homogenous notation. This can be very helpful for developing and testing NLP processing algorithms.
They also provide tools to process the data.<br />
Publications about TREC are published by NIST (National Insitute of Standards an Technology) and accessable here: http://trec.nist.gov/pubs.html<br />
<br />
Since there are many diffrent data sets, there are no examples given for this collection.
 
**Documents:** -

**Queries:** -

**Relevance assesments:** -

**Other files:** -

**Source:**https://trec.nist.gov/

## Europarl Parallel Corpus

**Use Cases:**<br />Word Sense Disambiguation, Anaphora Resolution, Information Extraction

**Description:**<br /> Starting in 2001 the corpus collected texts with up to 60 Million words per language. From the proceedings of the European Parlaiment were texts extracted for this 21 European languages: <br />
Romanic (French, Italian, Spanish, Portuguese, Romanian), Germanic (English, Dutch, German, Danish, Swedish), Slavik (Bulgarian, Czech, Polish, Slovak, Slovene), Finni-Ugric (Finnish, Hungarian, Estonian), Baltic (Latvian, Lithuanian), and Greek.

**Documents:**<br />Every file has the structure, there are sections seperated with the tag `<CHAPTER ID=?>` which are followed by the title of the chapter. The `<SPEAKER ID =??>` is a unique ID which marks the spoken part. 

*Example from the English Corpus:*
```
<CHAPTER ID=6>
Social and economic situation and development of the regions of the Union
<SPEAKER ID=80 NAME="President">
The next item is the debate on the report (A5-0107/1999) by Mr Berend, on behalf of the Committee on Regional Policy, Transport and Tourism, on the sixth periodic report on the social and economic situation and development of the regions of the European Union [SEC(99)0066 - C5-0120/99 - 1999/2123(COS)].
```

**Queries:** -

**Relevance assesments:** -

**Other files:** -

**Source:**http://www.statmt.org/europarl/