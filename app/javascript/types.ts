export interface InfoCardType {
  name: string,
  info: string,
  link: string
}

export interface RoadmapCardType {
  name: string,
  info: string[],
  other: string[]
}

export interface BenefitCardType {
  name: string,
  facts: string[]
}

export interface HowToRecycleCardType {
  name: string,
  facts: string[]
}

export interface EmissionAttributesType {
  name: string,
  emissionType: string,
  cause: string
}

export interface IndustryAttributesType {
  name: string,
  companies: string,
  recyclables: string
}

export interface MaterialAttributesType {
  name: string,
  tips: string,
  facs: string,
  slug: string
}

export interface EmissionType {
  id: string,
  type: string,
  attributes: EmissionAttributesType
}

export interface IndustryType {
  id: string,
  type: string,
  attributes: IndustryAttributesType
}

export interface MaterialType {
  id: string,
  type: string,
  attributes: MaterialAttributesType
}

