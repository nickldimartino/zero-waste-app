class MaterialSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tips, :facts, :slug
end
