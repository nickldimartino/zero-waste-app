module Api
  module V1
    class MaterialsController < ApplicationController
      # Rails has a built-in CSRF
      # without this, we couldn't send a POST request without a CSRF token
      protect_from_forgery with: :null_session
      
      # GET /api/v1/materials
      def index
        materials = Material.all

        render json: MaterialSerializer.new(materials).serialized_json
      end

      # GET /api/v1/materials/:slug
      def show
        material = Material.find_by(slug: params[:slug])

        render json: MaterialSerializer.new(material).serialized_json
      end

      # POST /api/v1/materials
      def create
        material = Material.new(material_params)

        if material.save
          render json: MaterialSerializer.new(material).serialized_json
        else
          render json: { error: material.errors.messages }, status: 422
        end
      end

      # PATCH /api/v1/materials/:slug
      def update
        material = Material.find_by(slug: params[:slug])

        if material.update(material_params)
          render json: MaterialSerializer.new(material).serialized_json
        else
          render json: {error: material.errors.messages}, status: 422
        end
      end

      # DELETE /api/v1/materials/:slug
      def destroy
        material = Material.find_by(slug: params[:slug])

        if material.destroy
          head :no_content
        else
          render json: {error: material.errors.messages}, status: 422
        end
      end

      private

      # Strong params
      def material_params
        params.require(:material).permit(:name, :tips, :facts)
      end

      # Used For compound documents with fast_jsonapi
      def options
        @options ||= { include: %i[industry] }
      end
    end
  end
end