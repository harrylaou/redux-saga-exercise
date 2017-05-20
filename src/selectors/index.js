export const isFetchingBeers = (state: Object) => (
  state.beers.isFetching
)

export const settings = (state: Object) => (
  state.settings
)


export const id = (state: Object) => (
  state.settings.session.id
)
