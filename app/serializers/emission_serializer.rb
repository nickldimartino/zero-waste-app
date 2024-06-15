class EmissionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :emissionType, :cause
end