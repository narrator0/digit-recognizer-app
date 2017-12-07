import numpy as np

def download_data():
  import requests

  # The direct link to the Kaggle data set
  data_url = 'http://www.kaggle.com/c/digit-recognizer/download/train.csv'

  # The local path where the data set is saved.
  local_filename = "training/data/train.csv"

  # Kaggle Username and Password
  kaggle_info = {'UserName': "", 'Password': ""}

  # Attempts to download the CSV file. Gets rejected because we are not logged in.
  r = requests.get(data_url)

  # Login to Kaggle and retrieve the data.
  r = requests.post(r.url, data = kaggle_info)

  # Writes the data to a local file one chunk at a time.
  f = open(local_filename, 'w+')
  for chunk in r.iter_content(chunk_size = 512 * 1024): # Reads 512KB at a time into memory
    if chunk: # filter out keep-alive new chunks
      f.write(chunk)
  f.close()

def process_train_data(frame):
  # convert to np array
  array = np.array(frame)

  for i in array[:, 1:]:
    for k in i:
      if (k > 255 / 2):
        k = 255
      else:
        k = 0

  # split feature and label
  features, labels = array[:, 1:], array[:, 0]

  # spit data 80:20
  from sklearn.model_selection import train_test_split
  return train_test_split(features, labels, test_size=0.2)
