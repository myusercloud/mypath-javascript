console.log(`start`);
setTimeout(() => console.log(`inside timeout`), 500);
console.log(`end`);

function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // change to false to test rejection
            if (success) resolve(`data received`);
            else reject(`error occurred`);
        }, 2000)
    });
}

getdata()
    .then(data => console.log(data))
    .catch(err => console.log(err));


async function fetchData () {
    try {
        const result = await getdata();
        console.log(result);
    } catch (error) {
        console.log('Error:',error);
    }
}

fetchData();