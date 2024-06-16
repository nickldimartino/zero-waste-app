# serializers allow customization to how JSON is rendered to get the exact data while keeping separation of concerns
class EmissionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :emissionType, :cause
end