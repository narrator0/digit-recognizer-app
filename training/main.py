import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier

from data_process import download_data, process_train_data

download_data()

frame = pd.read_csv("training/data/train.csv")
features_train, features_test, labels_train, labels_test = process_train_data(frame)

print("start training")
clf = RandomForestClassifier(n_estimators=100)
clf.fit(features_train, labels_train)

# print prediction of the first test data
print(clf.predict(features_test[0:1, :]))

# print label of the first test data
print(labels_test[0:1])

print("start calculate score")
print(clf.score(features_test, labels_test))

# output classifier to pickle data
import pickle

file = open('app/classifier/RandomForestClassifier.pkl', 'w+')
pickle.dump(clf, file)
file.close()
