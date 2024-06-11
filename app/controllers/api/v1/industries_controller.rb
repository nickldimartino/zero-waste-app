module Api
  module V1
    class ReviewssController < ApplicationController

      def create
        industry = Industry.new(industry_params)

        if industry.save
          render json: IndustrySerializer.new(industry).serialized_json
        else
          render json: { error: industry.errors.messages }, status: 422
      end

      def destroy
        industry = Industry.find(params[:id])

        if industry.destroy
          head :no_content
        else
          render json: { error: industry.errors.messages }, status: 422
      end

      private

      def industry_params
        params.require(:review).permit(:name, :recyclables, :companies, :material_id)
      end
    end
  end
end