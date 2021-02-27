export const getIsRuntimeBuild = () => (
    process.env.BY_ENV === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BY_ENV === 'production'
)
