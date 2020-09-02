---
id: notebooks
title: Working with Notebooks
sidebar_label: Notebooks
---

Notebooks can be a useful tool in many areas, in our case we mainly used them for evaluating data sets on Elasticsearch. We used Notebooks that are compatible with Python, which has the most useful libraries on NLP. 

<details>
<summary>What is a "Notebook"?</summary>  

Within a Notebook it is easy to combine runnable code, text, mathematical equations, tables and many other helpful visualizations.
Working with a Notebook makes it easier to understand code and to display additional information in one document.
With the possibility to run it bit by bit, debugging gets easier and clearer for others to understand.
</details>  

Since running data is always connected to using a lot of RAM, it's useful to have step by step code. Notebooks are ideal for such a task.
Depending on what you want to accomplish and how much memory you have on you own, there are two very good possibilities:

Google Colab and Juypter Notebooks.

Both are similar structured. There are two different 

## Google Colab

Um mit einem Notbeook von Google Colab loszulegen braucht man nichts weiter, als seinen Browser. Möchte man das Notebook speichern, ist es hilfreich einen Google Drive Account zu haben. Ansonsten ist es auch möglich die Notebooks in github [abzuspeichern](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb), hierbei muss man nur beachten, dass man Änderungen manuell als commit in Github speichern muss. 


Weitere Informationen findet ihr bei [Google Colab](https://colab.research.google.com/notebooks/intro.ipynb).

### Install packages
Eines der wichtigsten Dinge, die man wissen sollte, bevor man durchstarten kann, ist wie man packages installiert. 
To install packages that aren't already installed on the Colab server, like for example the Python package for elasticsearch, simply run `!pip` followed by the package in one cell.


### Get Data


### Run Code


### Summary

- hat gehosteten Speicherplatz
- man kann es über github pushen und andere können es local auf ihrem google bearbeiten ohne das endprodukt zu verändern
- - man muss jedes Mal beim neu öffnen alles neu installieren ud downloaden
- Laufzeitdauer ist nicht beeinflussbar, da nicht selbst gehosted
- es ist egal wie wenig effizient etwas geschrieben ist,da man es nicht selber hostet

## Jupyter

Jupyter Notebooks sind interaktive, aus einer Mischung aus Text, Code und Diagrammen bestehende Web-Dokumente, in denen Sie die Präsenzaufgaben lösen, sich Notizen machen und bequem experimentieren können.
Wollen Sie dieses Zusatzangebot nutzen, müssen Sie die Software zur Ausführung von Jupyter Notebooks installieren:

Anaconda bereits installiert Miniconda conda install jupyter
pip pip3 install jupyter
Auf der Kurs-Website finden Sie ein erstes Notebook zum Testen Ihrer Installation.

- man braucht einen Server oder genug speicherplatz
- einmal installiert ist alles da 
- Daten können im Hintergrund abgespeichert werden
- Laufzeit kann deutlich beschleunigt werden
- Notebooks können schlecht veröffentlicht werden, da sie jeder ändern kann, wenn er/sie zugriff hat
- andere können dadurch zugriff auf deinen privaten PC/Server haben

## Conclusion

|              | hosting | run time | memory | security | writeable | shareable | Time | NPL |
|--------------|-------------|--------|-------|-----------|--------|--------|--------|-------|
| Google Colab |       0.081 |  0.123 | 0.12  |      |  0.027 |  0.214 |  0.251 | 0.225 |
| Jupyter      |       0.082 |  0.141 | 0.101 |     0.032 |  0.034 |  0.257 |  0.255 | 0.271 |

Comparison of both in a table

So depending on your need in evaluation you have to decide which solution works best with your project.