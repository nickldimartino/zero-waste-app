class Material < ApplicationRecord
  # set the slug for the material before creating it in the database
  before_create :slugify

  # create a url safe version of the name
  def slugify
    self.slug = name.parameterize
  end
end
