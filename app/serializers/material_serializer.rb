class MaterialSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tips, :facts, :slug

  has_many :industries
end
