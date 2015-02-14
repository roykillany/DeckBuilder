class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    if @card.save
      render json: {}
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def show
    @card = Card.find(params[:id])
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render json: {}
  end

  private
  def card_params
    params.require(:card).permit(:deck_id, :name, :cmc)
  end
end
