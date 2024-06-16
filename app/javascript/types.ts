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

export interface EmissionType {
  id: string,
  type: string,
  attributes: [
    name: string,
    emissionType: string,
    cause: string
  ]
}

export interface IndustryType {
  id: string,
  type: string,
  attributes: [
    name: string,
    companies: string,
    recyclables: string
  ]
}

export interface MaterialType {
  id: string,
  type: string,
  attributes: [
    name: string,
    tips: string,
    facts: string,
    slug: string
  ]
}