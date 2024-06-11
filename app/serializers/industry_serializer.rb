class IndustrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :recyclables, :companies, :material_id
end
