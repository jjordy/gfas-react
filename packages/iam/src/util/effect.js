import { ResourceRules } from './resource'

export function createEffectsFromPolicy (statement, getUserData, onDeny) {
  const { resource, effect, conditions } = statement
  const r = new ResourceRules({ resource, effect, conditions, getUserData, onDeny })
  const resourceRules = r.create()
  return resourceRules
}
