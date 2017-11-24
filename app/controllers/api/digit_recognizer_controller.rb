class Api::DigitRecognizerController < ApplicationController

  # load clf on include
  pyimport :pickle

  f = File.new(
    Rails.root.join('app', 'classifier', 'RandomForestClassifier.pkl'
  ), 'r')

  @@clf = pickle.load(f)
  f.close

  def predict
    predict = @@clf.predict([params[:digits]])

    render json: { predict: "#{predict[0]}".to_i }
  end
end
