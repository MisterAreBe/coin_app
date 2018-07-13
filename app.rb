require 'sinatra'
require_relative 'coin.rb'

get '/' do
  erb :index, :layout => :layout
end


post '/result' do
  cents = params[:cents].to_i
  result = min_coins(cents)
  if result.has_key?(:quarter)
    quarter = result.fetch_values(:quarter)
  end
  if result.has_key?(:dime)
    dime = result.fetch_values(:dime)
  end
  if result.has_key?(:nickel)
    nickel = result.fetch_values(:nickel)
  end
  if result.has_key?(:penny)
    penny = result.fetch_values(:penny)
  end
  redirect '/coins?cents='+ cents.to_s + '&result='+ result.to_s + '&quarter='+ quarter.to_s + '&dime='+ dime.to_s + '&nickel='+ nickel.to_s + '&penny='+ penny.to_s
end

get '/coins' do
  cents = params[:cents]
  result = params[:result]
  quarter = params[:quarter]
  dime = params[:dime]
  nickel = params[:nickel]
  penny = params[:penny]
  erb :coins, :layout => :layout, :locals => {result: result, cents: cents, quarter: quarter, dime: dime, nickel: nickel, penny: penny}
end