# serializers allow customization to how JSON is rendered to get the exact data while keeping separation of concerns
class MaterialSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tips, :facts, :slug
end
