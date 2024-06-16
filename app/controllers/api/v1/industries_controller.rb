module Api
  module V1
    class IndustriesController < ApplicationController
      # Rails has a built-in CSRF
      # without this, we couldn't send a POST request without a CSRF token
      protect_from_forgery with: :null_session

      # GET /api/v1/industries
      def index
        # get all of the industries from the database
        industries = Industry.all

        # render all of the emissions on the page 
        render json: IndustrySerializer.new(industries).serialized_json
      end
    end
  end
end