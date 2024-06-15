module Api
  module V1
    class EmissionsController < ApplicationController
      protect_from_forgery with: :null_session

      # GET /api/v1/emissions
      def index
        emissions = Emission.all

        render json: EmissionSerializer.new(emissions).serialized_json
      end

    end
  end
end