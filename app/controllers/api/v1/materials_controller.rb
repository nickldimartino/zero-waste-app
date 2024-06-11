module Api
  module V1
    class MaterialsController < ApplicationController
      def index
        materials = Material.all

        render json: MaterialSerializer.new(materials, options).serialized_json
      end

      def show
        material = Material.find_by(slug: params[:slug])

        render json: MaterialSerializer.new(material, options).serialized_json
      end

      def create
        material = Material.new(material_params)

        if material.save
          render json: MaterialSerializer.new(material).serialized_json
        else
          render json: {error: material.errors.messages}, status: 422
      end

      def update
        material = Material.find_by(slug: params[:slug])

        if material.update(material_params)
          render json: MaterialSerializer.new(material, options).serialized_json
        else
          render json: {error: material.errors.messages}, status: 422
      end

      def destroy
        material = Material.find_by(slug: params[:slug])

        if material.destory
          head :no_content
        else
          render json: {error: material.errors.messages}, status: 422
      end

      private

      def material_params
        params.require(:material).permit(:name, )
      end

      # when init new material serializer, pass in options hash to pass in additional resources
      def options
        @options ||= { include: %i[industries] }
      end
    end
  end
end