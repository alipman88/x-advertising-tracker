Rails.application.routes.draw do
  root 'impressions#index'
  post 'impressions', to: 'impressions#create'
end
