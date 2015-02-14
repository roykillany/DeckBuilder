class Api::DecksController < ApplicationController
  def index
    @decks = Deck.all.where({ creator_id: current_user.id })
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def create
    @deck = Deck.new(deck_params)
    if @deck.save
      render json: {}
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy!
    render json: {}
  end

  def update
    @deck = Deck.find(params[:id])
    @deck.update
    render json: {}
  end

  private
  def deck_params
    params.require(:deck).permit(:creator_id, :name, :description)
  end
end
