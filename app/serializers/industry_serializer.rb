# serializers allow customization to how JSON is rendered to get the exact data while keeping separation of concerns
class IndustrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :recyclables, :companies
end
