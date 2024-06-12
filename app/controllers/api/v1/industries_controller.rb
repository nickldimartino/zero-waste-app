module Api
  module V1
    class IndustriesController < ApplicationController
      # Rails has a built-in CSRF
      # without this, we couldn't send a POST request without a CSRF token
      protect_from_forgery with: :null_session

      # GET /api/v1/industries
      def index
        industries = Industry.all

        render json: IndustrySerializer.new(industries).serialized_json
      end

      # GET /api/v1/industries/:slug
      def show
        industry = Industry.find_by(slug: params[:slug])

        render json: IndustrySerializer.new(industry).serialized_json
      end

      # POST /api/v1/industries
      def create
        industry = Industry.new(industry_params)

        if industry.save
          render json: IndustrySerializer.new(industry).serialized_json
        else
          render json: { error: industry.errors.messages }, status: 422
        end
      end

      # DELETE /api/v1/industries/:slug
      def destroy
        industry = Industry.find(params[:id])

        if industry.destroy
          head :no_content
        else
          render json: { error: industry.errors.messages }, status: 422
        end
      end

      private

      def industry_params
        params.require(:industry).permit(:name, :recyclables, :companies, :material_id)
      end
    end
  end
end