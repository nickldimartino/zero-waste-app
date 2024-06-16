module Api
  module V1
    class MaterialsController < ApplicationController
      # Rails has a built-in CSRF
      # without this, we couldn't send a POST request without a CSRF token
      protect_from_forgery with: :null_session
      
      # GET /api/v1/materials
      def index
        # get all of the materials from the database
        materials = Material.all

        # render all of the materials on the page
        render json: MaterialSerializer.new(materials).serialized_json
      end

      # GET /api/v1/materials/:slug
      def show
        # get the material by the specified slug id in the url
        material = Material.find_by(slug: params[:slug])

        # render the found material on the page
        render json: MaterialSerializer.new(material).serialized_json
      end

      # POST /api/v1/materials
      def create
        # create a materiual in the database with the parameters
        material = Material.new(material_params)

        # render the new material if it was save correctly
        # else, send the error status back
        if material.save
          render json: MaterialSerializer.new(material).serialized_json
        else
          render json: { error: material.errors.messages }, status: 422
        end
      end

      # PATCH /api/v1/materials/:slug
      def update
        # find the material in the database by the received slug id
        material = Material.find_by(slug: params[:slug])

        # if the material was found, then update it with the new params and render it
        # else send the error status back
        if material.update(material_params)
          render json: MaterialSerializer.new(material).serialized_json
        else
          render json: {error: material.errors.messages}, status: 422
        end
      end

      # DELETE /api/v1/materials/:slug
      def destroy
        # find the material by it's slug id in the database
        material = Material.find_by(slug: params[:slug])

        # destroy the found material
        # else send the error status back
        if material.destroy
          head :no_content
        else
          render json: {error: material.errors.messages}, status: 422
        end
      end

      # make the following method private to this controller
      private

      # allowed parameters for a material 
      def material_params
        params.require(:material).permit(:name, :tips, :facts, :slug)
      end
    end
  end
end