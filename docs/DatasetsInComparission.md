Datasets in comparission:

LISA:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/lisa/


Documents (lisaX.XXX) : ID "Document XXX", Titel mit Punkt abgegrenzt, manchmal zwei Sätze auch Autor und Ort, alles in Capslock, getrennt durch * Reihe, relativ kurze Erläuterungen zu den Überschriften als Text

Queries (lisa.que): Nummer gefolgt von relativ langen Suchanfragen, beendet durch # und aus der Ich-Perspektive

Relevance assesments (lisarj.num) : Suchanfragen ID mit Anzahl an relevanten Dokumenten und Doc-IDs abgeschlossen durch -1

Others:lisa.rel old version of relevance assesments which helps to understand new version 

Rating: Data is good to work with, good clear stop marks, easy to understand, maybe too specific, very long queries and texts are a bit short, interesting queries for pragmatic search because the queries aren't questions but statements

Use Cases: 




NPL:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/npl/

Documents (doc-text & doc-vecs) : ID gefolgt von alles klein ohne Satzzeichen, Abstracts/Titles, getrennt durch Slash, Darstellung als Textdatei und als Wort-Vectoren, end of entry /

Queries (query-text & query-vecs): Capslock, ID, Short title like query, end marker /

Relevance assesments (rlv-ass): query ID followed by relevant documents, end marker /

Others: 
(term-vocab) vocabular with representative IDs, stems, end of entry /
(term-vecs) occurence of terms in docs, first number vocab ID, second number doc ID, end of entry /
(term-mst) evtl mutal similarity values, word ID - context-word ID - cooccurences - context similarity
wurde nur für Wörter gemacht, die in mindestens 2 Dokumenten vorkommen, daher nur bis 4322, alle Wörter danach haben nur einfaches Vorkommen => irrelevant würde die Ergebnisse verschlechtern

Rating: Nur Überschriften bzw Abtracts sind schwierig weil sie nicht viel Kontext geben, immer / als Endpunkt sehr konsistent und praktisch zum Auslesen, aber Kontextwahrscheinlichkeiten können sehr hilfreich sein, Problem, man muss das jedes Mal neuberechnen bei neuen Daten. Für die Pragmatik nur teilweise geeignet, da sich hier zu viel direkte Suchanfragen aufgezählt werden.

Use Cases:




CACM:
"CACM is a collection of article abstracts published in ACM journal between 1958 and 1979. Too small to observe real impact brought by proposed approach"
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/cacm/

cite.info - Key to citation info
common_words - Stop words used by smart
qrels.text - List of relevance judgements

Documents(cacm.all): ID (.I), title(.T), abstract (if there is one) (.W), date of pubication of article (B.), author list (.A), add information (.N), list of cross-references to other documents (.X)
other-doc ID 4/5/6 doc-ID
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

Queries(query.text): sentences with end marks like . or ? ID starts with .I and query starts with .W

Relevance assesments(qrels.text): query Id followed by doc-ID followed by 0 int and 0.0 float, every doc has own row 

Others: (common_words) a list of stop words

Rating: Mostly too small to use for most papers, could be interesting, but not so much for similarity in pragmatics, just for semantic connections. No full texts mostly not even the abstract but just the title. But it could be helpful to use the cross connections

Use Cases:




CISI:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/cisi/

Documents(CISI.ALL): ID (.I), title (.T), author (.A), abstract (.W) and list of cross-references to other documents (.X)

Queries(CISI.QRY): sentences with end marks like . or ? ID starts with .I and query starts with .W

Relevance assesments(CISI.REL): query Id followed by doc-ID followed by 0 int and 0.0 float, every doc has own row 

Others: (CISI.BLN) list of boolean queries 

Rating: similar to CACM collection, has a very simialar coding . It is the dataset for training IR models when used in conjunction with the Queries (CISI.QRY)

Use Cases:




Cranfield:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/cran/

Documents(cran.all): ID (.I), title (.T), author (.A), source (.B), abstract (.W)

Queries(cran.qury): sentences with end marks like . or ? ID starts with .I and query starts with .W, mostly questions

Relevance assesments(cranqrel): query number, relevant document number, relevancy code (1,2,3,4 or 5)
 1.  References which are a complete answer to the question.
 2.  References of a high degree of relevance, the lack of which
     either would have made the research impracticable or would
     have resulted in a considerable amount of extra work.
3.  References which were useful, either as general background
     to the work or as suggesting methods of tackling certain aspects
     of the work.
4.  References of minimum interest, for example, those that have been
     included from an historical viewpoint.
5.  References of no interest.

Others:

Rating: Seems to have very helpful information on pragmatics because there is a rating of how the relevancy is defined

Use Cases:




Time:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/time/
Documents(TIME.ALL): Everything in capslock, text starts with * followed by TEXT, ID, date and page number

Queries(TIME.QUE): start with * FIND and quiery ID, all capslock, quieries are short demands end mark is .

Relevance assesments(TIME.REL): Quiery ID followed by relevant docs IDs

Others: (TIME.STP) list of stop words

Rating: Relevant for IR but could be hard to use for pragmatic purpose since the text is not very structured and therefore hard to parse

Use Cases:




Medline:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/medl/

Documents(MED.ALL): ID (.I), abstract (.W)

Queries(MED.QRY): ID (.I), quiery (.W), short definitions or keywords

Relevance assesments(MED.REL): Quiery Id followed by 0 followed by Doc ID followed by 1, 0 and 1 deosn't seem to have a depper meaning other than mark where the IDs start and end, maybe to be trained vectors

Others: (MED.REL.OLD) older version of Relevance assesments

Rating: could be usefull for pragmatic search since the quieries are very specific, but we have to look into it by evalutation

Use Cases:




ADI:
Link: http://ir.dcs.gla.ac.uk/resources/test_collections/adi/

Documents(ADI.ALL): ID (.I), title (.T), author (.A), short texts (.W)

Queries(ADI.QRY): ID (.I), quiery (.W), short definitions or questions

Relevance assesments(ADI.REL): Quiery Id followed by 0 followed by Doc ID followed by 0.0, 0 and 0.0 deosn't seem to have a depper meaning other than mark where the IDs start and end, maybe to be trained vectors

Others: (ADI.BLN) list of boolean quieries

Rating: extremly small not even 100 examples, doesn't seem to be good for any use except for experimenting with small data sets on machine learining

Use Cases:


Reuters 21578 or RCV1:

Link: http://www.daviddlewis.com/resources/testcollections/reuters21578/
Documents: formatted in sgm with very useful tags like Topic, Test
Each REUTERS tag contains explicit specifications of the values
of five attributes, TOPICS, LEWISSPLIT, CGISPLIT, OLDID, and NEWID.
These attributes are meant to identify documents and groups of 
documents, and have the following meanings: 

     1. TOPICS : The possible values are YES, NO, and BYPASS:
        a. YES indicates that *in the original data* there was at
		least one entry in the TOPICS fields.
        b. NO indicates that *in the original data* the story had no
		entries in the TOPICS field.
        c. BYPASS indicates that *in the original data* the story was
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


Queries: No queries, but there are lists of topics, places, people, etc.

Relevance assesments: -

Others:

Rating: Already spliut in Train, Test and Not-Used set which is very helpful, also topics and relations between the topics are documented which makes this collectiojn a very usefull one for pragmatic search development. 

Use Cases: