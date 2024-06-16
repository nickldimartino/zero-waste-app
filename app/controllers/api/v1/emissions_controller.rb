module Api
  module V1
    class EmissionsController < ApplicationController
      # Rails has a built-in CSRF
      # without this, we couldn't send a POST request without a CSRF token
      protect_from_forgery with: :null_session

      # GET /api/v1/emissions
      def index
        # get all of the emissions from the database
        emissions = Emission.all

        # render all of the emissions on the page 
        render json: EmissionSerializer.new(emissions).serialized_json
      end
    end
  end
end