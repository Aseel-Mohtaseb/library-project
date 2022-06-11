export const getBooks = () => {
    return fetch("https://fakerapi.it/api/v1/books?_quantity=10")
        .then(async (res) => {
            const res1 =  await res.json();
            return res1.data;
        })
        .catch((error) => {
            console.log(error);
        });
}