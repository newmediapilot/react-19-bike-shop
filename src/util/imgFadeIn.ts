export const imgFadeIn = {
    onLoad: (e) => {
        e.currentTarget.classList.replace('opacity-0', 'opacity-100');
    },
    className: 'opacity-0 transition-opacity duration-500',
};
