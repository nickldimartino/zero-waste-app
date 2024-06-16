class IndustrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :recyclables, :companies
end
