export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.FAVICON) {
        case 'local':
            return 'bobtailYearlings_local'
        case 'candidate':
            return 'bobtailYearlings_candidate'
        case 'delivery':
            return 'bobtailYearlings_delivery'
        default:
            return 'bobtailYearlings'
    }
}
