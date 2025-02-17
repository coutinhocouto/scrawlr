const cn = (...classes: (string | { [key: string]: boolean })[]): string => {
    return classes
        .map(cls => {
            if (typeof cls === 'string') {
                return cls;
            }
            return Object.keys(cls)
                .filter(key => cls[key])
                .join(' ');
        })
        .join(' ');
};

export default cn;