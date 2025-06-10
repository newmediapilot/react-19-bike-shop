/**
 * Generic loader stub with a timeout
 */
export default async function loaderStub() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('done'), 1000);
    });
}
