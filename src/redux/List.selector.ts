/**
 * Select a slice that was previously added by a loader
 * @param name
 */
export const selectLoaderSlice = (name: string) => (state) => {
    return state.root[name];
};