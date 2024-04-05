

export const formatDate = (data) => {
    const options = {
        weekdey: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('en-US', options)
}