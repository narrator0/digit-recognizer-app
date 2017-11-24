Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#draw'

  scope path: 'api', defaults: { format: :json }, module: 'api' do
    post 'predict' => 'digit_recognizer#predict'
  end
end
